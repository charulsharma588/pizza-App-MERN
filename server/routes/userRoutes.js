const express = require('express');

const router = express.Router();

const user = require('../models/userModel');



router.post('/register',(req,res)=>{
const {name,email,password} =req.body;
const newUser = new user({name,email,password})
try{
 newUser.save();
 res.status(200).json({success:true,message:'register successful'})
}catch(e){
    res.status(400).json({success:true,message:e.message})
}
})


module.exports = router