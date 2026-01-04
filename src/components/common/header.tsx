import { MobileNav } from "@/features/navigation/components/mobile-nav";
import { NavBar } from "@/features/navigation/components/nav-bar";
import { Box } from "@/components/ui/box";
import { ThemeToggle } from "@/features/navigation/components/theme-toggle";

export const Header = () => (
  <header className="fixed top-0 left-0 w-full h-24 p-2 z-50">
    <Box
      variant="glass"
      className="mx-auto flex items-center justify-between max-w-8xl h-full px-4">
      <MobileNav/>

      <Brand/>
      <NavBar/>

      <ThemeToggle/>
    </Box>
  </header>
);

export const Brand = () => (
  <>
    <div className="flex flex-col justify-between items-center gap-0.5 mx-4 text-zinc-950 dark:text-white">
      <span className="font-bold uppercase mx-4 m-0.5 font-mono text-lg">Jirre Verkerk</span>
      <div className="w-full h-0.5 bg-dynamic"/>
      <span className="text-sm mx-4 opacity-65 italic font-mono">Game Programmer</span>
    </div>
    <div className="lg:hidden grow"/>
  </>
)