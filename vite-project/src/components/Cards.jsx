export default function Cards({ cards }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 text-white hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
          <p className="text-gray-300 mb-6">{card.description}</p>
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src={card.image}
              alt="Tarjeta de Débito"
              className="w-full h-40 object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <button className="bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
            Solicitar Tarjeta
          </button>
        </div>
      ))}
    </div>
  );
}
