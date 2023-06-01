const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')
const dbPool = require('../dbPool')

class orderController {
    async create(req, res, next){
        try{
            const {name, phone, email, rid, afid} = req.body
            const currentOrder = await Order.create({name, phone, email, rid, afid})
            return res.json(currentOrder)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new orderController()