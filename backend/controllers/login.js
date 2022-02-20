const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

const { db } = require("../firebase");


router.post('/',async (req,res)=>{
    const {email,password}=req.body;

    let isUserBusiness=true;


    if(!(email && password)){
        res.status(400).send('All input is required');
    }

    let UserLogin = db.collection("Users").where('email','==',req.body.email)
    .get()
    .then((querySnapshot)=>{
        
        querySnapshot.forEach(async (doc)=>{
           if(doc.data() && (await bcrypt.compare(password,doc.data().password))){
                const token=jwt.sign({email:doc.data().email,cpf:doc.data().cpf},'secret_private_key_@456',{expiresIn:'1h'});
                res.status(200).json({
                    token:token,
                    expiresIn:3600,
                    email:doc.data().email,
                    cpf:doc.data().cpf,
                    name:doc.data().name
                })
                isUserBusiness=false;
           }else{
          
               res.status(401).json({message:'Invalid Authentication'})
           }
        });

        
    }).catch((error)=>{
        console.log('Error in getting documentos',error);
    });

    if(isUserBusiness){
        let UserBusinessLogin = db.collection("UsersBusiness").where('email','==',req.body.email)
        .get()
        .then((querySnapshot)=>{
            
            querySnapshot.forEach(async (doc)=>{
               if(doc.data() && (await bcrypt.compare(password,doc.data().password))){
                    const token=jwt.sign({email:doc.data().email,cnpj:doc.data().CNPJ},'secret_private_key_@456',{expiresIn:'1h'});
                    res.status(200).json({
                        token:token,
                        expiresIn:3600,
                        email:doc.data().email,
                        cnpj:doc.data().CNPJ
                    })
               }else{
                   res.status(401).json({message:'Invalid Authentication'})
               }
            });
    
            
        }).catch((error)=>{
            console.log('Error in getting documentos',error);
        });
    
    }


   
    
})



module.exports=router;