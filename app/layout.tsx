import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BottomNav } from "@/components/BottomNav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ansh Zamde | Backend Engineer",
  description: "Portfolio of Ansh Zamde, a backend engineer targeting fintech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen selection:bg-cyan selection:text-invert bg-primary text-primary transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScrolling>
            {children}
            <BottomNav />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
