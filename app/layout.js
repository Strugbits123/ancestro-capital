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


// export const metadata = {
//   title: "Ancestro Green Bonds",
//   description: "Multilingual site",
//   icons:{
//     icon: "/icon.svg"
//   }
// };


export const metadata = {
  title: "Ancestro Green Bonds",
  description: "Multilingual site",
  icons: {
    icon: "/icon.svg", // browser tab favicon
  },
  openGraph: {
    title: "Ancestro Green Bonds",
    images: ["/images/bonds.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancestro Green Bonds",
    description: "Invest in sustainability with Green Bonds",
    images: ["/images/bonds.png"],
  },
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
