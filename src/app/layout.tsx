import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logtiva - Automação Empresarial com IA",
  description: "Soluções inteligentes em automação, desenvolvimento web e aplicativos para empresas",
  icons: {
    icon: '/logtiva.ico',
    shortcut: '/logtiva.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logtiva.ico?v=final" />
        <link rel="shortcut icon" href="/logtiva.ico?v=final" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
