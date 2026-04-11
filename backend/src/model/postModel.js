const con = require("../config/conn");

const createPost = async (title, slug, content, image, thumbnail) => {
  const [result] = await con.execute(
    "INSERT INTO posts (title, slug, content, image, thumbnail) VALUES (?, ?, ?, ?, ?)",
    [title, slug, content, image, thumbnail]
  );

  return result[0];
};

module.exports = { createPost };




// GET ALL POSTS
const getAllPosts = async () => {
  const [rows] = await con.execute(
    "SELECT * FROM posts ORDER BY id DESC"
  );

  return rows;
};

// GET SINGLE POST
const getPostById = async (id) => {
  const [rows] = await con.execute(
    "SELECT * FROM posts WHERE id = ?",
    [id]
  );

  return rows[0];
};
const updatePost = async (id, title, slug, content, image, thumbnail) => {
  const [result] = await con.execute(
    `UPDATE posts 
     SET title=?, slug=?, content=?, image=?, thumbnail=? 
     WHERE id=?`,
    [title, slug, content, image, thumbnail, id]
  );

  return result;
};

const deletePost = async (id) => {
  const [result] = await con.execute(
    "DELETE FROM posts WHERE id = ?",
    [id]
  );

  return result;
};
module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};