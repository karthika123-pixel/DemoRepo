import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

// Import components
import Hero from "../us-components/careerComp/Hero";
import JoinMilta from "../us-components/careerComp/JoinMilta";
import WhyLoveMilta from "../us-components/careerComp/WhyLoveMilta";
import CareerCta from "../us-components/careerComp/careerCta";
import VoicesFromTeam from "../us-components/careerComp/VoicesFromTeam";
import ApplyForm from "../components/ApplyForm";
import FormPopup from "../components/FormPopup";
import useFullSEO from "../utils/useFullSEO";


function App() {

  useFullSEO({
    // MAIN SEO
    title: "Work with Our Team That Values Your Growth | Careers at Milta",
    description:
      "Looking for a career to grow and shine? Join Milta, where we value people as much as results. Click to explore opportunities and join us! ",
    keywords:
      "business development jobs, digital marketing jobs, virtual assistant jobs, us tax analyst jobs, business development executive, digital marketing specialist, digital marketing manager, hiring a virtual assistant,virtual assistant jobs for beginners, looking for a virtual assistant,hiring bookkeeper,bookkeeper job posting,hiring a bookkeeper near me,senior bookkeeper,bookkeeping job openings.",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/career",
    ogTitle: "Work with Our Team That Values Your Growth | Careers at Milta",
    ogDescription: "Looking for a career to grow and shine? Join Milta, where we value people as much as results. Click to explore opportunities and join us! ",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/career",

  });

  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    // OPEN POPUP IMMEDIATELY WHEN SITE LOADS
    setTimeout(() => {
      setOpenPopup(true);
    }, 500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <Hero />
        <JoinMilta />
        <WhyLoveMilta />
        <VoicesFromTeam />
        <CareerCta />

        <ApplyForm />

        {/* POPUP */}
        <FormPopup open={openPopup} onClose={() => setOpenPopup(false)}>
          <ApplyForm />
        </FormPopup>
      </main>
    </ThemeProvider>
  );
}

export default App;
