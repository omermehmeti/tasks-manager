
require('dotenv').config();
const express = require('express');
const server = express();
var bodyParser = require('body-parser');
const tasks = require('./routes/tasks');
const connectDb = require('./db/connect');
const notfound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const port =3000;

const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        server.listen(port, () => console.log(`server started on port ${port}; ` +
        'press Ctrl-C to terminate....'));
    } catch (error) {
        
    }
}
start();

// middleware
 server.use(bodyParser.json());
 server.use(express.static('./public'));

 // routes 
 server.get('/hello',(req,res)=>res.send('hello from server'));

 server.use('/api/v1/tasks',tasks);
 server.use(notfound);
 server.use(errorHandlerMiddleware);