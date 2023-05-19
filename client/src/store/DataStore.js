import { makeAutoObservable } from "mobx"

export default class DataStore{
    constructor() {
        this._repertuar = []
        this._artist = []
        this._afisha = []
        this._SelectedAfisha = []
        makeAutoObservable(this)
    }

    setRepertuar(repertuar){
        this._repertuar = repertuar
    }
    setArtist(artist){
        this._artist = artist
    }
    setAfisha(afisha){
        this._afisha = afisha
    }
    setSelectedAfisha(spect){
        this._SelectedAfisha(spect)
    }
    get repertuar(){
        return this._repertuar
    }
    get acters(){
        return this._artist
    }

    get afisha(){
        return this._afisha
    }
    get selectedAfisha(){
        return this._SelectedAfisha
    }
}