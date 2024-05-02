import React from 'react';
import { Card } from 'react-bootstrap';
import { records as data } from "../pages/tables/data";
import Table from "./Table";
import { FaFileContract } from "react-icons/fa";


const columns = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Client Name",
        accessor: "name",
    },
    {
        Header: "Phone Number",
        accessor: "phone",
    },
    {
        Header: "Address",
        accessor: "address",
    },
    {
        Header: "Visit Date",
        accessor: "date",
    },
    {
        Header: "Viewed",
        accessor: "viewed",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
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


const HomeVisits = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <FaFileContract />Home Visits
            </h3>
            <Card style={{ borderRadius: '15px', borderTopWidth: "8px", borderTopColor: "#007bff" }}>
                <Card.Body>
                    <h4>Home Visits Table</h4>
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

export default HomeVisits;