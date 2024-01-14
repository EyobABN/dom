const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/dom');

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());


// Define routes
app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
