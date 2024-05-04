import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';


const CreateEditForm = ({ title }) => {
    return (
        <div>
            <div class="card" style={{ borderRadius: '15px' }}>
                <div class="card-header" style={{ backgroundColor: "#007bff", color: "white", fontWeight: "bold" }}>
                    {title}
                </div>
                <div class="card-body">
                    <Form className="form-horizontal">
                        <Row>
                            <Col md={6}>
                                <h5>Title</h5>
                                <div class="input-group flex-nowrap mb-3">
                                    <input type="text" class="form-control" placeholder="Jr" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </Col>

                            <Col md={6}>
                                <h5>Discount %</h5>
                                <div class="input-group flex-nowrap mb-3">
                                    <input type="text" class="form-control" placeholder="10" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </Col>

                            <h5>Description</h5>
                            <div class="input-group flex-nowrap mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </Row>
                    </Form>
                    <button class="btn" type="submit" style={{ backgroundColor: "#007bff", fontWeight: "bold" }} >Save</button>
                </div>
            </div>
        </div>
    );
};

export default CreateEditForm;