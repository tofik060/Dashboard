const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required:[true,'Please enter the name of your product']
    },
    quantity:{
        type : String,
     
    },
    productCode:{
        type:String,
        required:[true,'Please enter the name of your product']
    },
    orderDate:{
        type:String,
     
    },
    price:{
        type:String,
        required:true
    }

});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;