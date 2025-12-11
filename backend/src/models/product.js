const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required:[true,'Please enter the name of your product']
    },
    quantity:{
        type : Number,
    },
    productCode:{
        type:String,
        required:[true,'Please enter the name of your product']
    },
    productDate:{
        type:String,
    },
    actualPrice:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    }

});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;