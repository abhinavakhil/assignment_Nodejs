const mongoose = require("mongoose");

const storieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A story must have a title"],
    unique: true,
    trim: true,
    maxlength: [40, "A story title must have less or equal than 40 characters"],
    minlength: [10, "A story title must have more or equal than 10 characters"],
  },
  content: {
    type: String,
    trim: true,
  },
  counter: {
    type: Number,
    required: true,
  },
});

const Stories = mongoose.model("Stories", storieSchema);

module.exports = Stories;
