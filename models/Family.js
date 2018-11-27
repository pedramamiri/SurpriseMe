const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

//Create user schema
const Familyschema = new Schema({
    familyName:{
        type:String,
        require:true
    },
    familyCode:{
        type:String,
        require:true
    },
    admin:{
        type:String,
        require:true
    },
    member:{
        type:Array
    }

})

const Family = mongoose.model('Family',Familyschema);
module.exports = Family;

