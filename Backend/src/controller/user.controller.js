import { User } from "../db/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne(email);
  if (!user) {
    throw new Error("User not found");
  }

  if (!password === user.password) throw new Error("Password is incorrect");

  return res
    .status(200)
    .json({ success: true, message: "user logged in successfully" });
};

const register = asyncHandler(async (req, res) => {
  console.log("req:", req.body);

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User exists, please try another email");
  }

  const newUser = await User.create(email, password);

  if (!newUser) {
    throw new Error("Something went wrong please try again");
  }

  return res
    .status(200)
    .json({ success: true, message: "user registered successfully" });
});

export { login, register };
