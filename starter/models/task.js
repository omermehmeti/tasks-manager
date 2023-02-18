const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 chars']
    },
    completed:{
        type:Boolean,
        default:false,
    },
})
module.exports = mongoose.model('Task',TaskSchema);