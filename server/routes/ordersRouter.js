const Router = require('express')
const router = new Router()
const orderController = require('../controllers/ordersController')

router.post('/', orderController.create)

module.exports = router

