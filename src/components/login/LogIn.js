import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../hooks/UseAuth';


const LogIn = () => {
const {googleLogInFunction}=UseAuth()


  const location=useLocation()
  const redireact_uri=location.state?.from || './home'
const history=useHistory()

  const hendleGoogleLogInfunction=()=>{
      googleLogInFunction()
      .then((result) => {
        history.push(redireact_uri)
      })
  }

    return (
        <div>
            <button onClick={hendleGoogleLogInfunction} className='btn btn-outline-warning'>
            <img alt='' src="https://img.icons8.com/fluency/45/000000/google-logo.png"/>
            sing in with google</button>
        </div>
    );
};

export default LogIn;