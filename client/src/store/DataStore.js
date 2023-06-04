import { makeAutoObservable } from "mobx"

export default class DataStore {
    constructor() {
        this._repertuar = []
        this._artist = []
        this._afisha = []
        this._selectedAfisha = []
        this._abonement = []
        this._narodArtist = []
        this._deservedArtist = []
        this._news = []
        this._spectAfisha = []
        this._photo = []
        this._roleBySpect = []
        this._document = []
        this._orderAfisha = []
        this._selectedSpect = {}
        this._selectedArtist = {}
        this._feedback = []
        this._selectedFeedback = {}
        makeAutoObservable(this)
    }

    setRepertuar(repertuar) {
        this._repertuar = repertuar
    }
    setArtist(artist) {
        this._artist = artist
    }
    setNarodArtist(narodArtis) {
        this._narodArtist = narodArtis
    }
    setDeservedArtist(deservArtis) {
        this._deservedArtist = deservArtis
    }
    setAfisha(afisha) {
        this._afisha = afisha
    }
    setSelectedAfisha(selectedAfisha) {
        this._selectedAfisha = selectedAfisha
    }
    setAbonement(abonement) {
        this._abonement = abonement
    }
    setNews(news) {
        this._news = news
    }
    setSpectAfisha(spectAfisha) {
        this._spectAfisha = spectAfisha
    }
    setPhoto(photo) {
        this._photo = photo
    }
    setRoleBySpect(roleBySpect) {
        this._roleBySpect = roleBySpect
    }
    setDocument(document){
        this._document = document
    }
    setOrderAfisha(orderAfisha){
        this._orderAfisha = orderAfisha
    }
    setSelectedSpect(selectedSpect){
        this._selectedSpect = selectedSpect
    }
    setFeedback(feedback){
        this._feedback = feedback
    }
    setSelectedFeedback(feedback){
        this._selectedFeedback = feedback
    }
    setSelectedArtist(artist){
        this._selectedArtist = artist
    }
    get repertuar() {
        return this._repertuar
    }
    get acters() {
        return this._artist
    }
    get narodArtist() {
        return this._narodArtist
    }
    get deservedArtist() {
        return this._deservedArtist
    }
    get afisha() {
        return this._afisha
    }
    get selectedAfisha() {
        return this._selectedAfisha
    }
    get abonement() {
        return this._abonement
    }
    get news() {
        return this._news
    }
    get spectAfisha() {
        return this._spectAfisha
    }
    get photo() {
        return this._photo
    }
    get roleBySpect() {
        return this._roleBySpect
    }
    get document(){
        return this._document
    }
    get orderAfisha(){
        return this._orderAfisha
    }
    get selectedSpect(){
        return this._selectedSpect
    }
    get feedback(){
        return this._feedback
    }
    get selectedFeedback(){
        return this._selectedFeedback
    }
    get selectedArtist(){
        return this._selectedArtist
    }
}