const { response } = require('express');
const express = require('express');

const router = express.Router();

const pizzaModel = require('../models/pizzamModel');


//GET_ALL_PIZZAS

router.get('/getAllPizzas',async (req, res)=>{
try {
    const result= await pizzaModel.find({});
    res.send(result)
} catch (error) {
    res.json({message:error.message});
}
} )


module.exports = router