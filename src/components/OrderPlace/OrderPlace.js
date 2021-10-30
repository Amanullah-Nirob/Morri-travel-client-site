import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import './OrderPlace.css'
const OrderPlace = () => {
    const {id}=useParams()
    const [service,setService]=useState({})
     const {user}=UseAuth()
     
    //  service detaile distructure
    const {img,title,dis}=service

    const nameRef=useRef()
    const emailRef=useRef()
    const addressRef=useRef()
    const phoneRef=useRef()
    const locationRef=useRef()
    const dateRef=useRef()
   useEffect(()=>{
       fetch(`https://whispering-springs-16614.herokuapp.com/services/${id}`)
       .then(response=>response.json())
       .then(data=>setService(data))
   },[])

const orderSubmitFunction=(e)=>{
e.preventDefault()
const name=nameRef.current.value;
const email=emailRef.current.value;
const address=addressRef.current.value;
const phone=phoneRef.current.value;
const location=locationRef.current.value;
const date=dateRef.current.value;

const confirm={name,email,address,phone,location,date,status:'pending',img:img}
fetch(`https://whispering-springs-16614.herokuapp.com/orders`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(confirm)
})
.then(response=>response.json())
.then(data=>{
    if(data.insertedId){
        alert(`Your order has been accepted`)
        nameRef.current.value=""
        emailRef.current.value=""
        addressRef.current.value=""
        phoneRef.current.value=""
        locationRef.current.value=""
        dateRef.current.value=""
    }
})



}

    return (
        <div className='orderplase'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                     {service==={}?<div class="spinner-border text-info" role="status"><span class="visually-hidden">Loading...</span></div>
                     : <div className='services-details'>
                          <img src={img} alt="" />
                          <h3>{title}</h3>
                          <p>{dis}</p>
                      </div>}
                  </div>


               {/* form hear */}
                  <div className="col-lg-6 col-md-12 col-12">
                      <div className='orderplace'>
                          <h2 style={{color:"#29d5d3"}}>Order Now</h2>
                         <form onSubmit={orderSubmitFunction}>
                             <input type="name"  ref={nameRef} value={user?.displayName || ""} placeholder='your name'/>
                             <input type="email" ref={emailRef} value={user?.email || ""} placeholder='your email'/>
                             <input type="text"  ref={addressRef} placeholder='your address'/>
                             <input type="number"ref={phoneRef} placeholder='your phone number'/>
                             <input type="text"  ref={locationRef} value={title||""} placeholder='tour location'/>
                             <input type="date"  ref={dateRef} placeholder='order date'/>
                            <input type="submit" value="Place order" />
                         </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default OrderPlace;