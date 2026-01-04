import { ThemeInitializer } from "@/components/common/theme-initializer";
import { Background } from "@/components/ui/background";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { SkipToContent } from "@/components/ui/navigation/skip-to-content";
import { robotoMono, robotoSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Jirre Verkerk - Portfolio",
  description: "I’m Jirre Verkerk — a Game Developer and Teacher passionate about building engaging games, designing robust systems, and helping others discover the joy of programming.",
};

export default function RootLayout({children}: { children: ReactNode }) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <ThemeInitializer/>
    </head>
    <body
      className={`${robotoSans.variable} ${robotoMono.variable} font-sans antialiased flex flex-col min-h-screen h-full`}>
    <SkipToContent/>
    <Background/>

    <Header/>

    <main id="main-content" className="flex-1 flex flex-col w-full max-w-8xl mx-auto px-4 pt-24 pb-8">
      {children}
    </main>

    <Footer/>
    </body>
    </html>
  );
}