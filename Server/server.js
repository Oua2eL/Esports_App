const path = require ('path');
const express = require('express');
const app = express();
require('dotenv').config();

//DB config

const connectDB = require('./config/connectDB')
connectDB()

// settings

app.use(express.json());

const cors = require('cors');
app.use(cors('http://localhost:3000'));

//routes

app.use('/api/person', require('./routers/personRoute'));
app.use('/api/post', require('./routers/postRoute'));

// rendring the front end
app.use(express.static(path.join(__dirname,'../','Client','build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','Client','build','index.html'));
});

// image path
app.use('/uploads', express.static(path.join(__dirname,'../','img-uploads')));


//server config

app.listen(process.env.PORT, (err) =>
    err
        ? console.log(err)
        : console.log(`server is running on localhost:${process.env.PORT}`)
);