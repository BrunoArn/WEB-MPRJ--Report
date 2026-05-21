import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEDIT - Relatório de Atividades",
  description: "Relatório de atividades do Ministério Público do Rio de Janeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <NavBar />
        <div className="mx-auto w-full max-w-7xl flex-1 px-8 py-8">
          {children}
        </div>
        <footer className="border-t py-3 text-center text-accent text-xs">
          &copy; 2024 Ministério Público do Rio de Janeiro. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
