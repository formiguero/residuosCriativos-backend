const express=require('express');
const cors=require('cors');
const {firebase}=require('./firebase');
const port=3000 ||process.env.PORT;


const app=express();
const userController=require('./controllers/userController');
const wasteController=require('./controllers/wasteController');
const login=require('./controllers/login');
const resetPassword=require('./controllers/resetPassword');

const auth=require('./middleware/check-auth');

app.use(express.json());

app.use(cors({origin:'http://localhost:4200'}));

app.use('/registration',userController);

app.use('/login',login);

app.use('/reset-password',resetPassword);

app.use('/waste',wasteController);

app.listen(port,()=>{console.log('APP is runnning')});

