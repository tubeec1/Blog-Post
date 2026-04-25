const con = require("../config/conn");
const { countCategories } = require("./categoryModel");

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
  const [rows] = await con.execute(`
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
    [limit, offset],
  );

  return rows;
};
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

let getPostsBySearch = async (order, search) => {
  const safeOrder = order === "ASC" ? "ASC" : "DESC";
  const cleanSearch = search.trim();

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

    WHERE LOWER(posts.title) LIKE LOWER(?)
    ORDER BY posts.created_at ${safeOrder}
    `,
    [`%${cleanSearch}%`],
  );

  return rows;
};

const deletePost = async (postId) => {
  const [result] = await con.execute("DELETE FROM posts WHERE id = ?", [
    postId,
  ]);

  return result.affectedRows;
};
const countPosts = async () => {
  const [countPosts] = await con.execute("SELECT COUNT(*) AS count FROM posts");
  const [countCategories] = await con.execute(
    "select count(*) as count from categories",
  );
  const [countUsers] = await con.execute("select count(*) as count from users");
  let stats = {
    countPosts: countPosts[0].count,
    countUsers: countUsers[0].count,
    countCategories: countCategories[0].count,
  };
  return stats;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsByPageAndLimit,
  countPosts,
  getPostsBySearch,
};
