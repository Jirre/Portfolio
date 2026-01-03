import AnchorButton from "@/components/ui/buttons/anchor-button";
import LinkButton from "@/components/ui/buttons/link-button";
import MorphImage from "@/components/ui/image/morph-image";
import {FaArrowRight, FaDownload, FaGithub, FaLinkedin} from "react-icons/fa";
import {LuMail} from "react-icons/lu";

export const Hero = () => (
  <section className="flex not-lg:flex-col w-full lg:gap-8 -mt-6 lg:my-12 lg:mt-0">
    <div className="shrink-0 size-64 lg:size-96 lg:flex-2/5 m-2 mx-auto">
      <MorphImage
        src={"profile-pic.jpg"}
        borderWeight={2}
        alt="Profile Picture"
      />
    </div>
    <div className="lg:flex-3/5 my-auto flex flex-col justify-center items-center lg:items-start gap-2">
      <span className="lg:text-[4rem] p-4 border-b lg:border-b-4 border-dynamic font-mono my-1 text-3xl font-semibold grow w-full">Hello!</span>
      <p className="text-lg lg:text-2xl lg:leading-8 lg:p-2 bg-white/50 dark:bg-zinc-950/50 rounded-lg my-2">
        I’m <strong className="text-dynamic">Jirre Verkerk</strong> — a <strong>Game Developer</strong> and <strong>Teacher</strong> passionate about
        building engaging games, designing robust systems, and helping others discover the joy of programming.
      </p>
      <div className="flex not-sm:flex-col gap-2 lg:gap-4 w-full lg:w-auto">
        <div className="flex gap-4 grow-0">
          <LinkButton href="#projects" className="mx-auto px-3 flex gap-4 ">View My Work<FaArrowRight size={16} /></LinkButton>
          <AnchorButton href="mailto:jirreamon@gmail.com" target="_blank" rel="noreferrer" className="mx-auto px-4 flex gap-4 border-dynamic dark:border-dynamic" ><FaDownload size={16} />Resume</AnchorButton>
          <div className="sm:hidden grow" />
        </div>

        <div className="flex gap-2">
          <AnchorButton href="https://github.com/Jirre/" target="_blank" rel="noreferrer" className="size-12" >
            <FaGithub size={18} />
          </AnchorButton>
          <AnchorButton href="https://linkedin.com/in/jirre-verkerk-a92183105/" target="_blank" rel="noreferrer" className="size-12" >
            <FaLinkedin size={18} />
          </AnchorButton>
          <AnchorButton href="mailto:jirreamon@gmail.com" target="_blank" rel="noreferrer" className="size-12" >
            <LuMail size={18} />
          </AnchorButton>
        </div>
      </div>

    </div>
  </section>
);