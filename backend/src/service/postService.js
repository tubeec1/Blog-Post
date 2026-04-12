
const postModel = require("../model/postModel");

const createPost = async (title, slug, content, image, thumbnail) => {
  let response = await postModel.createPost(title, slug, content, image, thumbnail);
 
    return {
      status: true,
      message: "Post created successfully",
      data: response,
    };
};





const getAllPosts = async (page , limit ,offset) => {
  let response= await postModel.getAllPosts(page ,limit ,offset);

  return{
    status:true,
      message:"successfully Reading",
    data:response,
  }
};


const getPostById = async (id) => {
  let response= await postModel.getPostById(id);
    return{
    status:true,
    data:response,
  }
};
const updatePost = async (id, title, slug, content, image, thumbnail) => {
  let response =await postModel.updatePost(
    id,
    title,
    slug,
    content,
    image,
    thumbnail
  );
   return{
    status:true,
    message:"successfully updated",
    data:response
   }

};
const deletePost = async (id) => {
  let response= await postModel.deletePost(id);
  return{
    status:true,
    message:"successfully deleted",
  

  }
};


module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};