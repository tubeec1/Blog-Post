let multer = require("multer");
let path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, path.join(__dirname, "../../../backend/public/profileImges/"));
    } else if (file.fieldname === "image") {
      cb(
        null,
        path.join(__dirname, "../../../backend/public/postsImages/postImages/"),
      );
    } else if ((file.filename = "thumbnail")) {
      cb(
        null,
        path.join(
          __dirname,
          "../../../backend/public/postsImages/postThumbnails/",
        ),
      );
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
