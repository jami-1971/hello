import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, googleSignIn} = useAuth();
    return (
        <>
            <Navbar className="Navbar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="text-white">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end text-white">
                    <Navbar.Text className="text-white">
                    {user.email ? <>Signed in as: <a href="#login">{user.displayName}</a></> : <Button onClick={googleSignIn} variant="light">Get In</Button>}
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

export default Header;