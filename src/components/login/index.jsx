import React, { useState } from 'react';
import Form from '../form';
import LoginError from '../error';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => { // Определение компонента SignIn
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wrong, setWrong] = useState(false)

  const handleLogin = (email, password, name) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        navigate('/userpage');
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: name, // Имя пользователя передано в функцию setUser
          })
        );
      })
      .catch((error) => {
        setWrong(true)
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });
  };

  return  <Form wrong={wrong} title="Sign in" handleClick={handleLogin} />;
};

export default Login; // Экспорт компонента SignIn