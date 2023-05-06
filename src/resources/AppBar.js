import React from 'react'
import logo from './images/logo.png'
import './AppBarStyle.css'
import {Button} from '@mui/material'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/index';
import Repertuar from '../pages/repertuar'
import Artists from '../pages/artists'
import History from '../pages/about/history'
import Stars from '../pages/about/akimovStars'
import Contacts from '../pages/contacts'
import Akimov from '../pages/akimov'
import Kazakova from '../pages/kazakova'

import Error from '../pages/error'



export default function () {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClick = (event) => {
        setAnchorE2(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorE2(null);
    };

    return (
        <div>
            <header>
                <div class="header_section">

                    <Button href="/" class="header_item">Афиша</Button>
                    <Button class="header_item" href="repertuar">Репертуар</Button>
                    <Button class="header_item" href="artists">Артисты</Button>
                    
                    <Button class="header_item" onClick={handleClick}>О театре</Button>
                    <div class="header_item headerButton"><a href="/"><img src={logo} /></a></div>
                    <Button class="header_item">Информация для МГН</Button>
                    <Button class="header_item" onClick={handleMenuClick}>Зрителям</Button>
                    <Button class="header_item">Новости</Button>
                    <Button class="header_item" href="contacts">Контакты</Button>

                    <Menu class="menuu" id="AboutMenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem component="a" href="about.history">История театра</MenuItem>
                        <MenuItem component="a" href="about.akimov">Николай Павлович Акимов</MenuItem>
                        <MenuItem component="a" href="about.star">Звёзды Акимовской сцены</MenuItem>
                        <MenuItem component="a" href="about.kazakova">Татьяна Сергеевна Казакова</MenuItem>
                        <MenuItem onClick={handleClose}>Документы</MenuItem>
                    </Menu>
                    <Menu id="ZritelyamMenu" anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Покупка и возврат билетов</MenuItem>
                        <MenuItem onClick={handleClose}>Правила посещения театра</MenuItem>
                    </Menu>
                </div>
            </header >

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="repertuar" element={<Repertuar/>}/>
                <Route path="artists" element={<Artists/>}/>
                <Route path="about.history" element={<History/>}/>
                <Route path="about.star" element={<Stars/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="about.akimov" element={<Akimov/>}/>
                <Route path="about.kazakova" element={<Kazakova/>}/>
                
            </Routes>
            </BrowserRouter>
        </div >
    )
}
