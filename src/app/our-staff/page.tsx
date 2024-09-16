import { Metadata } from "next"

//components
import Header from "@/sections/staff/header/ourStaff"
import OurStaff from "@/sections/staff/our-staff/ourStaff"
import StaffDay from "@/sections/staff/staffDay/staffDay"
import Contact from "@/sections/contact/contact"

export const metadata: Metadata = {
  title: "Our Staff - Hamilton County Estate Sales",
  description:
    "Meet the professional team at Hamilton County Estate Sales. Our experienced staff ensures a smooth and successful estate sale process in Hamilton County and surrounding areas.",
  keywords: [
    "estate liquidation staff Hamilton County", "estate sale professionals Hamilton County", "Hamilton County estate liquidation",
    "professional estate team Hamilton County", "Hamilton County estate sales staff", "auction staff Hamilton County",
    "estate consulting team Hamilton County", "estate appraisers Hamilton County", "property accessors Hamilton County",
    "estate sale management Hamilton County", "Tennessee estate sale team", "professional estate consultants Hamilton County",
    "Hamilton County estate appraisers", "estate sale security Hamilton County", "estate sale parking attendants Hamilton County",
    "estate sale crowd control Hamilton County", "estate sale accounting Hamilton County", "estate liquidation services Hamilton County",
    "estate sale experts Hamilton County", "estate sale planning Hamilton County", "Hamilton County estate sale company",
    "estate liquidation management Hamilton County", "estate sale preparation Hamilton County", "professional estate sale staff Hamilton County",
    "Tennessee auction staff", "estate sale consultation Hamilton County", "estate sale day staff Hamilton County",
    "estate sale security team Hamilton County", "Hamilton County estate liquidation experts", "estate liquidation appraisers Hamilton County",
    "estate sales management Hamilton County", "estate sale support staff Hamilton County", "estate auction professionals Hamilton County",
    "estate sale assistance Hamilton County", "professional estate sale service Hamilton County", "Tennessee estate liquidation professionals",
    "estate sale organization Hamilton County", "estate sale logistics Hamilton County", "estate sale appraisers Tennessee",
    "Hamilton County property accessors", "estate sale services Tennessee", "estate liquidation team Hamilton County",
    "estate sale staffing Hamilton County", "estate liquidation staffing Hamilton County", "Hamilton County estate sale consultants",
    "estate sale appraisal experts Hamilton County", "estate sale security services Hamilton County", "estate sale crowd control team Hamilton County",
    "professional estate sale management Hamilton County", "Tennessee estate sale professionals", "estate liquidation consulting Hamilton County",
    "estate sale process Hamilton County", "estate sale uniformed staff Hamilton County", "Tennessee estate liquidation services Hamilton County",
    "estate sale consultation Hamilton County", "estate liquidation company Hamilton County", "estate sale business Hamilton County",
    "estate liquidation firm Hamilton County", "professional estate liquidators Hamilton County", "estate sale day preparation Hamilton County",
    "Hamilton County estate sale experts", "estate sale uniformed team Hamilton County", "estate liquidation specialists Hamilton County",
    "estate sale logistics team Hamilton County", "estate sale business Hamilton County", "Tennessee estate sale management Hamilton County",
    "estate liquidation support Hamilton County", "estate sale services Hamilton County", "estate sale security Hamilton County",
    "Tennessee estate crowd control Hamilton County", "estate sale parking services Hamilton County", "estate sale financial management Hamilton County",
    "estate sale pricing control Hamilton County", "estate sale account management Hamilton County", "estate liquidation expertise Hamilton County",
    "Hamilton County estate sale professionals", "estate liquidation consulting Hamilton County", "Hamilton County estate liquidation team"
  ].join(", "),
  openGraph: {
    title: "Our Staff - Hamilton County Estate Sales",
    description:
      "Meet the dedicated professionals at Hamilton County Estate Sales. Our team is committed to ensuring a seamless estate sale experience for you in Hamilton County and surrounding areas.",
    url: "https://hamiltoncountyestatesales.com/our-staff",
    type: "website",
    locale: "en_US",
    siteName: "Hamilton County Estate Sales",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Our Staff at Hamilton County Estate Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Our Staff - Hamilton County Estate Sales",
    description:
      "Meet the professional team at Hamilton County Estate Sales. We handle every aspect of estate sales with expertise and dedication.",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        alt: "Our Staff at Hamilton County Estate Sales",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://hamiltoncountyestatesales.com/our-staff",
  },
};


export default function Staff() {
    return(
        <main>
            <Header />
            <OurStaff />
            <StaffDay />
            <Contact />
        </main>
    )
}
