import "dotenv/config";
import express from "express";
import blogPostsRoutes from "./routes/blog-posts";

const app = express();

// Send a json body with request calls
app.use(express.json());

app.use("/posts", blogPostsRoutes);

export default app;
