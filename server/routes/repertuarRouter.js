const Router = require('express')
const router = new Router()
const repertuarController = require('../controllers/repertuarController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), repertuarController.create)
router.get('/', repertuarController.get),
router.get('/:id', repertuarController.getOne)

module.exports = router