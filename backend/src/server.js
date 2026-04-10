let dotenv = require("dotenv");
dotenv.config();
let app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`server waxaa laga dhageysanayaa ${process.env.PORT}`);
});
