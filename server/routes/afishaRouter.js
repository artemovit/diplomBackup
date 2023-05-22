const Router = require('express')
const router = new Router()
const afishaController = require('../controllers/afishaController')

router.post('/', afishaController.create)
router.get('/', afishaController.get),
router.get('/top4', afishaController.getTopFourth)
router.get('/:id', afishaController.getForSpect)

module.exports = router