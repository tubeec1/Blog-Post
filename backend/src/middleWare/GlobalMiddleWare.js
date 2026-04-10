let ErrorHandle = (err , req , res, next)=>{
   let statusCode =err.statusCode || 500 

   res.status(statusCode).json({
    status:false,
    message:err.message
   })
}

module.exports = ErrorHandle;