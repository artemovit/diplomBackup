import React, { useContext, useState } from 'react'
import { Context } from '../index'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import MediaQuery from 'react-responsive'
import { registrDiscription } from '../http/dataAPI'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';






export default function () {
  const ItemSpect = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#EE3224',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '37px'
})
)


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [discription, setDiscription] = useState('')

  const registration = async () => {
    try {
      let data;
      data = await registrDiscription(name, email, discription)
      alert("Ваше обращение принято! Администраторы свяжутся в ближайшее время")
    }
    catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div>
      <MediaQuery minWidth={1280}>
        <h1>Контакты</h1>

        <h2>Театр Комедии им. Н.П. Акимова находится по адресу: </h2>
        <div class="navAdress">

          <h2 style={{ color: "#EE3224" }}>город Санкт-Петербург, Невский проспект, дом 56 191023</h2>
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
          <div class="cassa" style={{ textAlign: 'center' }}>
            <h2>Режим работы кассы: <br />с 10:00 до 20:00</h2>
            <h2>Предварительная продажа билетов до 18:00</h2>
            <h2>С 18:00 до 19:00
              продажа билетов только
              на сегодняшний спектакль</h2>
          </div>
        </div>
            <h2>Обратная связь с театром</h2>
            <div class="output">

              <TextField value={name} onChange={e => setName(e.target.value)} id="outlined-basic" label="Имя" variant="outlined" />
              <TextField value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="E-mail" variant="outlined" />
            </div>
            <div class="output">
              <TextField
                value={discription}
                onChange={e => setDiscription(e.target.value)}
                id="outlined-multiline-static"
                label="Текст сообщения"
                multiline
                rows={4}
                placeholder='Напишите о том, что хотите нам сообщить'

              />

            </div>
            <div class="output">
              <Button onClick={registration} class="buy_button">Отправить сообщение</Button>
            </div>
            <h2>Администрация театра</h2>
            <Grid container sx={{justifyContent: 'center'}} >
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Директор театра 
                                  <br/>Фрадин Алексей Евгеньевич</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Художественный руководитель театра 
                                  <br/>Казакова Татьяна Сергеевна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Заместитель директора по общим вопросам 
                                  <br/>Богданова Евгения Александровна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Заместитель директора по работе со зрителями 
                                  <br/>Селуков Алексей Евгеньевич</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Заведующий художественно-постановочной частью 
                                  <br/>Мелешкин Анатолий Владимирович</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Начальник отдела по развитию и связям с общественностью
                                  <br/>Гриб Анастасия Сергеевна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Главный бухгалтер
                                  <br/>Мусиенко Анастасия Викторовна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Администраторы </h3>
                                <span class="author">8 (812) 314-26-10</span>
                            </div>
                        </ItemSpect>
                </Grid>
      </MediaQuery>

      <MediaQuery maxWidth={1279}>
        <h1 style={{ margin: '6%', fontSize: '40px' }}>Контакты</h1>
        <h2 style={{ margin: '6%', fontSize: '25px' }}>Театр Комедии им. Н.П. Акимова находится по адресу: город Санкт-Петербург, Невский проспект, дом 56 191023</h2>
        <h2 style={{ margin: '6%', fontSize: '25px' }}>Режим работы кассы: с 10:00 до 20:00</h2>

        <h1 style={{ margin: '6%', fontSize: '40px' }}>Обратная связь с театром</h1>
        <div class="output">

          <TextField value={name} id="outlined-basic" label="Имя" variant="outlined" />
          <TextField value={email} id="outlined-basic" label="E-mail" variant="outlined" />
        </div>
        <div class="output">
          <TextField
            value={discription}
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
        <h2>Администрация театра</h2>
            <Grid container sx={{justifyContent: 'center'}} >
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Директор театра 
                                  <br/>Фрадин Алексей Евгеньевич</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Художественный руководитель театра 
                                  <br/>Казакова Татьяна Сергеевна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Заместитель директора по общим вопросам 
                                  <br/>Богданова Евгения Александровна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Заместитель директора по работе со зрителями 
                                  <br/>Селуков Алексей Евгеньевич</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Заведующий художественно-постановочной частью 
                                  <br/>Мелешкин Анатолий Владимирович</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Начальник отдела по развитию и связям с общественностью
                                  <br/>Гриб Анастасия Сергеевна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Главный бухгалтер
                                  <br/>Мусиенко Анастасия Викторовна</h3>
                                <span class="author">8 (812) 314-25-01</span>
                            </div>
                        </ItemSpect>
                        <ItemSpect>
                            <div class="product-item">
                                <h3>Администраторы </h3>
                                <span class="author">8 (812) 314-26-10</span>
                            </div>
                        </ItemSpect>
                </Grid>
      </MediaQuery>
    </div>

  )
}
