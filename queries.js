const queries = {
  getStudents: "SELECT * FROM students",
  getStudentsById: "SELECT * FROM students WHERE id = $1",
  checkEmailExists: "SELECT * FROM students WHERE email = $1",
  addStudent: "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)",
  removeStudent: "DELETE FROM students WHERE id = $1",
  updateStudent: "UPDATE students SET name = $1 WHERE id = $2"
};

module.exports = queries;
