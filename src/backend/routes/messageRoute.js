const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/:userId/:otherUserId", messageController.getMessagesWithUser);
router.post("/", messageController.sendMessage);

module.exports = router;
