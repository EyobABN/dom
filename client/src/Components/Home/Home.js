import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Homepage = () => {
  return (
    <Container className="pb-3">
      <Row className="bg-primary text-white text-center p-5">
        <h1>Employee and Department Manager</h1>
        <p className="lead">Efficiently manage Dom's workforce and departments.</p>
      </Row>

      <Row className="mx-auto py-5">
        <Col md={6}>
          <Card className="bg-light-subtle py-2 my-2">
            <Card.Body>
              <Card.Title>Departments</Card.Title>
              <Card.Text>View and edit the list of departments at Dom.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-light-subtle py-2 my-2">
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              <Card.Text>View and manage the details of Dom employees.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
