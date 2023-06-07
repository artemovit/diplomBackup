import { $authHost, $host } from "./index";

export const createRepertuar = async (spect) => {
    const { data } = await $host.post('api/repertuar/', spect)
    return data
}

export const getRepertuar = async () => {
    const { data } = await $host.get('api/repertuar')
    return data
}

export const getOneRepertuar = async (id) => {
    const { data } = await $host.get('api/repertuar/' + id)
    return data
}

export const createActer = async (acter) => {
    const { data } = await $authHost.post('api/artist', acter)
    return data
}

export const getActer = async () => {
    const { data } = await $host.get('api/artist')
    return data
}

export const getNarodActer = async () => {
    const { data } = await $host.get('api/artist/grade/narod')
    return data
}
export const getDeservedActer = async () => {
    const { data } = await $host.get('api/artist/grade/deserved')
    return data
}

export const getOneActer = async (id) => {
    const { data } = await $host.get('api/artist/' + id)
    return data
}

export const getAllActers = async() =>{
    const {data} = await $host.get('api/artist/all')
    return data
}

export const createAfisha = async (afisha) => {
    const { data } = await $host.post('api/afisha', afisha)
    return data
}

export const getAficha = async () => {
    const { data } = await $host.get('api/afisha')
    return data
}

export const getFourthAfisha = async () => {
    const { data } = await $host.get('api/afisha/top4')
    return data
}

export const getAbonement = async () => {
    const { data } = await $host.get('api/abonement')
    return data
}

export const registrDiscription = async (name, email, discription) => {
    const { data } = await $host.post('api/feedback', { name, email, discription })
    return data
}

export const createNews = async (news) => {
    const { data } = await $host.post('api/news', news)
    return data
}

export const createOrder = async (spect, date, name, email) => {
    const { data } = await $host.post('api/orders', { spect, date, name, email })
    return data
}

export const getOrder = async () => {
    const {data} = await $host.get('api/orders')
    return data
}

export const getNews = async () => {
    const { data } = await $host.get('api/news')
    return data
}

export const getOneNews = async (id) => {
    const { data } = await $host.get('api/news/' + id)
    return data
}

export const getSpectAfisha = async (id) => {
    const { data } = await $host.get('api/afisha/' + id)
    return data
}

export const getPhoto = async (id) => {
    const { data } = await $host.get('api/photos/' + id)
    return data
}

export const createPhoto = async(photo) => {
    const {data} = await $host.post('api/photos/', photo)
    return data
}

export const getRoleBySpect = async (id) => {
    const { data } = await $host.get('api/role/spect/' + id)
    return data
}

export const getRoleByArtist = async (id) => {
    const { data } = await $host.get('api/role/artist/' + id)
    return data
}

export const createRole = async (role) => {
    const {data} = await $host.post('api/role/', role)
    return data
}

export const getDocument = async () => {
    const { data } = await $host.get('api/document')
    return data
}

export const getFeedback = async () => {
    const {data} = await $host.get('api/feedback')
    return data
}

export const deleteFeedback = async (id) => {
    const {data} = await $host.delete('api/feedback/del/' + id)
    return data
}