const { News } = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError")

class NewsController {
    async create(req, res) {
        const { title, discription } = req.body
        const { mainPhoto } = req.files
        let fileName = uuid.v4() + ".jpg"
        mainPhoto.mv(path.resolve(__dirname, '..', 'static', fileName))
        const news = await News.create({ title, discription, mainPhoto: fileName })
        return res.json(news)
    }
    async get(req, res) {
        let news;
        news = await News.findAll()
        return res.json(news)
    }
    async getOne(req, res) {
        const { id } = req.params
        const news = await News.findOne(
            { where: { id } },
        )
        return res.json(news)
    }
}

module.exports = new NewsController()