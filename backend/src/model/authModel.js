let con = require("../config/conn");
let Signup = async (name, email, gender, password, role, profileImge) => {
  const [result] = await con.execute(
    "insert into users (name , email, gender, password , role ,profile_Image)values(?,?,?,?,?,?)",
    [name, email, gender, password, role, profileImge],
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

module.exports = { Signup, findByEmail };
