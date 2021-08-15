'use strict';

const express = require('express');
const errorHandller=require('./error-handller/500');
const pageNotFound=require('./error-handller/404');


const app = express();
const {basicAuth,middelSignUp }=require('./auth/auth.middelwear')
app.use(express.json());

// console.log(middelSignUp)
// app.use(express.urlencoded({extended: true}));

// const Users = sequelize.define('users', {
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true // CONSTRAINT
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });
// console.log(Users)

app.get('/',(req,res)=>{
    res.send('hello m3lem 😛')
})



app.post('/signup',middelSignUp ,(req, res, next) => {
  
    res.status(201).json(req.record);

});


app.post('/signin', basicAuth, (req, res, next)=> {

 res.status(200).json({username: req.username ,id :req.user.id})
    
});


app.use('*',pageNotFound)
app.use(errorHandller)



module.exports={
    app 
    
    
}