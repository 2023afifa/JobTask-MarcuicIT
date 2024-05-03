import React from 'react';
import { Card } from 'react-bootstrap';
import { records as data } from "./Rolesdata";
import Table from "./Table";
import { FaEdit, FaFileContract, FaTrash } from "react-icons/fa";


const columns = [
    {
        Header: "#",
        accessor: "id",
        sort: false,
    },
    {
        Header: "Role-Name",
        accessor: "title",
        sort: false,
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
            <div className='d-flex justify-content-center'>
                <FaEdit style={{ color: "#007bff", cursor: "pointer", fontSize: "1.4rem", marginRight: "10px" }} />
                {/* <FaEdit onClick={() => handleEdit(row.original.id)} style={{ cursor: "pointer" }} /> */}
                <FaTrash style={{ color: "#FF6865", cursor: "pointer", fontSize: "1.4rem" }} />
                {/* <FaTrash onClick={() => handleDelete(row.original.id)} style={{ cursor: "pointer", marginLeft: "10px" }} /> */}
            </div>
        ),
    },
];


const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: data.length,
    },
];


const Roles = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <FaFileContract />Roles
            </h3>
            <Card style={{ borderRadius: '15px', borderTopWidth: "8px", borderTopColor: "#007bff" }}>
                <Card.Body>
                    <h4>Roles Table</h4>
                    <Table
                        columns={columns}
                        data={data}
                        pageSize={5}
                        sizePerPageList={sizePerPageList}
                        isSortable={true}
                        pagination={true}
                        isSearchable={true}
                    />
                </Card.Body>
            </Card>
        </div>
    );
};

export default Roles;