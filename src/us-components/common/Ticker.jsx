  import React from "react";
import { Box, Typography } from "@mui/material";

function Ticker() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        background: "#7a9e3e",
        color: "#fff",
        py: 1.5,
        fontWeight: 500,
        fontSize: { xs: "14px", md: "16px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          px: 2,
          animation: "ticker 40s linear infinite",
          "@keyframes ticker": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        <Typography component="span" sx={{ mr: 4 }}>
         🎁 Get a 5-Hour Free Trial Task — crafted to deliver clear, efficient, and hassle-free guidance while helping you navigate any challenges in your tax planning needs.
  
        </Typography>
      </Box>
    </Box>
  );
}

export default Ticker;
