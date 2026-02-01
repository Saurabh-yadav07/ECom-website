import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function changeHandler(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    await fetch(
      "https://movies-143c7-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }
    );

    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "" });
  }

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h2 className="mb-4 text-center">Contact Us</h2>

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Contact;
