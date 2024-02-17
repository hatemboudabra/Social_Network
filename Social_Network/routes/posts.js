const express = require('express');
const router = express.Router();
const postControllers = require("../controllers/postControllers");
const { verifyToken, optionallyVerifyToken } = require("../middleware/auth");

/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post management
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/", optionallyVerifyToken, postControllers.getPosts);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: Post creation successful
 *       400:
 *         description: Bad request or error occurred
 */
router.post("/", verifyToken, postControllers.createPost);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/:id", optionallyVerifyToken, postControllers.getPost);

/**
 * @swagger
 * /posts/{id}:
 *   patch:
 *     summary: Update a post by ID
 *     tags: [Post]
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
 *               // Define the properties to update here
 *     responses:
 *       200:
 *         description: Post update successful
 *       400:
 *         description: Bad request or error occurred
 */

router.patch("/:id", verifyToken, postControllers.updatePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post deletion successful
 *       400:
 *         description: Bad request or error occurred
 */

router.delete("/:id", verifyToken, postControllers.deletePost);

/**
 * @swagger
 * /posts/like/{id}:
 *   post:
 *     summary: Like a post by ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to like
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.post("/like/:id", verifyToken, postControllers.likePost);

/**
 * @swagger
 * /posts/like/{id}:
 *   delete:
 *     summary: Unlike a post by ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to unlike
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.delete("/like/:id", verifyToken, postControllers.unlikePost);

/**
 * @swagger
 * /posts/liked/{id}:
 *   get:
 *     summary: Getthe posts liked by a user
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/liked/:id", optionallyVerifyToken, postControllers.getUserLikedPosts);

/**
 * @swagger
 * /posts/like/{postId}/users:
 *   get:
 *     summary: Get users who liked a post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/like/:postId/users", postControllers.getUserLikes);

module.exports = router;