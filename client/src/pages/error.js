import React from 'react'
import Home from './index'
import {Button} from '@mui/material'
import MediaQuery from 'react-responsive'

export default function error() {
  return (
    <div>
      <MediaQuery minWidth={1280}>
      <div class="error">
        <h1>Ошибка!</h1>
        </div>
        <div class="error">
        <h2>Наверно, вы здесь по ошибке</h2>
        </div>
        <div class="error">
        <Button href="/" class="header_item">Перейти на главную</Button>
        </div>
    </MediaQuery>
    <MediaQuery maxWidth={1279}>
    <div class="error">
        <h1 style={{ margin: '6%', fontSize: '40px' }}>Ошибка!</h1>
        </div>
        <div class="error">
        <h2 style={{ margin: '6%', fontSize: '25px' }}>Наверно, вы здесь по ошибке</h2>
        </div>
        <div class="error">
        <Button href="/" class="header_item">Перейти на главную</Button>
        </div>
    </MediaQuery>
       
    </div>
  )
}
