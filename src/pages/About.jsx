import Cards from "../components/Cards";
import debitCardImg from "../assets/debit-card.jpg";

export default function About() {
  const cards = [
    {
      title: "Tarjeta de Débito",
      description:
        "Accede a tu dinero de forma rápida y segura con nuestras tarjetas de débito.",
      image: debitCardImg,
    },
    {
      title: "Tarjeta de Crédito Black",
      description:
        "Disfruta de beneficios exclusivos y límites amplios con nuestra tarjeta premium.",
      image: debitCardImg,
    },
    {
      title: "Préstamos Personales",
      description: "Obtén financiamiento inmediato con tasas competitivas.",
      image: debitCardImg,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
          Acerca de Nosotros
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          SHA Banking te ofrece las mejores soluciones financieras para el
          presente y el futuro.
        </p>
        <Cards cards={cards} />
      </div>
    </section>
  );
}
