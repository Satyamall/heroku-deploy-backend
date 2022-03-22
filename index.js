
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const url = process.env.DB_URL;
const Posts = require("./src/models/Post.model");

mongoose.connect(url,()=>{
    console.log(`connected to mongodb`);
})
app.get("/",function(req,res){
    res.send("Hello World! 2");
})

app.get("/posts",async (req,res)=>{
    try{
        const posts = await Posts.find({});
        return res.status(200).json(posts);
    }
    catch(err){
       return res.status(500).json(err);
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})