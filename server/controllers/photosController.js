const {Photos} = require("../models/models")
const uuid = require('uuid')
const pathh = require('path')
const ApiError = require("../error/ApiError")

class PhotosController {
    async create(req, res, next){
        try{
        const {repertuarId} = req.body
        const {path} = req.files
        let fileName = uuid.v4() + ".jpg"
        path.mv(pathh.resolve(__dirname, '..', 'static', fileName))

        const photo = await Photos.create({path: fileName, repertuarId})
        return res.json(photo)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getBySpect(req,res){
        const {id} = req.params
        const photo = await Photos.findAll({
            where: {repertuarId: id}
        })
        return res.json(photo)
    }
}

module.exports = new PhotosController()