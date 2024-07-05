const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')


const clothingSchema = new mongoose.Schema({
    brand: String,
    color: String,
    size: String,
    type: String,
    quantity: Number

})

const Clothing = mongoose.model('Clothing', clothingSchema)


module.exports = Clothing    //cap because this is a class all clothing will have the same layout