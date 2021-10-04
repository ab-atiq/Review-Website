import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import './About.css'
const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, [])
    return (
        <div>
            <Header></Header>
                <h1>Our All Teacher</h1>
                <div className="about">
                    {
                        about.map(element => <Element key={element.id} element={element}></Element>)
                    }
                </div>
            <Footer></Footer>
        </div>
    );
};

const Element = (props) => {
    const { teacher, phone, email, study, image } = props.element;
    return (
            <Card>
                <Card.Img variant="top" src={image} style={{ height: '350px' }} />
                <Card.Body>
                    <Card.Title variant='image-fluid'>Name: {teacher} </Card.Title>
                    <Card.Text>
                        He conplete his Study from {study}
                    </Card.Text>
                    <Card.Title>Email: {email} </Card.Title>
                    <Card.Title>Phone: {phone} </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    )
}

export default About;