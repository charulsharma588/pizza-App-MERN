const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmis:{
        type:Boolean,
        default:false
    }
},{timestamps:true})



module.exports = mongoose.model('userSchema',userSchema)