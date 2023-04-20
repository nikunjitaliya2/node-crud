const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
    {
        name: String,
        category: String,
        price: Number,
        experience: Number
    });


module.exports = mongoose.model('products', sellerSchema);