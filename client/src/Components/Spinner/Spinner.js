import { Container, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Container className="d-flex align-items-center">
      <Spinner className="mx-auto my-5 p-3" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default LoadingSpinner;
