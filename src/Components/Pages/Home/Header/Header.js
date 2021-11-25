import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import {  NavLink} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logout, googleSignIn} = useAuth();
    return (
        <>
            <Navbar className="Navbar" expand="lg" sticky="top">
            <Container>
                <a className="text-white" href="https://jami-1971.github.io/developer-portfolio/?fbclid=IwAR3cANjrTKf-OuD7zJP54NAPx0LYiLPYDX-NGCQxzOW01J1UeY1V5isMxEY">Days was...</a>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end text-white">
                    <Navbar.Text className="text-white">
                    {user.email ? <>Signed in as: <a href="#login">{user.displayName}</a> <Button sx={{mt: 5}} onClick={logout} variant="light">Log out</Button> <NavLink to="/drawer"><Button variant="light">Us</Button></NavLink></> : <Button onClick={googleSignIn} variant="light">Get In</Button>}
                    
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

export default Header;