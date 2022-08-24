import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdv5FTy3qpiVvu0m7QNGrC1_o_rhygXQVO3Q&usqp=CAU"
              width="82"
              height="82"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <div className='text-light fw-bold fs-3'>
              Total Paid: 
            </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;