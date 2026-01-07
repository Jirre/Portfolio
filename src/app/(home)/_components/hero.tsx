import { LinkButton } from "@/components/ui/buttons";
import MorphImage from "@/components/ui/image/morph-image";
import { H1 } from "@/components/ui/typography/headers";
import { socialLinks } from "@/config/social-links";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export const Hero = () => (
  <section className="flex not-lg:flex-col w-full lg:gap-8 -mt-6 lg:my-12 lg:mt-0">
    {/* Profile Image */}
    <div className="shrink-0 size-64 lg:size-96 lg:flex-2/5 m-2 mx-auto">
      <MorphImage
        src={"profile-pic.jpg"}
        borderWeight={2}
        alt="Profile Picture"
      />
    </div>

    {/* Introduction */}
    <div className="lg:flex-3/5 my-auto flex flex-col justify-center items-center lg:items-start gap-2">
      <H1 className="lg:w-full max-w-2xl border-b-4 border-dynamic pb-2 mb-4">
        <span className="text-4xl lg:text-7xl font-mono font-bold">
          Hello!
        </span>
      </H1>

      <p className="text-lg lg:text-xl leading-relaxed text-foreground/75 mb-8 max-w-2xl">
        I’m <strong className="text-dynamic font-bold">Jirre Verkerk</strong> — a
        <span className="font-semibold text-foreground"> Game Developer </span>
        and <span className="font-semibold text-foreground"> Teacher </span>
        passionate about building engaging games, designing robust systems, and helping others discover the joy of programming.
      </p>

      {/* Action Row */}
      <div className="flex flex-col md:flex-row items-center gap-4 lg:w-full w-full max-w-2xl">
        {/* Primary Actions */}
        <div className="flex gap-3">
          <LinkButton href="#projects" variant="highlight" className="flex-1 sm:flex-none px-6 gap-3 text-nowrap font-semibold">
            View My Work <FaArrowRight size={14}/>
          </LinkButton>
          <LinkButton href="/resume.pdf" variant="highlight" className="flex-1 sm:flex-none px-6 gap-3 text-nowrap font-semibold">
            <FaDownload size={14}/> Resume
          </LinkButton>
        </div>

        {/* Vertical Divider for Desktop */}
        <div className="hidden md:block w-px h-8 bg-zinc-200 dark:bg-zinc-800 mx-2" />

        {/* Social Links */}
        <div className="flex gap-2">
          {socialLinks.map((social) => (
            <LinkButton
              key={social.name}
              href={social.href}
              className="size-12 rounded-xl"
              aria-label={social.name}
              newTab
            >
              <social.icon size={20} />
            </LinkButton>
          ))}
        </div>
      </div>

    </div>
  </section>
);