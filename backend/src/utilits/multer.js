let multer = require("multer");
let path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, path.join(__dirname, "../../../backend/public/profileImges/"));
    } else if (file.fieldname === "postImages") {
      cb(null, "public/postImages/images/");
    } else if ((file.filename = "postThumbnail")) {
      cb(null, "public/postImages/thumbnails/");
      cb(null, "public/profileImages/");

    } else if (file.fieldname === "image") {
      cb(null, "public/postImages/postImage/");
    } else if (file.fieldname === "thumbnail") {

    } 
    else if (file.fieldname === 
      "image") {
        cb(null, "public/postImages/postImage/");
    } 
    else if (file.fieldname === "thumbnail") {

      cb(null, "public/postImages/postThumbnail/");
    } else {
      cb(new Error("Invalid field name"), false);
    }
  },

  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}_${Math.floor(Math.random() * 10)}_${file.originalname}`,
    );
  },
});

let upload = multer({ storage });

module.exports = upload;
