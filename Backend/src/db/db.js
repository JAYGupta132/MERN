import mongoose from "mongoose";

const connect = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.DB_URI);
    console.log("DB connect successfully");
    return dbConnection;
  } catch (error) {
    console.log("Failed to connect DB");
  }
};

export default connect;
