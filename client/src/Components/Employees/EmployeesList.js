import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const EmployeesList = () => {
	const [employees, setEmployees] = useState([]);
	const [departments, setDepartments] = useState([]);
	const [loadingEmployees, setLoadingEmployees] = useState(true);
	const [employeesError, setEmployeesError] = useState(null);
	const [loadingDepartments, setLoadingDepartments] = useState(true);
	const [departmentsError, setDepartmentsError] = useState(null);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [employeeToDeleteId, setEmployeeToDeleteId] = useState(null);

	useEffect(() => {
		axios.get('http://localhost:5000/employees')
			.then(response => {
				setEmployees(response.data);
				setLoadingEmployees(false);
			})
			.catch(error => {
				setEmployeesError(error);
				setLoadingEmployees(false);
			});
		axios.get('http://localhost:5000/departments')
			.then(response => {
				setDepartments(response.data);
				setLoadingDepartments(false);
			})
			.catch(error => {
				setDepartmentsError(error);
				setLoadingDepartments(false);
			});
	}, []);

	const handleDelete = (id) => {
		setEmployeeToDeleteId(id);
		setShowDeleteConfirmation(true);
	};

	const handleConfirmDelete = () => {
		axios.delete(`http://localhost:5000/employees/${employeeToDeleteId}`)
			.then(response => {
				setShowDeleteConfirmation(false);
				setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== employeeToDeleteId));
			})
			.catch(error => {
				console.error('Error deleting employee:', error);
			})
	}

	const handleCancelDelete = () => {
		setEmployeeToDeleteId(null);
		setShowDeleteConfirmation(false);
	}

	return (
		<div>
			<Link to="add" className='button'><Button variant="secondary" style={{margin: "5px 5px"}}>Add Employee</Button></Link>
			{
				loadingEmployees || loadingDepartments ?
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner> :
					employeesError || departmentsError ?
						<Alert variant='danger'>Error fetching resources.</Alert> :
						<>
							<Table size="sm" striped hover>
								<thead>
									<tr className='text-center'>
										<th>First Name</th>
										<th>Middle Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Department</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{employees.map(employee => (
										<tr key={employee._id}>
											<td>{employee.firstName}</td>
											<td>{employee.middleName}</td>
											<td>{employee.lastName}</td>
											<td>{employee.email}</td>
											<td>{departments.find(dept => dept._id === employee.department)?.name}</td>
											<td>
												<Link to={`edit/${employee._id}`}><Button style={{border: "none"}} variant='outline-primary'>Edit</Button></Link>
												<Button variant='outline-danger' style={{border: "none"}} onClick={() => handleDelete(employee._id)}>Delete</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
							<Modal show={showDeleteConfirmation} onHide={handleCancelDelete}>
								<Modal.Header closeButton>
									<Modal.Title>Confirm Deletion</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									Are you sure you want to delete this employee?
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleCancelDelete}>
										Cancel
									</Button>
									<Button variant="danger" onClick={handleConfirmDelete}>
										Delete
									</Button>
								</Modal.Footer>
							</Modal>
						</>
			}
		</div>
	);
};

export default EmployeesList;
