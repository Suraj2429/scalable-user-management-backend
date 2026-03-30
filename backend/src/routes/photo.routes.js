import express from "express";
import { uploadPhoto } from "../controllers/photo.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/upload", protect, upload.single("photo"), uploadPhoto);

export default router;