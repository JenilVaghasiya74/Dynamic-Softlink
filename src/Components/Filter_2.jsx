import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

// Image data
const allImages = [
    {
        img: require('../image/f-react.jpeg'),
        category: 'React',
    },
    {
        img: require('../image/d1.jpeg'),
        category: 'Python',
    },
    {
        img: require('../image/d2.jpeg'),
        category: 'Django',
    },
    {
        img: require('../image/A.jpeg'),
        category: 'Angular',
    },
    {
        img: require('../image/Meteor.jpeg'),
        category: 'Meteor.js',
    },
    {
        img: require('../image/PostgreSQL.jpeg'),
        category: 'PostgreSQL',
    },
];  

const Filter_2 = () => {
    const [activeCategory, setActiveCategory] = useState('React');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        setFilteredImages(allImages.filter((item) => item.category === activeCategory));
    }, [activeCategory]);

    const selectCategory = (category) => {
        setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            <Container>
                <Row className='filter-2'>
                    <Col lg={12}>
                        <h1 className='text-uppercase text-center' data-aos="fade-up">___Software Engineering</h1>
                        <h2 className='text-center' data-aos="fade-up" data-aos-delay="100">Let's build long-lasting software together</h2>
                    </Col>
                    <Col lg={12}>
                        <ul className='list-unstyled d-flex w-100 justify-content-evenly mt-5'>
                            <li
                                className={`category-item ${activeCategory === 'React' ? 'active' : ''}`}
                                onClick={() => selectCategory('React')}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <img src={require('../image/React.png')} alt="React" />
                                <p>React.js</p>
                            </li>
                            <li
                                className={`category-item ${activeCategory === 'Python' ? 'active' : ''}`}
                                onClick={() => selectCategory('Python')}
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <img src={require('../image/py.png')} alt="Python" />
                                <p>Python</p>
                            </li>
                            <li
                                className={`category-item ${activeCategory === 'Django' ? 'active' : ''}`}
                                onClick={() => selectCategory('Django')}
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <img src={require('../image/dj.png')} alt="Django" />
                                <p>Django</p>
                            </li>
                            <li
                                className={`category-item ${activeCategory === 'Angular' ? 'active' : ''}`}
                                onClick={() => selectCategory('Angular')}
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <img src={require('../image/a.png')} alt="Angular" />
                                <p>Angular</p>
                            </li>
                            <li
                                className={`category-item ${activeCategory === 'Meteor.js' ? 'active' : ''}`}
                                onClick={() => selectCategory('Meteor.js')}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <img src={require('../image/m.png')} alt="Meteor.js" />
                                <p>Meteor.js</p>
                            </li>
                            <li
                                className={`category-item ${activeCategory === 'PostgreSQL' ? 'active' : ''}`}
                                onClick={() => selectCategory('PostgreSQL')}
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <img src={require('../image/Po.png')} alt="PostgreSQL" />
                                <p>PostgreSQL</p>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className='text-ui'>
                    <Col lg={6}>
                        {filteredImages.length > 0 ? (
                            filteredImages.map((item, index) => (
                                <div className="image" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                    <img src={item.img} alt={item.category} />
                                </div>
                            ))
                        ) : (
                            <p>No images to display. Please select a category.</p>
                        )}
                    </Col>
                    <Col lg={6}>
                        <div className="text ps-sm-0 pe-sm-0">
                            <div className="box-top border my-4 rounded" data-aos="fade-up">
                                <h2>Thinking in React</h2>
                                <p>React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.</p>
                            </div>
                            <div className="box-top border my-4 rounded" data-aos="fade-up" data-aos-delay="100">
                                <h2>Break the UI</h2>
                                <p>The first thing you’ll want to do is to draw boxes around every component. If you’re working with a designer, they may have already done this.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Filter_2;
