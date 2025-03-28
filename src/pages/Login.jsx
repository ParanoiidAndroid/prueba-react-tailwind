export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-400">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Ingresá tu email"
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
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Ingresá tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-300 text-gray-800 font-bold p-3 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          ¿No tenés una cuenta?{" "}
          <a
            href="#"
            className="text-yellow-300 hover:text-yellow-400 underline transition-colors"
          >
            Registrarte
          </a>
        </div>
      </div>
    </div>
  );
}
