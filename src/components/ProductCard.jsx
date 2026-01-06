import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/cart-context";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, title, price, imageUrl } = product;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>₹{price}</Card.Text>

        <Button
          variant="primary"
          onClick={() => addToCart({ id, title, price, imageUrl })}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
