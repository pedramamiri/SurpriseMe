const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

//Create wish list schema
const WishListschema = new Schema({
    name:{
        type:String,
    },
    photo:{
        type:String,
    },
    url:{
        type:String
    },
    address:{
        type:String
    },
    desc:{
        type:String
    },
    available:{
        type:Boolean
    },
    boughtBy:{
        type:String
    }

})
module.exports = WishListschema;

