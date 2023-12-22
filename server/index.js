import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connection from "./models/connection.js";
import bodyParser from "body-parser";
import studentRouter from "./routes/studentRoutes.js";
const app = express();

app.use(bodyParser.json());
app.use("/api/students", studentRouter);

const PORT = process.env.PORT || 5000;

//db
connection;

app.listen(PORT, () => {
  console.log(`Sever started on ${PORT}`);
});
