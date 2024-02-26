import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sigalas Portfolio",
  description: "Sigalas Portfolio",
  icons: {
    icon: "/my-logo.svg", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* add this */}
      <head>
        <link rel="icon" href="/my-logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
