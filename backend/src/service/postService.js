const postModel = require("../model/postModel");

const createPost = async (title, content, image, user_id ,slug) => {
  let response= await postModel.createPost(title, content, image, user_id ,slug );

  return res.json({
    success: true,
    message: "Post created successfully",
    post: response,
  });

};

module.exports = { createPost };