import { React, useState } from "react";
import { Button, Card, Row, Col, Modal } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import { addToCart } from "../Actions/cartAction";

export const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  
  const addToCartHandler=()=>{
    dispatch(addToCart(pizza,quantity,varient))
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "5px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title> {pizza.name}</Card.Title>
          <Row>
            <Col md={6}>
              <h6>Varient</h6>
              <select
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza.varients.map((varient) => {
                  return <option>{varient}</option>;
                })}
              </select>
            </Col>
            <Col md={6}>
              <h6>Quantity</h6>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((v, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </Col>
          </Row>
          <Row>
            <Col md={6}>Price :{pizza.prices[0][varient] * quantity} /-Rs</Col>
            <Col md={6}>
              <Button
                style={{ margin: "2px" }}
                className="bg-warning text-white"
              onClick={addToCartHandler}>
                Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "250px" }}
            />
          </div>
          <div>
            <h5>Description:</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
