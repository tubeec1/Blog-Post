let con = require("../config/conn");

const db = require("../config/conn");

const createPost = async (title, content, image, user_id ,slug ) => {
  const [result] = await db.execute(
    "INSERT INTO posts (title, content,slug,thumbnail, image, user_id) VALUES (?, ?, ?, ? ,?,?)",
    [title, content, image, user_id ,slug ]
  );

  return result;
};

module.exports = { createPost };