import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        fontSize: '20px',
        textDecoration:'underline'
    };

    const itemStyle={
        padding:'10px',
        fontSize:'20px',
        textDecoration:'none'
    }

    return (
        <div>
            <Container>
                <Row className="" style={{margin:'5px',padding:'10px'}}>
                    <Col><h2 style={{color:'blue'}}>AR institute</h2></Col>
                    <Col>
                        <NavLink activeStyle={activeStyle} style={itemStyle} to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} style={itemStyle} to="/course">Course</NavLink>
                        <NavLink activeStyle={activeStyle} style={itemStyle} to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} style={itemStyle} to="/about">About</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;