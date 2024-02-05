import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import icon from '../../assets/images/icon.png';


const Navigation = () => {
    return (
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="/"><img src={icon} alt="logo" /> Weather Checker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/Bangladesh">Bangladesh</NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;
