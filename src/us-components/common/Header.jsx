// src/components/common/Header.jsx
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  Typography,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ContactPopup from "./ContactPopup";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    submenu: [
      {
        label: "Tax Planning and Preparation Services",
        to: "/us/services/tax-planning-and-preparation-services-usa/",
      },
      {
        label: "Bookkeeping Services",
        to: "/us/services/bookkeeping-company-in-the-usa/",
      },
      {
        label: "CPA Services",
        to: "/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
      },
      {
        label: "Virtual Assistant Services",
        to: "/us/services/virtual-assistant-service-in-the-usa/",
      },
      {
        label: "Data Entry Services",
        to: "/us/services/outsourcing-accounting-data-entry-services-in-the-usa/",
      },
      {
        label: "Financial Controller Services",
        to: "/us/services/financial-controller-services-in-the-usa/",
      },
      {
        label: "Digital Marketing Services",
        to: "/us/services/best-digital-marketing-agency-in-usa/",
      },
      {
        label: "Payroll Management Services",
        to: "/us/services/payroll-management-services-in-the-usa/",
      },
    ],
  },
  {
    label: "Industry",
    submenu: [
      {
        label: "Contractors",
        to: "/us/industry/bookkeeping-for-contractors-companies/",
      },
      {
        label: "Real Estate",
        to: "/us/industry/bookkeeping-for-real-estate-companies/",
      },
      {
        label: "Manufacturing",
        to: "/us/industry/accounting-services-for-manufacturing/",
      },
      {
        label: "Healthcare",
        to: "/us/industry/accounting-services-for-healthcare/",
      },
      {
        label: "Non-Profit",
        to: "/us/industry/accounting-services-for-nonprofit-organizations/",
      },
      {
        label: "Restaurant",
        to: "/us/industry/accounting-services-for-restaurant-businesses/",
      },
      {
        label: "Retail Business",
        to: "/us/industry/accounting-services-for-retail-businesses/",
      },
      {
        label: "Law Firms",
        to: "/us/industry/accounting-services-for-lawfirms/",
      },
    ],
  },
  { label: "Blogs", to: "/us/blogs" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [anchorEls, setAnchorEls] = useState({});
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path, submenu) => {
    if (!path) return false;
    // Home only active on exact '/'
    if (path === "/") return location.pathname === "/";
    if (location.pathname === path) return true;
    if (path === "/services" && location.pathname.includes("/services/"))
      return true;
    if (path === "/industry" && location.pathname.includes("/industry/"))
      return true;
    if (
      submenu &&
      submenu.some(
        (sub) =>
          location.pathname === sub.to ||
          location.pathname.startsWith(sub.to)
      )
    )
      return true;
    return location.pathname.startsWith(path);
  };

  // Country selector
  const [countryAnchor, setCountryAnchor] = useState(null);
  const [country, setCountry] = useState("US");
  const countries = [
    { code: "US", label: "United States" },
    { code: "GB", label: "United Kingdom" },
  ];

  const handleDrawerToggle = () => setMobileOpen((s) => !s);

  const handleCalendlyClick = () => {
    setContactModalOpen(true);
  };

  const toggleSubmenu = (label) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Mobile Drawer with collapsible submenus + country selector
  const mobileDrawer = (
    <Box sx={{ width: "100%", px: 2, py: 2 }}>
      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: "100%",
            maxWidth: 220,
            height: "auto",
            mx: "auto",
            display: "block",
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <Box key={item.label} sx={{ mb: 0.5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
                cursor: "pointer",
              }}
              onClick={() => {
                if (item.submenu) toggleSubmenu(item.label);
              }}
            >
              {item.submenu ? (
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "15px",
                    fontFamily: "'Code Next', sans-serif",
                  }}
                >
                  {item.label}
                </Typography>
              ) : (
                <Link
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "15px",
                    fontFamily: "'Code Next', sans-serif",
                  }}
                  onClick={handleDrawerToggle}
                >
                  {item.label}
                </Link>
              )}
              {item.submenu && (
                <ExpandMoreIcon
                  sx={{
                    transform: submenuOpen[item.label]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    color: theme.palette.primary.main,
                    transition: "0.3s",
                  }}
                />
              )}
            </Box>
            {item.submenu && (
              <Collapse
                in={submenuOpen[item.label]}
                timeout="auto"
                unmountOnExit
              >
                <Box sx={{ pl: 3, pb: 1 }}>
                  {item.to && (
                    <Link
                      to={item.to}
                      style={{
                        display: "block",
                        padding: "6px 0",
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "'Code Next', sans-serif",
                      }}
                      onClick={handleDrawerToggle}
                    >
                      View All {item.label}
                    </Link>
                  )}
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      style={{
                        display: "block",
                        padding: "6px 0",
                        textDecoration: "none",
                        color: theme.palette.text.secondary,
                        fontSize: "14px",
                        fontFamily: "'Code Next', sans-serif",
                      }}
                      onClick={handleDrawerToggle}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </Box>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
      {/* Mobile Drawer Country Selector */}
      <Box sx={{ mt: 2, px: 1 }}>
        <Button
          onClick={(e) => setCountryAnchor(e.currentTarget)}
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            textTransform: "none",
            fontWeight: 600,
            color: theme.palette.text.primary,
            border: "1px solid #ccc",
            borderRadius: "8px",
            px: 2,
            py: 1,
            backgroundColor: theme.palette.background.default,
            fontFamily: "'Code Next', sans-serif",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
          endIcon={<ExpandMoreIcon />}
        >
          <ReactCountryFlag
            countryCode={country}
            svg
            style={{ width: "22px", height: "16px", marginRight: "6px" }}
          />
          {countries.find((c) => c.code === country)?.label || country}
        </Button>
        <Menu
          anchorEl={countryAnchor}
          open={Boolean(countryAnchor)}
          onClose={() => setCountryAnchor(null)}
        >
          {countries.map((c) => (
            <MenuItem
              key={c.code}
              onClick={() => {
                setCountry(c.code);
                setCountryAnchor(null);
                setMobileOpen(false);
                if (c.code === "US") navigate("/");
                else if (c.code === "GB") navigate("/uk");
              }}
              sx={{
                fontWeight: 500,
                fontFamily: "'Code Next', sans-serif",
              }}
            >
              <ReactCountryFlag
                countryCode={c.code}
                svg
                style={{ width: "22px", height: "16px", marginRight: "6px" }}
              />
              {c.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Premium Top Bar */}
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          borderBottom: "1px solid #eee",
          display: { xs: "none", md: "block" },
          py: 1,
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1300px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: "0.85rem",
                fontFamily: "'Code Next', sans-serif",
              }}
            >
              Are you Ready to Free Business Consulting Today?{" "}
              <Link
                to="/contact"
                style={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  textDecoration: "underline",
                }}
              >
                Contact Us
              </Link>
            </Typography>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.85rem",
                    color: theme.palette.text.secondary,
                    fontFamily: "'Code Next', sans-serif",
                  }}
                >
                  ✉ advicxconsult@m.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.85rem",
                    color: theme.palette.text.secondary,
                    fontFamily: "'Code Next', sans-serif",
                  }}
                >
                  📞 (234) 345-4574
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <AppBar
        position={isMobile ? "static" : "sticky"}
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: "1px solid #eee",
          zIndex: 1300,
          "& a": { textDecoration: "none" },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1300px",
            py: "10px",
            minHeight: { xs: 56, sm: 64, md: 72 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between" }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  sx={{
                    maxHeight: { xs: 32, sm: 42, md: 56 },
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              {navItems.map((item) =>
                item.submenu ? (
                  <Box
                    key={item.label}
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.to ? (
                      <Button
                        component={Link}
                        to={item.to}
                        sx={{
                          color: isActivePath(item.to, item.submenu)
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                          textTransform: "capitalize",
                          fontWeight: isActivePath(item.to, item.submenu)
                            ? 700
                            : 500,
                          fontFamily: "'Code Next', sans-serif",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                          px: 1,
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <Typography
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          px: 1.2,
                          fontFamily: "'Code Next', sans-serif",
                        }}
                      >
                        {item.label}
                      </Typography>
                    )}
                    <IconButton
                      size="small"
                      onMouseEnter={(e) =>
                        setAnchorEls({ [item.label]: e.currentTarget })
                      }
                      onClick={(e) =>
                        setAnchorEls((prev) => ({
                          [item.label]: prev[item.label]
                            ? null
                            : e.currentTarget,
                        }))
                      }
                      sx={{
                        ml: 0.2,
                        color: theme.palette.text.primary,
                        "&:hover": {
                          color: theme.palette.primary.main,
                          background: "transparent",
                        },
                      }}
                    >
                      <ExpandMoreIcon
                        sx={{
                          transform: anchorEls[item.label]
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEls[item.label] ?? null}
                      open={Boolean(anchorEls[item.label])}
                      onClose={() => setAnchorEls({})}
                      MenuListProps={{
                        onMouseLeave: () => setAnchorEls({}),
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      sx={{
                        mt: 1,
                        "& .MuiPaper-root": {
                          borderRadius: "10px",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                          backgroundColor: theme.palette.background.default,
                        },
                      }}
                    >
                      {item.submenu.map((sub) => (
                        <MenuItem
                          key={sub.label}
                          component={Link}
                          to={sub.to}
                          onClick={() => setAnchorEls({})}
                          sx={{
                            fontWeight: 500,
                            fontFamily: "'Code Next', sans-serif",
                            color:
                              location.pathname === sub.to
                                ? theme.palette.primary.main
                                : theme.palette.text.secondary,
                            backgroundColor:
                              location.pathname === sub.to
                                ? `${theme.palette.primary.main}15`
                                : "transparent",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: "#fff",
                            },
                          }}
                        >
                          {sub.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.to}
                    sx={{
                      color: isActivePath(item.to, item.submenu)
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                      textTransform: "capitalize",
                      fontWeight: isActivePath(item.to, item.submenu)
                        ? 700
                        : 500,
                      fontFamily: "'Code Next', sans-serif",
                      textDecoration: "none",
                      px: 1.2,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}

              {/* Desktop Country Selector */}
              <Box>
                <Button
                  onClick={(e) => setCountryAnchor(e.currentTarget)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    px: 2,
                    py: 0.8,
                    backgroundColor: theme.palette.background.default,
                    fontFamily: "'Code Next', sans-serif",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  <ReactCountryFlag
                    countryCode={country}
                    svg
                    style={{
                      width: "22px",
                      height: "16px",
                      marginRight: "6px",
                    }}
                  />
                  {countries.find((c) => c.code === country)?.label || country}
                </Button>
                <Menu
                  anchorEl={countryAnchor}
                  open={Boolean(countryAnchor)}
                  onClose={() => setCountryAnchor(null)}
                >
                  {countries.map((c) => (
                    <MenuItem
                      key={c.code}
                      onClick={() => {
                        setCountry(c.code);
                        setCountryAnchor(null);
                        if (c.code === "US") navigate("/");
                        else if (c.code === "GB") navigate("/uk");
                      }}
                      sx={{
                        fontWeight: 500,
                        fontFamily: "'Code Next', sans-serif",
                      }}
                    >
                      <ReactCountryFlag
                        countryCode={c.code}
                        svg
                        style={{
                          width: "22px",
                          height: "16px",
                          marginRight: "6px",
                        }}
                      />
                      {c.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Get Started Button */}
              <Button
                variant="contained"
                onClick={handleCalendlyClick}
                sx={{
                  ml: 1,
                  bgcolor: theme.palette.primary.main,
                  textTransform: "capitalize",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: "25px",
                  fontFamily: "'Code Next', sans-serif",
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    color: "#fff",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <IconButton
              edge="end"
              sx={{
                display: { sm: "none" },
                color: theme.palette.primary.main,
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            paddingTop: "10px",
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      <ContactPopup
        open={contactModalOpen}
        handleClose={() => setContactModalOpen(false)}
      />
    </>
  );
}

export default Header;
