const {RoleArtists} = require("../models/models")
const uuid = require('uuid')
const path = require('path')

class RoleArtistsController {
    async create(req, res, next){
        const {name, acterId, repertuarId } = req.body

        const role = await RoleArtists.create({name, acterId, repertuarId})
        return res.json(photo)
    }
    async get(req,res){
        const {acterId, repertuarId } = req.body
        let role;
        if (!acterId, !repertuarId) {
            role = await RoleArtists.findAll()
        }
        if (acterId, !repertuarId){
            role = await RoleArtists.findAll({where: {acterId}})
        }
        if (!acterId, repertuarId){
            role = await RoleArtists.findAll({where: {repertuarId}})
        }
        if (acterId, repertuarId){
            role = await RoleArtists.findAll({where: {acterId, repertuarId}})
        }
        return res.json(role)
    }
}

module.exports = new RoleArtistsController()