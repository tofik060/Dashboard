const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    orderDate:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    actualPrice:{
        type:Number,
    },
    image:{
        type:String,
    },
    orderCancelDate:{
        type:String,
    },
    orderStatus:{
        type:String,
        default: 'Pending',
        enum: ['Pending', 'Cancelled', 'Completed']
    },
    customerName:{
        type: String
    },
    customerEmail:{
        type: String
    },
    customerPhone:{
        type: Number
    },
    customerAddress:{
        type: String
    },
});

const OrderList = new mongoose.model('OderList', orderSchema);

module.exports = OrderList;