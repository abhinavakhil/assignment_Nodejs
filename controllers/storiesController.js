const Stories = require("../models/storiesModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getTitle = catchAsync(async (req, res) => {
  const stories = await Stories.find({}, { content: 0 });
  res.status(200).json({
    status: "success",
    result: stories.length,
    data: {
      stories,
    },
  });
});

exports.getStories = catchAsync(async (req, res, next) => {
  // counter
  const counter = await Stories.findByIdAndUpdate(
    req.params.id,
    { $inc: { counter: 1 } },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: {
      visits: counter,
    },
  });
});

// PUG
exports.getOverview = catchAsync(async (req, res, next) => {
  const stories = await Stories.find({}, { content: 0 });

  res.status(200).render("overview", {
    title: "stories title",
    stories,
  });
});
