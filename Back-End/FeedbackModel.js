const mongoose = require("mongoose");

const {Schema} = mongoose;

const FeedBackSchema = new Schema({
    mail:{
        type: String,
    },
    topic:{
        type:String
    },
    content:{
        type:String
    },
    updated:{
        type: Boolean,
        default:false
    },
    deleted:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("feedback" , FeedBackSchema);