import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import EditModal from './EditModal';

const TableData = ({ bill }) => {

    console.log(bill);

    const { deleteMethod } = useFetch();

    const handleDelete = () => {
        deleteMethod(`http://localhost:5000/api/deleteBill/${bill._id}`)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(bill);
    const { _id, name, email, phone, amount } = bill;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount}</td>
            <td  className="d-flex justify-content-center align-items-center ">
                <div>
                   <Button className="mx-2" variant="primary" onClick={()=>handleShow(bill)}>
                    Edit
                </Button>
                <EditModal
                    bill={bill}
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                ></EditModal>
                </div>
                <Button variant="danger" onClick={handleDelete} >
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default TableData;