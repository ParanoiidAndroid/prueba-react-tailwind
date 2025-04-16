import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/userSlice";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo.name,
        email: userInfo.email,
        password: "",
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        "/update-profile",
        {
          name: formData.name,
          email: formData.email,
          ...(formData.password && { password: formData.password }),
        },
        config
      );

      setUpdateSuccess(true);
      setUpdateError("");
    } catch {
      setUpdateError("Error al actualizar el perfil. Intenta nuevamente.");
      setUpdateSuccess(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Cargando perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">
          No hay información de usuario disponible
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-yellow-200">
      {/* Cuadro Rojo: Texto de Bienvenida */}
      <div className="absolute top-24 left-12 bg-white px-6 py-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">
          Bienvenido/a, {userInfo.name}
        </h2>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Perfil del Usuario
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg p-3"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg p-3"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña (opcional)
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Cambiar contraseña"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg p-3"
            />
          </div>

          {updateError && (
            <p className="text-red-500 text-sm mb-4">{updateError}</p>
          )}
          {updateSuccess && (
            <p className="text-green-500 text-sm mb-4">
              Perfil actualizado con éxito.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out text-lg"
          >
            Actualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;