import auth from '../pages/auth'
import backet from '../pages/backet'
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


import { ADMIN_ROUTE } from '../utils/consts'
import { BACKET_ROUTE } from '../utils/consts'
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


export const authRoutes = [
    {
        path: ADMIN_ROUTE ,
        Component: auth
    },
    {
        path: BACKET_ROUTE,
        Component: backet
    },

]

export const publicRoutes = [
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
]