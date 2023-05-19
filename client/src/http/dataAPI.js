import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

export const createRepertuar = async (name, author, director, discription, time, children, host, mainPhoto) => {
    const {data} = await $authHost.post('api/repertuar', {name, author, director, discription, time, children, host, mainPhoto})
    return data
}

export const getRepertuar = async () => {
    const {data} = await $host.get('api/repertuar')
    return data
}

export const getOneRepertuar = async (id) => {
    const {data} = await $host.get('api/repertuar/' + id)
    return data
}

export const createActer = async (name, surname, grade, discription, mainPhoto) => {
    const {data} = await $authHost.post('api/artist', {name, surname, grade, discription, mainPhoto})
    return data
}

export const getActer = async () => {
    const {data} = await $host.get('api/artist')
    return data
}

export const getOneActer = async (id) => {
    const {data} = await $host.get('api/artist/' + id)
    return data
}

export const getAficha = async() =>{
    const {data} = await $host.get('api/afisha')
    return data
}