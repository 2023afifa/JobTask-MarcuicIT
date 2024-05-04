import React from 'react';
import { Card } from 'react-bootstrap';
import { records as data } from "./Patientsdata";
import Table from "./Table";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdSick } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const Patients = () => {

    const columns = [
        {
            Header: "#",
            accessor: "id",
        },
        {
            Header: "Code",
            accessor: "code",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Phone Number",
            accessor: "phone",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Total",
            accessor: "total",
        },
        {
            Header: "Paid",
            accessor: "paid",
        },
        {
            Header: "Due",
            accessor: "due",
            Cell: ({ value }) => <span style={{ color: 'red', fontWeight: "bold" }}>{value}</span>,
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => (
                <div className='d-flex justify-content-center'>
                    <Link to={`/dashboard/patients/edit/${row.id}`}>
                        <FaEdit style={{ color: "#007bff", cursor: "pointer", fontSize: "1.4rem", marginRight: "10px" }} />
                    </Link>
                    <FaTrash onClick={() => handleDelete(row.original.id)} style={{ color: "#FF6865", cursor: "pointer", fontSize: "1.4rem" }} />
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


    const handleDelete = _id => {
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
                <MdSick className='me-1' />Patients
            </h3>
            <Card style={{ borderRadius: '15px', borderTopWidth: "8px", borderTopColor: "#007bff" }}>
                <Card.Body>
                    <div className='d-flex justify-content-between mb-2'>
                        <h4 className=''>Patients Table</h4>
                        <Link to="/dashboard/patients/create">
                            <button class="btn" type="submit" style={{ backgroundColor: "#007bff", fontWeight: "bold" }} >Create</button>
                        </Link>
                    </div>
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

export default Patients;