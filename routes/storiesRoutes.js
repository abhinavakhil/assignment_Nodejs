const express = require("express");
const storiesController = require("../controllers/storiesController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(storiesController.getTitle);

router.use(authController.protect);

router.route("/:id").get(storiesController.getStories);

router.get("/stories", storiesController.getStories);

module.exports = router;
