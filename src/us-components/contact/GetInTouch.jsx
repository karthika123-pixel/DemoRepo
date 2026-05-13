import React from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import contactImage from "../../assets/accounting.jpg"; // Add your image path

function GetInTouch() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        pt: { xs: 6, md:0 },
        pb: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: "stretch",
        }}
      >
        {/* Left Section - Image */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            position: "relative",
            minHeight: 500,
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={contactImage}
            alt="Contact Us"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          
          {/* Optional: Overlay content on image */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 4,
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              color: "#fff",
            }}
          >
            <Typography variant="h5" fontWeight={700} gutterBottom >
              Let's Discuss Your Project
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }} color="primary.main">
              Our team is ready to help you achieve your business goals
            </Typography>
          </Box>
        </Box>

        {/* Right Section - Contact Form */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Mobile Image (shown only on mobile) */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "relative",
              height: 250,
              borderRadius: "20px",
              overflow: "hidden",
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={contactImage}
              alt="Contact Us"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
  {/* Card */}
          <Box
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "20px",
              p: { xs: 3, sm: 4.5 },
              boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
            }}
          >
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: { xs: "center", md: "center" } }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: 3,
                fontSize: "0.75rem",
              }}
            >
              Get In Touch
            </Typography>
            <Typography variant="h4" fontWeight={800} color="primary.main" mt={0.5}>
              Send Us A Message
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              We'll get back to you within 24 hours.
            </Typography>
          </Box>

        
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {/* First & Last Name */}
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  sx={{
                    bgcolor: "background.default",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  sx={{
                    bgcolor: "background.default",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                />
              </Box>

              {/* Phone & Email */}
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <TextField
                  fullWidth
                  label="Phone Number*"
                  variant="outlined"
                  sx={{
                    bgcolor: "background.default",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email Address*"
                  variant="outlined"
                  sx={{
                    bgcolor: "background.default",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                />
              </Box>

              {/* Service Type */}
              <TextField
                select
                fullWidth
                label="Service Type*"
                variant="outlined"
                sx={{
                  bgcolor: "background.default",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
              >
                <MenuItem value="Bookkeeping">Bookkeeping</MenuItem>
                <MenuItem value="Tax">Tax Preparation</MenuItem>
                <MenuItem value="Payroll">Payroll</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>

              {/* Message */}
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  bgcolor: "background.default",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
              />

              {/* Submit */}
              <Button
                variant="contained"
                fullWidth
                endIcon={<CallMadeIcon />}
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  fontWeight: 700,
                  py: 1.6,
                  fontSize: "0.95rem",
                  borderRadius: "12px",
                  letterSpacing: 1,
                  "&:hover": { bgcolor: "secondary.main" },
                }}
              >
                SUBMIT NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GetInTouch;