const ApiError = require("../error/ApiError")
const dbPool = require("../dbPool")

class AfishaController {
    async create(req, res, next) {
        try {
            const { day, cenz, pushka, rid } = req.body
            const currentDay = await dbPool.query(`insert into afishas (day, cenz, pushka, rid, createdat, updatedat) values('${day}', '${cenz}', ${pushka}, ${rid}, now(), now())`)
            return res.json(currentDay.rows)
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