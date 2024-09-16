import Header from "@/sections/rates-areas/header/header"
import OurRates from "@/sections/rates-areas/our-rates/ourRates"
import Areas from "@/sections/rates-areas/areas/areas"
import Contact from "@/sections/contact/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Liquidation Rates & Areas in Hamilton County - Five Star Estate Liquidations",
  description:
    "Explore our comprehensive estate liquidation services in Hamilton County. We offer transparent, commission-based rates and cover a wide range of areas around Hamilton County.",
  keywords: [
    "Hamilton County estate liquidation", "estate sales Hamilton County", "estate planning Hamilton County", 
    "Hamilton County estate services", "estate liquidation rates Hamilton County", "commission-based estate sale Hamilton County",
    "estate sale contract Hamilton County", "estate sale process Hamilton County", "estate sale expenses Hamilton County",
    "no up-front fees Hamilton County", "professional signage Hamilton County", "estate advertising Hamilton County",
    "labor costs in estate sales Hamilton County", "estate sale management Hamilton County", "Hamilton County estate sale company",
    "estate sale experts Hamilton County", "estate liquidation Hamilton County", "Tennessee estate liquidation services Hamilton County",
    "estate sale consultation Hamilton County", "estate liquidation contract Hamilton County", "Five Star Estate Liquidations Hamilton County",
    "estate liquidation Hamilton County", "Hamilton County estate liquidation services", "Hamilton County estate sale company"
  ].join(", "),
  openGraph: {
    title: "Estate Liquidation Rates & Areas in Hamilton County - Five Star Estate Liquidations",
    description:
      "Serving Hamilton County and surrounding areas with comprehensive estate liquidation services. Discover our commission-based rates and the areas we cover.",
    url: "https://hamiltoncountyestatesales.com/rates-areas",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Estate Liquidation Services in Hamilton County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Estate Liquidation Rates & Areas in Hamilton County - Five Star Estate Liquidations",
    description:
      "Discover our estate liquidation rates and the areas we cover in Hamilton County. Offering transparent, commission-based rates and comprehensive services.",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        alt: "Estate Liquidation Services in Hamilton County",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://hamiltoncountyestatesales.com/rates-areas",
  },
};


export default function RatesAreas() {
    return(
        <main>
            <Header />
            <OurRates />
            <Areas />
            <Contact />
        </main>
    )
}
