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

const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle = "Here to help you out",
  maxWidth = "900px",
  bgColor = "#f4f8ee",
}) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box sx={{ py: 8, backgroundColor: bgColor }}>
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
              color: "#1d4230",
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
            expanded={expanded === `panel-${index}`}
            onChange={() => setExpanded(expanded === `panel-${index}` ? null : `panel-${index}`)}
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#1d4230" }} />}
              sx={{
                fontWeight: 600,
                color: "#1d4230",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "left",
              }}
            >
              <Typography sx={{ textAlign: "left" }}>
                {faq.question}
              </Typography>
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
