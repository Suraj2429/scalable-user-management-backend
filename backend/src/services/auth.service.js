import prisma from "../config/prisma.js";

export const findOrCreateUser = async (firebaseUser) => {
  let user = await prisma.user.findUnique({
    where: { firebaseUid: firebaseUser.uid },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        firebaseUid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.name,
      },
    });
  }

  return user;
};