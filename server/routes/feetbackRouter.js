const Router = require('express')
const router = new Router()
const feedbackController = require('../controllers/feetbackController')

router.post('/', feedbackController.create)
router.get('/', feedbackController.get)
router.delete('/del/:id', feedbackController.delete)

module.exports = router