const mongoose = require("mongoose");

const creatDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error)
  }
};

module.exports=creatDB
