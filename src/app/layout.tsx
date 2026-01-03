import {ParticlesBackground} from "@/components/ui/backgrounds/particles";
import {Topbar} from "@/components/ui/navigation/topbar";
import {Footer} from "@/components/ui/navigation/footer";
import type {Metadata} from "next";
import {Roboto, Roboto_Mono} from "next/font/google";
import "@/styles/global.css";
import {ReactNode} from "react";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Jirre Verkerk - Portfolio",
  description: "I’m Jirre Verkerk — a Game Developer and Teacher passionate about building engaging games, designing robust systems, and helping others discover the joy of programming.",
};

export default function RootLayout({children}: { children: ReactNode }) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
        }}
      />
    </head>
    <body className={`${robotoSans.variable} ${robotoMono.variable} font-sans antialiased flex flex-col min-h-screen h-full`}>
    <ParticlesBackground />

    <div className="flex-1 flex flex-col">
      <main className="max-w-8xl mx-auto w-full px-4 flex-1">
        <div className="h-22 w-full" aria-hidden="true" />
        <div className="pt-8 flex flex-col">
          {children}
        </div>
        <div className="h-4 w-full" aria-hidden="true" />
      </main>
    </div>

    <Topbar />
    <Footer />
    </body>
    </html>
  );
}