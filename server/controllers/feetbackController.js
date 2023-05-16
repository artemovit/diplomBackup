const {Feedback} = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError');

class FeedbackController {
    async create(req, res, next){
        const {name, email, discription} = req.body()
        if (!email || !name || !discription){
            return next(ApiError.badRequest('Неккоректный запрос'))
        }
        const feed = await Feedback.create({name, email, discription})
        return res.json(feed)
    }
    async get(req,res){
        let feed;
        feed = await Feedback.findAll()
        return res.json(feed)
    }
}

module.exports = new FeedbackController()