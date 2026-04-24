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

const getAllPosts = async (order) => {
  const [rows] =
   
      await con.execute(`
    SELECT 
      users.name AS "userName",
      users.email AS "userEmail",
      users.gender AS "userGender",
      users.role AS "userRole",
      users.profile_image AS "userProfileImage",

      posts.id AS "PostId",
      posts.title AS "postTitle",
      posts.slug AS "postSlug",
      posts.content AS "postContent",
      posts.thumbnail AS "postThumbnail",
      posts.image AS "postImage",
      posts.created_at AS "postCreatedAt",

      categories.name AS "categoryName",
      categories.slug AS "categorySlug"

    FROM posts
    LEFT JOIN users ON posts.user_id = users.id
    LEFT JOIN categories ON posts.category_id = categories.id

    ORDER BY posts.created_at ${order}
  `);


  return rows;
};
let getPostsByPageAndLimit = async (page, limit, offset, order) => {
  
const [rows] = await con.execute(
  `
  SELECT 
    users.name AS "userName",
    users.email AS "userEmail",
    users.gender AS "userGender",
    users.role AS "userRole",
    users.profile_image AS "userProfileImage",

    posts.id AS "PostId",
    posts.title AS "postTitle",
    posts.slug AS "postSlug",
    posts.content AS "postContent",
    posts.thumbnail AS "postThumbnail",
    posts.image AS "postImage",
    posts.created_at AS "postCreatedAt",

    categories.id AS "category_id",        
    categories.name AS "categoryName",
    categories.slug AS "categorySlug"

  FROM posts
  LEFT JOIN users ON posts.user_id = users.id
  LEFT JOIN categories ON posts.category_id = categories.id  

  ORDER BY posts.created_at ${order}
  LIMIT ? OFFSET ?
  `,
  [limit, offset]
);

return rows;
}
const getPostById = async (id) => {
  const [rows] = await con.execute("SELECT * FROM posts WHERE id = ?", [id]);

  return rows[0];
};
const updatePost = async (
  userId,
  categoryId,
  postId,
  title,
  slug,
  content,
  image,
  thumbnail,
) => {
  const [result] = await con.execute(
    `UPDATE posts 
     SET user_id=?, category_id=?, title=?, slug=?, content=?, image=?, thumbnail=? 
     WHERE id=?`,
    [userId, categoryId, title, slug, content, image, thumbnail, postId],
  );

  return result.affectedRows;
};

const deletePost = async (postId) => {
  const [result] = await con.execute("DELETE FROM posts WHERE id = ?", [
    postId,
  ]);

  return result.affectedRows;
};
const countPosts = async () => {
  const [rows] = await con.query("SELECT COUNT(*) AS count FROM posts");
  return rows[0].count;
};
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsByPageAndLimit,
  countPosts
};
