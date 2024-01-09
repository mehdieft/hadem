const express=require('express');
require('dotenv').config()
require('./db');
const app=express();
const morgan=require('morgan');
const Port=process.env.PORT
const cors=require('cors');
const appRootPath=require('app-root-path')
require('express-async-errors');
const videoRoutes=require('./routes/Admin/videoRoutes');
const AdminAuthRoutes=require('./routes/Admin/authenticationRoutes')
const VideoRoutes=require('./routes/Admin/videoRoutes')
const shahidManagment=require('./routes/Admin/shahidRoutes');
const userUsageRoutes=require('./routes/User/usageRoutes')



const ImageRoute=require('./routes/Admin/imageRoutes')






app.use(express.json())
app.use(cors('http://localhost:3000'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use('/api/admin/imageManagment',ImageRoute)
app.use('/api/admin/videoManagment',videoRoutes)
app.use('/api/admin/videoMangement',VideoRoutes)
app.use('/api/admin/shahidManagment',shahidManagment)
app.use('/api/auth',AdminAuthRoutes);
app.use('/api/user',userUsageRoutes);

app.use('/static',express.static(appRootPath + '/public' ))
app.use('/uploads', express.static('./public/uploads'));
app.all('*',(req,res,next)=>{
    const err =new Error(`cant find ${req.originalUrl} on this server`)
})


app.listen(4848,()=>{
    console.log('port is listen on '+ 4848)
})