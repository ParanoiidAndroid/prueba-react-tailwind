export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-6 sm:px-12 py-8 md:py-16 max-w-4xl w-full">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-300 ease-in-out hover:text-yellow-300">
            SHA Banking
          </h1>

          <p className="text-lg sm:text-2xl font-light mb-8 transition-all duration-300 ease-in-out hover:text-yellow-300">
            El banco de mañana, hoy
          </p>
        </div>
      </div>
    </div>
  );
}
