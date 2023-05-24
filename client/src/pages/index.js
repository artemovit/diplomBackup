import React, { useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Pushka from '../resources/images/pushkin.png'
import { Context } from '../index'

import Paper from '@mui/material/Paper';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dialog } from '@mui/material'
import MediaQuery from 'react-responsive';
import GradeIcon from '@mui/icons-material/Grade';
import { observer } from 'mobx-react';
import { getAficha, getFourthAfisha, getAbonement } from '../http/dataAPI';
import { SPECTACLE_ROUTE } from '../utils/consts';
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import 'moment/locale/ru'

const index = observer(() => {

    const ItemSpect = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#EE3224',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '18px'
    })
    );

    const ItemAfisha = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '10px'
    }))
    const handleCloseRegistration = () => {
        setOpened(false)
    }

    const navigate = useNavigate()

    const { datas } = useContext(Context)

    const handleClickRegistration = () => {
        setOpened(true);
    }

    const handleClose = () => {
        setOpened(false)

    };
    const [opened, setOpened] = React.useState(false);

    useEffect(() => {
        getAficha().then(data => datas.setAfisha(data))
        getFourthAfisha().then(data => datas.setSelectedAfisha(data))
        getAbonement().then(data => datas.setAbonement(data))
    }, [])

    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1 >Афиша</h1>
                <h2>Ближайшие спектакли</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none', marginTop: '3px' }}>
                    {datas.selectedAfisha.map(selectedAfisha =>
                        <ItemSpect key={selectedAfisha.id}>
                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + selectedAfisha.mainPhoto} onClick={() => navigate(SPECTACLE_ROUTE + '/' + selectedAfisha.rid)}></img>
                                <h3 onClick={() => navigate(SPECTACLE_ROUTE + '/' + selectedAfisha.rid)}>{selectedAfisha.name}</h3>
                                <span class="price" onClick={() => navigate(SPECTACLE_ROUTE + '/' + selectedAfisha.rid)}>{moment(selectedAfisha.day).format('DD MMMM')}</span>
                                <div class="afisha_item"><Button class="buy_button" onClick={handleClickRegistration}>В избранное</Button></div>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>

                <h2>Афиша на месяц</h2>
                <Grid container sx={{ justifyContent: 'center', margin: '0 px', border: 'none', width: 'none' }}>
                    {datas.afisha.map(afisha =>
                        <ItemAfisha key={afisha.id}>
                            <div class="afisha_mouth">
                                <div class="afisha_item" onClick={() => navigate(SPECTACLE_ROUTE + '/' + afisha.rid)}><span class="day_afisha">{moment(afisha.day).format('DD')}</span>{moment(afisha.day).format('MMMM')}</div>
                                <div class="afisha_item" onClick={() => navigate(SPECTACLE_ROUTE + '/' + afisha.rid)}>
                                    {afisha.name}<br />{afisha.author}</div>
                                <div class="afisha_item" onClick={() => navigate(SPECTACLE_ROUTE + '/' + afisha.rid)}> {moment(afisha.day).format('LT')} </div>
                                <div class="afisha_item" onClick={() => navigate(SPECTACLE_ROUTE + '/' + afisha.rid)}><img src={Pushka} /></div>
                                <div class="afisha_item"><Button class="buy_button" onClick={handleClickRegistration}>В избранное</Button></div>
                            </div>
                        </ItemAfisha>
                    )}
                </Grid>

                <h2>Абонементы</h2>
                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                    {datas.abonement.map(abonement =>
                        <ItemSpect key={abonement.id}>
                            <div class="abonement_item">
                                <img src={process.env.REACT_APP_API_URL + abonement.mainPhoto} />
                                <h3>{abonement.name}</h3>
                                <span class="abonement_date">{abonement.discription}</span>
                                <div class="afisha_item"><Button class="buy_button" onClick={handleClickRegistration}>В избранное</Button></div>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>

            <Dialog open={opened} onClose={handleCloseRegistration} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Заказ билетов</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные для заказа билетов
                    </DialogContentText>
                    <TextField autoFocus margin='dense' id="name" label="Название спектакля" fullWidth />
                    <p>Дата спектакля</p>
                    <TextField margin='dense' id="birthday" type="date" fullWidth />
                    <TextField margin='dense' id="surname" label="ФИО" fullWidth />
                    <TextField margin='dense' id="phone" label="Телефон" type="phone" fullWidth />
                    <TextField margin='dense' id="phone" label="Адрес электронной почты" type="email" fullWidth />
                    
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={handleClose}>Зарегистрировать</Button>
                </DialogActions>
            </Dialog>

            {/* Мобильная верстка */}

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>Афиша</h1>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Афиша на месяц</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0 px', border: 'none', width: 'none' }}>

                    {datas.afisha.map(afisha =>

                        <ItemAfisha key={afisha.id} onClick={() => navigate(SPECTACLE_ROUTE + '/' + afisha.rid)}>

                            <div class="afisha_mouth" style={{ width: '100%' }}>
                                <div class="afisha_item" style={{ margin: '5px', padding: '0px', fontSize: '15px' }}><span class="day_afisha" style={{ fontSize: '30px' }}>{moment(afisha.day).format('DD')}</span>{moment(afisha.day).format('MMMM')}</div>
                                <div class="afisha_item" style={{ margin: '5px', padding: '0px', fontSize: '15px' }}>
                                    {afisha.name}<br />{afisha.author}</div>
                                <div class="afisha_item" style={{ margin: '5px', padding: '0px', fontSize: '15px' }}> {moment(afisha.day).format('LT')} </div>
                                <div class="afisha_item" style={{ margin: '5px', padding: '0px', fontSize: '15px' }}><img src={Pushka} /></div>
                                <div class="afisha_item" style={{ margin: '5px', padding: '0px', fontSize: '15px' }}><Button class="buy_button"><GradeIcon /></Button></div>
                            </div>

                        </ItemAfisha>
                    )}
                </Grid>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Абонементы</h2>

                <Grid container sx={{ justifyContent: 'center', border: 'none' }}>
                    {datas.abonement.map(abonement =>

                        <ItemSpect key={abonement.id}>
                            <div class="abonement_item">
                                <img src={process.env.REACT_APP_API_URL + abonement.mainPhoto} />
                                <h3>{abonement.name}</h3>
                                <span class="abonement_date">{abonement.discription}</span>
                                <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>

        </div >
    );
})

export default index