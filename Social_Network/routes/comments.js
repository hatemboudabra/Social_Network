const express = require('express');
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");
const { verifyToken } = require("../middleware/auth");

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Comment management
 */

/**
 * @swagger
 * /comments/{id}:
 *   patch:
 *     summary: Update a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *             required:
 *               - content
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Bad request or error occurred
 */

router.patch("/:id", verifyToken, commentControllers.updateComment);

/**
 * @swagger
 * /comments/{id}:
 *   post:
 *     summary: Create a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *             required:
 *               - content
 *     responses:
 *       200:
 *         description: Comment created successfully
 *       400:
 *         description: Bad request or error occurred
 */

router.post("/:id", verifyToken, commentControllers.createComment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       400:
 *         description: Bad request or error occurred
 */

router.delete("/:id", verifyToken, commentControllers.deleteComment);

/**
 * @swagger
 * /comments/post/{id}:
 *   get:
 *     summary: Get comments for a post
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/post/:id", commentControllers.getPostComments);

/**
 * @swagger
 * /comments/user/{id}:
 *   get:
 *     summary: Get comments by a user
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/user/:id", commentControllers.getUserComments);

module.exports = router;