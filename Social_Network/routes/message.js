const express = require('express')
const route = express.Router();
const messageController = require('../controllers/messageController');
const {verifyToken} = require('../middleware/auth');
router.get("/", verifyToken, messageController.getConversations);
router.post("/:id", verifyToken, messageController.sendMessage);
router.get("/:id", verifyToken, messageController.getMessages);

module.exports = router;