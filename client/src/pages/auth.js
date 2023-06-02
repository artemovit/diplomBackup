import React, { useContext, useState } from 'react'
import { ADMIN_ROUTE } from '../utils/consts'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { login } from '../http/userAPI'
import {Context} from "../index";

const Auth = () => {

  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signIn = async () => {
    try{
    let data
    data = await login(email, password);
    user.setUser(user)
    user.setIsAuth(true)
    navigate(ADMIN_ROUTE)
    }
    catch (e){
      alert(e.response.data.message )
    }
  }
  return (
    <div>
      <h1>Авторизация</h1>

      <div class="auth_container">
        <TextField autoFocus margin='dense' id="name" label="email" type="email"
        value={email} onChange={e => setEmail(e.target.value)}
        />
        <TextField autoFocus margin='dense' id="pass" label="Пароль" type="password"
        value={password} onChange={e => setPassword(e.target.value)}
        />
        <div class="afisha_item"><Button class="buy_button" onClick={signIn}>ВОЙТИ</Button></div>

      </div>



    </div>
  )
}

export default Auth
