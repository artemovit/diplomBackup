const Router = require('express')
const router = new Router()

const afishaRouter = require('./afishaRouter')
const artistsRouter = require('./artistsRouter')
const repertuarRouter = require('./repertuarRouter')
const userRouter = require('./userRouter')
const abonementRouter = require('./abonementRouter')
const documentRouter = require('./documentRouter')
const feedbackController = require('./feetbackRouter')


router.use('/user', userRouter)
router.use('/repertuar', repertuarRouter)
router.use('/afisha', afishaRouter)
router.use('/artist', artistsRouter)
router.use('/abonement', abonementRouter)
router.use('/document', documentRouter)
router.use('/feedback', feedbackController)

module.exports = router