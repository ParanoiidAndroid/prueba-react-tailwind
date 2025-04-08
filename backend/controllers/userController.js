import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import Transaction from "../models/transactionModel.js";

// Generar token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
};

// Crear nuevo usuario
export const createTestUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const user = await User.create({ name, email, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        balance: user.balance,
        createdAt: user.createdAt,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Datos inválidos del usuario" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

// Login de usuario
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        balance: user.balance,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error: error.message  });
  }
};

// Prueba con el usuario p
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el perfil", error });
  }
};


// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};


// Agregar ingreso
export const addIncome = async (req, res) => {
  try {
    const { amount, description } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Monto inválido" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    user.balance += amount;
    await user.save();

    // Crear transacción
    const transaction = await Transaction.create({
      user: req.user.id,
      type: "income",
      amount,
      description: description || "Ingreso sin descripción",
    });

    res.status(200).json({
      message: "Ingreso agregado correctamente",
      balance: user.balance,
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar ingreso", error });
  }
};

// Registrar gasto
export const addExpense = async (req, res) => {
  try {
    const { amount, description } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Monto inválido" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (user.balance < amount) {
      return res.status(400).json({ message: "Saldo insuficiente" });
    }

    user.balance -= amount;
    await user.save();

    // Crear transacción
    const transaction = await Transaction.create({
      user: req.user.id,
      type: "expense",
      amount,
      description: description || "Gasto sin descripción",
    });

    res.status(200).json({
      message: "Gasto registrado correctamente",
      balance: user.balance,
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar gasto", error });
  }
};


// Editar perfil del usuario
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Actualizar campos (unicamente los permitidos)
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    // Actualizar password
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      message: "Perfil actualizado correctamente",
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      balance: updatedUser.balance,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el perfil", error });
  }
};


// Registrar transacción
export const addTransaction = async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    if (!type || !["income", "expense"].includes(type)) {
      return res.status(400).json({ message: "Tipo de transacción inválido" });
    }

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Monto inválido" });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Validar balance para gastos
    if (type === "expense" && user.balance < amount) {
      return res.status(400).json({ message: "Saldo insuficiente" });
    }

    // Actualizar balance del usuario
    if (type === "income") {
      user.balance += amount;
    } else {
      user.balance -= amount;
    }
    await user.save();

    // Crear transacción
    const transaction = await Transaction.create({
      user: req.user.id,
      type,
      amount,
      description,
    });

    res.status(201).json({
      message: "Transacción registrada correctamente",
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar transacción", error });
  }
};

// Obtener historial de transacciones
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener historial", error });
  }
};