import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CalendarioTable from "@/components/calendario";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <CalendarioTable />
          </div>
          
          {children}

          <div>
            <p>Vitória Restaurante - Alto da Lapa, São Paulo</p>
            <p>Aberto de segundo a sábado e feriados.</p>
            <p>Marmitas a partir de R$22,00 com salada e suco</p>
            <p>Instagram @vitoria.restaurante.altodalapa</p>
            <p>R. Jorge Americano, 556 - Lapa, São Paulo - SP, 05083-130</p>
          </div>

        </main>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Vitória Restaurante - Copyright © 2024 - Todos os direitos reservados.</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
