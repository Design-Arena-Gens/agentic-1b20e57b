import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MT5 Strategy Toolkit",
  description: "Gere estrat?gias e EAs (MQL5) rapidamente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="container">
          <nav className="nav">
            <a className="logo" href="/">MT5 Toolkit</a>
            <div className="links">
              <a href="/strategies">Estrat?gias</a>
              <a href="/generator">Gerador de EA</a>
              <a href="https://www.mql5.com/en/docs" target="_blank" rel="noreferrer">Docs MQL5</a>
            </div>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">? {new Date().getFullYear()} MT5 Strategy Toolkit</div>
        </footer>
      </body>
    </html>
  );
}
