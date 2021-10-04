import React from 'react';

const Service = (props) => {
    const { id, services } = props.service;
    return (
        <div className='service'>
            <h4>Service: {id}</h4>
            <h3>{services}</h3>
        </div>
    )
};

export default Service;