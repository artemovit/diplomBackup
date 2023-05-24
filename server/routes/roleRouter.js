const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')

router.post('/', roleController.create)
router.get('/spect/:id', roleController.getBySpect)
router.get('/artist/:id', roleController.getByArtist)

module.exports = router