import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "THANACHIT SENGSALEE",
  description: "Thanachit Sengsalee portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="bg-white dark:bg-black text-black dark:text-white">
          {children}
          <footer className="w-full">
            <div className="border-t-2 md:flex">
              <div className="md:w-1/2 flex justify-center">1</div>
              <div className="md:w-1/2 flex justify-center">2</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
