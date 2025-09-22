const {mongoose, Schema } = require('mongoose');

const CafeSchema = Schema({
    
    
    price:{
        type:Number,
         required:true
 },
    variety:{
        type:String,
        required:true
    }, 



})

const CafeModel = mongoose.model("Cafe",CafeSchema)

module.exports = CafeModel;



