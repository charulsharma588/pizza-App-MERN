const express = require('express');
require('colors');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const morgan = require('morgan');
const route = require('./routes/pizzaRoutes');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const app =express();

//db
dotenv.config()
// require('dotenv').config()

connectDB()
//middleware

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/user',user)
app.use('/api/pizzas',route)
app.use('/api/orders',order)
// app.use('/api/user',user)
const port = process.env.PORT || 3000

app.listen(port,  ()=> {  console.log(`listening on port ${port} and env ${process.env.NODE_ENV}`.bgMagenta.white); });