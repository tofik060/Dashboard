const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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

const OrderList = new mongoose.model('OderList', orderSchema);

module.exports = OrderList;