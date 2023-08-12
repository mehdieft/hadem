const express=require('express');
require('dotenv').config()
require('./db');
const app=express();
const morgan=require('morgan');
const Port=process.env.PORT
const cors=require('cors');
const appRootPath=require('app-root-path')
require('express-async-errors');



const ImageRoute=require('./routes/Admin/imageRoutes')







app.use(express.json())
app.use(cors('http://localhost:3000'));
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use('/api',ImageRoute)
app.use('/static/',express.static(appRootPath + '/public' ))
app.all('*',(req,res,next)=>{
    const err =new Error(`cant find ${req.originalUrl} on this server`)
})


app.listen(Port,()=>{
    console.log('port is listen on '+ Port)
})