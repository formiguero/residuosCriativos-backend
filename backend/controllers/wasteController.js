const express = require("express");
const router = express.Router();



const { db } = require("../firebase");




router.get('/',(req,res)=>{
    let WasteDb=db.collection('WasteRegistration');
    let WasteList=[];

    WasteDb.get().then((docs)=>{
        docs.forEach((doc)=>{
            WasteList.push({id:doc.id,data:doc.data()});
        })

        res.send(WasteList);
    })
})


router.post('/',async (req,res)=>{
    let WasteDb=db.collection('WasteRegistration');
    let UserDbBusiness = db.collection("UsersBusiness").doc(`${req.body.cnpj}`);

    UserDbBusiness.get().then(async (doc)=>{

        await WasteDb.add({
            cnpj:req.body.cnpj,
            phone:doc.data().phone,
            email:doc.data().email,
            name:req.body.name,
            type:req.body.type,
            sector:req.body.sector,
            imagePath:req.body.imagePath,
            description:req.body.description
        });

        console.log('Data saved');

    })

    
});

router.delete('/:id',(req,res)=>{
    
})



module.exports=router;