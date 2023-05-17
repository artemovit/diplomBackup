import React from 'react'
import {ADMIN_ROUTE} from '../utils/consts'
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

export default function auth() {
  return (
    <div>
      <h1>Авторизация</h1>

      <div class="auth_container">
      <TextField autoFocus margin='dense' id="name" label="Телефон" type="phone"  />
      <TextField autoFocus margin='dense' id="pass" label="Пароль" type="password" />
      <div class="afisha_item"><Button class="buy_button" href={ADMIN_ROUTE}>ВОЙТИ</Button></div>
      
      </div>
      

      
    </div>
  )
}
