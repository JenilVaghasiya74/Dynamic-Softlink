import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';

const initialvalues = {
    name: "",
    email: "",
    password: "",
    cpassword: ""
};

const validateSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Enter your name"),
    email: Yup.string().email().required("Enter email address"),
    password: Yup.string().min(6).required("Enter your password"),
    cpassword: Yup.string().required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
});

const Sec_2 = () => {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
        initialValues: initialvalues,
        validationSchema: validateSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div>
            <div className="bg-contact-color">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='spacer'>
                                <h2 className='text-center text-uppercase'>Leave us your info</h2>
                                <p>and we will get back to you.</p>
                                <div className='borders'></div>
                            </div>
                        </Col>
                    </Row>

                    <div className="container d-flex justify-content-center">
                        <form onSubmit={handleSubmit} className="row my-5 g-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Full Name'
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (
                                    <span className="error text-danger">{errors.name}</span>
                                ) : null}
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder='Email'
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                    <span className="error text-danger">{errors.email}</span>
                                ) : null}
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='Password'
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                    <span className="error text-danger">{errors.password}</span>
                                ) : null}
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='Confirm Password'
                                    name="cpassword"
                                    value={values.cpassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.cpassword && touched.cpassword ? (
                                    <span className="error text-danger">{errors.cpassword}</span>
                                ) : null}
                            </div>
                            <div className="col-md-12">
                                <textarea
                                    className="form-control"
                                    placeholder='Message'
                                    name="message"
                                    rows="4"
                                    value={values.message || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.message && touched.message ? (
                                    <span className="error text-danger">{errors.message}</span>
                                ) : null}
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Sec_2;
