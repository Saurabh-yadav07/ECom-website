import React from "react";
import { Card,ListGroup,Button,Image, ListGroupItem, Modal, ModalHeader, ModalTitle, ModalBody } from "react-bootstrap";

const cartItems = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

function Cart ({show,onHide,onRemove}){
    return (
        <Modal show={show} onHide={onHide} size="lg">
           <ModalHeader closeButton>
            <ModalTitle>My Cart</ModalTitle>
           </ModalHeader>
           <ModalBody>
             <ListGroup>
               {cartItems.map((item,index)=>(
                <ListGroupItem key={index} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                        <Image src={item.imageUrl} width={60} rounded/>
                        <div>
                            <h6>{item.title}</h6>
                            <small>
                                ${item.price}x{item.quantity}
                            </small>
                        </div>
                    </div>
                    <Button variant="danger" size="sm" onClick={()=>onRemove(index)}>
                        Remove
                    </Button>
                </ListGroupItem>
               ))}
            </ListGroup>
           </ModalBody>
        </Modal>
    )
}

export default Cart;