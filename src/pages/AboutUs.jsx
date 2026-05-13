import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import {
  AboutHero,
  ClientStrip,
  CtaSection,
  InsightsSection,
  TeamSection,
  TestimonialSection,
  WhyChooseMilta,
} from "../us-components/aboutComp/index.js";
import useFullSEO from "../utils/useFullSEO";

function App() {
  useFullSEO({
    title: "About Us - Milta Accounting Services",
    description:
      "Learn how Milta supports growing businesses with reliable bookkeeping, payroll, tax planning, reporting, and finance operations support.",
    keywords:
      "about Milta, outsourced accounting support, bookkeeping partner USA, payroll and tax support, small business finance team",
    author: "Milta Accounting",
    canonical: "https://miltafs.com/about",
    ogTitle: "About Us - Milta Accounting Services",
    ogDescription:
      "Learn how Milta supports growing businesses with reliable bookkeeping, payroll, tax planning, reporting, and finance operations support.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://miltafs.com/about",
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <AboutHero />
        <WhyChooseMilta />
        <ClientStrip />
        <InsightsSection />
        <TestimonialSection />
        <TeamSection />
        <CtaSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
