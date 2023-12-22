import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
