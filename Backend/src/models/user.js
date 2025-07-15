import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    unique: [true, "Email already taken"],
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
});

export const UserModel = model("User", userSchema);
