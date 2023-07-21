import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { Redirect } from 'react-router-dom/dist';
import { useAuth } from '../../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/user/userSlice';
import NavUser from '../../components/forUsers/nav_for_user';
import Footer from '../../components/footer';
import Categories from '../../components/category';

const UserPersonalPage = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch()
     const {isAuth, email, name} = useAuth();
console.log(isAuth, email)


const removUser = () => {
    dispatch(removeUser())
}

    return isAuth? (
        <div>
            <NavUser email={email} remove={removUser} name={name}/>
            <Categories/>
            <Footer/>
        </div>
    ) : (
        navigate('/')
    )
};

export default UserPersonalPage;