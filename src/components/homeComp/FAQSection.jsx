import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StylishDividerText from "../homeComp/StylishDividerText";
import theme from '../../theme.js';

const FAQSection = ({
  title = "FAQs About Milta Accounting Services",
  subtitle = "Here to help you out",
  maxWidth = "900px",
  bgColor = "#f4f8ee",
}) => {
  const [expanded, setExpanded] = useState(false);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide bookkeeping, payroll management, tax planning & preparation, CPA services, virtual assistance, data entry solutions, and controller services for U.S. businesses.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Simply schedule a consultation with us. Our team will understand your needs and set up a customized plan for smooth onboarding.",
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer:
        "We follow strict U.S. security standards, encrypted systems, and NDA-compliant processes to protect sensitive data at every step.",
    },
    {
      question: "What accounting software do you use?",
      answer:
        "We work with leading tools such as QuickBooks, Xero, Sage, Wave, Zoho Books, and other U.S.-based accounting platforms.",
    },
    {
      question: "What industries do you support?",
      answer:
        "We support various industries, including retail, healthcare, real estate, legal firms, non-profits, restaurants, and more.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We currently accept International Wire Transfer and Veem as our secure and convenient payment options. Our team will share billing details during onboarding to ensure a smooth payment process.",
    },
  ];

  return (
    <Box sx={{ pt: 2, pb: 4, backgroundColor: bgColor }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {subtitle && (
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <StylishDividerText text={subtitle} />
          </Box>
        )}

        {title && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              fontFamily: "'Poppins', sans-serif",
              mb: 4,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        )}

        {/* FAQ Accordions */}
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => setExpanded(expanded === index ? false : index)}
            sx={{
              borderRadius: "12px !important",
              mb: 1.5,
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                backgroundColor: "#ffffff",
                borderColor: "#d9f7d9",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                fontFamily: "'Poppins', sans-serif",
                textAlign: "left",
              }}
            >
              <Typography sx={{ textAlign: "left" }}>{faq.question}</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
