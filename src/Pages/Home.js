import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import HeaderTwo from "./HeaderTwo";
import TableData from "./TableData";

const Home = () => {
  const { getMethod, allBills } = useFetch();

  useEffect(() => {
    getMethod("https://desolate-shore-09715.herokuapp.com/api/allBill");
  }, []);

  // console.log(allBills);

  return (
    <div className="mx-5">
      <HeaderTwo />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Billing Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBills?.map((bill) => (
            <TableData key={bill._id} bill={bill}></TableData>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
