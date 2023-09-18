const mongoose = require('mongoose');

const cancelSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    itemName:{
        type: String,
        required: true
    },
    productCode:{
        type: String,
        required : true
    },
    orderDate: {
        type: String,
        required: true
    },
    cancelDate: {
        type: String,
        required: true
    },
    quantity:{
        type : String,
     
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    }
})

const Cancel = new mongoose.model('Cancel', cancelSchema);

module.exports = Cancel;