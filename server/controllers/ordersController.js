const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')
const dbPool = require('../dbPool')

class orderController {
    async create(req, res, next){
        try{
            const {name, phone, email, date, spect} = req.body
            const currentOrder = await dbPool.query(`insert into orders (name, phone, email, createdat, updatedat, date, spect) values('${name}', '${phone}', '${email}', now(), now(), '${date}', '${spect}')`)
            return res.json(currentOrder.rows)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new orderController()