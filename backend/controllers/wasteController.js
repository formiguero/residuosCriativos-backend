const express = require("express");
const router = express.Router();



const { db } = require("../firebase");




router.get('/',(req,res)=>{
    let WasteDb=db.collection('WasteRegistration');
    let WasteList=[];

    WasteDb.get().then((docs)=>{
        docs.forEach((doc)=>{
            WasteList.push(doc.data());
        })

        res.send(WasteList);
    })
})


router.post('/',async (req,res)=>{
    let WasteDb=db.collection('WasteRegistration');
   


    if(WasteDb){
        await WasteDb.add({
            name:req.body.name,
            type:req.body.type,
            sector:req.body.sector,
            imagePath:req.body.imagePath,
            description:req.body.description
        });

        console.log('Data Saved');
    }
    
})

module.exports=router;