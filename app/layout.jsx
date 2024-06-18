import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

// Définissez les métadonnées directement dans le composant Head
const metadata = {
  title: "Edy-ia",
  description: "Edy-ia",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Cours ia", "Répétiteur ia", "Ia", "Ecole"],
  authors: "Delon Jean-Philippe",
  icons: [
    { rel: "apple-touch-icon", href: "icons/icon-128x128.png" },
    { rel: "icon", href: "icons/icon-128x128.png" },
  ],
};

const themeColor = "#000"; // Vous pouvez utiliser cette couleur dans la balise meta

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="generator" content={metadata.generator} />
        <meta name="manifest" content={metadata.manifest} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.authors} />
        <link rel="apple-touch-icon" href="icons/icon-128x128.png" />
        <link rel="icon" href="icons/icon-128x128.png" />
        <meta name="theme-color" content={themeColor} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
