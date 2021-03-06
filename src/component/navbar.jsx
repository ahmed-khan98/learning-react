import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
const Navbarr = () => {
    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/service'>Service</Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to='/about'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/contact'>Contact</Link>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
export default Navbarr;