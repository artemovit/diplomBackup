import { $authHost, $host } from "./index";

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

export const getNarodActer = async() => {
    const {data} = await $host.get('api/artist/grade/narod')
    return data
}
export const getDeservedActer = async() => {
    const {data} = await $host.get('api/artist/grade/deserved')
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

export const getFourthAfisha = async() => {
    const {data} = await $host.get('api/afisha/top4')
    return data
}

export const getAbonement = async() => {
    const {data} = await $host.get('api/abonement')
    return data
}

export const registrDiscription = async(name, email, discription) => {
    const {data} = await $host.post('api/feedback', {name, email, discription})
    return data
}

export const createNews = async (title, discription, mainPhoto) => {
    const {data} = await $authHost.post('api/news', {title, discription, mainPhoto})
    return data
}

export const createOrder = async(spect, date, name, email) => {
    const {data} = await $host.post('api/orders', {spect, date, name, email})
    return data
}

export const getNews = async() => {
    const {data} = await $host.get('api/news')
    return data
}

export const getOneNews = async(id) => {
    const {data} = await $host.get('api/news/' + id)
    return data
}

export const getSpectAfisha = async(id) => {
    const {data} = await $host.get('api/afisha/' + id)
    return data
}

export const getPhoto = async(id) => {
    const {data} = await $host.get('api/photos/' + id)
    return data
}

export const getRoleBySpect = async(id) => {
    const {data} = await $host.get('api/role/spect/' + id)
    return data
}

export const getRoleByArtist = async(id) => {
    const {data} = await $host.get('api/role/artist/' + id)
    return data
}

export const getDocument = async() => {
    const {data} = await $host.get('api/document')
    return data
}