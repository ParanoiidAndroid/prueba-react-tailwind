import express from "express";
import {
  createTestUser,
  getUserProfile,
  getAllUsers,
  loginUser,
  addIncome,
  addExpense,
  updateUserProfile,
  addTransaction, 
  getTransactions,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas CRUD
router.post("/create", createTestUser); // Crear usuario
router.get("/profile", protect, getUserProfile); // Obtener perfil del usuario
router.get("/all", getAllUsers); // Obtener todos los usuarios
router.post("/login", loginUser); // Login del usuario
router.put("/update-profile", protect, updateUserProfile); // Editar perfil del usuario


// Rutas del usuario
router.post("/income", protect, addIncome); // Agregar ingreso
router.post("/expense", protect, addExpense); // Registrar gasto
router.post("/transaction", protect, addTransaction); // Registrar transacción
router.get("/transactions", protect, getTransactions); // Obtener historial de transacciones


export default router;
