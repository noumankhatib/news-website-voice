const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opionFeeds = new Schema({
    catagory: String,
    title: String,
    author: String,
    content: String,
    image: String,
    "@timestamp": Date,
    url: String
});

module.exports = mongoose.model("opionFeeds", opionFeeds);