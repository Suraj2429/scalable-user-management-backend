import prisma from "../config/prisma.js";

export const uploadPhoto = async (req, res) => {
  try {
    const userId = req.user.userId;

    const existingPhotos = await prisma.photo.count({
      where: { userId },
    });

    if (existingPhotos >= 9) {
      return res.status(400).json({
        message: "Maximum 9 photos allowed",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const photo = await prisma.photo.create({
      data: {
        url: req.file.path,
        userId,
      },
    });

    res.json({
      message: "Photo uploaded",
      photo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Upload failed",
    });
  }
};