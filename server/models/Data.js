const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        username:String,
        catagorys:Array
    }
);

module.exports = mongoose.model('catagorylists', DataSchema);