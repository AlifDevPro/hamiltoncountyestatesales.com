import Image from "next/image";
import type { Metadata } from "next";

// Components
import Scheduler from "@/components/individual/scheduler/scheduler";
import Header from '@/sections/header/header';
import About from "@/sections/about/about";
import Marketing from "@/sections/marketing/marketing";
import WhyUs from "@/sections/whyUs/whyUs";
import Mission from "@/sections/mission/mission";
import Services from "@/sections/services/services";
import Cta from "@/sections/cta/cta";
import Ftf from "@/sections/ftf/ftf";
import Faq from "@/sections/faq/faq";
import Contact from "../sections/contact/contact";

// Styles
import './globals.css';
import './globals.scss';

export const metadata: Metadata = {
  title: "Top Estate Sales in Hamilton County | Five Star Estate Liquidations",
  description:
    "Looking for top estate sales in Hamilton County? Five Star Estate Liquidations offers expert estate sales, auctions, and liquidation services in Hamilton County and surrounding areas. Trust us to handle your property with professionalism.",
  icons: "/logo.png",
  keywords: [
    "best estate sales Hamilton County",
    "estate liquidation Hamilton County",
    "estate auctions Hamilton County",
    "property sales Hamilton County",
    "Hamilton County estate sales",
    "Hamilton County liquidation services",
    "Hamilton County estate auctions",
    "estate sale companies Hamilton County",
    "estate sale services Hamilton County",
    "local estate sales Hamilton County",
    "furniture sales Hamilton County",
    "moving sales Hamilton County",
    "house sales Hamilton County",
    "estate liquidation Hamilton County",
    "Hamilton County property liquidation",
    "estate sales near Hamilton County",
    "Hamilton County TN estate sales",
    "Hamilton County TN liquidation",
    "Hamilton County estate sale experts",
    "best estate liquidation Hamilton County",
    "estate auctions near Hamilton County",
    "estate sale companies Hamilton County",
    "Hamilton County estate liquidators",
    "estate sale events Hamilton County",
    "Hamilton County estate sale company",
    "estate sale professionals Hamilton County",
    "property liquidation Hamilton County",
    "estate sale charity donations Hamilton County",
    "estate sale experts Hamilton County",
    "Tennessee estate liquidation Hamilton County",
    "estate sales and auctions Hamilton County",
    "estate cleanouts Hamilton County",
    "Hamilton County estate buyouts",
    "local estate liquidation Hamilton County",
    "Hamilton County TN moving sales",
    "Hamilton County property auctions",
    "real estate sales Hamilton County TN",
    "estate sales services near Hamilton County",
    "antiques sales Hamilton County TN",
    "household estate sales Hamilton County",
    "garage sales Hamilton County TN",
    "yard sales Hamilton County TN"
  ].join(", "),
  openGraph: {
    title: "Top Estate Sales in Hamilton County | Five Star Estate Liquidations",
    description:
      "Discover the top estate sales in Hamilton County with Five Star Estate Liquidations. We offer expert estate sale and liquidation services in Hamilton County and beyond, ensuring a smooth and profitable transition.",
    url: "https://hamiltoncountyestatesales.com/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Top Estate Sales in Hamilton County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Estate Sales in Hamilton County | Five Star Estate Liquidations",
    description:
      "Five Star Estate Liquidations is your go-to for the top estate sales in Hamilton County. We offer professional estate sale and liquidation services to ensure your property is handled with care.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Hamilton County Estate Sales",
      },
    ],
  },
  alternates: {
    canonical: "https://hamiltoncountyestatesales.com/",
  },
};


export default function Home() {
  return (
    <main>
      <Scheduler />
      <Header />
      <About />
      <Marketing />
      <WhyUs />
      <Mission />
      <Services />
      <Cta />
      <Ftf />
      <Faq />
      <Contact />
    </main>
  );
}
