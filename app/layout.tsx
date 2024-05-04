import './globals.css';

import { Inter } from "next/font/google";

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
        <div className="flex min-h-screen w-full flex-col">
        {children}
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
