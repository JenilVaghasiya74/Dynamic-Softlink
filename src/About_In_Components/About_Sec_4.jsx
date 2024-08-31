import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const About_Sec_4 = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <Container>
                <div className="main_about_sec_4 spacer">
                    <div className="box">
                        <h2 
                            style={{ fontSize: '13px', textTransform: 'uppercase', color: '#375eef', fontWeight: '500', marginBottom: '20px' }}
                            data-aos="fade-up"
                        >
                            ___ Case Studies
                        </h2>
                        <h1 
                            style={{ fontSize: '34px', fontWeight: '500', color: '#002e5b' }}
                            data-aos="fade-up" 
                            data-aos-delay="100"
                        >
                            Our featured projects
                        </h1>
                    </div>
                </div>
                <Row className='g-5'>
                    <Col lg={4} md={6}>
                        <div 
                            className="box-flex"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="text">
                                <p>Startup</p>
                                <h2>Free</h2>
                            </div>
                            <ul className='p-0 list-unstyled'>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Free 14 day trial</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>No credit card required</li>
                                <li><i><IoCloseCircleOutline /></i>Unlimited products</li>
                                <li><i><IoCloseCircleOutline /></i>Unlimited projects</li>
                                <li><i><IoCloseCircleOutline /></i>Unlimited updates</li>
                            </ul>
                            <div className="button">
                                <button>DOWNLOAD</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div 
                            className="box-flex bg-sec-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="text">
                                <p>Personal</p>
                                <h2>$29/ MO</h2>
                            </div>
                            <ul className='p-0 list-unstyled'>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Save 20% over monthly billing</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>No credit card required</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Unlimited products</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Unlimited projects</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Unlimited updates</li>
                            </ul>
                            <div className="button">
                                <button>Purchase</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div 
                            className="box-flex"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="text">
                                <p>Team</p>
                                <h2>Agency</h2>
                            </div>
                            <ul className='p-0 list-unstyled'>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Private team store</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Custom security options</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Free support & training</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Unlimited projects</li>
                                <li><i><IoIosCheckmarkCircleOutline /></i>Unlimited updates</li>
                            </ul>
                            <div className="button">
                                <button>Contact Us</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About_Sec_4;
