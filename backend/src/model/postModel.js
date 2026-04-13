const con = require("../config/conn");

const createPost = async (
  userId,
  categoryId,
  title,
  slug,
  content,
  image,
  thumbnail,
) => {
  const [result] = await con.execute(
    "INSERT INTO posts (user_id,category_id, title, slug, content, image, thumbnail) VALUES (?,?,?, ?, ?, ?, ?)",
    [userId, categoryId, title, slug, content, image, thumbnail],
  );

  return result[0];
};

module.exports = { createPost };

const getAllPosts = async () => {
  const [rows] = await con.execute("SELECT * FROM posts ORDER BY id DESC");

  return rows;
};

const getPostById = async (id) => {
  const [rows] = await con.execute("SELECT * FROM posts WHERE id = ?", [id]);

  return rows[0];
};
const updatePost = async (id, title, slug, content, image, thumbnail) => {
  const [result] = await con.execute(
    `UPDATE posts 
     SET title=?, slug=?, content=?, image=?, thumbnail=? 
     WHERE id=?`,
    [title, slug, content, image, thumbnail, id],
  );

  return result;
};

const deletePost = async (id) => {
  const [result] = await con.execute("DELETE FROM posts WHERE id = ?", [id]);

  return result;
};
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
