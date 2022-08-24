import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';


const AddModal = ({ show, handleClose, setShow }) => {

    const { postMethod } = useFetch();
    
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
        // console.log(name, email, phone, amount);
        const billInfo = { name, email, phone, amount };

        postMethod('http://localhost:5000/api/addBill', billInfo, e, setShow);

    }
    

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Bill Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            ref={nameRef}
                            required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Type your number"
                                ref={phoneRef}
                                pattern="[0-9]{11}"
                                maxLength="11"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Paid Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Amount Please"
                                ref={amountRef}
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
        </div>
    );
};

export default AddModal;