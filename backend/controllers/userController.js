const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");


const { db } = require("../firebase");





router.get("/", (req, res) => {
  let UsersData = db.collection("Users");
  let UsersBusinessData = db.collection("UsersBusiness");
  let listUser = [];
  UsersData.get().then((docs) => {
    docs.forEach((doc) => {
      listUser.push(doc.data());
    });
  });

  UsersBusinessData.get().then((docs) => {
    docs.forEach((doc) => {
      listUser.push(doc.data());
    
    });
    res.send(listUser);
  });

  

});

router.post("/", async (req, res) => {
  if (req.body.cpf) {
    let UserDb = db.collection("Users").doc(`${req.body.cpf}`);

    const salt = await bcrypt.genSalt(10);
    let UserPassword = await bcrypt.hash(req.body.password, salt);

    if (UserDb) {
      await UserDb.set({
        name: req.body.name,
        cpf: req.body.cpf,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        phone: req.body.phone,
        email: req.body.email,
        password: UserPassword,
      });

     

      console.log("Data saved");
    }
  }

  if (req.body.cnpj) {
    let UserDbBusiness = db.collection("UsersBusiness").doc(`${req.body.cnpj}`);

    const salt = await bcrypt.genSalt(10);
    let UserPasswordBusiness = await bcrypt.hash(req.body.password, salt);

    if (UserDbBusiness) {
      await UserDbBusiness.set({
        social: req.body.social,
        name: req.body.name,
        businessCategory: req.body.businessCategory,
        CNPJ: req.body.cnpj,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        phone: req.body.phone,
        email: req.body.email,
        password: UserPasswordBusiness,
      });

      console.log("Data saved");
    }
  }

  console.log(req.body);
});

module.exports = router;
