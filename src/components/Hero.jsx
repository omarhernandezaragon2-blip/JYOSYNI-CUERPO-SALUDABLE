export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-full">
          Bienvenido a tu nuevo proyecto
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Construye algo
          <span className="text-indigo-600"> increible</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          La plantilla perfecta para lanzar tu idea al mundo. Rapido, moderno y
          listo para personalizar a tu gusto.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors text-center"
          >
            Empezar ahora
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-colors text-center"
          >
            Ver mas
          </a>
        </div>
      </div>
    </section>
  );
}
