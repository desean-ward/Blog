import express from "express";

// Get all functions from the controller
import * as BlogPostsController from "../controllers/blog-posts";

const router = express.Router();

// Get All Blog Posts
router.get("/", BlogPostsController.getBlogPosts);

// Create A Blog Post
router.post("/", BlogPostsController.createBlogPost);

export default router;
