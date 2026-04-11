const asyncHandler = require("../utilits/AsynHandler");
const postService = require("../service/postService");
 
const createPost = asyncHandler(async (req, res) => {
console.log("body:" ,req.body)
console.log("file:" ,req.file)

 let { title, content  ,slug} = req.body;
  let image = req.file ? `postImages/${req.file.filename}` : null;
 let thumbnail = image;
  let user_id = req.user.id;

  let response = await postService.createPost(
    title,
    content,
    image,
    user_id,
    slug,
 
  );
  return res.json(response)
})
  

module.exports = { createPost };