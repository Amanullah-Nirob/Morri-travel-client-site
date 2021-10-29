import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=UseAuth()
   

   if(isLoading){
       return <div class="spinner-border text-info" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
   }
    return (
        <Route
      {...rest}
      render={({ location }) =>
      user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;