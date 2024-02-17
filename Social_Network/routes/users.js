const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { check } = require("express-validator");
const { verifyToken } = require("../middleware/auth");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registration successful
 *       400:
 *         description: Bad request or error occurred
 */

router.post("/register", userControllers.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User login successful
 *       400:
 *         description: Bad request or error occurred
 */

router.post("/login", userControllers.login);

/**
 * @swagger
 * /random:
 *   get:
 *     summary: Get random users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/random", userControllers.getRandomUsers);

/**
 * @swagger
 * /{username}:
 *   get:
 *     summary: Get user by username
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The username of the user
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.get("/:username", userControllers.getUser);

/**
 * @swagger
 * /{id}:
 *   patch:
 *     summary: Update user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User update successful
 *       400:
 *         description: Bad request or error occurred
 */

router.patch("/:id", verifyToken, userControllers.updateUser);

/**
 * @swagger
 * /follow/{id}:
 *   post:
 *     summary: Follow a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to follow
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.post("/follow/:id", verifyToken, userControllers.follow);

/**
 * @swagger
 * /unfollow/{id}:
 *   delete:
 *     summary: Unfollow a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to unfollow
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request or error occurred
 */

router.delete("/unfollow/:id", verifyToken, userControllers.unfollow);

/**
 * @swagger
 * /followers/{id}:
 *   get:
 *     summary: Getfollowers of a user by ID
 *     tags: [User]
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

router.get("/followers/:id", userControllers.getFollowers);

/**
 * @swagger
 * /following/{id}:
 *   get:
 *     summary: Get following users of a user by ID
 *     tags: [User]
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

router.get("/following/:id", userControllers.getFollowing);

module.exports = router;