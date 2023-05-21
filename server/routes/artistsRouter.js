const Router = require('express')
const router = new Router()
const artistController = require('../controllers/artistController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', artistController.create)
router.get('/', artistController.get)
router.get('/grade/narod', artistController.getNarodny)
router.get('/grade/deserved', artistController.getDeserved)
router.get('/:id', artistController.getOne)

module.exports = router