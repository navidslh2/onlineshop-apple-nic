import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Provider from "@/components/provider/Provider";

export const metadata: Metadata = {
  title: "اپل ان ای سی",
  icons: {
    icon: "/favicon.png",
  },
  description:"Navid Salehi Project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased  bg-gray-100">
        <Provider>
          <Navbar />
          <main className="pt-[60px]">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
