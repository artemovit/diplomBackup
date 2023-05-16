const Router = require('express')
const router = new Router()
const documentController = require('../controllers/documentController')

router.post('/', documentController.create)
router.get('/', documentController.get)

module.exports = router