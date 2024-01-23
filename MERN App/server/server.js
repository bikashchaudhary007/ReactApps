const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res) => {
    res.send("Welcome to Web Application");
});


app.get("/register",(req,res) => {
    res.send("Welcome to Registration Page");
});


app.get("/login",(req,res) => {
    res.send("Welcome to Login Page");
});


app.listen(PORT,() => {
    console.log(`Server is running at https//:localhost : ${PORT}`);
});