const Blog = require("./../models/blogs.model");
const Blogs = require("./../models/blogs.model");

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.find();
    if (blogs.length === 0) {
      return res.status(200).json({ message: "No blogs available" });
    }
    return res.status(200).json({ message: blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.postBlog = async (req, res, next) => {
  const { title, tag, content } = req.body;
  const blog = new Blog({
    title,
    tag,
    content,
  });
  try {
    const saved = await blog.save();
    if (saved) {
      return res.status(201).json({ message: saved });
    }
    return res.status(409).json({ error: "Server error" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateBlog = (req, res, next) => {
  const id = req.params.id;
  
};

exports.deleteBlog = (req, res, next) => {};
