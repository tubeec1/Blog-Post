let multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, "public/profileImges/");
    } else if (file.fieldname === "image") {
      cb(null, "public/postImages/");
    }
  },

  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}_${Math.floor(Math.random() * 10)}_${file.originalname}`
    );
  },
});

let upload = multer({ storage });

module.exports = upload;