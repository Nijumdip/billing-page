import React, { useState } from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import AddModal from './AddModal';

const HeaderTwo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
        <Navbar bg="secondary" expand="lg" className=' mt-5 mb-3 bg-secondary py-1'>
        <Container>
          <Navbar.Brand href="#" className='text-light fw-bold fs-5'>Billings</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
          
            <Navbar>
            <Button variant="light" onClick={handleShow}>
                Add New Bill
            </Button>
              <AddModal
                show={show}
                setShow={setShow}
                handleClose={handleClose}
              ></AddModal>
          </Navbar>
        </Container>
      </Navbar>
        </div>
    );
};

export default HeaderTwo;