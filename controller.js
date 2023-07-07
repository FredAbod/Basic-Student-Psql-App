const pool = require("./db");
const queries = require("./queries");

const getStudents = async (req, res) => {
  try {
    const results = await pool.query(queries.getStudents);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getStudentsById = async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const results = await pool.query(queries.getStudentsById, [id]);
    
    if (results.rows.length === 0) {
      return res.status(404).send("Student not found");
    }
    
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send("Internal Server Error");
  }
};


const addStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;

  try {
    const emailCheckResult = await pool.query(queries.checkEmailExists, [email]);
    if (emailCheckResult.rowCount > 0) {
      return res.status(409).send("Email Already Exists");
    }

    await pool.query(queries.addStudent, [name, email, age, dob]);
    res.status(201).send("Student created successfully");
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send("Internal Server Error");
  }
};

const removeStudent = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const results = await pool.query(queries.getStudentsById, [id]);
    const noStudentFound = results.rows.length === 0;

    if (noStudentFound) {
      return res.status(404).send("Student does not exist in the database");
    }

    await pool.query(queries.removeStudent, [id]);
    res.status(200).send("Student removed successfully");
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateStudent = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  try {
    const results = await pool.query(queries.getStudentsById, [id]);
    const noStudentFound = results.rows.length === 0;

    if (noStudentFound) {
      return res.status(404).send("Student does not exist in the database");
    }

    await pool.query(queries.updateStudent, [name, id]);
    res.status(200).send("Student updated successfully");
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  removeStudent,
  updateStudent,
};
