const express = require("express")
const app = express();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
app.set('view engine', 'ejs');






app.get("/", (req, res) => {
    res.render("index")
}