import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import productsArr from "../data/products";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = productsArr.find(
    (item) => item.id === Number(productId)
  );

  if (!product) return <h2>Product not found</h2>;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="product"
              className="img-fluid mb-3"
            />
          ))}
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <h4>₹{product.price}</h4>

          <h5 className="mt-4">Customer Reviews</h5>
          {product.reviews.map((review, index) => (
            <p key={index}>⭐ {review}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
