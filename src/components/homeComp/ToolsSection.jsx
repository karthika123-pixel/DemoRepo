import React from "react";
import { Box, Typography, Button } from "@mui/material";

import tool1 from "../../assets/tools/tools-1.png";
import tool2 from "../../assets/tools/tools-2.png";
import tool3 from "../../assets/tools/tools-3.png";
import tool4 from "../../assets/tools/tools-4.png";
import tool5 from "../../assets/tools/tools-10.png";
import tool6 from "../../assets/tools/tools-12.png";
import tool7 from "../../assets/tools/tools-13.png";
import tool9 from "../../assets/tools/tools-14.png";
import tool10 from "../../assets/tools/tools-15.png";
import tool11 from "../../assets/tools/tools-16.png";
import tool12 from "../../assets/tools/tools-18.png";
import tool13 from "../../assets/tools/tools-19.png";
import theme from '../../theme.js';

const tools = [
  { id: 1, src: tool1 },
  { id: 2, src: tool2 },
  { id: 3, src: tool3 },
  { id: 4, src: tool4 },
  { id: 5, src: tool5 },
  { id: 6, src: tool6 },
  { id: 7, src: tool7 },
  { id: 9, src: tool9 },
  { id: 10, src: tool10 },
  { id: 11, src: tool11 },
  { id: 12, src: tool12 },
  { id: 13, src: tool13 },
];

const ToolsSection = () => {
  const duplicatedTools = [...tools, ...tools];

  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 4, sm: 6, md: 8 },
        background: "#ffffff",
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ maxWidth: "1300px", mx: "auto", textAlign: "center", px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 800, 
            mb: 1,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" }
          }}
        >
          Tools We Use
        </Typography>

        <Box
          sx={{
            width: { xs: 50, sm: 70, md: 100 },
            height: { xs: "3px", sm: "4px" },
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "6px",
            mx: "auto",
            mb: { xs: 2, sm: 2.5, md: 3 },
          }}
        />

        {/* Auto-scroll container */}
        <Box sx={{ overflow: "hidden", width: "100%", py: { xs: 2, sm: 2.5, md: 3 } }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, sm: 2, md: 2.5 },
              animation: "scroll 30s linear infinite",
              "&:hover": { animationPlayState: "paused" },
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: { xs: 90, sm: 100, md: 120, lg: 150 },
                  height: { xs: "80px", sm: "100px", md: "110px", lg: "120px" },
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: { xs: "12px", sm: "16px", md: "20px" },
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.06)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={tool.src}
                  alt="Software tool logo"
                  loading="lazy" // ⚛️ Below-the-fold optimization
                  width={120} // ⚛️ Prevents CLS
                  height={80}
                  sx={{
                    width: { xs: 70, sm: 70, md: 80, lg: 120 },
                    height: "auto",
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "contain",
                    filter: "grayscale(100%) opacity(0.9)",
                    transition: "0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%) opacity(1)",
                    },
                  }}
                />
              </Box>
            ))}

          </Box>
        </Box>

        {/* Read More Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 3, sm: 3.5, md: 4 } }}>
          <Button
            variant="contained"
            sx={{
              px: { xs: 3, sm: 3.5, md: 4 },
              py: { xs: 1, sm: 1.1, md: 1.2 },
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
              borderRadius: "30px",
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
            onClick={() => (window.location.href = "/us/software/tools-we-use/")}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolsSection;