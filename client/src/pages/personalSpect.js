import React, { useEffect, useState } from 'react'
import testPhoto1 from '../resources/photos/abonement.jpg'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive';
import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'
import { Carousel } from '../resources/Caroseul';
import {useParams} from 'react-router-dom'

import {getOneRepertuar} from '../http/dataAPI'
import { observer } from 'mobx-react';


import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const personalSpect = observer( () => {

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
    
    const Item = styled(Paper)(({ theme }) => ({
    
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '5px'
    }));

    const [spect, setSpect] = useState( {info: []})
    const {id} = useParams()
    useEffect( () => {
        getOneRepertuar(id).then(data => setSpect(data))
    }, [])

    return (
        <div>
            <MediaQuery minWidth={1280}>
                <div class="spect">
                    <img src={process.env.REACT_APP_API_URL + spect.mainPhoto} />
                    <div>
                        <h1>{spect.name}</h1>
                        <h2>{spect.author}</h2>

                        <h3>Режиссер:</h3>
                        <h4>{spect.director}</h4>

                        <h3>Пролжительность:</h3>
                        <p>{spect.time}</p>

                        <h3>Ближайшие спектакли: </h3>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
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
                    <div class="spect_pic"><img src={testPhoto1} /></div>
                    <div class="spect_pic"><img src={testPhoto2} /></div>
                    <div class="spect_pic"><img src={testPhoto1} /></div>
                    <div class="spect_pic"><img src={testPhoto2} /></div>
                    </Carousel>
                </div>
                <div class="spect_artist">
                    <h2>Действующие лица</h2>
                    <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>

                        <ItemArtist>
                            <a href='artists.001'>
                                <div class="product-item">
                                    <img src={testPhoto2} />
                                    <h3>Юрий Лазарев</h3>
                                    <p>Роль</p>
                                </div>
                            </a>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>
                    </Grid>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>
                
                    <div class = "photo_spect" style={{display: 'flex', justifyContent: 'center', margin: '30px', marginBottom: '0px'}}>
                    <img src={process.env.REACT_APP_API_URL + spect.mainPhoto}/>
                    </div>
                    <div class="spect" style={{margin: '40px', marginTop: '0px'}}>
                    <div>
                        <h1 style={{fontSize: '40px'}}>{spect.name}</h1>
                        <h2>{spect.author}</h2>

                        <h3>Пролжительность:</h3>
                        <p>{spect.time}</p>

                        <h3>Ближайшие спектакли: </h3>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                        </Grid>



                    </div>



                </div>
                <div class="spect_discrp" style={{margin: '30px'}}>
                    <h2 >Описание</h2>
                    {spect.discription}
                </div>
                <div class="spect_photo">
                    <h2>Фото с спектакля</h2>
                    <Carousel>
                        <ItemArtist>
                        <div class="spect_pic"><img src={testPhoto1} /></div>
                        </ItemArtist>
                        <ItemArtist>
                        <div class="spect_pic"><img src={testPhoto2} /></div>
                        </ItemArtist>
                    {/* <div class="spect_pic"><img src={testPhoto1} /></div>
                    <div class="spect_pic"><img src={testPhoto2} /></div>
                    <div class="spect_pic"><img src={testPhoto1} /></div>
                    <div class="spect_pic"><img src={testPhoto2} /></div> */}
                    </Carousel>
                </div>
                <div class="spect_artist">
                    <h2>Действующие лица</h2>
                    <Grid container sx={{ justifyContent: 'center'}}>

                        <ItemArtist>
                            <a href='artists.001'>
                                <div class="product-item">
                                    <img src={testPhoto2} />
                                    <h3>Юрий Лазарев</h3>
                                    <p>Роль</p>
                                </div>
                            </a>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>
                    </Grid>
                </div>
            </MediaQuery>
        </div>
    )
})

export default personalSpect
