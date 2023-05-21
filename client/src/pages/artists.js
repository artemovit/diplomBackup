import React, {useContext, useEffect} from 'react'
import { Context } from '../index'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

import { ARTIST_ROUTE } from '../utils/consts';

import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'
import MediaQuery from 'react-responsive';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react';
import {getActer, getDeservedActer, getNarodActer} from '../http/dataAPI'

const Artists = observer(() => {
    const Item = styled(Paper)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '5px'
    }));
    
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
    const { datas } = useContext(Context)
    
    useEffect( () => {
        getNarodActer().then(data => datas.setNarodArtist(data))
        getDeservedActer().then(data => datas.setDeservedArtist(data))
        getActer().then(data => datas.setArtist(data))
    },[])
    const navigate = useNavigate()
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>Артисты</h1>

                <h2>Народные артисты России</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>

                    {datas.narodArtist.map(narodArtis =>
                        <ItemArtist key={narodArtis.id} onClick={() => navigate(ARTIST_ROUTE + '/' + narodArtis.id)}>
                        <div class="product-item">
                            <img src={process.env.REACT_APP_API_URL + narodArtis.mainPhoto} />
                            <h3>{narodArtis.name + ' ' + narodArtis.surname}</h3>
                        </div>
                    </ItemArtist>
                        )}
                </Grid>

                <h2>Заслуженные артисты России</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                {datas.deservedArtist.map(deservArtis =>
                    <ItemArtist key={deservArtis.id} onClick={() => navigate(ARTIST_ROUTE + '/' + deservArtis.id)}>
                        
                        <div class="product-item">
                            <img src={process.env.REACT_APP_API_URL + deservArtis.mainPhoto} />
                            <h3>{deservArtis.name + ' ' + deservArtis.surname}</h3>
                        </div>
                    </ItemArtist>
                    )}
                </Grid>

                <h2>Артисты театра</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                    {datas.acters.map(artist =>
                    <ItemArtist key={artist.id} onClick={() => navigate(ARTIST_ROUTE + '/' + artist.id)}>
                        <div class="product-item">
                            <img src={process.env.REACT_APP_API_URL + artist.mainPhoto} />
                            <h3>{artist.name + ' ' + artist.surname}</h3>
                        </div>
                    </ItemArtist>
                    )}
                </Grid>

            </MediaQuery>

            {/* Мобильная верстка */}

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>Артисты</h1>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Народные артисты России</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Заслуженные артисты России</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Артисты театра</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Актеры других театров</Item>
                        </Grid>
                        

                    </Grid>
                </Box>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Народные артисты России</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0 px', border: 'none' }}>

                <ItemArtist>
                    <a href='artists.001'>
                        <div class="product-item">
                            <img  src={testPhoto2}/>
                            <h3>Юрий Лазарев</h3>
                            <p>Работает только он</p>
                        </div>
                        </a>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>
                </Grid>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Заслуженные артисты России</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0 px', border: 'none' }}>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>


                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>
                </Grid>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Артисты театра</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>


                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>
                </Grid>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Артисты других театров</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>

                    <ItemArtist>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Юрий Лазарев</h3>
                        </div>
                    </ItemArtist>
                </Grid>
            </MediaQuery>
        </div>
    )
})

export default Artists
