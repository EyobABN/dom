import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, Modal, Container, Row, Col } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const DepartmentsList = () => {
	const [departments, setDepartments] = useState([]);
	const [loadingDepartments, setLoadingDepartments] = useState(true);
	const [departmentsError, setDepartmentsError] = useState(null);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [departmentToDeleteId, setDepartmentToDeleteId] = useState(null);

	// GET departments and employees once component mounts
	useEffect(() => {
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

	// Handle department deletion
	const handleDelete = (id) => {
		setDepartmentToDeleteId(id);
		setShowDeleteConfirmation(true);
	};

	const handleConfirmDelete = () => {
		axios.delete(`http://localhost:5000/departments/${departmentToDeleteId}`)
			.then(response => {
				setShowDeleteConfirmation(false);
				setDepartments(prevDeps => prevDeps.filter(dept => dept._id !== departmentToDeleteId));
			})
			.catch(error => {
				console.error('Error deleting department:', error);
			})
	}

	const handleCancelDelete = () => {
		setDepartmentToDeleteId(null);
		setShowDeleteConfirmation(false);
	}

	return (
		<Container className="p-3">
			{
				loadingDepartments ?
					<Spinner /> :
					departmentsError ?
						<Alert variant='danger'>Error fetching resources.</Alert> :
						<>
							<Container className="d-flex justify-content-end">
								<Link to="add" className='button'><Button variant="primary">Add Department</Button></Link>
							</Container>
							<Table size="sm" striped hover>
								<thead>
									<tr>
										<th>Department Name</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{departments.map(dept => (
										<tr key={dept._id}>
											<td>{dept.name}</td>
											<td>
												<Link to={`edit/${dept._id}`}><Button style={{border: "none"}} variant='outline-primary'>Edit</Button></Link>
												<Button variant='outline-danger' style={{border: "none"}} onClick={() => handleDelete(dept._id)}>Delete</Button>
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
									Are you sure you want to delete this department?
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
		</Container>
	);
};

export default DepartmentsList;
