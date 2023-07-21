import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id } = useSelector(state => state.user);

  // Check if email is available and truthy to determine if the user is authenticated
  const isAuth = !!email;

  return {
    isAuth,
    email,
    token,
    id,
  };
}
// import { useSelector, useDispatch } from "react-redux";
// import { setUser, removeUser } from "../redux/user/userSlice";

// export function useAuth() {
//   const { email, token, id , name} = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const isAuthenticated = !!email && !!token && !!id;

//   const login = ({ email, token, id , name}) => {
//     // Сохраняем данные пользователя в локальное хранилище
//     localStorage.setItem("user", JSON.stringify({ email, token, id , name}));
//     dispatch(setUser({ email, token, id , name}));
//   };

//   const logout = () => {
//     // Удаляем данные пользователя из локального хранилища
//     localStorage.removeItem("user");
//     dispatch(removeUser());
//   };

//   return {
//     isAuth: isAuthenticated,
//     email,
//     token,
//     id,
//     name,
//     login,
//     logout,
//   };
// }