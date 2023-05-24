const {RoleArtists} = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const dbPool = require("../dbPool")
const ApiError = require("../error/ApiError")

class RoleArtistsController {
    async create(req, res, next){
        try{
        const {name, aid, rid } = req.body

        const role = await RoleArtists.create({name, aid, rid})
        return res.json(role)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getBySpect(req,res, next){
        try{
        const {id} = req.params
        const role = await dbPool.query(`SELECT *, acters.name, acters.surname FROM roleartists JOIN acters ON roleartists.aid = acters.id where roleartists.rid = ${id}`)
        return res.json(role.rows)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getByArtist(req,res, next){
        try{
        const {id} = req.params
        const role = await dbPool.query(`SELECT * FROM roleartists JOIN repertuars ON roleartists.rid = repertuars.id where roleartists.aid = ${id}`)
        return res.json(role.rows)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new RoleArtistsController()