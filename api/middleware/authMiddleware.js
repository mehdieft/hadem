const jwt=require('jsonwebtoken');
const verfyToken=(req,res,next)=>{
    console.log('_____>',req.headers["authorization"])
    let token=req.body.token||req.query.token||req.headers["authorization"]
    if(!token)return res.status(403).send('A token is required')
    token=token.replace(/^Bearer\s+/,"");
    const decode=jwt.verify(token,process.env.TOKEN_KEY,(error,user)=>{
        if(error)return res.status(403).send('invalid token');
        req.user=user;
         next();
    })
}
module.exports=verfyToken