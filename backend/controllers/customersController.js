const express = require("express");
const router = express.Router();

const { db } = require("../firebase");

router.get('/',async (req,res)=>{
    let listCustomer=[];
    let Customers = db.collection("Customers");

    

    Customers.get().then((docs)=>{
        docs.forEach((doc)=>{
            
            listCustomer.push({id:doc.id,data:doc.data()});
        })
        res.send(listCustomer);
    })


})


router.post('/',async (req,res)=>{
    let Customers = db.collection("Customers");

    console.log(req.body);

   if(req.body){
        await Customers.add({
            CustomerName:req.body.CustomerName,
            CustomerCpf:req.body.CustomerCpf,
            SupplierCnpj:req.body.SupplierCnpj,
            ProductName:req.body.ProductName,
            Description:req.body.Description,
            Sector:req.body.Sector,
            Type:req.body.Type,
            Selected:req.body.Selected
    
    
        });
        console.log('Data Saved');
    }

  
});

router.put('/:id',async(req,res)=>{
    let Customers = db.collection("Customers");
    
    
    if(req.params.id){

        Customers.get().then(async (docs)=>{
            docs.forEach(async (doc)=>{
                
               if(doc.id===req.params.id){
                   let Selected=doc.data().Selected;

                   await Customers.doc(`${req.params.id}`).update({
                    Selected:!Selected
                })

               }
            })
            
        })


     
    }
})


router.delete('/:id',async (req,res)=>{
    let Customers = db.collection("Customers");

    if(req.params.id){
        await Customers.doc(`${req.params.id}`).delete().then(()=>{
            console.log('Data Deleted')
            res.status(200).send({message:'Dado deletado com sucesso'});
        }).catch((error)=>{
            res.status(400).send({message:'Erro ao excluir o Dado'});
        })
    }
    
    

})

module.exports=router;