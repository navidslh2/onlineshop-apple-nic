import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "اپل ان ای سی",
    icons: {
    icon: "/favicon.png", // ← Add this line
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
