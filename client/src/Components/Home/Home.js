import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div className="bg-light">
      <header className="bg-secondary text-white text-center py-5">
        <h1>Employee and Department Manager</h1>
        <p className="lead">Efficiently manage Dom's workforce and departments.</p>
      </header>

      <Container className="my-5">
        <Row className="mb-4">
          <Col md={6}>
            <Card className="feature p-4">
              <h2>Departments</h2>
              <p>View and edit the list of departments at Dom.</p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="feature p-4">
              <h2>Employees</h2>
              <p>View and manage Dom employees' details.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
