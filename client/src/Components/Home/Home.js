import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div className="pb-3">
      <header className="bg-primary text-white text-center p-5">
        <h1>Employee and Department Manager</h1>
        <p className="lead">Efficiently manage Dom's workforce and departments.</p>
      </header>

      <Container className="mx-auto py-5">
        <Row style={{height: "25vh"}}>
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
    </div>
  );
};

export default Homepage;
