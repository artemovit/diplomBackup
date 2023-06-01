import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive';
import {useParams} from 'react-router-dom'

import {getOneNews, getOneRepertuar} from '../http/dataAPI'
import { observer } from 'mobx-react';

const personalNews = observer( () => {

    const [news, setNews] = useState( {info: []})
    const {id} = useParams()
    useEffect( () => {
        getOneNews(id).then(data => setNews(data))
    }, [])

    return (
        <div>
            <MediaQuery minWidth={1280}>
                <div class="spect">
                    <img src={process.env.REACT_APP_API_URL + news.mainPhoto} />
                    <div>
                        <h1 style={{lineHeight: '1', textAlign: 'center'}}>{news.title}</h1>
                    </div>
                </div>
                <div class="spect_discrp">
                    
                    {news.discription}
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>
                
                    <div class = "photo_spect" style={{display: 'flex', justifyContent: 'center', margin: '30px', marginBottom: '0px'}}>
                    <img src={process.env.REACT_APP_API_URL + news.mainPhoto}/>
                    </div>
                    <div class="spect" style={{margin: '40px', marginTop: '0px'}}>
                    <div>
                        <h1 style={{fontSize: '40px', border:'0'}}>{news.title}</h1>
                    </div>
                </div>
                <div class="spect_discrp" style={{margin: '30px'}}>
                    
                    {news.discription}
                </div>
            </MediaQuery>
        </div>
    )
})

export default personalNews
