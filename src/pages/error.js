import React from 'react'
import Home from './index'
import {Button} from '@mui/material'

export default function error() {
  return (
    <div>
      <div class="error">
        <h1>Ошибка!</h1>
        </div>
        <div class="error">
        <h2>Наверно, вы здесь по ошибке</h2>
        </div>
        <div class="error">
        <Button href="/" class="header_item">Перейти на главную</Button>
        </div>
    
       
    </div>
  )
}
