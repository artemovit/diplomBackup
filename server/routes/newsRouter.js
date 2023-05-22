const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.post('/', newsController.create)
router.get('/', newsController.get)
router.get('/:id', newsController.getOne)

module.exports = router