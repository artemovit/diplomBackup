const {Photos} = require("../models/models")
const uuid = require('uuid')
const pathh = require('path')
const ApiError = require("../error/ApiError")
const dbPool = require("../dbPool")

class PhotosController {
    async create(req, res, next){
        try{
        const {rid} = req.body
        const {path} = req.files
        let fileName = uuid.v4() + ".jpg"
        path.mv(pathh.resolve(__dirname, '..', 'static', fileName))

        const photo = await dbPool.query(`insert into photos (path, createdat, updatedat, rid) values('${fileName}', now(), now(), ${rid})`)
        return res.json(photo.rows)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getBySpect(req,res){
        const {id} = req.params
        const photo = await dbPool.query(`select * from photos where rid = ${id}`)
        return res.json(photo.rows)
    }
}

module.exports = new PhotosController()