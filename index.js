// const mongoose = require('mongoose');
// mongoose.connect("mongodb://0.0.0.0/Order");

// const sellerSchema = new mongoose.Schema(
//     {
//         name: String,
//         category: String,
//         price: Number,
//         experience: Number
//     });
// const ProductModel = mongoose.model('products', sellerSchema);
//
//
// const saveInDb = async () => {
//     let data = new ProductModel({
//         name: "iphone 15 ultra pro max",
//         category: "mobile",
//         price: 130000,
//         experience: 5
//     });
//     let result = await data.save();
// };
// // saveInDb();
//
//
// const updateInDb = async () => {
//     let result = await ProductModel.updateOne(
//         {_id :"6440fe2f8303c78152be5e64"},
//         {
//             $set:
//                 {
//                     name: "vaibhav ",
//                     price: 100
//                 }
//         }
//     )
//
//     console.log("result ----->>", result);
// };
// // updateInDb()
//
//
// const deleteInDb = async () => {
//     let result = await ProductModel.deleteOne(
//         {name: 'iphone 15 ultra pro max'}
//     )
//
//     // console.log("deleted" , result)
// }
// // deleteInDb();
//
// const findId = async () => {
//     let result = await ProductModel.find({name: "vaibhav "});
//     console.log("result",result);
// }
//
// findId();

// let data = await ProductModel.find().then( (res) => {
//     return res
// })
// let findId = data.map((item,i) => {
//     return typeof item._id
// })
// console.log("findId",findId)


const express = require('express');
require('./config/config');
const Seller = require('./models/seller');
const app = express();
const cors = require('cors');

app.options('*', cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// body use krvamate
app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new Seller(req.body);
    let result = await data.save();
    res.send(result);
});

app.get('/allUser', async (req, res) => {
    let data = await Seller.find()
    res.send(data)
})

app.delete('/delete/:_id', async (req, res) => {
    // console.log("deleted",req.params);
    let data = await Seller.deleteOne(req.params);
    res.send(data);
});

app.put('/update/:_id', async (req, res) => {
    // console.log("deleted",req.params);
    let data = await Seller.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.send(data);
});
app.listen(3200, () => {
    console.log('Server started on port 3200');
});