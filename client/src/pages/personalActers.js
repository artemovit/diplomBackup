import React, { useEffect, useState, useContext } from 'react'

import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MediaQuery from 'react-responsive';
import { Context } from '../index'

import { observer } from 'mobx-react';
import { getOneActer } from '../http/dataAPI';
import { getRoleByArtist } from '../http/dataAPI';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { SPECTACLE_ROUTE } from '../utils/consts';

const personalActers = observer(() => {


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

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { datas } = useContext(Context)
    const [acter, setActer] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        // загружаем данные
        Promise.all([getRoleByArtist(id), getOneActer(id)]).then(([roles, actorInfo]) => {
            datas.setRoleBySpect(roles);
            setActer(actorInfo);
            // установим состояние, что все данные загружены
            setLoading(false);
        })
    }, []);

    return (
        loading ? (<div>Loading...</div>) : (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>{acter.name + ' ' + acter.surname}</h1>
                <div class="bio_acter">
                        {acter.discription}
                    <div class="bio_acter_photo">
                        <img src={process.env.REACT_APP_API_URL + acter.mainPhoto} />
                    </div>
                </div>

                <h2 style={{ textAlign: 'center' }}>Роли в спектаклях</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                    {datas.roleBySpect.map(roleBySpect =>
                        <ItemSpect onClick={() => navigate(SPECTACLE_ROUTE + '/' + roleBySpect.repertuar.id)}>
                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + roleBySpect.repertuar.mainPhoto} />
                                <h3 style={{fontWeight: 'bold'}}>{roleBySpect.repertuar.name}</h3>
                                <span class="author">{roleBySpect.title}</span>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>{acter.name + ' ' + acter.surname}</h1>
                <div class="bio_acter_photo" style={{ margin: '20px' }}>
                    <img src={process.env.REACT_APP_API_URL + acter.mainPhoto} style={{ marginBottom: '0px', width: '300px' }} />
                </div>
                <div class="bio_acter" style={{ margin: '30px' }}>
                    {acter.discription}
                </div>

                <h2 style={{ textAlign: 'center' }}>Роли в спектаклях</h2>

                <Grid container sx={{ justifyContent: 'center', border: 'none' }}>
                    {datas.roleBySpect.map(roleBySpect =>
                        <ItemSpect key={roleBySpect.repertuar.id} onClick={() => navigate(SPECTACLE_ROUTE + '/' + roleBySpect.repertuar.id)}>
                            <div class="product-item">
                                <img src={process.env.REACT_APP_API_URL + roleBySpect.repertuar.mainPhoto} />
                                <h3 style={{fontWeight: 'bold'}}>{roleBySpect.repertuar.name}</h3>
                                <span class="author">{roleBySpect.title}</span>
                            </div>
                        </ItemSpect>
                    )}
                </Grid>
            </MediaQuery>

        </div>
        )
    );
})

export default personalActers
