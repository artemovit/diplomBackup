const { Afisha } = require("../models/models")

class AfishaController {
    async create(req, res, next){
        
            const {day, cenz, pushka, time, repertuarId} = req.body
            const currentDay = await Afisha.create({day, cenz, pushka, time, repertuarId})
            return res.json(currentDay)
       
      
    }
    async get(req, res){
        let afishas;
        afishas = await Afisha.findAll()
        return res.json(afishas)
    }
}

module.exports = new AfishaController()