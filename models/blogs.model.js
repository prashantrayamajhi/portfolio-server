const mongoose = require("mongoose");
const date = require("date-and-time");

const now = new Date();
const time = date.format(now, "ddd, MMM DD YYYY");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    default: time,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
