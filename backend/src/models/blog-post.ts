import { InferSchemaType, Schema, model } from "mongoose";

// Create a schema for the blog post
const blogPostSchema = new Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    body: { type: String, required: true }
}, { timestamps: true })

// Create a BlogPost Schema Type
type BlogPost = InferSchemaType<typeof blogPostSchema>;

export default model<BlogPost>("BlogPost", blogPostSchema)