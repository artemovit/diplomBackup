import React, { useEffect, useState } from 'react'

import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MediaQuery from 'react-responsive';

import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'
import testPhoto1 from '../resources/photos/5359.BigImg.jpg'
import testPhoto3 from '../resources/photos/abonement.jpg'
import { observer } from 'mobx-react';
import { getOneActer } from '../http/dataAPI';
import {useParams} from 'react-router-dom'



const personalActers = observer(() => {

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

    const [acter, setActer] = useState({info :[]})
    const {id} = useParams()
    useEffect (() => {
        getOneActer(id).then(data => setActer(data))
    }, [])

    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>{acter.name + ' ' + acter.surname}</h1>
                <div class="bio_acter">
                    <div>
                        {acter.discription}
                    </div>
                    <div class="bio_acter_photo">
                        <img src={process.env.REACT_APP_API_URL + acter.mainPhoto} />
                    </div>



                </div>

                <h2 style={{ textAlign: 'center' }}>Роли в спектаклях</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                </Grid>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>{acter.name + ' ' + acter.surname}</h1>
                <div class="bio_acter_photo" style={{ margin: '20px' }}>
                    <img src={process.env.REACT_APP_API_URL + acter.mainPhoto} style={{ marginBottom: '0px' }} />
                </div>
                <div class="bio_acter" style={{ margin: '30px' }}>

                    <div>
                        {acter.discription}
                    </div>




                </div>

                <h2 style={{ textAlign: 'center' }}>Роли в спектаклях</h2>

                <Grid container sx={{ justifyContent: 'center', border: 'none' }}>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Роль</span>
                        </div>
                    </ItemSpect>

                </Grid>
            </MediaQuery>

        </div>
    )
})

export default personalActers
