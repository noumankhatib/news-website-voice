const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        username:String,
        categorys:Array
    }
);

module.exports = mongoose.model('catagorylists', DataSchema);