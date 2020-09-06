const Storiees = require("../models/storiesModel");
// const User = require("../models/userModel");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getOveriew = catchAsync(async (req, res, next) => {
  const Stories = await Storiees.find({}, { content: 0 });

  res.status(200).render("overview", {
    title: "All Titles",
    Stories,
  });
});

exports.getStories = catchAsync(async (req, res, next) => {
  let query = req.params.id;

  const Stories = await Storiees.findByIdAndUpdate(
    query,
    { $inc: { counter: 1 } },
    { new: true }
  );

  //console.log("Stories", Stories);

  if (!Stories) {
    return next(new AppError("There is no stories.", 404));
  }

  //2) Build template in tour.pug

  //3) Render template using data from 1)
  res.status(200).render("stories", {
    title: "STORIES",
    Stories,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getLogout = (req, res) => {
  res.status(200).render("logout", {
    title: "Logged out",
  });
};
