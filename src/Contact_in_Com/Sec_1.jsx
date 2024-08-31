import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoNavigate } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Sec_1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom duration (optional)
    }, []);

    return (
        <>
            <Container>
                <Row className='spacer text-center'>
                    <Col lg={12}>
                        <h1 style={{ fontSize: '61px', fontWeight: '600' }} data-aos="fade-down">Contact</h1>
                    </Col>
                </Row>

                <Row className='text-center'>
                    <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
                        <div className="box-contact-cart">
                            <div className="icon">
                                <i><FaPhoneAlt /></i>
                            </div>
                            <div className="text">
                                <h2>Phone</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                                <a href="#">+1-2345-2345</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="400">
                        <div className="box-contact-cart">
                            <div className="icon">
                                <i><MdOutlineEmail /></i>
                            </div>
                            <div className="text">
                                <h2>Email</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                                <a href="#">Contact@goodlayers.com</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="600">
                        <div className="box-contact-cart">
                            <div className="icon">
                                <i><IoNavigate /></i>
                            </div>
                            <div className="text">
                                <h2>Location</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                                <a href="#">View On Google Map</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Sec_1;
