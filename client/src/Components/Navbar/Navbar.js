import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


const AppNavBar = () => {
	return (
		<Navbar expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={Link} to="/">DOM</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/departments">Departments</Nav.Link>
						<Nav.Link as={Link} to="/employees">Employees</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AppNavBar;
