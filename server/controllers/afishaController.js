const ApiError = require("../error/ApiError")
const sequelize = require('../db')
const { Repertuar } = require('../models/models')
const { Afisha } = require("../models/models")
const dbPool = require("../dbPool")

class AfishaController {
    async create(req, res, next) {
        try {
            const { day, cenz, pushka, time, rid } = req.body
            const currentDay = await Afisha.create({ day, cenz, pushka, time, rid})
            return res.json(currentDay)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req, res) { 
        const afishas = await dbPool.query(`SELECT *, repertuars.name, repertuars.author FROM afishas JOIN repertuars ON afishas.rid = repertuars.id WHERE afishas.day >= current_date`);
        return res.json(afishas.rows)
    }

    async getTopFourth(req, res) { 
        const afishas = await dbPool.query(`SELECT *, repertuars.name, repertuars.author FROM afishas JOIN repertuars ON afishas.rid = repertuars.id WHERE afishas.day >= current_date limit 4`);
        return res.json(afishas.rows)
    }


    async getForSpect(req,res){
        const {id} = req.params
        const afisha = await dbPool.query(`SELECT afishas.day, afishas.cenz, afishas.pushka FROM afishas WHERE afishas.rid = ${id} AND afishas.day >= current_date`)
        return res.json(afisha.rows)
        }
    }

module.exports = new AfishaController()