import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import {Providers} from "./providers";
export const metadata = {
  title: "Goods",
  description: "Valantis test project",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
