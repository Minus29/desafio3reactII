import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";



const Navbars = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
                <Container>
                    <NavLink
                        className={setActiveClass}
                        to="/" >
                        <img src="https://cdn-icons-png.flaticon.com/512/868/868596.png" alt="poke" id='img' />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink 
                                className={setActiveClass}
                                to="/" >
                                Home
                            </NavLink>
                            <NavLink 
                                className={setActiveClass}
                                to="Pokemons" >
                                Pokemons
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars