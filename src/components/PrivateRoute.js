import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(()=> {
    if (!localStorage.getItem('token')) {
        navigate('/login');
      }
  }, [])
  return children;
};

export default PrivateRoute;



