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
    <section className="bg-gradient-to-r from-gray-300 via-gray-200 to-yellow-100 py-16 pt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
          Acerca de Nosotros
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-12">
          SHA Banking te ofrece las mejores soluciones financieras para el
          presente y el futuro.
        </p>
        <Cards cards={cards} />
      </div>
    </section>
  );
}
