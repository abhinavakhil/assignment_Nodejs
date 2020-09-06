// this route is for views template(pug) here router.route is not required
const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewController.getOveriew);
router.get(
  "/stories/:id",
  authController.protect,
  authController.isLoggedIn,
  viewController.getStories
);

// login
router.get("/login", authController.isLoggedIn, viewController.getLoginForm);
router.get("/logout", viewController.getLogout);

module.exports = router;
