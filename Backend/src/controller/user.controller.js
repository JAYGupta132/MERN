import { UserModel } from "../models/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ userEmail: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (!password === user.password) {
      return res
        .status(401)
        .json({ success: false, message: "Password incorrect" });
    }

    return res
      .status(200)
      .json({ success: true, message: "user logged in successfully", user });
  } catch (error) {
    console.error(error);
  }
};

const register = asyncHandler(async (req, res) => {
  const payload = req.body;

  const user = await UserModel.findOne({ email: payload.email });
  if (user) {
    return res.status(409).json({
      success: false,
      message: "User exists with this email, please use another one",
    });
  }

  const newUser = await UserModel.create(...payload);

  if (!newUser) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong! please try again later",
    });
  }

  return res
    .status(200)
    .json({ success: true, message: "user registered successfully" });
});

export { login, register };
