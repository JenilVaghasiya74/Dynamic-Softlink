import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa6';

import Aos from 'aos';

const About_Sec_1 = () => {


    // animation on scroll 
    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animation
            once: true, // Animation should happen only once
        });
    }, []);

    return (
        <div>
            <Row className='space-about about'>
                <Col lg={12} data-aos="fade-up">
                    <div className="text-title text-center">
                        <h2>About our <span>agency.</span></h2>
                        <h3 className='mt-4'>Let’s build long‑lasting software together</h3>
                    </div>
                </Col>
            </Row>
            <Row className='space-about'>
                <Col lg={6} className='' data-aos="fade-up" data-aos-delay="200">
                    <div className="About_box">
                        <p style={{ fontSize: '13px', color: '#375eef', fontWeight: '600' }}>___ ABOUT US</p>
                        <h2 style={{ fontSize: '36px', color: '#002e5b', margin: '20px 0', fontWeight: '600' }}>Creating robust applications</h2>
                        <p className='my-4' style={{ fontSize: '18px', fontWeight: '400', textTransform: 'none' }}>We believe in the pragmatic application of conventional wisdom. We’re not zealots about coding methodologies, but we have learned first-hand that some time-tested practices do actually help teams work better.</p>
                        <p className='my-4' style={{ fontSize: '18px' }}>Evaluating your needs, we can develop a scalable and accessible software solution that will cater to all your requirements too.</p>
                        <div className="main-image-about d-flex gap-4 gap-lg-5 mt-5" data-aos="fade-up" data-aos-delay="400">
                            <div className="image">
                                <img src={require('../image/asset 8.png')} alt="User-facing applications" />
                            </div>
                            <div className="text">
                                <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#002e5b' }}>User-facing applications, including UI/UX</h2>
                                <p>We believe in the pragmatic application of conventional wisdom. We’re not zealots about coding methodologies, but we have learned first-hand that some</p>
                                <a href="#" style={{ fontSize: '14px', fontWeight: '500' }} className='text-decoration-none text-uppercase'>
                                    View Case Study <span><i><FaGreaterThan /></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className=' ' data-aos="fade-up" data-aos-delay="600">
                    <div className="about_sec_2_image">
                        <img src={require('../image/banner.png')} alt="Banner" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default About_Sec_1;
