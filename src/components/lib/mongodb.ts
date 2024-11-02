// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://0.0.0.0:27017/diplomats";

if (!MONGODB_URI) {
   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

async function connectToDatabase(): Promise<any> {
   mongoose.connect(MONGODB_URI).then(
      (mongoose) => console.log("Database Connected"),
      (err) => console.log("Database Failed TO COnnect"),
   );
}

export default connectToDatabase;
