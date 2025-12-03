import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// Using elegant fonts for feminine theme
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata cannot use TypeScript annotations in JSX.
// For JSX, export a plain object if needed.
export const metadata = {
  title: "Sneha Wani - Creative Developer Portfolio",
  description:
    "Personal portfolio of Sneha Wani - A passionate creative developer crafting beautiful digital experiences with elegance and purpose.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/light-theme.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/dark-theme.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/light-theme.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/light-theme.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
