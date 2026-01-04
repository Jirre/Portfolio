import { LinkButton } from "@/components/ui/buttons";
import { socialLinks } from "@/config/social-links";

export const Footer = () => (
    <footer className="w-full border-t border-zinc-950/10 dark:border-white/10 backdrop-blur-xs">
      <div className="max-w-8xl mx-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-foreground/65 font-mono">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> <span className="text-zinc-950 dark:text-white font-bold">Jirre Verkerk</span>;
          All rights reserved.
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <LinkButton
              key={social.name}
              href={social.href}
              newTab
              className="size-10 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </LinkButton>
          ))}
        </div>
      </div>
    </footer>
  );