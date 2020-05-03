const mongoose = require("mongoose")
var Schema =mongoose.Schema;
const catagory = new Schema({
    username:String,
    catagory:Array
})

module.exports = mongoose.model('catagory', catagory)