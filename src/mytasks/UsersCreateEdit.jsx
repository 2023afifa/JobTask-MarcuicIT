import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { IoMdSettings, IoMdMail } from "react-icons/io";
import { MdDateRange, MdEditDocument, MdMale } from "react-icons/md";
import { FaLocationDot, FaMagnifyingGlass, FaSquarePhone } from "react-icons/fa6";
import { FaPoundSign, FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaKey } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoPerson } from 'react-icons/io5';

const UsersCreateEdit = ({ title }) => {
    return (
        <div>
            <div class="card" style={{ borderRadius: '15px' }}>
                <div class="card-header" style={{ backgroundColor: "#007bff", color: "white", fontWeight: "bold" }}>
                    {title}
                </div>
                <div class="card-body">
                    <Form className="form-horizontal">
                        <Row>
                            <Col md={4} style={{ width: "100%" }}>
                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><IoPerson style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="Aash" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><IoMdMail style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="penisvagin@gmail.com" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><FaKey style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group flex-nowrap mb-3">
                                        <span class="input-group-text" id="addon-wrapping"><IoPerson style={{ fontSize: "1.4rem" }} /></span>
                                        <Form.Select>
                                            <option>receiptionist</option>
                                            <option>administrator</option>
                                            <option>pathologist</option>
                                            <option>super_admin</option>
                                        </Form.Select>
                                    </div>
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

export default UsersCreateEdit;