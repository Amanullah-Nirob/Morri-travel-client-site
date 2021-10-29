import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
         axios.post(`http://localhost:5000/services`,data)
        .then(res=>{
            if(res.data.insertedId){
                alert(`a new service added successfully`)
                reset()
            }
        })
    };
                  
    return (
        <div className='addservices container'>
              <div className='titleText'>
                   <h4>Add Service </h4>
               <h1>Add a new Service </h1>
               </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder='image url'/>
                <input {...register("title")} placeholder='name' />
                <input {...register("dis")}  placeholder='description' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;