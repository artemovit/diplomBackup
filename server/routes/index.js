const Router = require('express')
const router = new Router()

const afishaRouter = require('./afishaRouter')
const artistsRouter = require('./artistsRouter')
const repertuarRouter = require('./repertuarRouter')
const userRouter = require('./userRouter')
const abonementRouter = require('./abonementRouter')
const documentRouter = require('./documentRouter')
const feedbackRouter = require('./feetbackRouter')
const photosRouter = require('./photosRouter')
const roleRouter = require('./roleRouter')
const newsRouter = require('./newsRouter')
const ordersRouter = require('./ordersRouter')


router.use('/user', userRouter)
router.use('/repertuar', repertuarRouter)
router.use('/afisha', afishaRouter)
router.use('/artist', artistsRouter)
router.use('/abonement', abonementRouter)
router.use('/document', documentRouter)
router.use('/feedback', feedbackRouter)
router.use('/photos', photosRouter)
router.use('/role', roleRouter)
router.use('/news', newsRouter)
router.use('/orders', ordersRouter)

module.exports = router