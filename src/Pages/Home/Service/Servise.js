import React from 'react';
import { Link } from "react-router-dom";
import './Servise.css'

const Servise = ({service}) => {
    const {id,name,price,discription,img} = service;
    
    return (
        <>
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3 className='text-white'>{name}</h3>
            <h5 className='text-white'>{price}</h5>
            <p className='p-3'>{discription}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
        </>
    );
};

export default Servise;