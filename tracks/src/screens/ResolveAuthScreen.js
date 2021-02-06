import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen =( ) =>{
  const {tryingLocalSignin} = useContext(AuthContext);
  
  useEffect(()=>{
    tryingLocalSignin();
  }, []);
  
    return null;
};

export default ResolveAuthScreen;