import {
  createStudentHelper,
  deleteStudentHelper,
  editStudentHelper,
  getStudentsData,
} from "../helpers/studentHelper.js";

//get All students
export const getAllStudents = async (req, res) => {
  try {
    const data = await getStudentsData();
    if (data) {
      res.status(200).json({ data: data, status: true });
    } else {
      res.status(400).json({ status: false });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

//Create new student
export const createStudent = async (req, res) => {
  try {
    const createStudent = await createStudentHelper(req.body);
    if (createStudent) {
      res.status(201).json({ status: true });
    } else {
      //   throw new Error();
      res.status(400).json({ status: false });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

//edit student
export const editStudent = async (req, res) => {
  try {
    const { StudentId } = req.params;
    const edited = await editStudentHelper(StudentId, req.body);
    res.status(200).json({ status: edited });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//delete single student
export const deleteStudent = async (req, res) => {
  try {
    const { StudentId } = req.params;
    const deleted = await deleteStudentHelper(StudentId);
    if (deleted) {
      res.status(200).json({ status: true });
    } else {
      res.status(400).json({ status: false });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
