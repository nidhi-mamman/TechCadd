const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/contact");
const cors = require("cors");

// Creating an express app
const app = express();

//middleware
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Contact form router
app.use("/messages", router);

// Connection to the mongoose Database
connectDB();

// Listening the site on the port
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
