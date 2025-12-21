import { skills } from "../utils/constant";

const Skills = () => {
  return (
    <section className="mt-16 px-4 text-center">
      <h2 id='skills' className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        My Skills
      </h2>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 ">
        {skills.map((card) => (
          <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-[#1f1f1f] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              {card.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 ">
              {card.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center "
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    title={tool.name}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
