import React from 'react';
import { Link } from "react-router-dom";
import './Servise.css'

const Servise = ({service}) => {
    const {_id,Name,price,description,img} = service;
    
    return (
        <>
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3 className='text-white'>{Name}</h3>
            <h5 className='text-white'>{price}</h5>
            <p className='p-3'>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning'>Book {Name}</button>
            </Link>
        </div>
        </>
    );
};

export default Servise;