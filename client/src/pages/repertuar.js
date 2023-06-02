import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import MediaQuery from 'react-responsive';
import { SPECTACLE_ROUTE } from '../utils/consts';

import {getRepertuar} from '../http/dataAPI'
import { observer } from 'mobx-react';

const Repertuar = observer( () => {

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
    const { datas } = useContext(Context)
    
    useEffect( () => {
        getRepertuar().then(data => datas.setRepertuar(data))
    },[])
    
    const navigate = useNavigate()
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>Репертуар</h1>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }} >
                    {datas.repertuar.map(repertuar =>
                        <ItemSpect key={repertuar.id} onClick={() => navigate(SPECTACLE_ROUTE + '/' + repertuar.id)}>
                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + repertuar.mainPhoto} />
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
            
                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>
                {datas.repertuar .map(repertuar =>
                        <ItemSpect key={repertuar.id} onClick={() => navigate(SPECTACLE_ROUTE + '/' + repertuar.id)}>
                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + repertuar.mainPhoto} />
                                <h3>{repertuar.name}</h3>
                                <span class="author">{repertuar.author}</span>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>
        </div>
    )
}) 
export default Repertuar
