import React, { useEffect } from 'react';
import Aos from 'aos';
import { Col, Row } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

const About_sec_3 = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <Row className='spacer'>
                <Col lg={12} className='text-center' data-aos="fade-up">
                    <div className="box-about-text">
                        <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#375eef', fontWeight: '600' }}>____ Case Studies</p>
                        <h3 style={{ fontSize: '36px', color: '#002e5b' }}>We think of our clients as coworkers</h3>
                        <p style={{ fontSize: '21px', color: '#696969' }}>
                            Let’s make something great. We’re proud to still be working with many <br />
                            of the same people that hired us in our early days
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='g-4'>
                <Col lg={4} md={4} data-aos="fade-up">
                    <div className="about-photo">
                        <img src={require('../image/All.jpeg')} alt="Case Study 1" />
                    </div>
                </Col>
                <Col lg={4} md={4} data-aos="fade-up" data-aos-delay="100">
                    <div className="about-photo">
                        <img src={require('../image/All2.jpeg')} alt="Case Study 2" />
                    </div>
                </Col>
                <Col lg={4} md={4} data-aos="fade-up" data-aos-delay="200">
                    <div className="about-photo">
                        <img src={require('../image/All3.jpeg')} alt="Case Study 3" />
                    </div>
                </Col>
                <Col lg={4} md={4} data-aos="fade-up" data-aos-delay="300">
                    <div className="about-photo">
                        <img src={require('../image/d1.jpeg')} alt="Case Study 4" />
                    </div>
                </Col>
                <Col lg={4} md={4} data-aos="fade-up" data-aos-delay="400">
                    <div className="about-photo">
                        <img src={require('../image/d2.jpeg')} alt="Case Study 5" />
                    </div>
                </Col>
                <Col lg={4} md={4} data-aos="fade-up" data-aos-delay="500">
                    <div className="about-photo">
                        <img src={require('../image/f-react.jpeg')} alt="Case Study 6" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About_sec_3;
