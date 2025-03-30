import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-gradient-to-r from-gray-800 via-gray-700 to-gray-300 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-300 opacity-60 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-yellow-400 sm:text-5xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg leading-8 text-yellow-400">
          Si tienes alguna consulta o necesitas más información, completa el
          formulario y te responderemos a la brevedad.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-yellow-400"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-yellow-400"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-yellow-400"
            >
              Correo Electrónico
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-yellow-400"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
            </div>
            <label className="text-sm text-white">
              Al enviar este formulario, acepto los{" "}
              <a href="#" className="font-semibold text-yellow-400">
                términos y condiciones
              </a>
              .
            </label>
          </div>
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
