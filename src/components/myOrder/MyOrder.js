import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import UseAuth from '../../hooks/UseAuth';
import './MyOrder.css'
const MyOrder = () => {
const {user}=UseAuth()
const [myorderitems,setMyorderitems]=useState([])
  useEffect(()=>{
      fetch(`https://whispering-springs-16614.herokuapp.com/orders/${user?.email}`)
      .then(response=>response.json())
      .then(data=>setMyorderitems(data))
  },[user.email])





// delete function
const myOrderDeleteFunction=(id)=>{
    const confirmDeletealert=window.confirm(`are you sure you want to delete?`)
    if(confirmDeletealert){
        fetch(`https://whispering-springs-16614.herokuapp.com/orders/${id}`,{
            method: 'delete',
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.deletedCount>0){
               alert(`your order deleted successfully`)
               const reminingOrder=myorderitems.filter((x)=>x._id!==id)
               setMyorderitems(reminingOrder)
            }
    })
}
} 


    return (

        <div className='container myorder'>
             <div className='titleText'>
                   <h4>My Orders</h4>
               <h1>My All Orders</h1>
               {myorderitems.length===0&& <h5 className='text-info'>You have not placed any orders</h5>}
               </div>
      {myorderitems.length===0?<div class="spinner-border text-info" role="status"><span class="visually-hidden">Loading...</span></div>
       :<Row xs={1} md={4} className="g-4">
                {
                myorderitems.map((order)=><Col>
                <Card className='mycard'>
                  <Card.Img variant="top" src={order.img} />
                  <Card.Body>
                    <Card.Title>{order.location}</Card.Title>
                    <Card.Text>
                     <p>name: {order.name}</p>
                     <p>email: {order.email}</p>
                     <p>address: {order.address}</p>
                     <p>phone number: {order.phone}</p>
                     <p>order date: {order.date}</p>
                     <p>status: {order.status}</p>
                    </Card.Text>
                    <button onClick={()=>myOrderDeleteFunction(order._id)}>delete</button>
                  </Card.Body>
                </Card>
              </Col>)
                }
        </Row>}

       
        </div>
    );
};

export default MyOrder;