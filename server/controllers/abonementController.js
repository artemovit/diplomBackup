const { Abonement } = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError")

class AbonementController {
    async create(req, res) {

            const { name, pushka, discription, repertuarId } = req.body
            const { mainPhoto } = req.files
            let fileName = uuid.v4() + ".jpg"
            mainPhoto.mv(path.resolve(__dirname, '..', 'static', fileName))
            const abonement = await Abonement.create({ name, pushka, discription, repertuarId, mainPhoto: fileName })
            return res.json(abonement)

            
        
    }
    async get(req, res) {
        let abonement;
        abonement = await Abonement.findAll()
        return res.json(abonement)
    }
}

module.exports = new AbonementController()