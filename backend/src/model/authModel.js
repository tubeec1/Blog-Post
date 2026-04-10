let con = require("../config/conn");
let Signup = async(name ,email, password ,role ,profileImges)=>{
const [result] = await con.execute("insert into users (name , email, password , role ,profile_Image)values(?,?,?,?,?)" , [name , email, password ,role, profileImges])

const [rows]= await con.execute("SELECT *from users where id =?",
  [result.insertId]
);

return rows[0];
}

let findByEmail = async(email)=>{
    const [rows] = await con.execute("select * from users where email =?",
        [email]
    );
    
    
    return rows[0];
}

module.exports={Signup , findByEmail}