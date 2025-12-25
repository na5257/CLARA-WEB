// Yes, you can continue making the website here by modifying or adding imports and global styles as needed!
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CLARA Forsøget | Lysterapi mod ADHD",
  description: "CLARA er et klinisk forsøg ved Syddansk Universitet, der undersøger om lysterapi kan hjælpe voksne med ADHD til bedre koncentration og livskvalitet.",
  keywords: ["ADHD", "lysterapi", "klinisk forsøg", "Syddansk Universitet", "voksen ADHD", "CLARA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
