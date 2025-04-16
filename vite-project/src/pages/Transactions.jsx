import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const BACKEND_URL = "https://prueba-react-tailwind.onrender.com";

  
  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("userToken"); 
      console.log("Token obtenido:", token); 
      if (!token) {
        setError("No se encontró un token. Por favor, inicia sesión.");
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(`${BACKEND_URL}/api/users/transactions`, config);
        setTransactions(data);
      } catch (err) {
        console.error(err); 
        setError("Error al cargar el historial de transacciones.");
      }
    };

    fetchTransactions();
  }, []);

  
  const handleTransaction = async (type) => {
    const token = localStorage.getItem("userToken"); 
    if (!token) {
      setError("No se encontró un token. Por favor, inicia sesión.");
      return;
    }

    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Por favor, ingresa un monto válido.");
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        amount: parseFloat(amount),
        description: description || `${type === "income" ? "Ingreso" : "Gasto"} sin descripción`,
      };
      await axios.post(`${BACKEND_URL}/api/users/${type}`, body, config);
      setSuccess("Transacción registrada con éxito.");
      setError("");
      setAmount("");
      setDescription("");

      
      const { data } = await axios.get(`${BACKEND_URL}/api/users/transactions`, config);
      setTransactions(data);
    } catch (err) {
      console.error(err); // Depuración
      setError("Error al registrar la transacción. Intenta nuevamente.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-yellow-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Transacciones</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registrar Transacción</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Monto
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg p-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Descripción (opcional)
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg p-3"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => handleTransaction("income")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out text-lg"
          >
            Agregar Ingreso
          </button>
          <button
            onClick={() => handleTransaction("expense")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out text-lg"
          >
            Agregar Gasto
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Historial de Transacciones</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-600">No hay transacciones registradas.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {transactions.map((transaction) => (
              <li key={transaction._id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-800">{transaction.description}</p>
                  <p className={`text-sm ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}>
                    {transaction.type === "income" ? "Ingreso" : "Gasto"}
                  </p>
                </div>
                <p className="text-lg font-bold text-gray-800">${transaction.amount}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}