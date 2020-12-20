const route = require("express").Router();
const controller = require("./../controllers/blog.controller");

route.get("/", controller.getBlogs);

route.get("/:id", controller.getOneBlog);

route.post("/", controller.postBlog);

route.patch("/:id", controller.updateBlog);

route.delete("/:id", controller.deleteBlog);

module.exports = route;
