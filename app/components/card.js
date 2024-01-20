import Card from 'react-bootstrap/Card';

function Cardss() {
  return (
    <div className="containers mt-1">
    <Card className='card1 d-grid gap-2 d-sm-flex justify-content-sm-center'style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sequi.</Card.Subtitle>
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, sequi.</Card.Subtitle>
        
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardss;