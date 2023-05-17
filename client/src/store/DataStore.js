import { makeAutoObservable } from "mobx"

export default class DataStore{
    constructor() {
        this._repertuar = []
        this._artist = []
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