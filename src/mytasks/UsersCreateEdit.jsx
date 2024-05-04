import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { FaKey } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { IoPerson } from 'react-icons/io5';

const UsersCreateEdit = ({ title, data }) => {

    const initialValues = data || { name: "Name", email: "Email", roles: "" };

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
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.name} />
                                </div>

                                <div class="input-group flex-nowrap mb-3">
                                    <span class="input-group-text" id="addon-wrapping"><IoMdMail style={{ fontSize: "1.4rem" }} /></span>
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.email} />
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