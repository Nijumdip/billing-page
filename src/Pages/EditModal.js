import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";

const EditModal = ({ bill, show, setShow, handleClose }) => {
    const {putMethod}=useFetch()
  const { _id, name, email, phone, amount } = bill;

    // console.log(phone, amount);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const amount = amountRef.current.value;
    const data = { name, email, phone, amount };
    console.log(data);
      putMethod(`http://localhost:5000/api/updateBill/${_id}`, data, e, setShow)
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Bill Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Id</Form.Label>
            <Form.Control disabled type="text" defaultValue={_id} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              ref={nameRef}
              defaultValue={name}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              defaultValue={email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              ref={phoneRef}
              defaultValue={phone}
              pattern="[0-9]{11}"
              maxLength="11"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Paid Amount</Form.Label>
            <Form.Control
              type="text"
              ref={amountRef}
              defaultValue={amount}
              required
            />
          </Form.Group>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button className="mx-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
