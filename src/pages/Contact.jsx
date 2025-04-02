import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.endsWith(".com")) {
      newErrors.email = "El correo debe terminar en .com";
    }

    if (formData.message.length < 100) {
      newErrors.message = "El mensaje debe tener al menos 100 caracteres";
    }

    if (!formData.agreed) {
      newErrors.agreed = "Debes aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <div className="isolate bg-gradient-to-r from-gray-100 via-gray-200 to-yellow-200 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg leading-8 text-black">
          Si tienes alguna consulta o necesitas más información, completa el
          formulario y te responderemos a la brevedad.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-black"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-black"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Correo Electrónico
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-black"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
            </div>
            <label className="text-sm text-black">
              Al enviar este formulario, acepto los{" "}
              <a href="#" className="font-semibold text-black underline">
                términos y condiciones
              </a>
              .
            </label>
          </div>
          {errors.agreed && (
            <p className="text-red-500 text-sm sm:col-span-2">
              {errors.agreed}
            </p>
          )}
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-yellow-400 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow hover:bg-yellow-500 focus:ring focus:ring-yellow-500"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
