require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')



const app = express()


const Clothing = require('./models/clothing.js')
//middleware
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

//Routes

app.get('/', async (req, res) => {
   return res.render('index')
    
})
   //clothing new
app.get('/clothing/new', async (req, res) => {
    res.render('clothing/new')
})

//clothing/create
app.post('/clothing', async (req, res) => {
    const createdClothes = await Clothing.create(req.body)
    console.log(req.body)
    res.redirect('/clothing/new')
    
})




const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to database')
        app.listen(process.env.PORT, () => {
            console.log(`connected at port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

connect()






