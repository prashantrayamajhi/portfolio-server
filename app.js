const express = require("express");
const app = express();
const cors = require("cors");

const BlogRoute = require("./routes/blog.route");

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// route middleware
app.use("/api/blogs", BlogRoute);

module.exports = app;
