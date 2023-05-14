const Router = require('express')
const router = new Router()
const afishaController = require('../controllers/afishaController')

router.post('/', afishaController.create)
router.get('/', afishaController.get),

module.exports = router