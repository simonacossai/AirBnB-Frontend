import React, { Component } from 'react';
import { Navbar, Button, Nav, Form, FormControl, Container, InputGroup } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/logo.png'
import { IoIosGlobe } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import {IoSearchCircleSharp} from 'react-icons/io5';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" className="airbnb-navbar">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} alt="airbnb-logo" className="navbar-logo" /></Navbar.Brand>
                        <Nav className="mx-auto">
                            <Form inline>
                                <InputGroup className="py-0 input-group-navbar">
                                    <Form.Control
                                        type="text"
                                        className="py-0 form-control-navbar"
                                        placeholder="Start your search.."
                    
                                    />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text
                                            className="py-0 px-0 input-group-text-navbar">
                                            <IoSearchCircleSharp style={{ color: "#FF6267", fontSize:"38px"}} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form>
                        </Nav>
                        <Nav className="d-flex justify-content-center align-items-center">
                            <Nav.Link href="#" className="nav-link">Become a host</Nav.Link>
                            <Nav.Link href="#"><IoIosGlobe className="globe-icon-nav" /></Nav.Link>
                            <div className="d-flex nav-user-div">
                                <Nav.Link href="#" className="py-1 hamburger-icon-nav"><GiHamburgerMenu /></Nav.Link>
                                <Nav.Link href="#" className="py-1 user-icon-nav"><FaUserCircle /></Nav.Link>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
