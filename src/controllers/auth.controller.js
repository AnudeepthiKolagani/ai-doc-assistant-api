import {
  signup as signupService,
  signin as signInService,
} from "../services/auth.service.js";

// Handle user signin
export const signin = async (req, res) => {
  try {
    const user = await signInService(req.body);
    res
      .status(200)
      .json({ success: true, message: "Signin successful", user: user });
  } catch (error) {
    console.log("Error in signin:", error);
    res
      .status(500)
      .json({ success: false, message: "Signin failed", error: error });
  }
};

// Handle user signup
export const signup = async (req, res) => {
  try {
    const user = await signupService(req.body);
    res
      .status(201)
      .json({ success: true, message: "Signup successful", user: user });
  } catch (error) {
    console.log("Error in signup:", error);
    res
      .status(500)
      .json({ success: false, message: "Signup failed", error: error });
  }
};
