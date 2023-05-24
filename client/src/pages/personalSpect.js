import React, { useEffect, useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive';
import { Carousel } from '../resources/Caroseul';
import { useParams } from 'react-router-dom'
import { Context } from '../index'

import { getOneRepertuar } from '../http/dataAPI'
import { observer } from 'mobx-react';
import { getPhoto } from '../http/dataAPI';
import { getSpectAfisha } from '../http/dataAPI';
import { getRoleBySpect } from '../http/dataAPI';
import { ARTIST_ROUTE } from '../utils/consts';
import moment from 'moment'
import 'moment/locale/ru'
import { useNavigate } from 'react-router-dom'


import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


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

    const navigate = useNavigate()
    const { datas } = useContext(Context)
    const [spect, setSpect] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        getOneRepertuar(id).then(data => setSpect(data))
        getSpectAfisha(id).then(data => datas.setSpectAfisha(data))
        getPhoto(id).then(data => datas.setPhoto(data))
        getRoleBySpect(id).then(data => datas.setRoleBySpect(data))
    }, [])

    return (
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
                            {datas.spectAfisha.map(spectAfisha =>
                                <ItemAfisha>
                                    <div class="afisha_mouth" style={{ width: 'auto' }}>
                                        <div class="afisha_item"><span class="day_afisha">{moment(spectAfisha.day).format('DD')}</span>{moment(spectAfisha.day).format('MMMM')}</div>
                                        <div class="afisha_item">{moment(spectAfisha.day).format('LT')}</div>
                                        {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                        <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                    </div>
                                </ItemAfisha>
                            )}
                        </Grid>
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
                            <ItemArtist key={roleBySpect.id} onClick={() => navigate(ARTIST_ROUTE + '/' + roleBySpect.aid)}>
                                <div class="product-item">
                                    <img src={process.env.REACT_APP_API_URL + roleBySpect.mainPhoto} />
                                    <h3>{roleBySpect.name + ' ' + roleBySpect.surname}</h3>
                                    <p>{roleBySpect.title}</p>
                                </div>
                            </ItemArtist>
                        )}

                    </Grid>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>

                <div class="photo_spect" style={{ display: 'flex', justifyContent: 'center', margin: '30px', marginBottom: '0px' }}>
                    <img src={process.env.REACT_APP_API_URL + spect.mainPhoto} />
                </div>
                <div class="spect" style={{ margin: '40px', marginTop: '0px' }}>
                    <div>
                        <h1 style={{ fontSize: '40px' }}>{spect.name}</h1>
                        <h2>{spect.author}</h2>

                        <h3>Пролжительность:</h3>
                        <p>{spect.time}</p>

                        <h3>Ближайшие спектакли: </h3>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            {datas.spectAfisha.map(spectAfisha =>
                                <ItemAfisha>
                                    <div class="afisha_mouth" style={{ width: 'auto' }}>
                                        <div class="afisha_item"><span class="day_afisha">{moment(spectAfisha.day).format('DD')}</span>{moment(spectAfisha.day).format('MMMM')}</div>
                                        <div class="afisha_item">{moment(spectAfisha.day).format('LT')}</div>
                                        {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                        <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                    </div>
                                </ItemAfisha>
                            )}
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
                                    <img src={process.env.REACT_APP_API_URL + roleBySpect.mainPhoto} />
                                    <h3>{roleBySpect.name + ' ' + roleBySpect.surname}</h3>
                                    <p>{roleBySpect.title}</p>
                                </div>
                            </ItemArtist>
                        )}
                    </Grid>
                </div>
            </MediaQuery>
        </div>
    )
})

export default personalSpect
