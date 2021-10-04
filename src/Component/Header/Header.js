import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {

    const activeStyle={
        fontWeight: "bold",
        color: "red",
        fontSize:'20px'
      };

    return (
        <div>
            <Container>
                <Row className="">
                    <Col><img src="/public/favicon.ico" alt="icon" /></Col>
                    <Col>
                        <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} to="/course">Course</NavLink>
                        <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;