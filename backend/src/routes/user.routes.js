import express from "express";
import { completeProfile } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/complete-profile", protect, completeProfile);

export default router;