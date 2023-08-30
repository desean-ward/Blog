import mongoose from "mongoose";
import app from "./app";
import env from "./env";

const port = process.env.PORT;

// Connect Mongoose to the db
mongoose.connect(env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
  app.listen(port, () => console.log(`Server running on port: ${port}`));
});
