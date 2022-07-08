import React, { useEffect, useState } from 'react';

const ManagedServices = () => {
    const [services, setServises] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServises(data));
    }, []);

    const handelDelet = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deleteCount) {
                    alert('Delete')
            
                    const remaining = services.filter(service => service._id !== id)
                    setServises(remaining);
                }
            })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.Name}</h3>
                    <button onClick={() => handelDelet(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManagedServices;