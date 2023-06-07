const ApiError = require("../error/ApiError")
const dbPool = require("../dbPool")
const { Afisha, Repertuar } = require("../models/models")
const { Op } = require('sequelize')
const { Sequelize } = require("../db")


class AfishaController {
    async create(req, res, next) {
        try {
            const { day, cenz, pushka, repertuarId } = req.body
            const currentDay = await Afisha.create({ day, cenz, pushka, repertuarId })
            return res.json(currentDay)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async get(req, res, next) {
        try {
            const today = new Date()
            let afishas = await Afisha.findAll({
                
                order: [
                    ['id', 'ASC']],
                include: [{ model: Repertuar, as: 'repertuar' }]
                
            });
            console.log(afishas)
            return res.json(afishas)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getTopFourth(req, res) {
        const today = new Date()
        let afishas = await Afisha.findAll({
            where: Sequelize.literal(`"day">='${today.toISOString()}'`),
            include: [{ model: Repertuar, as: 'repertuar' }],
            limit: 4
        });
        console.log(afishas)
        return res.json(afishas)
    }

    async getForSpect(req, res) {
        const { id } = req.params
        const afisha = await Afisha.findAll({
            where: {
                repertuarId: id,
                day: {[Op.gte]: Date.now()}
            }
        })
        return res.json(afisha)
    }
}

module.exports = new AfishaController()