import mongoose from "mongoose";

const MONGODB_URI = "mongodb://0.0.0.0:27017/diplomats";

if (!MONGODB_URI) {
   throw new Error("Please define the MONGODB_URI environment variable");
}

async function connectDB() {
   try {
      mongoose.connect(MONGODB_URI);
      console.log("Datebase Connected");
   } catch (e) {
      throw e;
   }
}

export default connectDB;
