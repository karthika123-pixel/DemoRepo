import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, keyframes } from "@mui/material";

// Pulse animation for placeholder
const pulse = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

function MapSection() {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            color: "primary.main",
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            mb: { xs: 3, sm: 5 },
          }}
        >
          Find Us Here
        </Typography>

        <Box
          ref={mapRef}
          sx={{
            width: "100%",
            height: { xs: "300px", md: "450px" },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            backgroundColor: "background.default",
          }}
        >
          {showMap ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.174230768357!2d76.9926347765556!3d11.025551154545992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859412de57513%3A0x6589c77f7c346bfa!2sMilta%20Accounting%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1764942754971!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Milta Office Location"
            />

          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, #f2f2f2 0%, #e6e6e6 50%, #f2f2f2 100%)",
                backgroundSize: "200px 100%",
                animation: `${pulse} 1.5s infinite`,
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default MapSection;