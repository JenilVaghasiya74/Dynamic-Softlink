import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Cart = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            once: true, // Animation should happen only once
        });
    }, []);

    return (        
        <div>
            <Container className='cart-main'>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 data-aos="fade-up">We've worked with all sorts of clients</h2>
                        <h3 data-aos="fade-up" data-aos-delay="100">
                            We're proud to still be working with many of the same people that hired us <br /> in our early days.
                        </h3>
                    </Col>
                </Row>
                <Row className='mt-5 g-4'>
                    <Col lg={4}>
                        <div className="box border text-center" data-aos="fade-up" data-aos-delay="200">
                            <p>When our retail customers need software changes to meet new market requirements we turn to the professionals at Infinite Software to ensure timely delivery.</p>
                            <h5>Stella Smith</h5>
                            <h4>Chief Technology Officer</h4>
                            <div className="photo">
                                <img src={require('../image/cart1.jpeg')} alt="Stella Smith" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box border text-center" data-aos="fade-up" data-aos-delay="300">
                            <p>When our retail customers need software changes to meet new market requirements we turn to the professionals at Infinite Software to ensure timely delivery.</p>
                            <h5>Stella Smith</h5>
                            <h4>Chief Technology Officer</h4>
                            <div className="photo">
                                <img src={require('../image/car2.jpeg')} alt="Stella Smith" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box border text-center" data-aos="fade-up" data-aos-delay="400">
                            <p>When our retail customers need software changes to meet new market requirements we turn to the professionals at Infinite Software to ensure timely delivery.</p>
                            <h5>Stella Smith</h5>
                            <h4>Chief Technology Officer</h4>
                            <div className="photo">
                                <img src={require('../image/cart3.jpeg')} alt="Stella Smith" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
