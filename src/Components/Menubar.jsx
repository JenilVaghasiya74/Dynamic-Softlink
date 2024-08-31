import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const Menubar = ({ placement, ...props }) => {
    const [show, setShow] = useState(false);
    const location = useLocation(); // Get the current location/path

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Define a function to determine if the link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <Button variant="light" onClick={handleShow} className="me-2">
                <CiMenuFries />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={placement} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='menu list-unstyled'>
                        <li><Link to="/" className={isActive('/')} onClick={handleClose}>HOME</Link></li>
                        <li><Link to="/about" className={isActive('/about')} onClick={handleClose}>ABOUT</Link></li>
                        <li><Link to="/elements" className={isActive('/elements')} onClick={handleClose}>ELEMENTS</Link></li>
                        <li><Link to="/blog" className={isActive('/blog')} onClick={handleClose}>BLOG</Link></li>
                        <li><Link to="/portfolio" className={isActive('/portfolio')} onClick={handleClose}>PORTFOLIO</Link></li>
                        <li><Link to="/contact" className={isActive('/contact')} onClick={handleClose}>CONTACT</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>
            <Menubar placement="end" />
        </>
    );
}

export default Example;
