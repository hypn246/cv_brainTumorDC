import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Next",
  description: "Neurosurgery Emage Recheck under-Segmentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Nav></Nav>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

