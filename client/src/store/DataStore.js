import { makeAutoObservable } from "mobx"

export default class DataStore{
    constructor() {
        this._repertuar = []
        this._artist = []
        this._afisha = []
        this._selectedAfisha = []
        this._abonement = []
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
    setSelectedAfisha(selectedAfisha){
        this._selectedAfisha = selectedAfisha
    }
    setAbonement(abonement){
        this._abonement = abonement
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
        return this._selectedAfisha
    }
    get abonement(){
        return this._abonement
    }
}