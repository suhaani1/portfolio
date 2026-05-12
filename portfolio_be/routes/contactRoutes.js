const express = require("express");

const router = express.Router();

const {
  sendMessage,
  getMessages
} = require("../controllers/contactControllers");

/* Send Message */

router.post("/", sendMessage);

/* Get Messages */

router.get("/", getMessages);

module.exports = router;