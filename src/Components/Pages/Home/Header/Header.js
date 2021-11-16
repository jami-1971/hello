import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className="Navbar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="text-white">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end text-white">
                    <Navbar.Text className="text-white">
                    Signed in as: <a href="#login">Niha</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

export default Header;