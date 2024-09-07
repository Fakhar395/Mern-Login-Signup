require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection

const  corsOptions = {
  origin:" http://localhost:3000/ ",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
}

// middlewares
app.use(express.json(corsOptions ));
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = 8080;

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });

});