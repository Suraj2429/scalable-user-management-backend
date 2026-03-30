import prisma from "../config/prisma.js";

export const updateProfile = async (userId, data) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data,
  });

  return updatedUser;
};

export const checkProfileCompletion = (user) => {
  return Boolean(
    user.name &&
    user.age &&
    user.gender &&
    user.bio &&
    user.location
  );
};