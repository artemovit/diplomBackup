const {Repertuar} = require('../models/models')
const ApiError = require("../error/ApiError")
const uuid = require('uuid')
const path = require('path')

class RepertuarController {
    async create(req, res, next){
        try{
            const {name, author, director, discription, time, children, host} = req.body
            const {mainPhoto} = req.files
            let fileName = uuid.v4() + ".jpg"
            mainPhoto.mv(path.resolve(__dirname, '..', 'static', fileName))
            const repertuar = await Repertuar.create({name, author, director, discription, time, children, host, mainPhoto: fileName})
            return res.json(repertuar)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    async get(req, res){
        let repertuar;
        repertuar = await Repertuar.findAll()
        return res.json(repertuar)
    }
    async getOne(req, res){
        const {id} = req.params
        const spectacle = await Repertuar.findOne(
            {where: {id}}, 
            
        )
        return res.json(spectacle)
    }
}

module.exports = new RepertuarController()