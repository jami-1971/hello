import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import {  NavLink} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import { FcLike } from 'react-icons/fc';


const Header = () => {
    const {user, logout, googleSignIn} = useAuth();
    return (
        <>
            <Navbar className="Navbar" expand="lg" sticky="top">
            <Container>
                <Button sx={{mt: 5}}variant="light" className="button"><a className="abc" href="https://jami-1971.github.io/developer-portfolio/?fbclid=IwAR3cANjrTKf-OuD7zJP54NAPx0LYiLPYDX-NGCQxzOW01J1UeY1V5isMxEY">Days was...</a></Button>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end text-white">
                    <Navbar.Text className="text-white">
                    {user.email ? <>Signed in as: <a class="abc" href="#login">{user.displayName}</a> <Button  sx={{mt: 5}} onClick={logout} variant="light">Log out</Button> <NavLink to="/drawer"><Button variant="light"><FcLike /></Button></NavLink></> : <Button onClick={googleSignIn} variant="light">Get In</Button>}
                    {/* <Button onClick={handleClick('bottom-end')}>bottom-end</Button> */}
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

export default Header;