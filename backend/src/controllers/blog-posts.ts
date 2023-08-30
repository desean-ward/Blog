import { RequestHandler } from "express";
import BlogPostModel from "../models/blog-post";

export const getBlogPosts: RequestHandler = async (req, res, next) => {
  try {
    // Get all blog posts
    const allBlogPosts = await BlogPostModel.find().exec();
    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Create a blog post interface
interface BlogPostBody {
  slug: string,
  title: string,
  summary: string,
  body: string,
}

export const createBlogPost: RequestHandler<unknown, unknown, BlogPostBody, unknown> = async (req, res, next) => {
  // Deconstruct to body of the request
  const { slug, title, summary, body } = req.body;

  try {
    // Create a new post from the request body
    const newPost = await BlogPostModel.create({
      slug, title, summary, body
    })

    // Status 201 indicates a new resource was created
    res.status(201).json(newPost)
    
  } catch (error) {
    res.status(500).json({ error });
  }
};
