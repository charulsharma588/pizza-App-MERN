const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const Pizza = require("./models/pizzamModel");
const data = require("./data/pizzaData");
const connectDB = require("./config/config");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sample = data.map((pizza) => {
      return { ...pizza };
    });
    // console.log(sample,"sample")
    await Pizza.insertMany(sample);
    console.log(`data inserted`.bgGreen.white);
    process.exit();
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy =()=>{}

if(process.argv[2]==='-d'){
  dataDestroy();
}else{
importData()
}