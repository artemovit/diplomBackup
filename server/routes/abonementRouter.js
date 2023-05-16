const Router = require('express')
const router = new Router()
const abonementController = require('../controllers/abonementController')

router.post('/', abonementController.create)
router.get('/', abonementController.get)

module.exports = router