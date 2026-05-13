import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import ContactInfoCards from "../us-components/contact/ContactInfoCards";
import GetInTouch from "../us-components/contact/GetInTouch";
import Location from "../us-components/contact/Location";
import HeroContact from "../us-components/contact/HeroContact";
import CtaSection from "../us-components/aboutComp/CtaSection";
import useFullSEO from "../utils/useFullSEO";


function App() {

  useFullSEO({
    // MAIN SEO
    title: "Connect with Experts Ready to Support Your Needs | Milta",
    description:
      "Your success matters to us. Need advice or a solution? Click to connect with Milta’s friendly team today let’s make things happen together!",
    keywords:
      "business development jobs, digital marketing jobs, virtual assistant jobs, us tax analyst jobs, business development executive, digital marketing specialist, digital marketing",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/contact",
    ogTitle: "Connect with Experts Ready to Support Your Needs | Milta",
    ogDescription: "Your success matters to us. Need advice or a solution? Click to connect with Milta’s friendly team today let’s make things happen together!",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/contact",

  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <HeroContact />
        <ContactInfoCards />
        <GetInTouch />
        <Location />

      </main>

    </ThemeProvider>
  );
}

export default App;
