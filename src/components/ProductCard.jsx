import { Card, Button } from "react-bootstrap";

export default function ProductCard({ title, price, imageUrl }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>₹{price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
