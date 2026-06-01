import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

export const signup = async (user) => {
  try {
    // ... (existing user check logic)

    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);

    // ... Simulate user creation (replace with actual database logic)

    return { username: user.username, email: user.email, hashedPassword };
  } catch (error) {
    console.log("Error in signup:", error);
    throw new Error("Signup failed", error);
  }
};

export const signin = async (credentials) => {
  try {
    if(!credentials.email || !credentials.password){
      throw new Error("Email and password are required");
    }

    //Get user and compare password logic here (replace with actual database logic)
    //Hash the provided password and compare with stored hashed password
    // If authentication is successful, return user data or token

    return { message: "Signin successful", user: { email: credentials.email } };
  } catch (error) {
    console.log("Error in signin:", error);
    throw new Error("Signin failed", error);
  }
};
