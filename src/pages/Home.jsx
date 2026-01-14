import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      { /* HERO SECTION */}
      <div className="bg-dark text-light py-5 text-center">
        <Container>
          <h1 className="display-5 fw-bold">Welcome to My Store</h1>
          <p className="lead mt-3">
            Discover premium colors and designs at unbeatable prices.
          </p>
          <Button
            as={Link}
            to="/store"
            variant="primary"
            size="lg"
            className="mt-3"
          >
            Shop Now
          </Button>
        </Container>
      </div>

      {/* FEATURED PRODUCTS */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <Row>
          {[
            {
              title: "Colors",
              price: 100,
              image:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            },
            {
              title: "Black & White",
              price: 50,
              image:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            },
            {
              title: "Yellow & Black",
              price: 70,
              image:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            },
          ].map((product, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>₹{product.price}</Card.Text>
                  <Button as={Link} to="/store" variant="outline-primary">
                    View Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/*CTA SECTION */}
      <div className="bg-primary text-light py-5 text-center">
        <Container>
          <h2>Ready to explore our collection?</h2>
          <Button
            as={Link}
            to="/store"
            variant="light"
            size="lg"
            className="mt-3"
          >
            Start Shopping
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Home;
