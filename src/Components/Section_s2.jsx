import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Section_s2 = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animations
            once: true, // Animation should happen only once
        });
    }, []);

    return (
        <>
            <Container>
                <Row className='spacer section-2'>
                    <Col lg={6} md={6} data-aos="fade-right">
                        <div className="box">
                            <h5>___ABOUT US</h5>
                            <h2 className='mt-4'>Our job is to help our clients</h2>
                            <p className='mt-4'>We believe in the pragmatic application of conventional wisdom. We’re not zealots about coding methodologies, but we have learned first-hand that some time-tested practices do actually help teams work better.</p>
                            <p className='mt-4'>Our team quickly and easily responds to changes, provides fast solutions, develops projects that meet all your requirements and needs.</p>

                            <button>LEARN MORE</button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} data-aos="fade-left">
                        <img src={require('../image/banner.png')} alt="" />
                    </Col>
                </Row>

                <Row className='spacer banner-2'>
                    <Col lg={6} md={6} data-aos="fade-right">
                        <img src={require('../image/banner-2.png')} alt="" />
                    </Col>
                    <Col lg={6} data-aos="fade-left">
                        <div className="text-main">
                            <h5>___Engineering Management</h5>
                            <h2>We work in collaboration with you</h2>
                            <p>We’ve built exceptional software with our clients for almost a decade. Along with developing web applications, we take pride in creating processes that help our clients execute sustainably over the long haul.</p>
                            <ul>
                                <li><img src={require('../image/asset 5.png')} alt="" /> <span>Web Development</span></li>
                                <li><img src={require('../image/asset 6.png')} alt="" /> <span>App Development</span></li>
                                <li><img src={require('../image/asset 7.png')} alt="" /> <span>App Development</span></li>
                                <li><img src={require('../image/asset 8.png')} alt="" /> <span>App Development</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Section_s2;
