const express = require("express");
const router = express.Router();
const storyRoutes = require("./storyRoute");
router.use("/", storyRoutes);

module.exports = router;