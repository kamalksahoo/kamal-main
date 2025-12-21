import { timelineData } from "../utils/constant";

const LifeLog = () => {
  return (
    <section className="mt-16 px-4">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        My Journey
      </h2>

      <div className="flex justify-center">
        <img src="https://www.fisglobal.com/-/media/fisglobal/files/2024-homepage-redesign/images/FIS_c_rgb.png?sc_lang=en&hash=032C6BF859DCAD764B1D23BCF4A23960" alt="fis Logo" className='h-24 w-40 mt-5 mb-5' />
      </div>
      <p className="mb-12 text-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
      <b>Currently working as a Software Engineer ll at FIS</b>
        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
          july 2021 - Present
        </span>
      </p>
      <ol className="relative border-l border-gray-300 dark:border-gray-700 max-w-3xl mx-auto">
        {timelineData.map((item, index) => {
          return (
            <li
              key={index}
            
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full">
                <img src="/twitter_badge.svg" alt="check" className="h-4 w-4" />
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <time className="mb-1 block text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.year}
              </time>

              <div className="mt-1 flex flex-col gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {item.descriptionLines.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </li>    );
        })}
      </ol>
    </section>
  );
};

export default LifeLog;
