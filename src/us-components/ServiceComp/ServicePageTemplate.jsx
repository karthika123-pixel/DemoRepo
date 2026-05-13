import React, { useMemo, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  InputBase,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  CheckCircle,
  ExpandMore,
  Search,
} from "@mui/icons-material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Link } from "react-router-dom";
import theme from "../../theme";

const ServicePageTemplate = ({ content }) => {
  const [searchValue, setSearchValue] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(
    content.faqs?.[0]?.question || false
  );

  const filteredServices = useMemo(() => {
    if (!searchValue.trim()) return content.sidebar.services;
    const query = searchValue.toLowerCase();
    return content.sidebar.services.filter((service) =>
      service.label.toLowerCase().includes(query)
    );
  }, [content.sidebar.services, searchValue]);

  const handleFaqChange = (question) => (_, isExpanded) => {
    setExpandedFaq(isExpanded ? question : false);
  };

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.default,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: { xs: "100%", md: "50%" },
            display: { xs: "none", md: "block" },
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={content.hero.image}
            alt={content.hero.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "8%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 160,
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
              "&::before": {
                content: '""',
                position: "absolute",
                top: -15,
                left: -15,
                right: -15,
                bottom: -15,
                borderRadius: "50%",
                filter: "blur(15px)",
                animation: "pulseGlow 2s ease-in-out infinite",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.6)",
                animation: "pulseRing 2s ease-in-out infinite",
              },
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="140"
              height="140"
              style={{ position: "absolute" }}
            >
              <style>
                {`
                  @keyframes spinText {
                    100% { transform: rotate(360deg); }
                  }
                  @keyframes pulseGlow {
                    0%, 100% { opacity: 0.55; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.05); }
                  }
                  @keyframes pulseRing {
                    0%, 100% { opacity: 0.45; transform: scale(1); }
                    50% { opacity: 0.85; transform: scale(1.08); }
                  }
                  .spin-anim { animation: spinText 15s linear infinite; transform-origin: center; }
                `}
              </style>
              <defs>
                <path
                  id="serviceHeroCirclePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text
                fontSize="10.5"
                fontWeight="700"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="0.1"
                letterSpacing="1.8"
                className="spin-anim"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
                }}
              >
                <textPath href="#serviceHeroCirclePath">
                  BUILD A SUCCESS BRAND WITH MILTA •
                </textPath>
              </text>
            </svg>

            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                color: "#141414",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.9)",
                zIndex: 2,
                boxShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow:
                    "0 0 30px rgba(255, 255, 255, 0.7), 0 0 60px rgba(255, 255, 255, 0.35)",
                },
              }}
            >
              <CallMadeIcon fontSize="medium" />
            </Box>
          </Box>
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minHeight: { xs: 300, md: 450 },
            }}
          >
            <Box
              sx={{
                py: { xs: 8, md: 12 },
                maxWidth: { xs: "100%", md: "45%" },
              }}
            >
              <Typography
                variant="h1"
                fontWeight={700}
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 2,
                  color: theme.palette.background.default,
                }}
              >
                {content.hero.title}
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ pt: 1 }} flexWrap="wrap">
                {content.hero.breadcrumbs.map((item, index) => (
                  <React.Fragment key={item.label}>
                    {item.to ? (
                      <Typography
                        component={Link}
                        to={item.to}
                        sx={{
                          color: theme.palette.background.default,
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: theme.palette.background.default,
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </Typography>
                    )}
                    {index < content.hero.breadcrumbs.length - 1 && (
                      <Typography sx={{ color: "rgba(255,255,255,0.52)" }}>
                        {">"}
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "320px minmax(0, 1fr)" },
            gap: { xs: 4, md: 4 },
            alignItems: "start",
          }}
        >
          <Stack spacing={3} sx={{ position: { md: "sticky" }, top: { md: 110 } }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: theme.palette.background.default,
                  border: "1px solid rgba(20,20,20,0.08)",
                  boxShadow: "0 12px 28px rgba(20,20,20,0.05)",
                }}
              >
                <Typography variant="h6" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                  Search
                </Typography>
                <Box
                  sx={{
                    px: 2,
                    py: 1.2,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(20,20,20,0.08)",
                  }}
                >
                  <InputBase
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    sx={{
                      flex: 1,
                      color: theme.palette.secondary.main,
                      "& input::placeholder": {
                        color: theme.palette.text.secondary,
                        opacity: 1,
                      },
                    }}
                  />
                  <Search sx={{ color: theme.palette.text.secondary, fontSize: 20 }} />
                </Box>
              </Box>

              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: theme.palette.background.default,
                  border: "1px solid rgba(20,20,20,0.08)",
                  boxShadow: "0 12px 28px rgba(20,20,20,0.05)",
                }}
              >
                <Typography variant="h6" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                  Our Service
                </Typography>

                <Stack spacing={1.25}>
                  {filteredServices.map((service) => (
                    (() => {
                      const isActiveService = service.to === content.activeService;

                      return (
                    <Box
                      key={service.label}
                      component={Link}
                      to={service.to}
                      sx={{
                        px: 2,
                        py: 1.5,
                        borderRadius: 2.5,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor:
                          isActiveService
                            ? theme.palette.secondary.main
                            : "#fff",
                        color:
                          isActiveService
                            ? "#fff"
                            : theme.palette.secondary.main,
                        border: `1px solid ${
                          isActiveService
                            ? theme.palette.secondary.main
                            : "rgba(20,20,20,0.08)"
                        }`,
                        transition:
                          "all 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                        boxShadow:
                          isActiveService
                            ? "0 12px 26px rgba(20,20,20,0.16)"
                            : "none",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                          color: "#fff",
                          borderColor: theme.palette.primary.main,
                          boxShadow: "0 12px 24px rgba(122,158,62,0.24)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.96rem",
                          pr: 1.5,
                          color: isActiveService ? "#fff" : theme.palette.secondary.main,
                        }}
                      >
                        {service.label}
                      </Typography>
                      <ArrowForward
                        sx={{
                          fontSize: 18,
                          opacity: isActiveService ? 1 : 0.75,
                          color: isActiveService ? "#fff" : theme.palette.secondary.main,
                        }}
                      />
                    </Box>
                      );
                    })()
                  ))}
                </Stack>
              </Box>

              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: theme.palette.background.default,
                  border: "1px solid rgba(20,20,20,0.08)",
                  boxShadow: "0 12px 28px rgba(20,20,20,0.05)",
                }}
              >
                <Typography variant="h6" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                  Popular Tags
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {content.sidebar.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        backgroundColor: "#fff",
                        color: theme.palette.secondary.main,
                        border: "1px solid rgba(20,20,20,0.08)",
                        borderRadius: 2,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: theme.palette.secondary.main,
                  color: "#fff",
                  boxShadow: "0 18px 36px rgba(20,20,20,0.12)",
                }}
              >
                <Typography variant="h5" sx={{ color: "#fff", mb: 2 }}>
                  Get A Free Quote
                </Typography>

                <Stack spacing={1.4}>
                  <TextField
                    placeholder="Your Name"
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.08)",
                        "& input::placeholder": {
                          color: "rgba(255,255,255,0.75)",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  <TextField
                    placeholder="Email Address"
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.08)",
                        "& input::placeholder": {
                          color: "rgba(255,255,255,0.75)",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  <TextField
                    placeholder="Phone Number"
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.08)",
                        "& input::placeholder": {
                          color: "rgba(255,255,255,0.75)",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  <TextField
                    placeholder="Your Message"
                    multiline
                    minRows={4}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.08)",
                        "& textarea::placeholder": {
                          color: "rgba(255,255,255,0.75)",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: theme.palette.primary.main,
                      color: "#fff",
                      borderRadius: "999px",
                      px: 3,
                      py: 1.2,
                      "&:hover": {
                        bgcolor: "#6d8d37",
                      },
                    }}
                  >
                    Submit Now
                  </Button>
                </Stack>
              </Box>
            </Stack>

          <Stack spacing={4}>
              <Box
                component="img"
                src={content.content.heroImage}
                alt={content.content.sectionTitle}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  minHeight: { xs: 260, md: 360 },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <Box>
                <Typography variant="h4" sx={{ color: theme.palette.secondary.main, mb: 1.5 }}>
                  {content.content.sectionTitle}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  {content.content.intro}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 1.5,
                    mt: 2,
                  }}
                >
                  {content.content.bullets.map((bullet) => (
                    <Stack key={bullet} direction="row" spacing={1.2} alignItems="center">
                      <CheckCircle sx={{ color: theme.palette.secondary.main, fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                        {bullet}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {content.content.galleryImages.map((image) => (
                  <Box
                    key={image.alt}
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      minHeight: 220,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ))}
              </Box>

              <Box>
                <Typography variant="h4" sx={{ color: theme.palette.secondary.main, mb: 1.5 }}>
                  {content.content.secondaryTitle}
                </Typography>
                {content.content.secondaryParagraphs.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary, mb: 1.8 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>

              {content.content.featureList?.length ? (
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: theme.palette.background.default,
                    border: "1px solid rgba(20,20,20,0.08)",
                  }}
                >
                  <Typography variant="h5" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                    What&apos;s Included
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {content.content.featureList.map((item) => (
                      <ListItem
                        key={item}
                        sx={{
                          px: 0,
                          py: 0.8,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                        }}
                      >
                        <Stack direction="row" spacing={1.2} alignItems="center">
                          <CheckCircle sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                          <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                            {item}
                          </Typography>
                        </Stack>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ) : null}

              <Box>
                <Typography variant="h4" sx={{ color: theme.palette.secondary.main, mb: 2.5 }}>
                  Frequently Asked Question (FAQ)
                </Typography>
                <Stack spacing={1.25}>
                  {content.faqs.map((faq) => {
                    const isExpanded = expandedFaq === faq.question;

                    return (
                    <Accordion
                      key={faq.question}
                      expanded={isExpanded}
                      onChange={handleFaqChange(faq.question)}
                      disableGutters
                      sx={{
                        borderRadius: "14px !important",
                        overflow: "hidden",
                        border: `1px solid ${
                          isExpanded
                            ? theme.palette.secondary.main
                            : "rgba(20,20,20,0.08)"
                        }`,
                        transition:
                          "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                        boxShadow: isExpanded
                          ? "0 12px 24px rgba(20,20,20,0.08)"
                          : "none",
                        backgroundColor: isExpanded
                          ? "rgba(20,20,20,0.02)"
                          : "#fff",
                        "&:hover": {
                          borderColor: isExpanded
                            ? theme.palette.secondary.main
                            : theme.palette.primary.main,
                          boxShadow: isExpanded
                            ? "0 12px 24px rgba(20,20,20,0.08)"
                            : "0 10px 20px rgba(122,158,62,0.12)",
                        },
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMore
                            sx={{
                              color: isExpanded ? "#fff" : theme.palette.secondary.main,
                              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s ease",
                              backgroundColor: isExpanded
                                ? "rgba(255,255,255,0.16)"
                                : "rgba(20,20,20,0.06)",
                              borderRadius: "50%",
                            }}
                          />
                        }
                        sx={{
                          backgroundColor:
                            isExpanded
                              ? theme.palette.secondary.main
                              : theme.palette.background.default,
                          color: isExpanded ? "#fff" : theme.palette.secondary.main,
                          px: 2.5,
                          py: 0.5,
                          minHeight: 60,
                          "& .MuiAccordionSummary-content": {
                            my: 1.25,
                          },
                          "& .MuiAccordionSummary-expandIconWrapper": {
                            color: isExpanded ? "#fff" : theme.palette.secondary.main,
                          },
                          "&:hover": {
                            backgroundColor: isExpanded
                              ? theme.palette.secondary.main
                              : "rgba(122,158,62,0.14)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: isExpanded ? "#fff" : theme.palette.secondary.main,
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          px: 2.5,
                          py: 2.25,
                          backgroundColor: "#fff",
                          borderTop: isExpanded
                            ? "1px solid rgba(20,20,20,0.06)"
                            : "none",
                        }}
                      >
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    );
                  })}
                </Stack>
              </Box>
            </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicePageTemplate;
