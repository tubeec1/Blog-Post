
let authservice =require("../service/authServer");
let asyncHandler =require("../utilits/AsynHandler")
let Signup = asyncHandler(
    async(req ,res)=>{

 let data = req.body;
  console.log( "maxaa ku jira",req.body)
  console.log( "maxaa yihiin",req.file)
 let name =data.name;
 let email  = data.email;
 let password = data.password;
 let role ="user";
 let profileImges =`profileImges/${req.file.filename}`
let response = await authservice.Signup(name,email,password,role,profileImges)

return res.json(response);

}
)


let login =asyncHandler(
    async (req ,res)=>{
let user=req.body;
let email =user.email;
let password = user.password;
 let response =  await authservice.login(email , password);

  return res.json(
  response
)
}
)
module.exports ={Signup ,login}