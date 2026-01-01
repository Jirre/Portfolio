import HexImage from "@/components/ui/image/hex-image";

export default function Home() {
  return (
    <section className="w-full flex p-4 gap-8">
      <HexImage src={"profile-pic.jpg"} alt="Profile Picture" className="text-dynamic mx-auto" borderWeight={2} size={320}/>
      <div>
        <h1 className="text-[4rem] p-4">Hello!</h1>
        <p className="text-2xl font-mono bg-white/50 dark:bg-zinc-950/50 p-4 rounded-lg">
          My name is <strong>Jirre Verkerk</strong>, and I am a professional <strong>Game-Developer</strong> and <strong>Teacher</strong> with a passion for new challenges and helping people find their passion in programming.
        </p>
      </div>
    </section>
  );
}
