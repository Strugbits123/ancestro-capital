import { Geist, Geist_Mono } from "next/font/google";
import I18nProvider from "./Providers";

import "./globals.css";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Ancestroy Green Bonds",
  description: "Multilingual site",
  icons:{
    icon: "/icon.svg"
  }
};


export default function RootLayout({ children, params }) {

  const locale = params.lang || "en";

  return (
    <html lang={locale} >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider initialLanguage={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
