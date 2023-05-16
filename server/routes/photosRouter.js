const Router = require('express')
const router = new Router()
const photosController = require('../controllers/photosController')

router.post('/', photosController.create)
router.get('/', photosController.get)

module.exports = router