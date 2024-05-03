import React from 'react';
import {
    Row,
    Col,
    Card,
    Form,
    FloatingLabel,
    InputGroup,
    Button,
} from "react-bootstrap";

// components
import PageTitle from "../components/PageTitle";
import { IoMdSettings, IoMdMail } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { FaMagnifyingGlass, FaSquarePhone } from "react-icons/fa6";
import { FaPoundSign, FaCopyright } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";


const Settings = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <IoMdSettings className='me-1' /> Settings
            </h3>
            <Card style={{ borderRadius: '15px' }}>
                <Card.Body>
                    <h4 className="header-title p-3 mb-2 text-white" style={{ backgroundColor: "#007bff" }}>General Settings</h4>

                    <div class="card">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn" style={{ backgroundColor: "#007bff" }}>General</button>
                            <button type="button" class="btn" style={{ backgroundColor: "#007bff" }}>Social</button>
                            <button type="button" class="btn" style={{ backgroundColor: "#007bff" }}>Logos</button>
                        </div>
                        <div class="card-body">
                            <Form className="form-horizontal">
                                <Row>
                                    <Col md={6}>
                                        <div class="input-group flex-nowrap mb-3">
                                            <span class="input-group-text" id="addon-wrapping"><MdEditDocument style={{ fontSize: "1.4rem" }} /></span>
                                            <input type="text" class="form-control" placeholder="Extreme Lab" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>

                                        <div class="input-group flex-nowrap mb-3">
                                            <span class="input-group-text" id="addon-wrapping"><FaMagnifyingGlass style={{ fontSize: "1.4rem" }} /></span>
                                            <input type="text" class="form-control" placeholder="Egypt" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>

                                        <div class="input-group flex-nowrap mb-3">
                                            <span class="input-group-text" id="addon-wrapping"><IoMdMail style={{ fontSize: "1.4rem" }} /></span>
                                            <input type="text" class="form-control" placeholder="support@extremelab.tech" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div class="input-group flex-nowrap mb-3">
                                            <span class="input-group-text" id="addon-wrapping"><FaPoundSign style={{ fontSize: "1.4rem" }} /></span>
                                            <Form.Select>
                                                <option>United Status Dollar</option>
                                                <option>Euro</option>
                                                <option>Bahraini Dinar</option>
                                                <option>Belorussian Ruble</option>
                                                <option>Angolan Kwanza</option>
                                            </Form.Select>
                                        </div>

                                        <div class="input-group flex-nowrap mb-3">
                                            <span class="input-group-text" id="addon-wrapping"><FaSquarePhone style={{ fontSize: "1.4rem" }} /></span>
                                            <input type="text" class="form-control" placeholder="00201063955280" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>

                                        <div class="input-group flex-nowrap mb-3">
                                            <span class="input-group-text" id="addon-wrapping"><TfiWorld style={{ fontSize: "1.4rem" }} /></span>
                                            <input type="text" class="form-control" placeholder="https://www.extremelab.tech" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>
                                    </Col>

                                    <div class="input-group flex-nowrap mb-3">
                                        <span class="input-group-text" id="addon-wrapping"><FaCopyright style={{ fontSize: "1.4rem" }} /></span>
                                        <input type="text" class="form-control" placeholder="All rights are reserved ExtremeLabCompany@2021" aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>

                                </Row>
                            </Form>
                        </div>
                    </div>
                    <button class="btn" type="submit" style={{ backgroundColor: "#007bff", fontWeight: "bold" }} >Save</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Settings;