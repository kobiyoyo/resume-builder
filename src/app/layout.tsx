"use client"
import { AR_One_Sans } from 'next/font/google'
import "../styles/globals.css";
import Header from '@/components/header'
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const sans = AR_One_Sans({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login" || pathname.startsWith("/dashboard");
  return (
    <html lang="en">

      <body
        className={`${sans.className}`}
      >
        {!hideLayout && <Header />}
        <main className="p-1 lg:p-10">
          {children}
        </main>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
