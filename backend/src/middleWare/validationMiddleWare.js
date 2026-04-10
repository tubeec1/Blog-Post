 
 
let {validationResult} = require("express-validator");

let authMidleWareValidation = (req ,res ,next)=>{
  const errors =validationResult(req)

  if(!errors.isEmpty()){
    return res.json({
        status:false,
        errors:errors.array()
    })
  }
 next() ;
}

module.exports ={authMidleWareValidation};