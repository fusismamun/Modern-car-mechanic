import React, { useEffect, useState } from 'react';
import Servise from '../Service/Servise';
import './Servises.css';

const Services = () => {
    const [services, setServises] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServises(data));
    }, [])
    return (
        <div className='container' id='services'>
            <h2 className='m-5 fw-bold text-info'>Our Services</h2>
            <div className='service-container '>
            {
                services.map(service => <Servise
                    key={service.id}
                    service={service}

                >
                </Servise>)
            }

        </div>
        </div>
    );
};

export default Services;