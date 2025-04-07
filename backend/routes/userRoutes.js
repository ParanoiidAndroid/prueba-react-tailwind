import express from "express";

import {
  createTestUser,
  getUserProfile,
  getAllUsers,
  loginUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", createTestUser); //  Crear usuario
router.get("/profile", protect, getUserProfile); //  Obtener perfil
router.get("/all", getAllUsers); //  Obtener usuarios
router.post("/login", loginUser); // Login del usuario

export default router;
