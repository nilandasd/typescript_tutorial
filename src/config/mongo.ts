import mongoose from "mongoose";

async function connectToMongo() {
  const mongoUri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/test?authSource=admin`;

  try {
    let db = await mongoose.connect(mongoUri);
    return db;
  } catch (error: any) {
    throw error;
  }
}

export default connectToMongo();
