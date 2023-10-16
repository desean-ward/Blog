import "dotenv/config";
import express from "express";
import blogPostsRoutes from "./routes/blog-posts";
import cors from "cors";
import env from "./env";
import morgan from "morgan";

const app = express();

// Logging HTTP requests and responses 
app.use(morgan("dev"));

// Send a json body with request calls
app.use(express.json());

// Setup CORS
app.use(
  cors({
    origin: env.WEBSITE_URL,
  })
);

app.use("/posts", blogPostsRoutes);

export default app;
