import React, { useState } from 'react';
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
import { FaPoundSign, FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";


const Settings = () => {

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <IoMdSettings className='me-1' /> Settings
            </h3>
            <Card style={{ borderRadius: '15px' }}>
                <Card.Body>
                    <h4 className="header-title p-3 mb-2 text-white" style={{ backgroundColor: "#007bff" }}>General Settings</h4>

                    <div className="card">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className={`btn ${activeButton === 1 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(1)}
                                style={{ backgroundColor: activeButton === 1 ? 'white' : '#007bff', color: activeButton === 1 ? '#007bff' : 'white' }}>General</button>
                            <button type="button" className={`btn ${activeButton === 2 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(2)} style={{ backgroundColor: activeButton === 2 ? 'white' : '#007bff', 
                                color: activeButton === 2 ? '#007bff' : 'white'  }}>Social</button>
                            <button type="button" className={`btn ${activeButton === 3 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(3)} style={{ backgroundColor: activeButton === 3 ? 'white' : '#007bff', 
                                color: activeButton === 3 ? '#007bff' : 'white'  }}>Logos</button>
                        </div>
                        <div class="card-body">

                            {
                                activeButton === 1 && (
                                    <div>
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
                                )}


                            {
                                activeButton === 2 && (
                                    <div>
                                        <Form className="form-horizontal">
                                            <Row>
                                                <Col md={6}>
                                                    <div class="input-group flex-nowrap mb-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FaFacebook style={{ fontSize: "1.4rem" }} /></span>
                                                        <input type="text" class="form-control" placeholder="https://facebook.com" aria-label="Username" aria-describedby="addon-wrapping" />
                                                    </div>
                                                    <div class="input-group flex-nowrap mb-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FaInstagram style={{ fontSize: "1.4rem" }} /></span>
                                                        <input type="text" class="form-control" placeholder="https://instagram.com" aria-label="Username" aria-describedby="addon-wrapping" />
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <div class="input-group flex-nowrap mb-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FaTwitter style={{ fontSize: "1.4rem" }} /></span>
                                                        <input type="text" class="form-control" placeholder="https://twitter.com" aria-label="Username" aria-describedby="addon-wrapping" />
                                                    </div>
                                                    <div class="input-group flex-nowrap mb-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FaYoutube style={{ fontSize: "1.4rem" }} /></span>
                                                        <input type="text" class="form-control" placeholder="https://youtube.com" aria-label="Username" aria-describedby="addon-wrapping" />
                                                    </div>
                                                </Col>

                                            </Row>
                                        </Form>
                                    </div>
                                )}

                            {
                                activeButton === 3 && (
                                    <div>
                                        <Form className="form-horizontal">
                                            <Row>
                                                <div class="input-group mb-3">
                                                    <input type="file-input" class="form-control" placeholder="Choose report logo [100 X 100]" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <button class="btn btn-secondary" type="button" id="button-addon2">Browse</button>
                                                </div>
                                                <div class="input-group mb-3">
                                                    <input type="file-input" class="form-control" placeholder="Choose logo [100 X 100]" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <button class="btn btn-secondary" type="button" id="button-addon2">Browse</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </div>
                                )}

                        </div>
                    </div>
                    <button class="btn" type="submit" style={{ backgroundColor: "#007bff", fontWeight: "bold" }} >Save</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Settings;