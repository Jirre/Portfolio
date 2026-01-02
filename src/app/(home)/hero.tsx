import MorphImage from "@/components/ui/image/morph-image";

export const Hero = () => (
  <section className="flex not-lg:flex-col w-full lg:gap-8 -mt-6">
    <div className="shrink-0 w-64 md:w-80 lg:flex-1/3 max-h-64 lg:max-h-96 m-2 mx-auto">
      <MorphImage
        src={"profile-pic.jpg"}
        borderWeight={2}
        alt="Profile Picture"
      />
    </div>
    <div className="lg:flex-2/3 my-auto">
      <h1 className="lg:text-[4rem] p-4 mb-2 border-b lg:border-b-4 border-dynamic">Hello!</h1>
      <p className="text-lg lg:text-2xl lg:leading-8 p-2 lg:p-4 bg-white/50 dark:bg-zinc-950/50 rounded-lg">
        I’m <strong className="text-dynamic">Jirre Verkerk</strong> — a <strong>Game Developer</strong> and <strong>Teacher</strong> passionate about
        building engaging games, designing robust systems, and helping others discover the joy of programming.
      </p>
    </div>
  </section>
);