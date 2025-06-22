const express = require("express")
const app = express();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
app.set('view engine', 'ejs');






app.get("/", (req, res) => {
    res.render("index")
})





app.get("/login",(req,res) => {
    res.render("authentication/login")
})


app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})