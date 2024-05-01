import React from 'react';
import { Card } from 'react-bootstrap';
import { records as data, expandableRecords } from "../pages/tables/data";
import Table from "../components/Table";


const columns = [
    {
        Header: "ID",
        accessor: "id",
        sort: true,
    },
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Phone Number",
        accessor: "phone",
        sort: false,
    },
    {
        Header: "Age",
        accessor: "age",
        sort: true,
    },
    {
        Header: "Company",
        accessor: "company",
        sort: false,
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



const Contracts = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Search</h4>
                    <p className="text-muted fs-14 mb-4">A Table allowing search.....</p>

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

export default Contracts;