const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productId: String,
    name: String,
    color: String,
    size: String,
    price: Number
})

const cartSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    createdDate: { type: Date, default: Date.now },
    products: [productSchema],
    totalCost: String
})

const Cart = mongoose.model('cart',cartSchema)

module.exports = Cart;
