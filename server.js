if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");
require("./db/db");
app.listen(8080, console.log("Listening on port 8080"));
