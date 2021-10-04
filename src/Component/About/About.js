import React, { useEffect, useState } from 'react';
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
            <h1>This is About Us.</h1>
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
    const { teacher,phone,email,study,image } = props.element;
    return (
        <div className='element'>
            <img src={image} alt="" />
            <h5>Name: {teacher}</h5>
            <h5>Phone: {phone}</h5>
            <h5>Email: {email}</h5>
            <h5>Study: {study}</h5>
        </div>
    )
}

export default About;