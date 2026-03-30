import { updateProfile, checkProfileCompletion } from "../services/user.service.js";
import prisma from "../config/prisma.js";

export const completeProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { name, age, gender, bio, location } = req.body;

    if (!name || !age || !gender || !bio || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user = await updateProfile(userId, {
      name,
      age,
      gender,
      bio,
      location,
    });

    const isComplete = checkProfileCompletion(user);

    user = await prisma.user.update({
      where: { id: userId },
      data: { isProfileComplete: isComplete },
    });

    res.json({
      message: "Profile updated",
      user,
    });
  } catch (error) {
  console.log("ERROR:", error); 
  res.status(500).json({ message: error.message });
}
};