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


const Settings = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h4 className="header-title mt-0">Input Types</h4>
                    <p className="sub-header">
                        Most common form control, text-based input fields. Includes support
                        for all HTML5 types: <code>text</code>, <code>password</code>,{" "}
                        <code>datetime</code>, <code>datetime-local</code>, <code>date</code>,{" "}
                        <code>month</code>, <code>time</code>, <code>week</code>,{" "}
                        <code>number</code>, <code>email</code>, <code>url</code>,{" "}
                        <code>search</code>, <code>tel</code>, and <code>color</code>.
                    </p>

                    <Form className="form-horizontal">
                        <Row>
                            <Col md={6}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="simpleinput">
                                        Text
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            defaultValue="Some text value..."
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-email">
                                        Email
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="email"
                                            id="example-email"
                                            name="example-email"
                                            placeholder="Email"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-password">
                                        Password
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="password"
                                            id="example-password"
                                            defaultValue="password"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-placeholder">
                                        Placeholder
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            placeholder="placeholder"
                                            id="example-placeholder"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-textarea">
                                        Text area
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control as="textarea" rows={5} id="example-textarea" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2}>
                                        Readonly
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control type="text" readOnly value="Readonly value" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2}>
                                        Disabled
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control type="text" disabled value="Disabled value" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-static">
                                        Static control
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            readOnly
                                            plaintext
                                            id="example-static"
                                            value="email@example.com"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-helping">
                                        Helping text
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="example-helping"
                                            placeholder="Helping text"
                                        />
                                        <span className="help-block">
                                            <small>
                                                A block of help text that breaks onto a new line and may
                                                extend beyond one line.
                                            </small>
                                        </span>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2}>
                                        Input Select
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-fileinput">
                                        Default file input
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control type="file" id="example-fileinput" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-date">
                                        Date
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control id="example-date" type="date" name="date" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-month">
                                        Month
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control id="example-month" type="month" name="month" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-time">
                                        Time
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control id="example-time" type="time" name="time" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-week">
                                        Week
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control id="example-week" type="week" name="week" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-number">
                                        Number
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            id="example-number"
                                            type="number"
                                            name="number"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2}>
                                        URL
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control type="url" name="url" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2}>
                                        Search
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control type="search" name="search" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2}>
                                        Tel
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control type="tel" name="tel" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-color">
                                        Color
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            id="example-color"
                                            type="color"
                                            name="color"
                                            className="w-100"
                                            defaultValue="#5369f8"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-0">
                                    <Form.Label column lg={2} htmlFor="example-range">
                                        Range
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Range className="mt-1" name="range" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Settings;