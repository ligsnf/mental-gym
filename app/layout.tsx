import './globals.css';

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";

let title = 'Mental Gym';
let description = 'Elevate your study efficiency with our all-in-one student productivity platform featuring time tracking, progress graphs, and competitive leaderboards.';

export const metadata = {
  title,
  description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://mental-gym-three.vercel.app'),
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            {children}
            <Toaster richColors closeButton />
          </div>
          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  );
}
