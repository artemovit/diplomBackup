import React, { useEffect, useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive';
import { Carousel } from '../resources/Caroseul';
import { useParams } from 'react-router-dom'
import { Context } from '../index'
import { Dialog } from '@mui/material'
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';


import { createOrder } from '../http/dataAPI'
import { getOneRepertuar } from '../http/dataAPI'
import Select from '@mui/material/Select';
import { observer } from 'mobx-react';
import { getPhoto } from '../http/dataAPI';
import { getSpectAfisha } from '../http/dataAPI';
import { getRoleBySpect } from '../http/dataAPI';
import { ARTIST_ROUTE } from '../utils/consts';
import moment from 'moment'
import 'moment/locale/ru'
import { useNavigate } from 'react-router-dom'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


import Paper from '@mui/material/Paper';


const personalSpect = observer(() => {

    const ItemAfisha = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '10px'
    }))

    const ItemArtist = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '37px'
    })
    )

    const handleChange = (event) => {
        setDate(event.target.value);
    };

    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')



    const handleClickRegistration = () => {
        setOpened(true);

    }

    const handleCloseRegistration = () => {
        setOpened(false)
    }

    const handleClose = () => {
        setOpened(false)
    };
    const [opened, setOpened] = React.useState(false);

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { datas } = useContext(Context)
    const [spect, setSpect] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        // загружаем данные
        Promise.all([getOneRepertuar(id), getSpectAfisha(id), getRoleBySpect(id), getPhoto(id)]).then(([spect, afisha, role, photo]) => {
            setSpect(spect);
            datas.setSpectAfisha(afisha);
            datas.setRoleBySpect(role);
            datas.setPhoto(photo)
            // установим состояние, что все данные загружены
            setLoading(false);
        })
    }, []);

    const registration = async () => {
        try {
            let data;
            data = await createOrder(spect.name, date, name, email)
            alert("Заявка успешно зарегистрирована!")
            setOpened(false)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        loading ? (<div>Loading...</div>) : (
            <div>
                <MediaQuery minWidth={1280}>
                    <div class="spect">
                        <img src={process.env.REACT_APP_API_URL + spect.mainPhoto} />
                        <div>
                            <h1>{spect.name}</h1>  <h2>{spect.author}</h2>
                            <h3>Режиссер:</h3> <h4>{spect.director}</h4>

                            <h3>Пролжительность:</h3> <p>{spect.time}</p>

                            <h3>Ближайшие спектакли: </h3>
                            <Grid container sx={{ justifyContent: 'center' }}>
                                {datas.spectAfisha.length > 0 ? datas.spectAfisha.map(spectAfisha =>


                                    <ItemAfisha>
                                        <div class="afisha_mouth" style={{ width: 'auto' }}>
                                            <div class="afisha_item"><span class="day_afisha">{moment(spectAfisha.day).format('DD')}</span>{moment(spectAfisha.day).format('MMMM')}</div>
                                            <div class="afisha_item">{moment(spectAfisha.day).format('LT')}</div>
                                            {/* <div class="afisha_item"><img src={Pushka} /></div> */}

                                        </div>

                                    </ItemAfisha>
                                ) :

                                    <div>Билетов нет</div>
                                }
                                

                            </Grid>
                            {datas.spectAfisha.length > 0 ?
                                    <div class="afisha_item"><Button class="buy_button" onClick={handleClickRegistration}>В избранное</Button></div>
                                    :
                                    <div>Следите за обновлением афиши!</div>
                                }
                        </div>
                    </div>
                    <div class="spect_discrp">
                        <h2 >Описание</h2>
                        {spect.discription}
                    </div>
                    <div class="spect_photo">
                        <h2>Фото с спектакля</h2>
                        <Carousel>
                            {datas.photo.map(photo =>
                                <div class="spect_pic">
                                    <img src={process.env.REACT_APP_API_URL + photo.path} />
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <div class="spect_artist">
                        <h2>Действующие лица</h2>
                        <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                            {datas.roleBySpect.map(roleBySpect =>
                                <ItemArtist key={roleBySpect.id} onClick={() => navigate(ARTIST_ROUTE + '/' + roleBySpect.acter.id)}>
                                    <div class="product-item">
                                        <img src={process.env.REACT_APP_API_URL + roleBySpect.acter.mainPhoto} />
                                        <h3>{roleBySpect.acter.name + ' ' + roleBySpect.acter.surname}</h3>
                                        <p>{roleBySpect.title}</p>
                                    </div>
                                </ItemArtist>
                            )}

                        </Grid>
                    </div>
                </MediaQuery>

                <Dialog open={opened} onClose={handleCloseRegistration} aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Заказ билетов</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Введите данные для заказа билетов
                        </DialogContentText>
                        <TextField margin='dense' id="name" InputProps={{
                            readOnly: true,
                        }} defaultValue={spect.name} fullWidth />
                        <FormControl fullWidth>
                            <InputLabel>Выбор даты</InputLabel>
                            <Select
                                autoFocus
                                value={date}
                                onChange={handleChange}
                                autoWidth
                            >
                                {datas.spectAfisha.map(spectAfisha =>
                                    <MenuItem value={spectAfisha.day} key={spectAfisha.id}>{moment(spectAfisha.day).format('LLL')}</MenuItem>
                                )}

                            </Select>
                        </FormControl>

                        <TextField margin='dense'
                            id="surname"
                            label="ФИО"
                            onChange={e => setName(e.target.value)} fullWidth
                        />
                        <TextField margin='dense' id="phone" label="Адрес электронной почты" onChange={e => setEmail(e.target.value)} type="email" fullWidth />

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose}>Выйти</Button>
                        <Button onClick={registration}>Зарегистрировать</Button>
                    </DialogActions>
                </Dialog>

                <MediaQuery maxWidth={1279}>

                    <div class="photo_spect" style={{ display: 'flex', justifyContent: 'center', margin: '30px', marginBottom: '0px' }}>
                        <img src={process.env.REACT_APP_API_URL + spect.mainPhoto} />
                    </div>
                    <div class="spect" style={{ margin: '40px', marginTop: '0px' }}>
                        <div>
                            <h1 style={{ fontSize: '35px' }}>{spect.name}</h1>
                            <h2>{spect.author}</h2>

                            <h3>Пролжительность:</h3>
                            <p>{spect.time}</p>

                            <h3>Ближайшие спектакли: </h3>
                            <Grid container sx={{ justifyContent: 'center' }}>
                                {datas.spectAfisha.length > 0 ? datas.spectAfisha.map(spectAfisha =>


                                    <ItemAfisha>
                                        <div class="afisha_mouth" style={{ width: 'auto' }}>
                                            <div class="afisha_item"><span class="day_afisha">{moment(spectAfisha.day).format('DD')}</span>{moment(spectAfisha.day).format('MMMM')}</div>
                                            <div class="afisha_item">{moment(spectAfisha.day).format('LT')}</div>
                                            {/* <div class="afisha_item"><img src={Pushka} /></div> */}

                                        </div>

                                    </ItemAfisha>
                                ) :

                                    <div>Билетов нет</div>
                                }
                                {datas.spectAfisha.length > 0 ?
                                    <div class="afisha_item"><Button class="buy_button" onClick={handleClickRegistration}>В избранное</Button></div>
                                    :
                                    <div>Следите за обновлением афиши!</div>
                                }
                            </Grid>
                        </div>
                    </div>
                    <div class="spect_discrp" style={{ margin: '30px' }}>
                        <h2 >Описание</h2>
                        {spect.discription}
                    </div>
                    <div class="spect_photo">
                        <h2>Фото с спектакля</h2>
                        <Carousel>
                            {datas.photo.map(photo =>
                                <div class="spect_pic">
                                    <img src={process.env.REACT_APP_API_URL + photo.path} />
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <div class="spect_artist">
                        <h2>Действующие лица</h2>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            {datas.roleBySpect.map(roleBySpect =>
                                <ItemArtist key={roleBySpect.id} onClick={() => navigate(ARTIST_ROUTE + '/' + roleBySpect.aid)}>
                                    <div class="product-item">
                                        <img src={process.env.REACT_APP_API_URL + roleBySpect.acter.mainPhoto} />
                                        <h3>{roleBySpect.acter.name + ' ' + roleBySpect.acter.surname}</h3>
                                        <p>{roleBySpect.title}</p>
                                    </div>
                                </ItemArtist>
                            )}
                        </Grid>
                    </div>
                </MediaQuery>
            </div>
        ))
})

export default personalSpect
