import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CiMobile2 } from 'react-icons/ci';
import { FaDesktop } from 'react-icons/fa';
import { SiBmcsoftware } from 'react-icons/si';

const Section_s1 = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animations
            once: true, // Animation should happen only once
        });
    }, []);

    return (
        <div className="spacer section-s1">
            <div className="text-title" data-aos="fade-up">
                <h5 style={{ textTransform: 'uppercase' }} className='text-center'>___Software Engineering</h5>
                <h2 className='mt-4'>A harmony of software house skills and digital <br /> agency sensibility</h2>
            </div>

            <Container>
                <Row className='spacer'>
                    <Col lg={4} data-aos="fade-up" data-aos-delay="200">
                        <div className="cart">
                            <div className="icon">
                                <i><CiMobile2 /></i>
                            </div>
                            <div className="text-cart">
                                <h4>App Development</h4>
                                <p className='text-center'>We know that right web solutions will deliver results for your business. We can help with design and development.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} data-aos="fade-up" data-aos-delay="400">
                        <div className="cart">
                            <div className="icon">
                                <i style={{ color: '#3a63ea' }}><FaDesktop /></i>
                            </div>
                            <div className="text-cart">
                                <h4>Software Development</h4>
                                <p className='text-center'>We know that right web solutions will deliver results for your business. We can help with design and development.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} data-aos="fade-up" data-aos-delay="600">
                        <div className="cart">
                            <div className="icon">
                                <i><SiBmcsoftware /></i>
                            </div>
                            <div className="text-cart">
                                <h4>Product Design</h4>
                                <p className='text-center'>We know that right web solutions will deliver results for your business. We can help with design and development.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section_s1;
