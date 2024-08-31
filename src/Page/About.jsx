import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../About.css';
import About_Sec_1 from '../About_In_Components/About_Sec_1';
import About_Sec_2 from '../About_In_Components/About_Sec_2';
import About_sec_3 from '../About_In_Components/About_sec_3';
import About_Sec_4 from '../About_In_Components/About_Sec_4';
const About = () => {
    return (
        <div>
            <Container>
                <About_Sec_1 />
                <About_Sec_2 />
                <About_sec_3 />
                <About_Sec_4 />
            </Container>
        </div>
    )
}

export default About
