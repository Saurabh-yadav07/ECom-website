import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import productsArr from "../data/products";

export default function ProductList() {
  return (
    <Container className="my-5">
      <Row>
        {productsArr.map((product) => (
          <Col md={3} className="mb-4" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
