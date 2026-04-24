let con = require("../config/conn");
let Signup = async (name, email,  password, role, gender,  profileImage) => {
 
  const [result] = await con.execute(
    "insert into users (name , email,  password , role , gender, profile_image)values(?,?,?,?,?,?)",
    [name, email, password,   role,gender, profileImage],
  );
  
  const [rows] = await con.execute("SELECT *from users where id =?", [
   
    result.insertId,
  ]);
  
  return rows[0];

 
};

let findByEmail = async (email) => {
  const [rows] = await con.execute("select * from users where email =?", [
    email,
  ]);

  return rows[0];
};
let findById = async (id) => {
  const [rows] = await con.execute("select * from users where id =?", [
    String(id),
  ]);

  return rows[0];
};

let updateProfile = async (
  name,
  email,
  password,
  gender,
  role,
  profileImage,
) => {
  let response = await con.execute(
    "update users set name=?, password=?, gender=?, role=?, profile_image=? where email=?",
    [name, password, gender, role, profileImage, email],
  );
  return response[0].affectedRows;
};


const countUsers = async () => {
  const [rows] = await con.query("SELECT COUNT(*) AS count FROM users");
  return rows[0].count;
};



module.exports = { Signup, findByEmail, updateProfile, findById ,countUsers};
