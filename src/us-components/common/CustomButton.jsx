import React from "react";
import { Button, keyframes } from "@mui/material";

// Define gradient animation keyframes
const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const CustomButton = ({
  children,
  onClick,
  variant = "contained",
  fullWidth = false,
  sx = {},
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
      sx={{
        background:
          "linear-gradient(270deg, #0d3731, #1a574f, #ff9401, #0d3731)",
        backgroundSize: "300% 300%",
        animation: `${gradientMove} 6s ease infinite`,
        color: "#fff",
        fontWeight: 600,
        fontFamily: "'Poppins', sans-serif",
        textTransform: "capitalize",
        borderRadius: "30px",
        px: 4,
        py: 1.3,
        fontSize: "1rem",
        letterSpacing: "0.5px",
        border: "none",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        "&:hover": {
          transform: "translateY(-3px) scale(1.03)",
          boxShadow: "0 8px 20px rgba(255,148,1,0.4)",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
