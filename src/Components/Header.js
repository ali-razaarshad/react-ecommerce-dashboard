import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/" className="text-light nav-link">Ecommerce Dashboard</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;