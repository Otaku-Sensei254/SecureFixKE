import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "SecureFix.KE — Enterprise Cybersecurity Solutions",
  description:
    "SecureFix.KE delivers enterprise-grade cybersecurity solutions for Kenyan businesses. Phishing detection, threat intelligence, infrastructure monitoring, and compliance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
