const {Documents} = require("../models/models")
const uuid = require('uuid')
const pathh = require('path')

class DocumentController {
    async create(req, res){
        const {name} = req.body
        const {path} = req.files
        let fileName = uuid.v4() + ".pdf"
        path.mv(pathh.resolve(__dirname, '..', 'static', fileName))

        const document = await Documents.create({name, path: fileName})
        return res.json(document)
    }
    async get(req,res){
        let document;
        document = await Documents.findAll()
        return res.json(document)
    }
}

module.exports = new DocumentController()