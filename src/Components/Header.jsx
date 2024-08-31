import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menubar from './Menubar';
import Search from './Search';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary p-4">
                <Container>
                    <div className="logo">
                        <Navbar.Brand href="/">
                            <img src={require('../image/Screenshot 2024-08-25 103523.png')} alt="" />
                        </Navbar.Brand>
                    </div>
                    <div className="main-menu">
                        <div className='d-lg-block d-none'>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => isActive ? 'active' : ''}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => isActive ? 'active' : ''}
                                    >
                                        About
                                    </NavLink>
                                    <NavLink
                                        to="/Contact"
                                        className={({ isActive }) => isActive ? 'active' : ''}
                                    >
                                        Contact
                                    </NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                    <div>
                        <Search />
                        <Menubar />
                    </div>
                </Container>
            </Navbar>
        </div>


    )
}

export default Header;
