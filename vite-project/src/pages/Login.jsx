import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      dispatch(registerUser({ name, email, password }))
        .unwrap()
        .then(() => {
          alert("Usuario registrado con éxito");
          setIsRegister(false);
        })
        .catch((err) => {
          console.error("Error al registrarse:", err);
        });
    } else {
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          navigate("/profile");
        })
        .catch((err) => {
          console.error("Error al iniciar sesión:", err);
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-yellow-100 pt-20">
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? "Registrarse" : "Iniciar Sesión"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isRegister && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Ingresá tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Ingresá tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Ingresá tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isRegister && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-2"
              >
                Repetir Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Repetí tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold p-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={loading}
          >
            {loading ? "Cargando..." : isRegister ? "Registrarse" : "Entrar"}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-sm text-red-600 text-center">
            {isRegister
              ? "Error al registrarte: " + error
              : "Error al iniciar sesión: " + error}
          </div>
        )}

        <div className="mt-6 text-sm text-center">
          {isRegister ? (
            <>
              ¿Ya tenés una cuenta?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-yellow-500 hover:text-yellow-600 underline transition-colors"
              >
                Iniciar sesión
              </button>
            </>
          ) : (
            <>
              ¿No tenés una cuenta?{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-yellow-500 hover:text-yellow-600 underline transition-colors"
              >
                Registrarte
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
