import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { IoMdMail } from "react-icons/io";
import { MdDateRange, MdMale } from "react-icons/md";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { IoPerson } from 'react-icons/io5';


const PatientCreateEdit = ({ title, data }) => {

    const initialValues = data || { name: "Client Name", phone: "Phone Number", email: "Email Address" };

    return (
        <div>
            <div class="card" style={{ borderRadius: '15px' }}>
                <div class="card-header" style={{ backgroundColor: "#007bff", color: "white", fontWeight: "bold" }}>
                    {title}
                </div>
                <div class="card-body">
                    <Form className="form-horizontal">
                        <Row className='f-flex justify-content-center'>
                            <Col md={2} style={{ width: "33%" }}>
                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><IoPerson style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.name} />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><FaLocationDot style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="Address" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </Col>

                            <Col md={2} style={{ width: "33%" }}>
                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><IoMdMail style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.email} />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><MdMale style={{ fontSize: "1.4rem" }} /></span>
                                    <Form.Select>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                </div>
                            </Col>

                            <Col md={2} style={{ width: "33%" }}>
                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><FaSquarePhone style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.phone} />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><MdDateRange style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="date" class="form-control" placeholder="Date of Birth" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <button class="btn" type="submit" style={{ backgroundColor: "#007bff", fontWeight: "bold" }} >Save</button>
                </div>
            </div>
        </div>
    );
};

export default PatientCreateEdit;