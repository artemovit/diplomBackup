const ApiError = require('../error/ApiError')
const { Order } = require('../models/models')
const dbPool = require('../dbPool')

class orderController {
    async create(req, res, next) {
        try {
            const { name, phone, email, date, spect } = req.body
            const currentOrder = await Order.create({ name, phone, email, date, spect })
            return res.json(currentOrder)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req, res) {
        let orders;
        orders = await Order.findAll()
        return res.json(orders)
    }
    
}

module.exports = new orderController()