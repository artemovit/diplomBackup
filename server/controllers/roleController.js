const {RoleArtists, Acter, Repertuar} = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const dbPool = require("../dbPool")
const ApiError = require("../error/ApiError")

class RoleArtistsController {
    async create(req, res, next){
        try{
        const {title, repertuarId, acterId } = req.body

        const role = await RoleArtists.create({title, repertuarId, acterId})
        return res.json(role)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getBySpect(req,res, next){
        try{
        const {id} = req.params
        const role = await RoleArtists.findAll({
            where:{repertuarId: id},
            include: [{model: Acter, as: 'acter'}]
        });
        console.log(role)
        return res.json(role)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getByArtist(req,res, next){
        try{
        const {id} = req.params
        const role = await RoleArtists.findAll({
            where: {acterId: id},
            include: [{model: Repertuar, as: 'repertuar'}]
        })
        return res.json(role)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new RoleArtistsController()