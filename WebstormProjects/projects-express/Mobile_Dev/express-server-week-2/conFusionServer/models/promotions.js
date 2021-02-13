



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


var promoSchema = new Schema({
   name:  {
        type: String,

        required: true
    },
    image  :{
        type: String,
        required: true
    },
    label :  {
        type: String,
        required: true
    },
    price:{
       type:Number,
        min:1,
        max:2000,
        required:true

    },
    description:{

       type: String,
        required:true
    },
    featured:{
       type:Boolean,
        required:true

    }
    },

    {
    timestamps: true
}

);



var promotions = mongoose.model('promotion', promoSchema);

module.exports = promotions;