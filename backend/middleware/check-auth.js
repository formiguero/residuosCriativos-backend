const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{

    console.log(req);

    const token=req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token){
        return res.status(403).send('A token is required for authentication');

    }

    try{
        const decoded=jwt.verify(token,'secret_private_key_@456');
        return res.status(200).send('Welcome');
    }catch(err){
        return res.status(401).send('Invalid Token');
    }

    return next();
}

module.exports=verifyToken;