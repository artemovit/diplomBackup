const Router = require('express')
const router = new Router()
const artistController = require('../controllers/artistController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), artistController.create)
router.get('/', artistController.get),
router.get('/:id', artistController.getOne)

module.exports = router