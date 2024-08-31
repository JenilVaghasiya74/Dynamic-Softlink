import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <Container className='footer-text'>
                <Row className='my-5 footer'>
                    <Col lg={12}>
                        <div className="box-footer text-center">
                            <h3>Get in Touch</h3>
                            <p>Let’s talk. We will get in touch within 1 business day. No <br /> obligation and we don’t share your data with anyone</p>
                            <div className="input d-flex justify-content-center mt-5">
                                <input type="text" placeholder='  Your Email Address' />
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='space'>
                    <Col lg={4}>
                        <h2>Services</h2>
                        <div className="box-fo-link d-flex">
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Shop</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <h2>Platform</h2>
                        <div className="box-fo-link d-flex ">
                            <ul>
                                <li><a href="#">Infinite</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Docs</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Media Kit</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">API</a></li>
                                <li><a href="#">Jobs</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <h2>Contact</h2>
                        <div className="box-fo-link">
                            <ul>
                                <li><h5>Mon – Fri : 8.00am 6.00pm</h5></li>
                                <li><h5>112 W 34th St, New York</h5></li>
                                <li><h5>(+1) 212-946-2707</h5></li>
                                <li><a href="#">info@Infinite.com</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="text-center bottom my-3">
                        <h3>Copyright ©2019 Infinite. All Rights Reserved. <a href="#">Terms of Use</a></h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
