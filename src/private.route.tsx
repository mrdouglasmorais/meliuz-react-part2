import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

interface IToken{
  iat: number;
  exp: number;  
}

const PrivateRoute: any = ({ component: Component, path: Path, ...rest }: any) => {
  const isLogged: string | null = localStorage.getItem('@MeliuzSession');
  const isSessionActive = () => {
    if(isLogged === null) {
      return false;
    } else {
      const storageData = JSON.parse(isLogged)
      const { token } = storageData;
      const tokenPayLoad: IToken = jwt_decode(token);
      const tokenExp = tokenPayLoad.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > tokenExp ? false : true;
    }
  } 
  return (
    <Route 
      {...rest}
      render={
        props => (
          isSessionActive() ? <Component {...props}/> : <Redirect to="/" />
        )
      }
    
    />
  );
}

export default PrivateRoute;