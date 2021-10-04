import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const [services, serServices] = useState([]);
    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => serServices(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h1>This is Services section.</h1>
            <div className="services">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Services;