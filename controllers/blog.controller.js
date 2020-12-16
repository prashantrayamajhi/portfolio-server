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

exports.updateBlog = async (req, res, next) => {
  const id = req.params.id;
  const { title, tag, content } = req.body;
  try {
    await Blog.findByIdAndUpdate(
      { _id: id },
      { title, tag, content },
      (err, result) => {
        if (err) {
          return res.status(409).json({ error: err });
        }
        return res.status(201).json({ message: "Blog updated successfully" });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id, (err, result) => {
      if (err) {
        return res.status(409).json({ error: err });
      }
      if (result === null) {
        return res.status(404).json({ message: "Blog not found" });
      }
      return res.status(201).json({ message: "Blog deleted" });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
