const {mongoose, Schema} = require('mongoose');

const userSchema = Schema({
   
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,

   },

    password:{
        type: String,
        required: true,

   },

    age:{
        type: Number,
        required: true,
        


    }


})



const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;