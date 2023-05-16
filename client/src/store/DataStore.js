import { makeAutoObservable } from "mobx"

export default class DataStore{
    constructor() {
        this._repertuar = [
            {id:1, name:'Малыш и карлсон', author: 'Астрид Линдгрен', director: 'Сергей Романюк', discription: 'good spect', time: '2:00', children: true, mainPhoto: 'https://akimovkomedia.ru/files/local/CMS_File/h0000/8915/8915.BigImg.jpg?1683121393', host: false},
            {id:2, name:'Лес', author: 'Александр Островский', director: 'Татьяна Казакова', discription: 'bad spect', time: '3:00', children: false, mainPhoto: 'https://akimovkomedia.ru/files/local/CMS_File/h0000/8776/8776.BigImg.jpg?1676036502', host: false}
        ]
        this._artist = [
            {id: 1, name: 'Юрий', surname: 'Лазарев', grade: 'Народный артист России', discription: 'good acter', mainPhoto: 'https://akimovkomedia.ru/files/local/CMS_File/h0000/2916/2916.BigImg.jpg?1399983457'},
            {id: 2, name: 'Татьяна', surname: 'Полонская', grade: 'Заслуженный артист России', discription: 'amazing acter', mainPhoto: 'https://akimovkomedia.ru/files/local/CMS_File/h0000/8917/8917.BigImg.jpg?1683121394'}
        ]
        makeAutoObservable(this)
    }

    setRepertuar(repertuar){
        this._repertuar = repertuar
    }
    setArtist(artist){
        this._artist = artist
    }

    get repertuar(){
        return this._repertuar
    }
    get acters(){
        return this._artist
    }
}