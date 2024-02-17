const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { verifyToken } = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Message
 *   description: Message management
 */

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: Get conversations
 *     tags: [Message]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/", verifyToken, messageController.getConversations);

/**
 * @swagger
 * /messages/{id}:
 *   post:
 *     summary: Send a message
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the conversation
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *             required:
 *               - message
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Bad request or error occurred
 */

router.post("/:id", verifyToken, messageController.sendMessage);

/**
 * @swagger
 * /messages/{id}:
 *   get:
 *     summary: Get messages in a conversation
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the conversation
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/:id", verifyToken, messageController.getMessages);

module.exports = router;