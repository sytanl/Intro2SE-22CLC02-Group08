const express = require("express");
const router = express.Router();
const supportController = require("../controllers/supportController");

router.post("/", supportController.sendMessage);
router.get("/:userId", supportController.getMessages);


module.exports = router;
