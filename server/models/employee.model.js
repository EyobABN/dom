const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
      email: { type: String},
      department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true }
    },
    { timestamps: true } // auto-create createdAt and updatedAt fields
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
