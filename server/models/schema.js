const mongoose = require("mongoose")
//var Schema =mongoose.Schema;
var catagory = mongoose.Schema({
    username:String,
    catagory:Array
})
module.exports = mongoose.model('Data', DataSchema);