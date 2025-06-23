//database connection ko code 
const {Sequelize, DataTypes} = require("sequelize")
require("dotenv").config() //to use environment variables from .env file
//dotenv package lai use gareko xa jasko maddat le hami .env file bata environment variables use garna sakchhau
//yo garepxi only hami dotenv ko data haru yo file ma access garna sakinxa


const sequelize = new Sequelize({
    database: process.env.database_name,
    username: process.env.database_username,
    port:process.env.database_port, //database ko port
    host: process.env.database_host, //database ko host
    dialect: "mysql", //database ko type
    password: process.env.database_password, //database ko password

}) //making object from Sequelize class

//sequelize connect huna try   gare vanerw vanu parxa
        
sequelize.authenticate()
.then(()=>{
    console.log("Connected successfully")
})
.catch((err)=> {
    console.log("Unable to connect to the database:", err);
})

const db = {}
db.blogs = require("../models/blogModel")(sequelize, DataTypes) //importing user model
db.products = require("../models/productModel")(sequelize, DataTypes) //importing product model
db.users = require("../models/userModel")(sequelize, DataTypes) //importing user model
db.todos = require("../models/todoModel")(sequelize, DataTypes) //importing todo model




db.users.hasMany(db.todos)
db.todos.belongsTo(db.users)

sequelize.sync({alter: true }).then(() =>{
    console.log("migrated successfully")
})
module.exports = sequelize; //exporting the sequelize object to use in other files
//yo file ma database connection gareko xa ra yo file lai aru file ma use garna ko lagi export gareko xa


module.exports = db; //exporting the db object to use in other files
//db object ma blogs ra products model haru xa jasko maddat le hami blogs ra products table ma data insert garna sakchhau
