import { Metadata } from "next";

// Components
import Header from "@/sections/after-the-sale/header/header.tsx";
import AfterTheLequidations from "@/sections/after-the-sale/after-the-lequidations/afterTheLequidations";
import Settlement from "@/sections/after-the-sale/settlement/settlement";
import RealtorService from "@/sections/after-the-sale/realtor-service/realtorService";
import Contact from "@/sections/contact/contact";

export const metadata: Metadata = {
  title: "After the Sale in Hamilton County - Five Star Estate Liquidations",
  description:
    "Discover our post-estate sale services in Hamilton County at Five Star Estate Liquidations. We offer leftover item removal, settlement, and Realtor services to maximize the value of your property.",
  keywords: [
    "Hamilton County post-estate sale services", "estate sale leftovers Hamilton County", "estate liquidation cleanup Hamilton County",
    "charitable donation Hamilton County", "Hamilton County estate sale settlement", "detailed accounting Hamilton County estate sale",
    "estate sale proceeds Hamilton County", "auction consignment settlement Hamilton County", "Hamilton County Realtor services",
    "real estate agent Hamilton County", "property staging services Hamilton County", "home staging Hamilton County",
    "maximize listing price Hamilton County", "minor repairs estate sale Hamilton County", "preferred contractors Hamilton County estate sale",
    "Tennessee estate sale services Hamilton County", "Hamilton County estate liquidation settlement", "estate sale cleanup Hamilton County",
    "estate sale donations Hamilton County", "tax-deductible donation receipt Hamilton County", "estate sale bidding Hamilton County",
    "estate sale dealers Hamilton County", "Hamilton County estate sale settlement process", "Hamilton County estate sale finalization",
    "house cleaning Hamilton County estate sale", "broom clean estate sale Hamilton County", "Hamilton County estate sale contractor network",
    "Hamilton County post-sale real estate services", "Realtor Hamilton County estate sale", "home staging Hamilton County Tennessee",
    "property value maximization Hamilton County", "real estate services after estate sale Hamilton County", "Hamilton County estate sale auction services",
    "Tennessee real estate staging", "estate sale final accounting Hamilton County", "Hamilton County estate sale check",
    "post-sale property staging Hamilton County", "home staging for higher offers Hamilton County", "Hamilton County estate sale repairs",
    "estate sale realtor network Hamilton County", "property cleanup after estate sale Hamilton County", "estate sale final steps Hamilton County",
    "Hamilton County estate liquidation process", "Hamilton County estate sale remaining items", "real estate services Hamilton County estate sale",
    "home staging benefits Hamilton County", "property staging for sale Hamilton County", "estate sale property enhancement Hamilton County",
    "Hamilton County Tennessee estate sale experts", "estate liquidation professionals Hamilton County", "post-sale settlement services Hamilton County",
    "estate sale charity donations Hamilton County", "donate estate sale leftovers Hamilton County", "post-estate sale procedures Hamilton County",
    "estate sale contractor services Hamilton County", "real estate listing enhancements Hamilton County", "property value improvements Hamilton County",
    "Hamilton County estate liquidation settlement process", "Tennessee property staging Hamilton County", "estate sale finalization steps Hamilton County",
    "Realtor services Hamilton County Tennessee", "home improvement Hamilton County estate sale", "Hamilton County estate sale final proceeds",
    "real estate agent post-estate sale Hamilton County", "estate sale contractor partnerships Hamilton County", "home staging experts Hamilton County",
    "Tennessee estate liquidators Hamilton County", "Hamilton County estate sale process final steps", "maximize home sale price Hamilton County",
    "Hamilton County estate sale cleanup services", "property staging post-estate sale Hamilton County", "Hamilton County estate liquidation completion",
    "post-sale real estate enhancement Hamilton County", "estate sale completion services Hamilton County", "real estate post-sale services Hamilton County",
    "estate liquidation Realtor services Hamilton County", "property staging and repair Hamilton County", "post-sale estate services Hamilton County",
    "Tennessee estate liquidation company Hamilton County", "estate sale property staging Hamilton County", "home repair for estate sale Hamilton County",
    "Realtor Hamilton County estate liquidation", "estate sale final checklist Hamilton County", "Hamilton County estate sale and property staging"
  ].join(", "),
  openGraph: {
    title: "After the Sale in Hamilton County - Five Star Estate Liquidations",
    description:
      "Explore our comprehensive post-sale services in Hamilton County at Five Star Estate Liquidations, including item removal, settlement, and Realtor services to enhance the value of your property.",
    url: "https://hamiltoncountyestatesales.com/after-the-sale",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/after-the-lequidations.png",
        width: 1200,
        height: 630,
        alt: "Post Estate Sale Services in Hamilton County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "After the Sale in Hamilton County - Five Star Estate Liquidations",
    description:
      "Discover our expert post-sale services in Hamilton County, including item removal, settlement, and Realtor services to ensure a successful transition.",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Hamilton County",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://hamiltoncountyestatesales.com/after-the-sale",
  },
};

export default function AfterTheSale() {
  return (
    <main>
      <Header />
      <AfterTheLequidations />
      <Settlement />
      <RealtorService />
      <Contact />
    </main>
  );
}
