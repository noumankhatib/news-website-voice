const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const articles = new Schema({
    category: String,
    title: String,
    articleType:String,
    author: String,
    description:String,
    content: String,
    image: { data: Buffer, contentType: String },
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
      }
});
articles.plugin(mongoosePaginate);

module.exports = mongoose.model("articles", articles);