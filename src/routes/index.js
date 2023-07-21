import {Navigate, Route, Routes} from 'react-router-dom'
import React, { useEffect } from 'react';
import { useAuth } from '../hooks/use-auth';
import Home from '../pages/home';
import Category from '../pages/category';
import Contact from '../pages/contact';
import Collections from '../pages/collections';
import SignUp from '../pages/signUp';
import SignIn from '../pages/signin';
import UserPersonalPage from '../pages/userPage';
import RegisterPage from '../pages/signUp';

const AppRoutes = () => {

    const { isAuth, login } = useAuth();

    useEffect(() => {
      // Восстанавливаем состояние Redux из локального хранилища при инициализации приложения
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        login(JSON.parse(storedUser));
      }
    }, [login]);



    return (
        <div>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='category' element={<Category/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='collections' element={<Collections/>} />
                <Route path='registerpage' element={<RegisterPage/>} />
                <Route path='signin' element={<SignIn/>} />
                 <Route
        path="/userpage"
        element={isAuth ? <UserPersonalPage /> : <Navigate to="/" />}
      />

                
            </Routes>
        </div>
    );
};

export default AppRoutes;