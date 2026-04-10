let multer = require("multer");

let storage = multer.diskStorage({
  destination: (req ,file, cb) => {
    cb(null, "public/profileImges/")
  },

  filename: ( req, file, cb) => {
    cb(null, `${Date.now()}_${Math.floor(Math.random() * 10)}_${file.originalname}`);
  },
});

let upload = multer({ storage });

module.exports = upload;