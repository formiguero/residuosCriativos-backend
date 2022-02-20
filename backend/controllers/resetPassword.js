const express=require('express');

const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt = require("bcrypt");


const {db}=require('../firebase');

const sendEmail=require('../utils/sendEmail');

const JWTSecretKey='secret_private_key_@456';



router.post('/',(req,res)=>{
    const {email}=req.body;
   

    let isUserBusiness=true;

    let UserResetPassword=db.collection("Users").get().then((response)=>{
        let listEmail=[];
        response.forEach((docs)=>{
            listEmail.push(docs.data().email);


        });
        
        listEmail.forEach((emailData)=>{
            if(emailData==email){
               const token=jwt.sign({userEmail:email},JWTSecretKey,{expiresIn:'15m'});
               const link=`http://localhost:4200/new-password/${email}/${token}`;
               isUserBusiness=false;

               sendEmail(`${email}`,'Reset de Senha',`Por favor, clique no link abaixo para resetar sua senha: ${link}`);
                res.status(200).json({message:'Link Enviado ao email cadastrado'})
               
            }else{
                
                res.status(400).json({message:'Email Invalido'});
            }
        })
    });

    if(isUserBusiness){
        let UserBusinessResetPassword=db.collection("UsersBusiness").get().then((response)=>{
            let listEmail=[];
            response.forEach((docs)=>{
                listEmail.push(docs.data().email);
            });
            
            listEmail.forEach((emailData)=>{
                if(emailData==email){
                    const token=jwt.sign({userEmail:email},JWTSecretKey,{expiresIn:'15m'});
                    const link=`http://localhost:4200/new-password/${email}/${token}`;
    
    
                    sendEmail(`${email}`,'Reset de Senha',`Por favor, clique no link abaixo para resetar sua senha: ${link}`);
                    res.status(200).json({message:'Link enviado ao email cadastrado'});
                }else{
                    res.status(400).json({message:'Email Invalido'});
                }
            })
        });
    }

   
});


router.post('/:email/:token',async (req,res)=>{
    
    const {newPassword,confirmPassword}=req.body;
    let isUserBusiness=true;

    if(newPassword!==confirmPassword){
        res.status(400).json({message:'Senhas não iguais. Tente Novamente'});
    }

    const salt = await bcrypt.genSalt(10);
    let UserPassword = await bcrypt.hash(newPassword, salt);

    let UserResetPassword = db.collection("Users").where('email','==',req.params.email)
    .get()
    .then((querySnapshot)=>{
        
        querySnapshot.forEach(async (doc)=>{
            if(doc.data()){
                db.collection('Users').doc(`${doc.data().cpf}`).update({
                    password:UserPassword
                });
                isUserBusiness=false;
            }
           
        });

        
    }).catch((error)=>{
        console.log('Error in getting documentos',error);
    });

    if(isUserBusiness){
        const saltBusiness = await bcrypt.genSalt(10);
        let UserBusinessPassword = await bcrypt.hash(newPassword, saltBusiness);

        let UserBusinessResetPassword = db.collection("UsersBusiness").where('email','==',req.params.email)
        .get()
        .then((querySnapshot)=>{
            
            querySnapshot.forEach(async (doc)=>{
                if(doc.data()){
                    db.collection('UsersBusiness').doc(`${doc.data().CNPJ}`).update({
                        password:UserBusinessPassword
                    });
                    
                }
               
            });
    
            
        }).catch((error)=>{
            console.log('Error in getting documentos',error);
        });
    }






})

module.exports=router;