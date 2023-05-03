import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Pushka from '../resources/images/pushkin.png'

import Paper from '@mui/material/Paper';
import testPhoto from '../resources/photos/5359.BigImg.jpg'
import testAbonementPhoto from '../resources/photos/abonement.jpg'
import { Button } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#EE3224',
    display: 'flex',
    justifyContent: 'center'
}));


export default function index() {

    return (
        <div>
            <h1>Афиша</h1>
            <h2>Ближайшие спектакли</h2>


            <div class="product-wrapper">
                <div class="product-item">
                    <img src={testPhoto}></img>
                    <h3>Бешеные деньги</h3>
                    <span class="price">28 ноября</span>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="product-item">
                    <img src={testPhoto}></img>
                    <h3>Краткий курс счастливой жизни</h3>
                    <span class="price">29 ноября</span>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="product-item">
                    <img src={testPhoto}></img>
                    <h3>Синичкin. Театральное безумство</h3>
                    <span class="price">30 ноября</span>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="product-item">
                    <img src={testPhoto}></img>
                    <h3>Всё о Еве</h3>
                    <span class="price">30 ноября</span>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
            </div>

            <h2>Афиша на месяц</h2>

            <Grid class="mouth_repertuar" container rowSpacing={1}>
                <Item color='black'>Репертуар</Item>
                <Item>Декабрь</Item>
                <Item>Январь</Item>
                <Item>Февраль</Item>
            </Grid>

            <div class="afisha_container">
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br />Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br />Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br />Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br />Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br />Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br/>Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>
                <div class="afisha_mouth">
                    <div class="afisha_item"><span>28</span>ноября</div>
                    <div class="afisha_item">Бешенные деньги<br />Александр Островский</div>
                    <div class="afisha_item">19:00</div>
                    <div class="afisha_item"><img src={Pushka} /></div>
                    <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
                </div>


            </div>

            <h2>Абонементы</h2>
            <div class = "abonement">
            <div class="abonement_item">
            <img src={testAbonementPhoto}/>
                    <h3>PRO театр</h3>
                    <span class = "abonement_date">“Краткий курс счастливой жизни” - 20 января 2023 г. <br/>
                        “Синичкin. Театральное безумство” - 1 февраля 2023 г. <br/>
                        “Первая среди звёзд” - 15 марта 2023 г.
                        </span>
                        <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
            </div>
            <div class="abonement_item">
                <img src={testAbonementPhoto}/>
                    <h3>PRO театр</h3>
                    <span class = "abonement_date">“Краткий курс счастливой жизни” - 20 января 2023 г. <br/>
                        “Синичкin. Театральное безумство” - 1 февраля 2023 г. <br/>
                        “Первая среди звёзд” - 15 марта 2023 г.
                        </span>
                        <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
            </div>
            <div class="abonement_item">
            <img src={testAbonementPhoto}/>
                    <h3>PRO театр</h3>
                    <span class = "abonement_date">“Краткий курс счастливой жизни” - 20 января 2023 г. <br/>
                        “Синичкin. Театральное безумство” - 1 февраля 2023 г. <br/>
                        “Первая среди звёзд” - 15 марта 2023 г.
                        </span>
                        <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
            </div>
            <div class="abonement_item">
            <img src={testAbonementPhoto}/>
                    <h3>PRO театр</h3>
                    <span class = "abonement_date">“Краткий курс счастливой жизни” - 20 января 2023 г. <br/>
                        “Синичкin. Театральное безумство” - 1 февраля 2023 г. <br/>
                        “Первая среди звёзд” - 15 марта 2023 г.
                        </span>
                        <div class="afisha_item"><Button variant="contained">НЕ купить билеты</Button></div>
            </div>
        </div>
        </div>
    );
}