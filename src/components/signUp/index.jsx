import React, {useState} from 'react';
import Form from '../form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wrong, setWrong] = useState(false)

  const handleRegister = (email, password, name) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <Form wrong={wrong} title="Register" handleClick={handleRegister} />;
};

export { SignUp };