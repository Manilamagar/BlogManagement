const express = require("express")
const app = express()
const db = require("./database/db") //importing database connection
   

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })) //to parse the form data
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")







app.get("/", (req, res) => {
    res.render("index")
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



app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})