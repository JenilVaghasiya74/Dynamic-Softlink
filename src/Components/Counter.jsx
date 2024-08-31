import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Counter = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animations
            once: true, // Animation should happen only once
        });
    }, []);
    return (
        <Container>
            <Row>
                <Col lg={3} data-aos="fade-up">
                    <div className="counter-item">
                        <CountUp start={0} end={150} duration={4} suffix="+" />
                        <h2>Completed Projects</h2>
                    </div>
                </Col>
                <Col lg={3} data-aos="fade-up" data-aos-delay="200">
                    <div className="counter-item">
                        <CountUp start={0} end={1200} duration={4} />
                        <h2>Happy Customers</h2>
                    </div>
                </Col>

                <Col lg={3} data-aos="fade-up" data-aos-delay="400">
                    <div className="counter-item">
                        <CountUp start={0} end={11000} duration={4} suffix=" hrs" />
                        <h2>Working Hours</h2>
                    </div>
                </Col>

                <Col lg={3} data-aos="fade-up" data-aos-delay="600">
                    <div className="counter-item">
                        <CountUp start={0} end={50} duration={4} />
                        <h2>Awards Won</h2>
                    </div>
                </Col>
            </Row >
        </Container>
    );
}

export default Counter;
