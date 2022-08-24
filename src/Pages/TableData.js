import React from 'react';
import { Button } from 'react-bootstrap';

const TableData = ({ bill }) => {
    console.log(bill);
    const { _id, name, email, phoneNumber, paidAmount } = bill;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{paidAmount}</td>
            <td>
                <Button className="mx-2" variant="primary" type="submit">
                    Edit
                </Button>
                <Button variant="danger" >
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default TableData;