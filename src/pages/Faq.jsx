import { useState, useMemo } from "react";

export default function FAQ() {
  const [search, setSearch] = useState("");

  const questions = useMemo(() => [
    { question: "💳 ¿Cómo solicito una tarjeta de débito?", answer: "Podés solicitarla desde la app o en una sucursal bancaria presentando tu DNI." },
    { question: "🏦 ¿Cómo abro una cuenta bancaria online?", answer: "Ingresá a nuestra web, completá tus datos y seguí los pasos indicados." },
    { question: "📲 ¿Cómo recupero mi usuario o contraseña?", answer: "En la pantalla de inicio de sesión, seleccioná '¿Olvidaste tu contraseña?' y seguí los pasos." },
    { question: "💰 ¿Cuánto tarda en acreditarse una transferencia?", answer: "Las transferencias entre cuentas del mismo banco son inmediatas. A otros bancos pueden demorar hasta 24 hs hábiles." },
    { question: "📥 ¿Cómo aumento el límite de extracción de mi cuenta?", answer: "Podés modificarlo desde la app o llamando a nuestro centro de atención al cliente." },
    { question: "🛑 ¿Qué hago si mi tarjeta fue bloqueada?", answer: "Podés desbloquearla desde la app o comunicándote con nuestro servicio de atención al cliente." },
    { question: "🔐 ¿Cómo activo mi token de seguridad?", answer: "Desde la app, en la sección de seguridad, seleccioná 'Activar Token' y seguí los pasos." },
    { question: "📆 ¿Puedo programar pagos automáticos?", answer: "Sí, desde la opción de 'Pagos' en la app podés programar pagos recurrentes." },
    { question: "📤 ¿Cómo solicito un préstamo personal?", answer: "Desde la app podés consultar las opciones disponibles y simular tu préstamo antes de solicitarlo." },
    { question: "🧾 ¿Cómo descargo mis resúmenes de cuenta?", answer: "Desde el homebanking, ingresando a la sección de 'Resúmenes' y seleccionando el período deseado." },
    { question: "🌍 ¿Cómo habilito mi tarjeta para compras en el extranjero?", answer: "Podés habilitarla desde la app en la sección de tarjetas, activando la opción de uso internacional." },
    { question: "🚨 ¿Por qué mi transferencia bancaria fue retenida o rechazada?", answer: "Puede ser por datos incorrectos, montos superiores al límite diario, actividad sospechosa o saldo insuficiente." },
    { question: "🔎 ¿Qué hacer si me aparece un débito automático que no reconozco?", answer: "Podés solicitar el desconocimiento del débito desde la app o llamando al banco." },
    { question: "🔐 ¿Cómo activo la autenticación en dos pasos para mayor seguridad?", answer: "Desde la configuración de seguridad en la app o el homebanking." },
    { question: "💳 ¿Qué hago si una compra con mi tarjeta fue duplicada?", answer: "Si el cargo es un error, podés iniciar un reclamo desde la app o llamar al banco." },
    { question: "🔒 ¿Por qué mi cuenta fue bloqueada y cómo la desbloqueo?", answer: "Por intentos fallidos de ingreso, actividad sospechosa o requerimiento del banco. Intentá recuperarla desde la app o llamá a soporte." },
    { question: "⏳ ¿Puedo cancelar una transferencia ya realizada?", answer: "Las transferencias inmediatas no pueden cancelarse, pero si está en proceso podés intentarlo desde la app o llamando al banco." },
    { question: "❌ ¿Cómo hago un reclamo por un pago no procesado pero debitado de mi cuenta?", answer: "Si el dinero fue debitado pero el pago no se acreditó, podés iniciar un reclamo en la app o llamar al soporte." },
    { question: "⚠️ ¿Qué hacer si mi homebanking dice 'operación no permitida' al pagar un servicio?", answer: "Puede ser por saldo insuficiente, deuda vencida o que la empresa no admite pagos online." },
    { question: "👥 ¿Cómo gestiono el acceso de terceros a mi cuenta?", answer: "Desde la app podés agregar o eliminar apoderados para ciertas operaciones." }
  ], []);

  const filteredQuestions = useMemo(
    () => questions.filter(q => q.question.toLowerCase().includes(search.trim().toLowerCase())),
    [search, questions]
  );

  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Preguntas Frecuentes
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Antes de contactarnos, revisá si tu duda ya fue respondida acá.
        </p>

        <input
          type="text"
          placeholder="🔍 Escribí para buscar una pregunta..."
          className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-700"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="space-y-6 mt-8">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900">{q.question}</h3>
                <p className="text-gray-700 mt-1">{q.answer}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No se encontraron resultados.</p>
          )}
        </div>
      </div>
    </section>
  );
}
