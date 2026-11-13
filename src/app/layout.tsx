import type { Metadata } from "next";
import "./globals.css";
import { Reveal } from "@/components/Reveal";

// Width (px) of the desktop Figma frame. Change this if the frame differs.
const DESIGN_WIDTH = 1920;

export const metadata: Metadata = {
  title: "The 83 Percent | One session therapy, on your terms",
  description:
    "Your choice of therapist at a convenient time for you. No commitment to ongoing therapy unless you want it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var W=${DESIGN_WIDTH};function f(){var d=document.documentElement;d.style.overflowY='scroll';var w=d.clientWidth||window.innerWidth;d.style.zoom=w/W;}document.documentElement.classList.add('anim');f();window.addEventListener('resize',f);})();`,
          }}
        />
      </head>
      <body className="flex flex-col bg-background font-sans text-foreground">
        {children}
        <Reveal />
      </body>
    </html>
  );
}
