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

router.post('/login', async (req,res)=>{
const {email,password} = req.body;
try{
    const newUser  =  await user.find({email,password});
    if(user.length>0){
        const curretUser={
            name:newUser[0].name,
            email:newUser[0].email,
            isAdmin:newUser[0].isAdmin,
            // _id:user[0].id,
        }
        res.status(200).send(curretUser);
    }else{
        res.status(400).json({message: 'Login Failed'})
    }
    
}catch(e){  console.log(e);
    res.status(404).json({message:e.message}) }  
})


module.exports = router