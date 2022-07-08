import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Servise from '../Service/Servise';
import './Servises.css';

const Services = () => {
    const [services, setServises] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServises(data));
    }, [])
    return (
        <div className='container' id='services'>
           <Container>
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
           </Container>
        </div>
    );
};

export default Services;