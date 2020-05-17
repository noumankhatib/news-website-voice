const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const articles = new Schema({
    catagory: String,
    title: String,
    articletype:String,
    author: String,
    content: String,
    image: String,
    url: String
});
articles.plugin(mongoosePaginate);

module.exports = mongoose.model("articles", articles);