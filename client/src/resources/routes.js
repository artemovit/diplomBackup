import auth from '../pages/auth'
import index from '../pages/index'
import repertuar from '../pages/repertuar'
import artists from '../pages/artists'
import history from '../pages/about/history'
import akimovStars from '../pages/about/akimovStars'
import error from '../pages/error'
import contacts from '../pages/contacts'
import akimov from '../pages/akimov'
import kazakova from '../pages/kazakova'
import personalSpect from '../pages/personalSpect'
import personalActers from '../pages/personalActers'
import admin from '../pages/admin'
import news from '../pages/news'
import personalNews from '../pages/personalNews'
import docs from '../pages/document'
import mgn from '../pages/mgn'
import tickets from '../pages/tickets'
import rules from '../pages/rules'


import { ADMIN_AUTH_ROUTE } from '../utils/consts'
import { AFISHA_ROUTE } from '../utils/consts'
import { REPERTUAR_ROUTE } from '../utils/consts'
import { ARTIST_ROUTE } from '../utils/consts'
import { ARTISTS_ROUTE } from '../utils/consts'
import { HISTORY_ROUTE } from '../utils/consts'
import { AKIMOV_STARS_ROUTE } from '../utils/consts'
import { ERROR_ROUTE } from '../utils/consts'
import { CONTACTS_ROUTE } from '../utils/consts'
import { AKIMOV_ROUTE } from '../utils/consts'
import { KAZAKOVA_ROUTE } from '../utils/consts'
import { SPECTACLE_ROUTE } from '../utils/consts'
import {ADMIN_ROUTE} from '../utils/consts'
import { NEWS_ROUTE } from '../utils/consts'
import { DOCS_ROUTE } from '../utils/consts'
import { MGN_ROUTE } from '../utils/consts'
import { TICKET_ROUTE } from '../utils/consts'
import { RULES_ROUTE } from '../utils/consts'



export const authRoutes = [
    {
        
    },

]

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: admin
    },
    {
        path: NEWS_ROUTE,
        Component: news
    },
    {
        path: ADMIN_AUTH_ROUTE ,
        Component: auth
    },
    {
        path: AFISHA_ROUTE,
        Component: index
    },
    {
        path: REPERTUAR_ROUTE,
        Component: repertuar
    },
    {
        path: ARTISTS_ROUTE,
        Component: artists
    },
    {
        path: HISTORY_ROUTE,
        Component: history
    },
    {
        path: AKIMOV_STARS_ROUTE,
        Component: akimovStars
    },
    {
        path: ERROR_ROUTE,
        Component: error
    },
    {
        path: CONTACTS_ROUTE,
        Component: contacts
    },
    {
        path: AKIMOV_ROUTE,
        Component: akimov
    },
    {
        path: KAZAKOVA_ROUTE,
        Component: kazakova
    },
    {
        path: SPECTACLE_ROUTE + '/:id',
        Component: personalSpect
    },
    {
        path: ARTIST_ROUTE + '/:id',
        Component: personalActers
    },
    {
        path: NEWS_ROUTE + '/:id',
        Component: personalNews
    },
    {
        path: DOCS_ROUTE,
        Component: docs
    },
    {
        path: MGN_ROUTE,
        Component: mgn
    },
    {
        path: TICKET_ROUTE,
        Component: tickets
    },
    {
        path: RULES_ROUTE,
        Component: rules
    }
]