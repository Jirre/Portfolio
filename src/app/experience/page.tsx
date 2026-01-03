import { TIMELINE_DATA } from "@/app/experience/timeline";
import { Box } from "@/components/ui/box";

export default function About() {
  return (
    <>
      <h1 className="text-5xl font-black w-full text-center my-4">Experience</h1>
      <p className="text-lg font-semibold w-full text-center text-zinc-950/65 dark:text-white/65">My professional journey throughout the years</p>

      <div className="relative w-full mx-auto px-4 py-20">
        <div className="absolute left-10 lg:left-1/2 -translate-x-1/2 top-20 h-[calc(100%-15rem)] w-0.5 bg-dynamic z-0" />

        <div className="flex flex-col">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                relative flex items-center justify-between w-full 
                ${index !== 0 ? 'lg:-mt-16' : ''} 
                ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                flex-col mb-12 lg:mb-0
              `}
              >
                <div className="w-full lg:w-[46%] z-20">
                  <Box className="p-6 relative hover:shadow-xl transition-shadow duration-300 ml-16 lg:m-0">
                    <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">
                        {item.date}
                    </span>
                      <div className="lg:hidden text-primary bg-primary/10 p-2 rounded-lg" />
                    </div>

                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm italic opacity-70">{item.employer}</p>
                      <p className="text-sm italic opacity-70 text-right">{item.location}</p>
                    </div>

                    <p className="text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <span className="text-xs font-bold uppercase tracking-widest text-dynamic">Achievements:</span>
                      <ul className="list-outside ml-5 mt-3 space-y-2">
                        {item.achievements.map((e, i) => (
                          <li key={i} className="text-sm list-item marker:content-['◆\a0\a0'] marker:text-primary marker:text-[10px] marker:text-dynamic">
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Box>
                </div>

                <div className="absolute left-6 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background border-4 border-dynamic z-30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-dynamic" />
                </div>

                <div className="hidden lg:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}