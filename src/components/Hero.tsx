const Hero = () => {
  return (
    <section className="mt-12 text-center">
      <img
        loading="lazy"
        src="/pic.JPG"
        alt="Kamal Sahoo"
        className="mx-auto mb-4 h-auto w-24 rounded-full shadow-lg md:w-32"
      />

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Kamal Kant Sahoo
      </h1>

      <p className="mt-3 text-lg text-gray-700 dark:text-gray-100">
        Hybrid Developer - bridging development and testing
        to deliver production-ready solutions. 🚀
      </p>

      <p className="mx-auto mt-1 max-w-xl text-sm text-gray-800 dark:text-gray-300">
        <b>
          I turns ideas into code, and code into quality.
        </b>
      </p>
    </section>
  );
};

export default Hero;
