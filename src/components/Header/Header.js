import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Header.css'

const Header = () => {
  const {user,logoutFunction}=UseAuth()
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg">
  <div class="container ares">
    <a class="navbar-brand" href="/home"><img width='120px' src="http://askproject.net/morii/wp-content/uploads/sites/8/2021/07/logo_Asset-1.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon "></span> */}
      <div className='navbars'>
    <i class="fas fa-bars navbar-toggler-icon "></i>
    </div>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">

        <li class="nav-item">
        <NavLink to="/home"activeStyle={{fontWeight: "bold",color: "#29d9d5"}}>Home</NavLink>
        </li>
    
        <li class="nav-item">
        <NavLink to="/manage"activeStyle={{fontWeight: "bold",color: "#29d9d5"}}>Manage all order</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/service"activeStyle={{fontWeight: "bold",color: "#29d9d5"}}>service</NavLink>
        </li>
    
        <li class="nav-item">
        <NavLink to="/contact"activeStyle={{fontWeight: "bold",color: "#29d9d5"}}>contact</NavLink>
        </li>
        <li>

          {user?.email&&<div>
        <NavLink to="/myOrder"activeStyle={{fontWeight: "bold",color: "#29d9d5"}}>My Order</NavLink>
            
        </div>}

        </li>
        <li>

          {user?.email&&<div>
        <NavLink to="/addService"activeStyle={{fontWeight: "bold",color: "#29d9d5"}}>add a new service</NavLink>
            
        </div>}

        </li>

      </ul>

   {user?.email? <button className='logoutbtn' onClick={logoutFunction}>Log out</button>
   : <div>
    <Link to='/login'>
        <button className='logoutbtn'>sing in</button>
      </Link>
    </div>}
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;