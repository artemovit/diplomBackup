import React, { useContext, useState } from 'react'
import logo from './images/logo.png'
import './AppBarStyle.css'
import { Button} from '@mui/material'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
import MediaQuery from 'react-responsive'
import { Telegram } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { AFISHA_ROUTE, RULES_ROUTE, TICKET_ROUTE } from '../utils/consts'
import { REPERTUAR_ROUTE } from '../utils/consts'
import { ARTISTS_ROUTE } from '../utils/consts'
import { HISTORY_ROUTE } from '../utils/consts'
import { AKIMOV_STARS_ROUTE } from '../utils/consts'
import { CONTACTS_ROUTE } from '../utils/consts'
import { AKIMOV_ROUTE } from '../utils/consts'
import { KAZAKOVA_ROUTE } from '../utils/consts'
import { NEWS_ROUTE } from '../utils/consts'
import { DOCS_ROUTE } from '../utils/consts'
import { MGN_ROUTE } from '../utils/consts'



export default function () {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [click, setClick] = React.useState(null);

    const handleBurgerClick = () => setClick(!click);

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

    const Navigation = styled.nav`
    background-color: #1B1D36;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    transition: width 0.8s, opacity 0.8s;
  `;

    const List = styled.div`
    display: block;
    margin: 90px;
    margin-right: 0px;
    margin-left: 45px;
  `;

    return (
        <div>
            <MediaQuery minWidth={1280}>
                <header>
                    <div class="header_section">
                        <Button href="/" class="header_item">Афиша</Button>
                        <Button class="header_item" href={REPERTUAR_ROUTE}>Репертуар</Button>
                        <Button class="header_item" href={ARTISTS_ROUTE}>Артисты</Button>

                        <Button class="header_item" onClick={handleClick}>О театре</Button>
                        <div class="header_item headerButton"><a href={AFISHA_ROUTE}><img src={logo} /></a></div>
                        <Button class="header_item" href={MGN_ROUTE}>Информация для МГН</Button>
                        <Button class="header_item" onClick={handleMenuClick}>Зрителям</Button>
                        <Button class="header_item" href={NEWS_ROUTE}>Новости</Button>
                        <Button class="header_item" href={CONTACTS_ROUTE}>Контакты</Button>
                        
                        <Menu class="menuu" id="AboutMenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem component="a" href={HISTORY_ROUTE}>История театра</MenuItem>
                            <MenuItem component="a" href={AKIMOV_ROUTE}>Николай Павлович Акимов</MenuItem>
                            <MenuItem component="a" href={AKIMOV_STARS_ROUTE}>Звёзды Акимовской сцены</MenuItem>
                            <MenuItem component="a" href={KAZAKOVA_ROUTE}>Татьяна Сергеевна Казакова</MenuItem>
                            <MenuItem component="a" href={DOCS_ROUTE}>Документы</MenuItem>
                        </Menu>
                        <Menu id="ZritelyamMenu" anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose}>
                            <MenuItem component="a" href={TICKET_ROUTE}>Покупка и возврат билетов</MenuItem>
                            <MenuItem component="a" href={RULES_ROUTE}>Правила посещения театра</MenuItem>
                        </Menu>
                    </div>
                </header >
            </MediaQuery>

            {/*Адаптация под мобильную версию */}
            <MediaQuery maxWidth={1279}>
                <header>

                    <IconButton sx={{ color: '#FFF' }} onClick={handleBurgerClick}><MenuIcon /></IconButton>

                    <div class="header_item headerButton"><a href="/"><img src={logo} width={100} /></a></div>
                    <IconButton sx={{ color: '#FFF' }} href='https://t.me/akimovkomedia'><Telegram /></IconButton>

                    <Navigation clicked={click}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton sx={{ color: '#FFF', fontSize: '44px' }} onClick={handleBurgerClick}><CloseIcon /></IconButton>
                            <div class="header_item headerButton"><a href="/"><img src={logo} width={100} /></a></div>
                            <IconButton sx={{ color: '#FFF' }}><Telegram /></IconButton>
                        </div>


                        <List>

                            <ul class="ul_burger">
                                <a href={AFISHA_ROUTE}>Афиша</a>
                            </ul>
                            <ul class="ul_burger">
                                <a href={REPERTUAR_ROUTE}>Репертуар</a>
                            </ul>
                            <ul class="ul_burger">
                                <a href={ARTISTS_ROUTE}>Артисты</a>
                            </ul>
                            <ul class="ul_burger">
                                <a onClick={handleClick}>О театре</a>
                            </ul>
                            <ul class="ul_burger">
                                <a href={MGN_ROUTE}>Информация для МГН</a>
                            </ul>
                            <ul class="ul_burger">
                                <a href="/">Зрителям</a>
                            </ul>
                            <ul class="ul_burger">
                                <a href={NEWS_ROUTE}>Новости</a>
                            </ul>
                            <ul class="ul_burger">
                                <a href={CONTACTS_ROUTE}>Контакты</a>
                            </ul>

                            <ul class="ul_burger"></ul>


                        </List>

                        <div class="burger_contacts">
                            Касса театра
                            <p>
                                <a href="tel:+ 7 (812) 555-55-55">+ 7 (812) 555-55-55</a>
                            </p>
                        </div>

                        <div class="burger_contacts">
                            Театр в социальных сетях
                            <p>
                                <IconButton sx={{ color: '#FFF' }}><TelegramIcon /></IconButton>
                                <IconButton sx={{ color: '#FFF' }}><YouTubeIcon /></IconButton>
                            </p>
                        </div>




                    </Navigation>

                </header>

            </MediaQuery>
        </div >
    )
}
