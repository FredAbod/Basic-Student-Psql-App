const express = require('express');
const morgan = require('morgan');
const studentRoutes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
