import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connection from "./models/connection.js";
import bodyParser from "body-parser";
import studentRouter from "./routes/studentRoutes.js";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", studentRouter);

const PORT = process.env.PORT || 5000;

//db
connection;

app.listen(PORT, () => {
  console.log(`Sever started on ${PORT}`);
});
