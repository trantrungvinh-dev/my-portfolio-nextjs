import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tran Trung Vinh - Frontend Developer | React.js & Next.js Expert",
  description:
    "Passionate Frontend Developer with 4+ years of experience in React.js, Next.js, TypeScript, and modern web technologies. Available for freelance projects and full-time opportunities in Ho Chi Minh City, Vietnam.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Web Developer",
    "Vietnam",
    "Ho Chi Minh City",
    "Portfolio",
    "Blockchain",
    "Healthcare",
    "Mobile App",
    "UI/UX",
    "Responsive Design",
  ],
  authors: [{ name: "Tran Trung Vinh", url: "https://trungvinh.dev" }],
  creator: "Tran Trung Vinh",
  publisher: "Tran Trung Vinh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trungvinh.dev",
    title: "Tran Trung Vinh - Frontend Developer | React.js & Next.js Expert",
    description:
      "Passionate Frontend Developer specializing in React.js, Next.js, and modern web technologies. 4+ years of experience building exceptional digital experiences.",
    siteName: "Tran Trung Vinh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tran Trung Vinh - Frontend Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Trung Vinh - Frontend Developer",
    description: "Passionate Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@trungvinh",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://github.com/trantrungvinh-dev",
  },
    generator: 'trantrungvinh-dev'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
      </head>
          <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
