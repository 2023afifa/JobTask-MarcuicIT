import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { records as data } from "./HomeVisitsdata";
import Table from "./Table";
import { FaHome, FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import Switch from 'react-switch';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';


const HomeVisits = () => {

    const [statuses, setStatuses] = useState(data.map(item => item.status));

    const handleToggle = (index) => {
        const newStatuses = [...statuses];
        newStatuses[index] = !newStatuses[index];
        setStatuses(newStatuses);
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
                        checked={statuses[row.index]}
                        onChange={() => handleToggle(row.index)}
                        height={24}
                        width={50}
                    />
                </div>
            ),
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => (
                <div class="dropdown">
                    <button class="btn rounded-pill dropdown-toggle d-flex align-items-center justify-content-evenly" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#007bff" }}>
                        <IoSettingsSharp className='me-1' /> Action
                    </button>
                    <ul class="dropdown-menu">
                        <li className='d-flex align-items-center'>
                            <a onClick={() => handleDelete(row.id)} class="dropdown-item" href="#"><FaTrash className='me-2' />Delete</a>
                        </li>
                    </ul>
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

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }


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