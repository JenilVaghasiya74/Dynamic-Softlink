import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const About_Sec_2 = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            <Row>
                <Col lg={4} data-aos="fade-up">
                    <div className="box-cart-about">
                        <div className="image">
                            <img src={require('../image/about1.png')} alt="Web Design" />
                        </div>
                        <h3>Web Design</h3>
                        <p>We know that right web solutions will deliver results for your business. We can help with design and development.</p>
                    </div>
                </Col>
                <Col lg={4} data-aos="fade-up" data-aos-delay="200">
                    <div className="box-cart-about">
                        <div className="image">
                            <img src={require('../image/about2.png')} alt="App Development" />
                        </div>
                        <h3>App Development</h3>
                        <p>We know that right web solutions will deliver results for your business. We can help with design and development.</p>
                    </div>
                </Col>
                <Col lg={4} data-aos="fade-up" data-aos-delay="400">
                    <div className="box-cart-about ">
                        <div className="image">
                            <img src={require('../image/about3.png')} alt="UX Design" />
                        </div>
                        <h3>UX Design</h3>
                        <p>We know that right web solutions will deliver results for your business. We can help with design and development.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default About_Sec_2;
