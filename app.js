const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||5000;
//require("./connection/conn")
app.set("view engine",'ejs');
const path = require("path");
const static1 = path.join(__dirname,"/views")
app.use(express.static(static1));
app.set("view engine", "ejs");




app.get("/set",async(req,res)=>{

    res.render("storing")

})
app.get("/info",async(req,res)=>{

    res.render("selling")

})

app.listen(port,()=>console.log("server is up....."));
