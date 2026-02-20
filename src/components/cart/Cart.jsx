import { Modal, ListGroup, Button, Image } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart({ show, onHide }) {
  const { cartItems, deleteFromCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * 1,
    0
  );

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>My Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item._id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-3">
                  <Image src={item.imageUrl} width={60} rounded />
                  <div>
                    <h6>{item.title}</h6>
                    <small>₹{item.price}</small>
                  </div>
                </div>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteFromCart(item._id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>

      <Modal.Footer className="fw-bold">
        Total: ₹{totalAmount}
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;