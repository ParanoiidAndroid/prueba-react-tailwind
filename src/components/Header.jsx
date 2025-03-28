import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar la apertura/cierre del menú mobile

  const linkClass = (path) =>
    `${
      location.pathname === path ? "text-yellow-300" : "text-white"
    } hover:text-red-800 transition-colors duration-300`;

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-400 p-4 text-white fixed top-0 w-full z-50">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 md:mb-0">SHA Banking</h1>

        {/* Botón del menú hamburguesa */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              menuOpen ? "rotate-45" : "" // Rota el ícono para mostrar la "X" cuando el menú está abierto
            }`}
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            
            <path // Lineas del menu hamburguesa
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
              className={`${menuOpen ? "opacity-0" : "opacity-100"}`} 
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              className={`${menuOpen ? "opacity-100" : "opacity-0"}`} 
            />
          </svg>
        </button>

        {/* Links del menú */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 md:px-4`}
        >
          <li>
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className={linkClass("/login")}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
