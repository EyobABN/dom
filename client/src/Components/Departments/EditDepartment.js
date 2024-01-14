import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/departments/${id}`)
      .then(response => setFormData(response.data))
      .catch(error => console.error('Error fetching department:', error));
  }, [id])

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Custom logic to handle form submission (send data to the server)
    axios.put(`http://localhost:5000/departments/${id}`, formData)
      .then(response => console.log(response))
      .catch(error => console.error(error));
    // Reset the form after submission
    setFormData({
      name: '',
    });
    navigate('/departments');
};

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Department Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Department
      </Button>
      <Link to="/departments"><Button variant="secondary">Cancel</Button></Link>
    </Form>
  );
};

export default EditDepartment;
