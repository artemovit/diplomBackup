require('dotenv').config()
const express = require('express')
const models = require('./models/models')
const cors = require('cors')
const sequelize = require('./db')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandingMiddleWare')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибок
app.use(errorHandler)


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started'))
    }
    catch (e){
        console.log(e)
    }
}

start()
