import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
     
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-yellow-400">SHA Banking</span>. Todos
          los derechos reservados.
        </p>

        
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-yellow-400 transition duration-300 hover:underline"
            >
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-yellow-400 transition duration-300 hover:underline"
            >
              Términos y condiciones
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
