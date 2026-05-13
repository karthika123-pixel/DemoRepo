import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { keyframes } from "@mui/system";

/* ===== Slide Right to Left Animation (Only Once) ===== */
const slideRightLeft = keyframes`
  0% {
    transform: translateX(80px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const StickyButtons = () => {
  const buttons = [
    {
      icon: <EmailIcon sx={{ fontSize: { xs: 18, md: 22 }, color: "#D44638" }} />,
      bg: "#ffffff",
      hoverBg: "#f5f5f5",
      link: "mailto:info@miltafs.com",
      external: false,
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: { xs: 18, md: 22 }, color: "#ff9401" }} />,
      bg: "#ffffff",
      hoverBg: "#f5f5f5",
      link: "https://calendly.com/frank-miltafs/milta-accounting-service-zoom-meeting",
      external: false,
    },
    {
      icon: <FacebookIcon sx={{ fontSize: { xs: 18, md: 22 }, color: "#1877F2" }} />,
      bg: "#ffffff",
      hoverBg: "#f5f5f5",
      link: "https://www.facebook.com/miltaaccountingservices/",
      external: true,
    },
    {
      icon: <InstagramIcon sx={{ fontSize: { xs: 18, md: 22 }, color: "#E1306C" }} />,
      bg: "#ffffff",
      hoverBg: "#f5f5f5",
      link: "https://www.instagram.com/milta_accountings/",
      external: true,
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "45%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 1.5,
        pr: { xs: 0, md: "5px" },

        /* ✅ Slide Right → Left Animation Only Once */
        animation: `${slideRightLeft} 0.8s ease-out`,
      }}
    >
      {buttons.map((btn, index) => (
        <Box
          key={index}
          component={btn.external ? "a" : "div"}
          href={btn.external ? btn.link : undefined}
          onClick={
            !btn.external ? () => (window.location.href = btn.link) : undefined
          }
          target={btn.external ? "_blank" : undefined}
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: btn.bg,
            color: "#fff",
            width: "48px",
            height: "48px",
            borderRadius: "25px 0 0 25px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0, 0, 0, 0.45)",

            "&:hover": {
              background: btn.hoverBg,
              transform: "scale(1.15)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.24)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
            },
            "&:focus-visible": {
              outline: "3px solid rgba(0, 0, 0, 0.45)",
              outlineOffset: "2px",
            },

            "@media (max-width:600px)": {
              width: "36px",
              height: "36px",
            },
          }}
        >
          {btn.icon}
        </Box>
      ))}
    </Box>
  );
};

export default StickyButtons;