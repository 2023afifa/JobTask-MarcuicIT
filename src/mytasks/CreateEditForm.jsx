import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';


const CreateEditForm = ({ title, data }) => {

    const initialValues = data || { title: "Jr", discount: "10" };

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
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.title} />
                                </div>
                            </Col>

                            <Col md={6}>
                                <h5>Discount %</h5>
                                <div class="input-group flex-nowrap mb-3">
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={initialValues.discount} />
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