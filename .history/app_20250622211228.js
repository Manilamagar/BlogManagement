const express = require("express")
const app = express()
const db = require("./database/db") //importing database connection
   

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })) //to parse the form data
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const cookieParser = require("cookie-parser") //to parse cookies
app.use(cookieParser()) //using cookie parser middleware

const isLoggedInOrNot = require("./middleware/isLoggedInOrNot") //importing middleware to check if user is logged in or not



// app.get("/",isLoggedInOrNot,async (req, res) => {
//     const userId = req.userId //getting user id from the request
//     // console.log(userId)
//     const users = await db.users.findAll({
//         where: {
//             id: userId //getting user data from the database
//         }
//     })
//     res.render("pages/get-blog", {todos: datas })
// })

app.get("/-blog",(req,res) => {
   res.render("todo/add-blog") 
})
// app.get("/edit-blog",(req,res) => {
//     res.render("todo/edit-blog")
// })



app.post('/add-blog',isLoggedInOrNot ,async (req, res) => {
    const userID = req.userId//getting user id from the token
    const { task,date,description } = req.body;

    const users = await db.todos.create({
        Task: task,discription: description, date,
        userId: userID
    })
    res.redirect("/")
    
    // res.render("todo/add-todo", {
    //     message: "Todo added successfully"
    // })
})



app.get("/login",(req,res) => {
    res.render("authentication/login")
})
app.post("/login",async (req,res) => {
   
    const {email, password} =req.body;
const users = await db.users.findAll({
    where:{
        email : email
    }
})
if(users.length==0){
    res.send("Not register email")
}else{
    //now check password, first we need to get the user from the database
   const isPasswordMatch = bcrypt.compareSync(password, users[0].password)
   if(isPasswordMatch){

    //token generate garne
    // res.send(users)
    const token = jwt.sign({id:users[0].id },"ThisismySecretKey",{
        expiresIn : "1d"
    })
    res.cookie("token",token)
    res.redirect("/")
    //res.send("Logged in successfully")
   }else{
    res.send("Invalid credentaials")
   }
}
})




app.get("/register",(req,res) => {
    res.render("authentication/register")
})


app.post('/register', async (req, res) => {
 //   console.log(req.body);
    const{ username, email, password, confirm_password } = req.body
    if (password !== confirm_password) {
         res.send('Passwords do not match');
    }

await db.users.create({
        username: username,
        password: bcrypt.hashSync(password,10),
          email: email  
    })
    
  res.send('User registered successfully')
})





app.get("/delete/:id", async (req, res) => {
    const id = req.params.id

    await db.todos.destroy({
        where: {
            id: id
        }
    })
    res.send("Deleted successfully")
})


app.get("/edit/:id",isLoggedInOrNot,async(req,res) => {
   const id = req.params.id
   const todos = await db.todos.findAll({
    where: {
        id:id
    }
   }) 
//    res.send(todos) //sending the todo data to the client
   
   res.render("todo/edit-todo", {todos: todos}) //rendering the edit-todo.ejs file and passing the todo data to it
})

app.post("/edit-todo/:id", isLoggedInOrNot,async (req, res) => {
    const id = req.params.id
    const { task, date, description } = req.body

    await db.todos.update({
        Task: task,
        discription: description,
        date: date,
        status: status
    }, {
        where: {
            id: id
        }
    })
    res.redirect("/")
})



app.listen(4000,function(){
    console.log("Backend has started on port 3000")
})