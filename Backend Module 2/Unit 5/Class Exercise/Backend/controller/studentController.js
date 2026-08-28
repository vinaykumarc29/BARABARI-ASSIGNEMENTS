import Student from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const { course, year, search, page, limit } = req.query;

    const currentPage = Number(page) || 1;
    const currentLimit = Number(limit) || 10;

    let filters = {};

    if (course) filters.course = course;
    if (year) filters.year = Number(year);
    if (search) filters.name = { $regex: search, $options: "i" };

    let skips = (currentPage - 1) * limit;

    let students = await Student.find(filters)
      .sort({ name: 1 })
      .skip(skips)
      .limit(currentLimit);
    return res.status(200).json({
      message: "student fetched successfully !!",
      data: students,
      page,
      limit,
      totalElements: students.length,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "something went wrong", error: err });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, age, course, year, rollno } = req.body;

    let studentExists = await Student.findOne({ rollno: rollno });

    if (studentExists)
      return res.status(400).json({ message: "Student already exists !!" });

    const student = await Student.create({ name, age, rollno, course, year });

    return res
      .status(201)
      .json({ message: "student registered successfully !!", data: student });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "something went wrong", err: err.errors });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { name, age, year, course } = req.body;
    const { id } = req.params;

    const studentExists = await Student.findOne({ _id: id });

    if (!studentExists) {
      return res.status(404).json({ message: "student not found" });
    }

    let details = {};
    if (name !== undefined) details.name = name;
    if (course !== undefined) details.course = course;
    if (year !== undefined) details.year = year;
    if (age !== undefined) details.age = Number(age);

    let updatedStudent = await Student.findOneAndUpdate({ _id: id }, details, {
      new: true,
    });

    return res.status(200).json({
      message: "student details updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something went wrong !!" });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  let studentExists = await Student.findOneAndDelete({ _id: id });

  if (!studentExists)
    return res.status(404).json({ message: "student not found !!" });

  return res.status(200).json({ message: "student deleted successfully !!" });
};

export const getStudentData = async (req, res) => {
  try {
    const { id } = req.params;

    const studentExists = await Student.findOne({ _id: id });

    if (!studentExists)
      return res.status(404).json({ message: "Student data not found !!" });

    return res
      .status(200)
      .json({
        message: "student data fetched successfully !!",
        data: studentExists,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something went wrong !!", error });
  }
};
