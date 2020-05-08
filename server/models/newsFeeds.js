const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsFeeds = new Schema({
    catagory: String,
    title: String,
    author: String,
    content: String,
    image: String,
    "@timestamp": Date,
    url: String
});

module.exports = mongoose.model("newsFeeds", newsFeeds);