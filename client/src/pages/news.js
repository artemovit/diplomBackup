import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import MediaQuery from 'react-responsive';
import { NEWS_ROUTE } from '../utils/consts';

import { getNews, getRepertuar } from '../http/dataAPI'
import { observer } from 'mobx-react';

const News = observer(() => {

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
    const { datas } = useContext(Context)

    useEffect(() => {
        getNews().then(data => datas.setNews(data))
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>Новости</h1>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }} >
                    {datas.news.map(news =>
                        <ItemSpect key={news.id} onClick={() => navigate(NEWS_ROUTE + '/' + news.id)}>

                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + news.mainPhoto} />
                                <h3 style={{fontSize: '15px'}}>{news.title}</h3>
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
                    {datas.news.map(news =>
                        <ItemSpect key={news.id} onClick={() => navigate(NEWS_ROUTE + '/' + news.id)}>

                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + news.mainPhoto} />
                                <h3>{news.title}</h3>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>
        </div>
    )
})
export default News
