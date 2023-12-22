import Student from "../models/studentSchema.js";

export const getStudentsData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Student.find();
      resolve(data);
    } catch (error) {
      console.log(error);
    }
  });
};
export const createStudentHelper = (bodyData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const update = await Student.create(bodyData);
      if (update) {
        resolve(update);
      } else {
        throw new Error();
        // reject(throw new Error)
      }
    } catch (error) {
      console.log(error);
    }
  });
};

export const editStudentHelper = (_id, bodyData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const edited = await Student.findByIdAndUpdate(_id, bodyData, {
        new: true,
      });
      if (edited) {
        resolve(true);
      } else {
        reject(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const deleteStudentHelper = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deleted = await Student.deleteOne({ _id: id });
      if (deleted) resolve(true);
    } catch (error) {
      console.log(error);
    }
  });
};
