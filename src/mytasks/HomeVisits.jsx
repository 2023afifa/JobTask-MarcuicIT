import React, { useState } from 'react';
import { Button, Card, ToggleButton } from 'react-bootstrap';
import { records as data } from "./HomeVisitsdata";
import Table from "./Table";
import { FaHome } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Switch from 'react-switch';


const HomeVisits = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [toggleText, setToggleText] = useState("Pending");

    const handleToggle = (checked) => {
        setIsToggled(checked);
        setToggleText(checked ? "Completed" : "Pending");
    };

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
            Cell: ({ row }) => (
                <div className='d-flex justify-content-center'>
                    <TiTick style={{ color: "#0BDA51", cursor: "pointer", fontSize: "1.4rem", marginRight: "10px" }} />
                </div>
            ),
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ row }) => (
                <div>
                    <Switch
                        checked={isToggled}
                        onChange={handleToggle}
                        offColor="#888"
                        onColor="#0BDA51"
                        offHandleColor="#fff"
                        onHandleColor="#fff"
                        handleDiameter={24}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={24}
                        width={50}
                    />
                </div>
            ),
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

    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <FaHome className='me-1' /> Home Visits
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