import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme";
import useFullSEO from "../../utils/useFullSEO";
import ServicePageTemplate from "./ServicePageTemplate";

const buildFaqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const ServiceContentPage = ({ content }) => {
  useFullSEO({
    ...content.seo,
    schema: buildFaqSchema(content.faqs),
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <ServicePageTemplate content={content} />
      </main>
    </ThemeProvider>
  );
};

export default ServiceContentPage;
