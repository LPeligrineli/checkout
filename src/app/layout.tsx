import type { Metadata } from "next";
import "./globals.css";
import { CreditCardProvider } from "@/context/payment";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Teste Ebury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <CreditCardProvider>
        <body>
          {children}
        </body>
      </CreditCardProvider>
    </html>
  );
}
