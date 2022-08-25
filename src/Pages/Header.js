import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import useFetch from "../Hooks/useFetch";

const Header = () => {
  const [total, setTotal] = useState(0);

  const { allBills, getMethod } = useFetch();

  useEffect(() => {
    getMethod(`https://desolate-shore-09715.herokuapp.com/api/allBill`);
    // console.log(allBills);
    
    let totalAmount = 0;
    allBills?.forEach((bill) => {
      const total = (totalAmount += parseInt(bill.amount));
      // console.log(total);
      setTotal(total);
    });
  }, [allBills, getMethod]);

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
          <div className="text-light fw-bold fs-3">Total Paid: {total}</div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
