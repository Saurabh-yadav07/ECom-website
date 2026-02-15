import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, title, price, imageUrl } = product;

  return (
    <Card className="h-100 shadow-sm">
      <Link to={`/store/${id}`}>
        <Card.Img variant="top" src={imageUrl} />
      </Link>

      <Card.Body className="text-center">
        <Link to={`/store/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Card.Title>{title}</Card.Title>
        </Link>

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
