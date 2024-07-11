
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import {auth} from '@/auth'
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edy-ia",
  description: "Edy-ia",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Cours ia", "Répétiteur ia", "Ia", "Ecole"],
  authors: "Delon Jean-Philippe",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport = {themeColor: 'black',}


export default async function RootLayout({ children}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="fr">
        <body className={inter.className}>{children}</body>
        <Analytics />
      </html> 
    </SessionProvider>
  );
}
