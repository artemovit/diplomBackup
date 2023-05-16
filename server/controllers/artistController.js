const {Acter} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ArtistController {
    async create(req, res, next){
        try{
            const {name, surname, grade, discription} = req.body
            const {mainPhoto} = req.files
            let fileName = uuid.v4() + ".jpg"
            mainPhoto.mv(path.resolve(__dirname, '..', 'static', fileName))
            const acter = await Acter.create({name, surname, grade, discription, mainPhoto: fileName})
            return res.json(acter)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
        
    }
    async get(req, res){
        let artists;
        artists = await Acter.findAll()
        return res.json(artists )
    }
    async getOne(req, res){
        const {id} = req.params
        const artist = await Acter.findOne(
            {where: {id}}, 
            
        )
        return res.json(artist)
    }
}

module.exports = new ArtistController()