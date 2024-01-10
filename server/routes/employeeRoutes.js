const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Employee = require('../models/employeeModel');

// GET all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST a new employee
router.post('/employees', async (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    email: req.body.email,
    department: req.body.department
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET an employee
router.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid employee ID format' });
    }

    // Find the employee by ID
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT an employee
router.put('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid employee ID format' });
    }

    // Check payload contains all required fields
    const requiredFields = ['firstName', 'lastName', 'department'];
    const isValidPayload = requiredFields.every(field => updates[field] !== undefined);

    if (!isValidPayload) {
      return res.status(400).json({ error: 'Incomplete payload' });
    }

    // Find and update the employee
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PATCH an employee
router.patch('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid employee ID format' });
    }

    // Find and update the employee
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE an employee
router.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid employee ID format' });
    }

    // Find and delete the employee
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
