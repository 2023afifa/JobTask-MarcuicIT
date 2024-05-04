import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { IoMdSettings, IoMdMail } from "react-icons/io";
import { MdDateRange, MdEditDocument, MdMale } from "react-icons/md";
import { FaLocationDot, FaMagnifyingGlass, FaSquarePhone } from "react-icons/fa6";
import { FaPoundSign, FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoPerson } from 'react-icons/io5';


const PatientCreateEdit = ({ title }) => {
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
                                    <input type="text" class="form-control" placeholder="Aash" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><FaLocationDot style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="pune" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </Col>

                            <Col md={2} style={{ width: "33%" }}>
                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><IoMdMail style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="penisvagin@gmail.com" aria-label="Username" aria-describedby="addon-wrapping" />
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
                                    <input type="text" class="form-control" placeholder="+923160154602" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><MdDateRange style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="date" class="form-control" placeholder="01-06-2023" aria-label="Username" aria-describedby="addon-wrapping" />
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