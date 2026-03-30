import prisma from "../config/prisma.js";

export const requireCompleteProfile = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user.isProfileComplete) {
      return res.status(403).json({
        message: "Complete your profile first",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking profile" });
  }
};