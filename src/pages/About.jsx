import { Card } from "react-bootstrap";

function About() {
  return (
    <div className="container my-5">
      <Card className="p-4 shadow-sm">
        <h1 className="mb-3 text-center">About Us</h1>

        <p>
          This e-commerce application is built using <strong>React</strong>,
          <strong> React Router</strong>, and <strong> Context API</strong>.
        </p>

        <p>
          The store page displays a list of products. Each product has its own
          <strong> separate product details page</strong>, created using
          <strong> dynamic routing</strong>.
        </p>

        <p>
          Users can view multiple product images, read customer reviews, and
          add products to the cart for a better shopping experience.
        </p>

        <p className="mb-0">
          The cart functionality is managed globally using the
          <strong> Context API</strong>, ensuring smooth state management across
          the application.
        </p>
      </Card>
    </div>
  );
}

export default About;
