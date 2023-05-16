const Router = require('express')
const router = new Router()
const feedbackController = require('../controllers/feetbackController')

router.post('/', feedbackController.create)
router.get('/', feedbackController.get)

module.exports = router