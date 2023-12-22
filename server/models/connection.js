import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGO_URL;

const connection = mongoose.connect(URL).then(() => {
  try {
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
});

export default connection;
