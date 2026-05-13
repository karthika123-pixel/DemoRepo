import React, { useState } from "react";
import {
  ArrowForward,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../theme";
import logo from "../../assets/logo.svg";
import { submitNewsletterForm } from "../../api/client";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Case Studies", to: "/blogs" },
  { label: "Pricing Plan", to: "/contact" },
  { label: "Contact Us", to: "/contact" },
];

const contactDetails = [
  { icon: <Phone fontSize="small" />, text: "+1 (813) 303-0213" },
  { icon: <LocationOn fontSize="small" />, text: "421 Allen, Mexico 4233" },
  { icon: <Email fontSize="small" />, text: "info@miltafs.com" },
  { icon: <Phone fontSize="small" />, text: "+91-96001 03723" },
];

const socialLinks = [
  {
    icon: <Facebook fontSize="small" />,
    href: "https://www.facebook.com/miltaaccountingservices/",
  },
  {
    icon: <Instagram fontSize="small" />,
    href: "https://www.instagram.com/milta_accountings/",
  },
  {
    icon: <LinkedIn fontSize="small" />,
    href: "https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/",
  },
  {
    icon: <YouTube fontSize="small" />,
    href: "https://www.youtube.com/@milta-accounting-service",
  },
];

function Footer3() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    if (!newsletterEmail) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);
    const response = await submitNewsletterForm({ email: newsletterEmail });

    if (response.error) {
      alert("Failed to send subscription. Try again later.");
      setLoading(false);
      return;
    }

    if (response.emailNotification && !response.emailNotification.success) {
      alert("Subscription was received, but the email notification could not be delivered.");
    } else {
      alert("Thank you for subscribing!");
    }

    setNewsletterEmail("");
    setLoading(false);
  };

  return (
    <Box sx={{ backgroundColor: "#fff", pt: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 4,
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ color: theme.palette.background.default, mb: 1.5 }}
            >
              Ready For Expert Guidance?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.74)", maxWidth: 540 }}
            >
              At Milta, we believe every business can thrive with the right
              financial systems, reporting, and support behind it.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleNewsletterSubmit}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                p: 0.75,
                gap: 1,
              }}
            >
              <InputBase
                placeholder="Email Address"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                sx={{
                  flex: 1,
                  px: 2,
                  color: theme.palette.secondary.main,
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: "#fff",
                  borderRadius: "999px",
                  px: 3,
                  py: 1.1,
                  minWidth: { xs: 0, sm: 170 },
                  "&:hover": {
                    bgcolor: "#6d8d37",
                  },
                }}
              >
                {loading ? "Sending..." : "Subscribe"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ pt: { xs: 6, md: 7 }, pb: 4 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr 0.95fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start",
            }}
          >
            <Box>
              <Box component="img" src={logo} alt="Milta" sx={{ width: 148, mb: 2 }} />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, lineHeight: 1.9, maxWidth: 320 }}
              >
                We work with growing businesses to keep their books cleaner,
                reporting clearer, and finance operations easier to manage.
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
                {socialLinks.map((item) => (
                  <IconButton
                    key={item.href}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      border: "1px solid rgba(20,20,20,0.12)",
                      color: theme.palette.secondary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.secondary.main, mb: 2.5 }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1.25}>
                {quickLinks.map((item) => (
                  <Typography
                    key={item.label}
                    component={Link}
                    to={item.to}
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.text.secondary,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.secondary.main, mb: 2.5 }}
              >
                Contact Us
              </Typography>
              <Stack spacing={1.6}>
                {contactDetails.map((item) => (
                  <Stack
                    key={item.text}
                    direction="row"
                    spacing={1.2}
                    alignItems="flex-start"
                  >
                    <Box sx={{ color: theme.palette.primary.main, mt: 0.15 }}>{item.icon}</Box>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ my: 4, borderColor: "rgba(20,20,20,0.08)" }} />

          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, textAlign: "center" }}
          >
            © {new Date().getFullYear()} Milta. All Right Reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer3;
