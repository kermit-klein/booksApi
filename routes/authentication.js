const express = require("express");
const router = express.Router();
const authenticationsController = require("../controllers/authenticationsController");

router.post("/login", authenticationsController.login);

module.exports = router;
