import AppWalletProvider from "@/components/walletProvider/AppWalletProvider";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body
      >
        <AppWalletProvider>
        {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
