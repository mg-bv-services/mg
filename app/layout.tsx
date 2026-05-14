import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "M.G B.V. | Transport, Beveiliging & Reiniging in Nederland",
    template: "%s | M.G B.V.",
  },
  description:
    "M.G B.V. levert professionele transport-, beveiligings- en reinigingsdiensten in heel Nederland. Koeriers, goederenvervoer, verhuizingen, bewaking en reiniging — onder één dak.",
  keywords: [
    "M.G B.V.",
    "koerier",
    "goederenvervoer",
    "verhuizingen",
    "beveiliging",
    "beveiligingsbedrijf",
    "reiniging",
    "transport",
    "Nederland",
  ],
  authors: [{ name: "M.G B.V." }],
  creator: "M.G B.V.",
  publisher: "M.G B.V.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mg-services.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M.G B.V. | Transport, Beveiliging & Reiniging",
    description:
      "Eén partner voor transport, beveiliging en reiniging in heel Nederland.",
    url: "https://mg-services.nl",
    siteName: "M.G B.V.",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.G B.V. | Transport, Beveiliging & Reiniging",
    description:
      "Eén partner voor transport, beveiliging en reiniging in heel Nederland.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "M.G B.V.",
  description:
    "Professionele transport-, beveiligings- en reinigingsdiensten in heel Nederland.",
  url: "https://mg-services.nl",
  telephone: "+31684780008",
  email: "info@mg-services.nl",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
    addressLocality: "Nederland",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: [
    "Koeriersdiensten",
    "Goederenvervoer over de weg",
    "Verhuizingen",
    "Transportdienstverlening",
    "Beveiligingsdiensten",
    "Reinigingsdiensten",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Ga naar hoofdinhoud
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
