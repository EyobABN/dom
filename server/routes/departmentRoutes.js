const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Department = require('../models/department.model');

// GET all departments
router.get('', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST a new department
router.post('', async (req, res) => {
  const department = new Department({
    name: req.body.name,
  });

  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a department
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid department ID format' });
    }

    // Find the department by ID
    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json(department);
  } catch (error) {
    console.error('Error fetching department:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUT a department
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid department ID format' });
    }

    // Check payload contains all required fields
    const requiredFields = ['name'];
    const isValidPayload = requiredFields.every(field => updates[field] !== undefined);

    if (!isValidPayload) {
      return res.status(400).json({ error: 'Incomplete payload' });
    }

    // Find and update the department
    const updatedDepartment = await Department.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true } // Return the updated document instead of the old one
    );

    if (!updatedDepartment) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json(updatedDepartment);
  } catch (error) {
    console.error('Error updating department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PATCH a department
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid department ID format' });
    }

    // Find and update the department
    const updatedDepartment = await Department.findByIdAndUpdate(
      id,
      { $set: updates }, // Update department with only the fields in updates 
      { new: true } // Return the updated document instead of the old one
    );

    if (!updatedDepartment) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json(updatedDepartment);
  } catch (error) {
    console.error('Error updating department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a department
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid department ID format' });
    }

    // Find and delete the department
    const deletedDepartment = await Department.findByIdAndDelete(id);

    if (!deletedDepartment) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
