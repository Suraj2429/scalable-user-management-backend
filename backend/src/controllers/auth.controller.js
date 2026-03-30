import admin from "../config/firebase.js";
import { findOrCreateUser } from "../services/auth.service.js";
import { generateToken } from "../utils/jwt.js";

export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "Token required" });
    }

    const decoded = await admin.auth().verifyIdToken(idToken);

    const user = await findOrCreateUser(decoded);

    const token = generateToken(user);

    res.json({
      token,
      user,
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(401).json({ message: "Invalid Firebase token" });
  }
};