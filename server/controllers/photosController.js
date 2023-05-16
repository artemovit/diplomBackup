const {Photos} = require("../models/models")
const uuid = require('uuid')
const path = require('path')

class PhotosController {
    async create(req, res, next){
        const {acterId, repertuarId } = req.body
        const {path} = req.files
        let fileName = uuid.v4() + ".jpg"
        path.mv(path.resolve(__dirname, '..', 'static', fileName))

        const photo = await Photos.create({acterId, repertuarId, path: fileName})
        return res.json(photo)
    }
    async get(req,res){
        const {acterId, repertuarId } = req.body
        let photo;
        if (!acterId, !repertuarId) {
            photo = await Photos.findAll()
        }
        if (acterId, !repertuarId){
            photo = await Photos.findAll({where: {acterId}})
        }
        if (!acterId, repertuarId){
            photo = await Photos.findAll({where: {repertuarId}})
        }
        if (acterId, repertuarId){
            photo = await Photos.findAll({where: {acterId, repertuarId}})
        }
        return res.json(photo)
    }
}

module.exports = new PhotosController()