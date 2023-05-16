import React, { useContext } from 'react'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import MediaQuery from 'react-responsive';
import { SPECTACLE_ROUTE } from '../utils/consts';




export default function () {
    const Item = styled(Paper)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '5px'
    }));

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
    const { data } = useContext(Context)
    const navigate = useNavigate()
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>Репертуар</h1>

                <Grid class="mouth_repertuar" container rowSpacing={1}>
                    <Item>Текущий репертуар</Item>
                    <Item>Детские спектакли</Item>
                </Grid>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }} >
                    {data.repertuar.map(repertuar =>
                        <ItemSpect key={repertuar.id} onClick={() => navigate(SPECTACLE_ROUTE + '/' + repertuar.id)}>
                            <div class="product-item">
                                <img src={repertuar.mainPhoto} />
                                <h3>{repertuar.name}</h3>
                                <span class="author">{repertuar.author}</span>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>

            {/* Мобильная версия */}

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>Репертуар</h1>

                <Grid class="mouth_repertuar" container rowSpacing={1}>
                    <Item style={{ fontSize: '15px' }}>Текущий репертуар</Item>
                    <Item style={{ fontSize: '15px' }}> Детские спектакли</Item>
                </Grid>

                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>
                {data.repertuar.map(repertuar =>
                        <ItemSpect key={repertuar.id} onClick={() => navigate(SPECTACLE_ROUTE + '/' + repertuar.id)}>
                            <div class="product-item">
                                <img src={repertuar.mainPhoto} />
                                <h3>{repertuar.name}</h3>
                                <span class="author">{repertuar.author}</span>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>
        </div>
    )
}
