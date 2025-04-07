import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const baseLinkClass =
    "relative px-3 py-2 text-lg font-semibold transition-colors duration-300";
  const hoverEffect =
    "before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-yellow-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 before:z-[-1]";
  const linkClass = (path) =>
    `${baseLinkClass} ${
      location.pathname === path ? "text-yellow-400" : "text-black"
    } hover:text-black ${hoverEffect}`;

  return (
    <header className="bg-white shadow-md p-4 fixed top-0 w-full z-50">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto">
        {/* Logo prox a agregar */}
        <h1 className="text-2xl font-bold text-black mb-4 md:mb-0">
          SHA Banking
        </h1>

        {/* Botón del menú hamburguesa */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6 text-black transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            {!menuOpen ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </>
            )}
          </svg>
        </button>

        {/* Links del menú */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 md:px-4`}
        >
          {["/", "/contact", "/faq", "/about", "/login"].map((route, index) => (
            <li key={index}>
              <Link to={route} className={linkClass(route)}>
                {route === "/"
                  ? "Home"
                  : route.replace("/", "").charAt(0).toUpperCase() +
                    route.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
