const mongoose = require("mongoose");

const {Schema} = mongoose;

const UserSchema = new Schema({
    uname:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String
    }
})

module.exports = mongoose.model("user" , UserSchema);