
const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    title: String,
    content: String
})

module.exports = mongoose.model("post",Post);