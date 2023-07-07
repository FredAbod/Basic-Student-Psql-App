# Basic-Student-Psql-App
# Basic Student App

This is a basic CRUD (Create, Read, Update, Delete) application for managing student records. It provides endpoints to perform various operations on a PostgreSQL database.

## Features

- Retrieve a list of all students
- Retrieve a student by ID
- Add a new student
- Update a student's name
- Remove a student from the database

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client for Node.js)
- morgan (HTTP request logger middleware)
- JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- PostgreSQL (v9 or above)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/FredAbod/Basic-Student-Psql-App.git


2. Install the dependencies:
      ```shell
      cd Basic-Student-Psql-App
npm install

3. Set up the database:
   - Make sure you have a PostgreSQL server running on your machine.
   - Create a new database named students.
   - Import the SQL schema file provided in the database folder to set up the necessary table.
  
  4. Configure the database connection:
   - Open the db.js file in the project's root directory.
    - Update the connection details (user, host, password, port) to match your PostgreSQL configuration.

    5. Start the application:
   ```shell
   npm start
- The application should now be running on http://localhost:3000.

### API Endpoints
The following API endpoints are available:

- `GET /api/v1/students` - Retrieve a list of all students.
- `POST /api/v1/students` - Add a new student.
- `GET /api/v1/students/:id` - Retrieve a student by ID.
- `PUT /api/v1/students/:id` - Update a student's name.
- `DELETE /api/v1/students/:id` - Remove a student from the database.
