import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Import AOS styles if not already imported
import Aos from 'aos';

// Data array with image imports
const data = [
    { id: 1, category: 'App', src: require('../image/All2.jpeg') },
    { id: 2, category: 'App', src: require('../image/All3.jpeg') },
    { id: 3, category: 'App', src: require('../image/All.jpeg') },
    { id: 4, category: 'Branding', src: require('../image/All.jpeg') },
    { id: 5, category: 'Branding', src: require('../image/All2.jpeg') },
    { id: 6, category: 'Branding', src: require('../image/All3.jpeg') },
    { id: 7, category: 'Development', src: require('../image/All.jpeg') },
    { id: 8, category: 'Development', src: require('../image/d1.jpeg') },
    { id: 9, category: 'Development', src: require('../image/d2.jpeg') },
    { id: 10, category: 'UX', src: require('../image/All.jpeg') },
    { id: 11, category: 'UX', src: require('../image/All3.jpeg') },
    { id: 12, category: 'UX', src: require('../image/All2.jpeg') },
];

const Filter = () => {
    const [arr, setArr] = useState(data.filter(item => item.category === 'App'));
    const [activeCategory, setActiveCategory] = useState('App');

    const dataSelect = (category) => () => {
        setActiveCategory(category);
        const update = data.filter(curElem => curElem.category === category);
        setArr(update);
    };

    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animations
            once: true, // Animation should happen only once
        });
    }, []);

    return (
        <div>
            <Container>
                <Row className='filter-space'>
                    <Col lg={12}>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="text" data-aos="fade-up">
                                <p>Case Studies</p>
                                <h2>Our featured projects</h2>
                            </div>
                            <div className="link">
                                <ul className='d-flex list-unstyled flex-wrap'>
                                    <li>
                                        <a
                                            onClick={dataSelect('App')}
                                            style={{ color: activeCategory === 'App' ? 'blue' : 'black' }}
                                            data-aos="fade-up"
                                        >
                                            APP
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={dataSelect('Branding')}
                                            style={{ color: activeCategory === 'Branding' ? 'blue' : 'black' }}
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            BRANDING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={dataSelect('Development')}
                                            style={{ color: activeCategory === 'Development' ? 'blue' : 'black' }}
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                        >
                                            DEVELOPMENT
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={dataSelect('UX')}
                                            style={{ color: activeCategory === 'UX' ? 'blue' : 'black' }}
                                            data-aos="fade-up"
                                            data-aos-delay="300"
                                        >
                                            UX DESIGN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {arr.length > 0 ? (
                        arr.map(item => (
                            <Col key={item.id} lg={4} className="mb-3" data-aos="fade-up">
                                <img src={item.src} alt={item.category} className='img-fluid h-100 object-fit-cover' />
                            </Col>
                        ))
                    ) : (
                        <Col lg={12} className="text-center">
                            <p>No images available for this category.</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Filter;
