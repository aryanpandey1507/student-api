const e = require('express');
const express = require('express');
const { del } = require('express/lib/application');
require('./db/conn');
const Student = require('./models/students')
const app = express();
const port = process.env.PORT || 3000


const studentRouter = require('./routers/student')

//creating an express router
//const router = new express.Router();        // initiating a new router
// registering the router
app.use(studentRouter);
app.use(express.json());

app.listen(port ,()=>{
    console.log(`connection is setup at ${port} `);
})


// you do not need express.json() and express.urlencoded()
// for get and delete requests . We require it for post and put

// express.json() is a method inbuilt in express to recognize the incoming 
// request object as a json object . this method is called as a middleware
// in your applications using the code app.use(express.json());

 