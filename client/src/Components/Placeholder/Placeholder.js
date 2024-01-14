import Placeholder from 'react-bootstrap/Placeholder';

const PlaceholderRow = () => {
  return (
    <Placeholder as="p" animation="wave">
      <Placeholder xs={6} />
      <Placeholder xs={12} />
      <Placeholder xs={3} />
    </Placeholder>
  );
};

export default PlaceholderRow;
