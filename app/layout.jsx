import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "../components/ui/toaster";
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
// Base metadata for SEO — kept at root so pages can extend it.
export const metadata = {
  metadataBase: new URL("https://sneha-wani.netlify.app"),
  title: {
    default: "Sneha Wani — Creative Developer Portfolio",
    template: "%s | Sneha Wani",
  },
  description:
    "Sneha Wani — Frontend & Full-stack Developer focused on accessible, high-performance web experiences using React and Next.js.",
  keywords: [
    "Sneha Wani",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Full-stack",
    "Portfolio",
  ],
  authors: [{ name: "Sneha Wani", url: "https://sneha-wani.netlify.app" }],
  generator: "Next.js",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sneha Wani — Creative Developer Portfolio",
    description:
      "Frontend & Full-stack Developer focused on accessible, high-performance web experiences using React and Next.js.",
    url: "https://sneha-wani.netlify.app/",
    siteName: "Sneha Wani Portfolio",
    images: [
      {
        url: "https://sneha-wani.netlify.app/profile.jpg",
        alt: "Sneha Wani — Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Wani — Frontend Developer",
    description:
      "Sneha Wani — Frontend & Full-stack Developer focused on accessible, high-performance web experiences using React and Next.js.",
    creator: "@sneha9504",
  },
  icons: {
    icon: [
      { url: "/light-theme.png", media: "(prefers-color-scheme: light)" },
      { url: "/dark-theme.png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-32.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md">Skip to content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
