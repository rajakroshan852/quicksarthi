import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "quicksarthi",
  description: "A platform for managing construction materials and orders effectively. Connect vendors, shopkeepers, and delivery personnel seamlessly. Manage products, orders, and users with ease. Track orders from placement to delivery, ensuring timely and efficient service.  Empower your construction business with quicksarthi. Manage your construction materials and orders efficiently. Connect vendors, shopkeepers, and delivery personnel seamlessly. Track orders from placement to delivery, ensuring timely and efficient service. Empower your construction business with quicksarthi. Manage your construction materials and orders efficiently. Connect vendors, shopkeepers, and delivery personnel seamlessly. Track orders from placement to delivery, ensuring timely and efficient service. Empower your construction business with quicksarthi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
