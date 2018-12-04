const mongoose = require('mongoose')
const Schema   = mongoose.Schema;
const WishListschema = require('./WishList')

//Create member schema
const Memeberschema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    personalCode:{
        type:String
    },
    wishList:[WishListschema]

})
module.exports = Memeberschema;

