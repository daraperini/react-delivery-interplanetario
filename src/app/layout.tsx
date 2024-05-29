import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ListaEnderecosProvider } from "../context/ListaEnderecosContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interplanetary Delivery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ListaEnderecosProvider>{children}</ListaEnderecosProvider>
      </body>
    </html>
  );
}