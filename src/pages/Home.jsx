import { Link } from "react-router-dom";
import bankImage from "../assets/bank-home.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-yellow-200">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 sm:px-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-300 ease-in-out hover:text-yellow-500">
          SHA Banking
        </h1>
        <p className="text-lg sm:text-2xl font-light max-w-prose text-gray-900 mb-8 transition-all duration-300 ease-in-out hover:text-yellow-500">
          El banco de mañana, hoy.
        </p>
        <Link
          to="/about"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Descubre más
        </Link>
      </section>

      <div className="w-full h-[1px] bg-gray-300 my-16 opacity-50"></div>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 sm:px-12 py-16 gap-12">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            ¿Por qué SHA Banking?
          </h2>
          <p className="text-lg text-gray-700 max-w-prose mb-6">
            En SHA Banking, combinamos innovación y seguridad para ofrecerte la
            mejor experiencia financiera.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            Contactanos
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={bankImage}
            alt="SHA Banking"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>
    </div>
  );
}
