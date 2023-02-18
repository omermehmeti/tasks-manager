const mongoose = require('mongoose');


const connectionDB=(url) =>{
    return mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
}
module.exports= connectionDB;
