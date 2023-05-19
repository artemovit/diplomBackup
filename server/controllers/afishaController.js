const ApiError = require("../error/ApiError")
const {Repertuar} = require('../models/models')
const { Afisha } = require("../models/models")

class AfishaController {
    async create(req, res, next) {
        try{
        const { day, cenz, pushka, time, repertuarId } = req.body
        const currentDay = await Afisha.create({ day, cenz, pushka, time, repertuarId })
        return res.json(currentDay)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req, res) {
        let afishas;
        afishas = await Afisha.findAll({})
        return res.json(afishas)
    }
}

module.exports = new AfishaController()