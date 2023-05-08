import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import MediaQuery from 'react-responsive'

export default function contacts() {
  return (
    <div>
      <MediaQuery minWidth={1280}>
        <h1>Контакты</h1>
        <h2>Театр Комедии им. Н.П. Акимова находится по адресу: город Санкт-Петербург, Невский проспект, дом 56 191023</h2>
        <h2>Режим работы кассы: с 10:00 до 20:00</h2>

        <h1>Обратная связь с театром</h1>
        <div class="output">

          <TextField id="outlined-basic" label="Имя" variant="outlined" />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        </div>
        <div class="output">
          <TextField
            id="outlined-multiline-static"
            label="Текст сообщения"
            multiline
            rows={4}
            placeholder='Напишите о том, что хотите нам сообщить'

          />

        </div>
        <div class="output">
          <Button class="buy_button">Отправить сообщение</Button>
        </div>



        <h1>Как добраться </h1>
        <div class="output">
          <div style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Санкт‑Петербург</a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.335838%2C59.934241&mode=routes&rtext=59.933812%2C30.332447~59.934140%2C30.337858&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9805929~ymapsbm1%3A%2F%2Forg%3Foid%3D1047815977&utm_medium=mapframe&utm_source=maps&z=18.93"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Яндекс Карты</a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.335838%2C59.934241&mode=routes&rtext=59.933812%2C30.332447~59.934140%2C30.337858&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9805929~ymapsbm1%3A%2F%2Forg%3Foid%3D1047815977&z=18.93" width="560" height="400" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={1279}>
        <h1 style={{ margin: '6%', fontSize: '40px' }}>Контакты</h1>
        <h2 style={{ margin: '6%', fontSize: '25px' }}>Театр Комедии им. Н.П. Акимова находится по адресу: город Санкт-Петербург, Невский проспект, дом 56 191023</h2>
        <h2 style={{ margin: '6%', fontSize: '25px' }}>Режим работы кассы: с 10:00 до 20:00</h2>

        <h1 style={{ margin: '6%', fontSize: '40px' }}>Обратная связь с театром</h1>
        <div class="output">

          <TextField id="outlined-basic" label="Имя" variant="outlined" />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        </div>
        <div class="output">
          <TextField
            id="outlined-multiline-static"
            label="Текст сообщения"
            multiline
            rows={4}
            placeholder='Напишите о том, что хотите нам сообщить'

          />

        </div>
        <div class="output">
          <Button class="buy_button">Отправить сообщение</Button>
        </div>



        <h1 style={{ margin: '6%', fontSize: '40px' }}>Как добраться </h1>
        <div class="output">
          <div style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Санкт‑Петербург</a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.335838%2C59.934241&mode=routes&rtext=59.933812%2C30.332447~59.934140%2C30.337858&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9805929~ymapsbm1%3A%2F%2Forg%3Foid%3D1047815977&utm_medium=mapframe&utm_source=maps&z=18.93"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Яндекс Карты</a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.335838%2C59.934241&mode=routes&rtext=59.933812%2C30.332447~59.934140%2C30.337858&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9805929~ymapsbm1%3A%2F%2Forg%3Foid%3D1047815977&z=18.93" width="560" height="400" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe>
          </div>
        </div>
      </MediaQuery>
    </div>

  )
}
