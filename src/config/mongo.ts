import mongoose from "mongoose";

async function connectToMongo() {
  const mongoUri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/test?authSource=admin`;

  return await mongoose.connect(mongoUri);
}

export default connectToMongo();
