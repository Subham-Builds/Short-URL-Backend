const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    short_id:{
        type: String,
        required: true,
        unique: true
    },
    ogURL:{
        type: String,
        required: true
    },
    visits:[{
        timestamps:{type: Number}
    }]
},{timestamps: true}); 

const database = mongoose.model('db',schema);
module.exports = database;  