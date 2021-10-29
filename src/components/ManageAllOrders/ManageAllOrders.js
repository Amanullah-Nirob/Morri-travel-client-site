import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './MnageAllOrder.css'
const ManageAllOrders = () => {

    const [multipleBuyers,setMultipleBuyers]=useState([]) 
const [reload,setReload]=useState(false)

   useEffect(()=>{
       fetch(`http://localhost:5000/orders`)
       .then(res=>res.json())
       .then(data=>setMultipleBuyers(data))
   },[reload])

//    deleted function
   const myOrderDeleteFunction=(id)=>{
    const confirmDeletealert=window.confirm(`are you sure you want to delete?`)
    if(confirmDeletealert){
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'delete',
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.deletedCount>0){
               alert(`your order deleted successfully`)
               const reminingOrder=multipleBuyers.filter((x)=>x._id!==id)
               setMultipleBuyers(reminingOrder)
            }
    })
}
} 

    //  update function
    const updateFunction=(id)=>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'put',

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert(`your order approved`)
                setReload(true)
            }
        })

    }


    return (
        <div className='container manageorder'> 
           <div className='titleText'>
                   <h4>Manage Orders</h4>
               <h1>Manage All Orders</h1>
               </div>
           <Row xs={1} md={4} className="g-4">
          {
              multipleBuyers.map((Buyer)=><Col>
              <Card className='Buyer'>
                <Card.Img variant="top" src={Buyer.img} />
                <Card.Body>
                  <Card.Title>{Buyer.location}</Card.Title>
                  <Card.Text>
                  <p>name: {Buyer.name}</p>
                     <p>email: {Buyer.email}</p>
                     <p>address: {Buyer.address}</p>
                     <p>phone number: {Buyer.phone}</p>
                     <p>order date: {Buyer.date}</p>
                     <p>status: {Buyer.status}</p>
                  </Card.Text>
                  <button className='btn btn-outline-info mt-2' onClick={()=>myOrderDeleteFunction(Buyer._id)}>Delete</button>
                  <button className='btn btn-outline-primary ms-3 mt-2' onClick={()=>updateFunction(Buyer._id)}>Accept order</button>
                </Card.Body>
              </Card>
            </Col>)
          }
           </Row>
        </div>
    );
};

export default ManageAllOrders;