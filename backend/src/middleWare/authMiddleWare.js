let jwtHandler =require("../utilits/jwt")
let authMidle = async(req , res ,next)=>{
let authorization = req.headers.authorization;

 if(!authorization){
    return res.json({
        status:false,
        message:"There is nontoken"
    });
 }


 let token=authorization.split(" ")[1];

 let response = await jwtHandler.verifyToken(token);
 

 if(!response.status){
    return res.json(response)
  }
 let user ={
  id:response.result.id,
  role:response.result.role,
 };
 req.user = user;
 next();
};

module.exports =authMidle;
