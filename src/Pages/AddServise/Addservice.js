import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css'


const Addservice = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:5000/services", data)
        .then(res=> {
            if(res.data.insertedId){
                alert('added successfully');
                // To reset form 
                reset();
            }
        })
    }
    return (
        <div className='addservice'>
            <h2>Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder=
                "name"/>
                <textarea {...register("description",)} placeholder="description"/>
                <input type="number" {...register("price")} placeholder="price"/>
                <input {...register("img")} placeholder="image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;