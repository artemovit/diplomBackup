const Router = require('express')
const router = new Router()

const afishaRouter = require('./afishaRouter')
const artistsRouter = require('./artistsRouter')
const repertuarRouter = require('./repertuarRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/repertuar', repertuarRouter)
router.use('/afisha', afishaRouter)
router.use('/artist', artistsRouter)

module.exports = router