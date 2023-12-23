import express from "express";
import {
  createStudent,
  deleteStudent,
  editStudent,
  getAllStudents,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/students", getAllStudents);

router.post("/create-student", createStudent);

router.patch("/edit-student/:StudentId", editStudent);

router.delete("/delete-student/:StudentId", deleteStudent);

export default router;
