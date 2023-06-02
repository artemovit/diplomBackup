import React, { useContext } from 'react'
import {Routes, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes'
import { Context } from '../index';
import { ADMIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom'

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    const navigate = useNavigate()
  return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>
        )}
         {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path='*' element={<navigate to={ADMIN_ROUTE}/>} />

    </Routes>
      
  );
};

export default AppRouter;
