import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeService from './HomeService';

const HomeServices = () => {

 const [servises,setServices]=useState([])
useEffect(()=>{
    fetch(`http://localhost:5000/services`)
    .then(response=>response.json())
    .then(data=>setServices(data))
},[])

    return (
        <div className='homeServices'>
           <div className="container hsbcolor">

               <div className='titleText'>
                   <h4>Our Services</h4>
               <h1>Our Best Services</h1>
               </div>
           <Row xs={1} md={4} className="g-4">
                {
                  servises.map((x)=><HomeService key={x._id} card={x}/>)  
                }
           </Row>
           </div>
        </div>
    );
};

export default HomeServices;