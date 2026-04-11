let multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, "public/profileImges/");
    } else if (file.fieldname === "postImage") {
      cb(null, "public/postImages/images/");
    } else if ((file.filename = "postThumbnail")) {
      cb(null, "public/postImages/thumbnails/");
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
