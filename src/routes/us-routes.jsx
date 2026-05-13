import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../us-components/common/Header";
import Footer from "../us-components/common/Footer3";
import ScrollToTop from "../us-components/common/ScrollToTop";
import StickyButtons from "../us-components/common/StickyButtons";
import UsTempHome from "../us-pages/Home";
import About from "../us-pages/About";
import Contact from "../us-pages/ContactUs";
import Services from "../pages/Services";
import FAQ from "../pages/FAQ";
import BookkeepingServicePage from "../pages/BookkeepingServicePage";
import DataEntryServices from "../pages/DataEntryServices";
import FinancialControllerServices from "../pages/FinancialControllerServices";
import VirtualAssistantServices from "../pages/VirtualAssistantServices";
import TaxPlanningandPreparationServices from "../pages/TaxPlanningandPreparationServices";
import CPAServices from "../pages/CPAServices";
import ConstructorCompanies from "../pages/ConstructorCompanies";
import ManufacturingCompanies from "../pages/ManufacturingCompanies";
import HealthcareIndustry from "../pages/HealthcareIndustry";
import LawyersIndustry from "../pages/LawyersIndustry";
import RestaurantIndustries from "../pages/RestaurantIndustries";
import RetailIndustry from "../pages/RetailIndustry";
import RealEstateCompanies from "../pages/RealEstateCompanies";
import NonProfitOrganizations from "../pages/NonProfitOrganizations";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsofService from "../pages/TermsofService";
import Career from "../us-pages/Career";
import CareerSub from "../us-pages/careersub";
import Blog from "../us-pages/Blog";
import BlogDetails from "../us-pages/BlogDetails";
import DigitalMarketing from "../pages/DigitalMarketing";
import ApplyForm from "../components/ApplyForm";
import QuickBooksDesktop from "../pages/QuickBooksDesktop";
import QuickBooksOnline from "../pages/quickBooksOnline";
import Xero from "../pages/Xero";
import WaveAccounting from "../pages/WaveAccounting";
import AccountingSoftware from "../pages/AccountingSoftware";
import AddBlog from "../pages/Addblog";
import Payroll from "../pages/PayrollService";
import Areas from "../pages/Areas";

/* ---------- State-wise Bookkeeping Pages ---------- */
import BookkeepingCT from "../states/Connecticut/Bookkeeping";
import BookkeepingFL from "../states/Florida/Bookkeeping";
import BookkeepingGA from "../states/Gorgeia/Bookkeeping";
import BookkeepingMD from "../states/Maryland/Bookkeeping";
import BookkeepingMA from "../states/Massachusets/Bookkeeping";
import BookkeepingNJ from "../states/NewJersey/Bookkeeping";
import BookkeepingNY from "../states/Newyork/Bookkeeping";
import BookkeepingOH from "../states/Ohio/Bookkeeping";
import BookkeepingPA from "../states/Pennsylvania/Bookkeeping";
import BookkeepingSC from "../states/SouthCarolina/Bookkeeping";
import BookkeepingNC from "../states/NorthCarolina/Bookkeeping";
import BookkeepingVA from "../states/Virginia/Bookkeeping";
import BookkeepingCA from "../states/California/Bookkeeping";
import BookkeepingTE from "../states/Texas/Bookkeeping";


import TaxCT from "../states/Connecticut/Tax";
import TaxFL from "../states/Florida/Tax";
import TaxGA from "../states/Gorgeia/Tax";
import TaxMD from "../states/Maryland/Tax";
import TaxMA from "../states/Massachusets/Tax";
import TaxNJ from "../states/NewJersey/Tax";
import TaxNY from "../states/Newyork/Tax";
import TaxOH from "../states/Ohio/Tax";
import TaxPA from "../states/Pennsylvania/Tax";
import TaxSC from "../states/SouthCarolina/Tax";
import TaxNC from "../states/NorthCarolina/Tax";
import TaxVA from "../states/Virginia/Tax";
import TaxCA from "../states/California/Tax";
import TaxTE from "../states/Texas/Tax";


import CpaCT from "../states/Connecticut/CPAfirms";
import CpaFL from "../states/Florida/CPAfirms";
import CpaGA from "../states/Gorgeia/CPAfirms";
import CpaMD from "../states/Maryland/CPAfirms";
import CpaMA from "../states/Massachusets/CPAfirms";
import CpaNJ from "../states/NewJersey/CPAfirms";
import CpaNY from "../states/Newyork/CPAfirms";
import CpaOH from "../states/Ohio/CPAfirms";
import CpaPA from "../states/Pennsylvania/CPAfirms";
import CpaSC from "../states/SouthCarolina/CPAfirms";
import CpaNC from "../states/NorthCarolina/CPAfirms";
import CpaVA from "../states/Virginia/CPAfirms";
import CpaCA from "../states/California/CPAfirms";
import CpaTE from "../states/Texas/CPAfirms";

import VaCT from "../states/Connecticut/VirtualAssistance";
import VaFL from "../states/Florida/VirtualAssistance";
import VaGA from "../states/Gorgeia/VirtualAssistance";
import VaMD from "../states/Maryland/VirtualAssistance";
import VaMA from "../states/Massachusets/VirtualAssistance";
import VaNJ from "../states/NewJersey/VirtualAssistance";
import VaNY from "../states/Newyork/VirtualAssistance";
import VaOH from "../states/Ohio/VirtualAssistance";
import VaPA from "../states/Pennsylvania/VirtualAssistance";
import VaSC from "../states/SouthCarolina/VirtualAssistance";
import VaVA from "../states/Virginia/VirtualAssistance";
import VaNC from "../states/NorthCarolina/VirtualAssistance";
import VaCA from "../states/California/VirtualAssistance";
import VaTE from "../states/Texas/VirtualAssistance";

import DmVA from "../states/Virginia/DigitalMarketing";
import DmCT from "../states/Connecticut/DigitalMarketing";
import DmFL from "../states/Florida/DigitalMarketing";
import DmGA from "../states/Gorgeia/DigitalMarketing";
import DmMD from "../states/Maryland/DigitalMarketing";
import DmMA from "../states/Massachusets/DigitalMarketing";
import DmNJ from "../states/NewJersey/DigitalMarketing";
import DmNY from "../states/Newyork/DigitalMarketing";
import DmOH from "../states/Ohio/DigitalMarketing";
import DmPA from "../states/Pennsylvania/DigitalMarketing";
import DmSC from "../states/SouthCarolina/DigitalMarketing";
import DmNC from "../states/NorthCarolina/DigitalMarketing";
import DmCA from "../states/California/DigitalMarketing";
import DmTE from "../states/Texas/DigitalMarketing";

import DeCT from "../states/Connecticut/DataEntry";
import DeFL from "../states/Florida/DataEntry";
import DeGA from "../states/Gorgeia/DataEntry";
import DeMD from "../states/Maryland/DataEntry";
import DeMA from "../states/Massachusets/DataEntry";
import DeNJ from "../states/NewJersey/DataEntry";
import DeNY from "../states/Newyork/DataEntry";
import DeOH from "../states/Ohio/DataEntry";
import DePA from "../states/Pennsylvania/DataEntry";
import DeSC from "../states/SouthCarolina/DataEntry";
import DeNC from "../states/NorthCarolina/DataEntry";
import DeVI from "../states/Virginia/DataEntry";
import DeCA from "../states/California/DataEntry";
import DeTE from "../states/Texas/DataEntry";


import FiCT from "../states/Connecticut/Financial";
import FiFL from "../states/Florida/Financial";
import FiGA from "../states/Gorgeia/Financial";
import FiMD from "../states/Maryland/Financial";
import FiMA from "../states/Massachusets/Financial";
import FiNJ from "../states/NewJersey/Financial";
import FiNY from "../states/Newyork/Financial";
import FiOH from "../states/Ohio/Financial";
import FiPA from "../states/Pennsylvania/Financial";
import FiSC from "../states/SouthCarolina/Financial";
import FiNC from "../states/NorthCarolina/Financial";
import FiVI from "../states/Virginia/Financial";
import FiCA from "../states/California/Financial";
import FiTE from "../states/Texas/Financial";


import PsCT from "../states/Connecticut/Payroll";
import PsFL from "../states/Florida/Payroll";
import PsGA from "../states/Gorgeia/Payroll";
import PsMD from "../states/Maryland/Payroll";
import PsMA from "../states/Massachusets/Payroll";
import PsNJ from "../states/NewJersey/Payroll";
import PsNY from "../states/Newyork/Payroll";
import PsOH from "../states/Ohio/Payroll";
import PsPA from "../states/Pennsylvania/Payroll";
import PsSC from "../states/SouthCarolina/Payroll";
import PsNC from "../states/NorthCarolina/Payroll";
import PsVI from "../states/Virginia/Payroll";
import PsCA from "../states/California/Payroll";
import PsTE from "../states/Texas/Payroll";
import Ticker from "../us-components/common/Ticker";

function App() {
  return (
    <>
      <ScrollToTop />
      <Ticker />
      <Header />


      <Routes>

        {/* -------- Main Pages -------- */}
        <Route path="/" element={<UsTempHome />} />
        <Route path="/us-temp" element={<UsTempHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQ />} />

        {/* -------- Services -------- */}
        <Route
          path="/us/services/bookkeeping-company-in-the-usa/"
          element={<BookkeepingServicePage />}
        />
        <Route
          path="/us/services/outsourcing-accounting-data-entry-services-in-the-usa/"
          element={<DataEntryServices />}
        />
        <Route
          path="/us/services/financial-controller-services-in-the-usa/"
          element={<FinancialControllerServices />}
        />
        <Route
          path="/us/services/virtual-assistant-service-in-the-usa/"
          element={<VirtualAssistantServices />}
        />
        <Route
          path="/us/services/tax-planning-and-preparation-services-usa/"
          element={<TaxPlanningandPreparationServices />}
        />
        <Route
          path="/us/services/best-cpa-services-for-small-businesses-in-the-usa/"
          element={<CPAServices />}
        />
        <Route
          path="/us/services/payroll-management-services-in-the-usa/"
          element={<Payroll />}
        />
        <Route
          path="/us/services/best-digital-marketing-agency-in-usa/"
          element={<DigitalMarketing />}
        />

        {/* -------- Industries -------- */}
        <Route
          path="/us/industry/bookkeeping-for-contractors-companies/"
          element={<ConstructorCompanies />}
        />
        <Route
          path="/us/industry/accounting-services-for-manufacturing/"
          element={<ManufacturingCompanies />}
        />
        <Route
          path="/us/industry/accounting-services-for-healthcare/"
          element={<HealthcareIndustry />}
        />
        <Route
          path="/us/industry/accounting-services-for-lawfirms/"
          element={<LawyersIndustry />}
        />
        <Route
          path="/us/industry/accounting-services-for-nonprofit-organizations/"
          element={<NonProfitOrganizations />}
        />
        <Route
          path="/us/industry/bookkeeping-for-real-estate-companies/"
          element={<RealEstateCompanies />}
        />
        <Route
          path="/us/industry/accounting-services-for-restaurant-businesses/"
          element={<RestaurantIndustries />}
        />
        <Route
          path="/us/industry/accounting-services-for-retail-businesses/"
          element={<RetailIndustry />}
        />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career-opportunities" element={<CareerSub />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/us/blogs" element={<Blog />} />
        <Route path="/us/blogs/:slug" element={<BlogDetails />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route
          path="/us/software/bookkeeping-with-quickbook-desktop/"
          element={<QuickBooksDesktop />}
        />
        <Route
          path="/us/software/bookkeeping-with-quickbook-online/"
          element={<QuickBooksOnline />}
        />
        <Route
          path="/us/software/xero-for-small-business/"
          element={<Xero />}
        />
        <Route
          path="/us/software/wave-accounting-for-small-business/"
          element={<WaveAccounting />}
        />
        <Route
          path="/us/software/tools-we-use/"
          element={<AccountingSoftware />}
        />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/areas-we-serve" element={<Areas />} />

        {/* ---------- State-wise Bookkeeping ---------- */}
        <Route path="/us/services/best-bookkeeping-services-in-connecticut-usa/" element={<BookkeepingCT />} />
        <Route path="/us/services/best-bookkeeping-services-in-florida/" element={<BookkeepingFL />} />
        <Route path="/us/services/best-bookkeeping-services-in-georgia/" element={<BookkeepingGA />} />
        <Route path="/us/services/best-bookkeeping-services-in-maryland/" element={<BookkeepingMD />} />
        <Route path="/us/services/best-bookkeeping-services-in-massachusetts/" element={<BookkeepingMA />} />
        <Route path="/us/services/best-bookkeeping-services-in-newjersey/" element={<BookkeepingNJ />} />
        <Route path="/us/services/best-bookkeeping-services-in-newyork/" element={<BookkeepingNY />} />
        <Route path="/us/services/best-bookkeeping-services-in-ohio/" element={<BookkeepingOH />} />
        <Route path="/us/services/best-bookkeeping-services-in-pennsylvania/" element={<BookkeepingPA />} />
        <Route path="/us/services/best-bookkeeping-services-in-southcarolina/" element={<BookkeepingSC />} />
        <Route path="/us/services/best-bookkeeping-services-in-virginia/" element={<BookkeepingVA />} />
        <Route path="/us/services/best-bookkeeping-services-in-northcarolina/" element={<BookkeepingNC />} />
        <Route path="/us/services/best-bookkeeping-services-in-california/" element={<BookkeepingCA />} />
        <Route path="/us/services/best-bookkeeping-services-in-texas/" element={<BookkeepingTE />} />


        <Route path="/us/services/tax-planning-and-preparation-service-in-connecticut/" element={<TaxCT />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-florida/" element={<TaxFL />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-georgia/" element={<TaxGA />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-maryland/" element={<TaxMD />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-massachusetts/" element={<TaxMA />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-newjersey/" element={<TaxNJ />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-newyork/" element={<TaxNY />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-ohio/" element={<TaxOH />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-pennsylvania/" element={<TaxPA />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-southcarolina/" element={<TaxSC />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-virginia/" element={<TaxVA />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-northcarolina/" element={<TaxNC />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-california/" element={<TaxCA />} />
        <Route path="/us/services/tax-planning-and-preparation-service-in-texas/" element={<TaxTE />} />


        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-connecticut/" element={<CpaCT />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-florida/" element={<CpaFL />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-georgia/" element={<CpaGA />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-maryland/" element={<CpaMD />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-massachusetts/" element={<CpaMA />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-newjersey/" element={<CpaNJ />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-newyork/" element={<CpaNY />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-ohio/" element={<CpaOH />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-pennsylvania/" element={<CpaPA />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-southcarolina/" element={<CpaSC />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-virginia/" element={<CpaVA />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-northcarolina/" element={<CpaNC />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-california/" element={<CpaCA />} />
        <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-texas/" element={<CpaTE />} />


        <Route path="/us/services/virtual-assistant-service-in-connecticut/" element={<VaCT />} />
        <Route path="/us/services/virtual-assistant-service-in-florida/" element={<VaFL />} />
        <Route path="/us/services/virtual-assistant-service-in-georgia/" element={<VaGA />} />
        <Route path="/us/services/virtual-assistant-service-in-maryland/" element={<VaMD />} />
        <Route path="/us/services/virtual-assistant-service-in-massachusetts/" element={<VaMA />} />
        <Route path="/us/services/virtual-assistant-service-in-newjersey/" element={<VaNJ />} />
        <Route path="/us/services/virtual-assistant-service-in-newyork/" element={<VaNY />} />
        <Route path="/us/services/virtual-assistant-service-in-ohio/" element={<VaOH />} />
        <Route path="/us/services/virtual-assistant-service-in-pennsylvania/" element={<VaPA />} />
        <Route path="/us/services/virtual-assistant-service-in-southcarolina/" element={<VaSC />} />
        <Route path="/us/services/virtual-assistant-service-in-virginia/" element={<VaVA />} />
        <Route path="/us/services/virtual-assistant-service-in-northcarolina/" element={<VaNC />} />
        <Route path="/us/services/virtual-assistant-service-in-california/" element={<VaCA />} />
        <Route path="/us/services/virtual-assistant-service-in-texas/" element={<VaTE />} />

        <Route path="/us/services/best-digital-marketing-agency-in-connecticut" element={<DmCT />} />
        <Route path="/us/services/best-digital-marketing-agency-in-florida" element={<DmFL />} />
        <Route path="/us/services/best-digital-marketing-agency-in-georgia" element={<DmGA />} />
        <Route path="/us/services/best-digital-marketing-agency-in-maryland" element={<DmMD />} />
        <Route path="/us/services/best-digital-marketing-agency-in-massachusetts" element={<DmMA />} />
        <Route path="/us/services/best-digital-marketing-agency-in-newjersey" element={<DmNJ />} />
        <Route path="/us/services/best-digital-marketing-agency-in-newyork" element={<DmNY />} />
        <Route path="/us/services/best-digital-marketing-agency-in-ohio" element={<DmOH />} />
        <Route path="/us/services/best-digital-marketing-agency-in-pennsylvania" element={<DmPA />} />
        <Route path="/us/services/best-digital-marketing-agency-in-southcarolina" element={<DmSC />} />
        <Route path="/us/services/best-digital-marketing-agency-in-virginia" element={<DmVA />} />
        <Route path="/us/services/best-digital-marketing-agency-in-northcarolina" element={<DmNC />} />
        <Route path="/us/services/best-digital-marketing-agency-in-california" element={<DmCA />} />
        <Route path="/us/services/best-digital-marketing-agency-in-texas" element={<DmTE />} />

        <Route path="/us/services/outsourcing-accounting-data-entry-connecticut/" element={<DeCT />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-florida/" element={<DeFL />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-georgia/" element={<DeGA />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-maryland/" element={<DeMD />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-massachusetts/" element={<DeMA />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-newjersey/" element={<DeNJ />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-newyork/" element={<DeNY />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-ohio/" element={<DeOH />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-pennsylvania/" element={<DePA />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-southcarolina/" element={<DeSC />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-northcarolina/" element={<DeNC />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-virginia/" element={<DeVI />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-california/" element={<DeCA />} />
        <Route path="/us/services/outsourcing-accounting-data-entry-texas/" element={<DeTE />} />

        <Route path="/us/services/financial-controller-services-in-connecticut/" element={<FiCT />} />
        <Route path="/us/services/financial-controller-services-in-florida/" element={<FiFL />} />
        <Route path="/us/services/financial-controller-services-in-georgia/" element={<FiGA />} />
        <Route path="/us/services/financial-controller-services-in-maryland/" element={<FiMD />} />
        <Route path="/us/services/services/financial-controller-services-in-massachusetts/" element={<FiMA />} />
        <Route path="/us/services/financial-controller-services-in-newjersey/" element={<FiNJ />} />
        <Route path="/us/services/financial-controller-services-in-newyork/" element={<FiNY />} />
        <Route path="/us/services/financial-controller-services-in-northcarolina/" element={<FiNC />} />
        <Route path="/us/services/financial-controller-services-in-ohio/" element={<FiOH />} />
        <Route path="/us/services/financial-controller-services-in-pennsylvania/" element={<FiPA />} />
        <Route path="/us/services/financial-controller-services-in-southcarolina/" element={<FiSC />} />
        <Route path="/us/services/financial-controller-services-in-virginia/" element={<FiVI />} />
        <Route path="/us/services/financial-controller-services-in-california/" element={<FiCA />} />
        <Route path="/us/services/financial-controller-services-in-texas/" element={<FiTE />} />

        <Route path="/us/services/payroll-management-services-in-the-connecticut/" element={<PsCT />} />
        <Route path="/us/services/payroll-management-services-in-the-florida/" element={<PsFL />} />
        <Route path="/us/services/payroll-management-services-in-the-georgia/" element={<PsGA />} />
        <Route path="/us/services/payroll-management-services-in-the-maryland/" element={<PsMD />} />
        <Route path="/us/services/payroll-management-services-in-the-massachusetts/" element={<PsMA />} />
        <Route path="/us/services/payroll-management-services-in-the-newjersey/" element={<PsNJ />} />
        <Route path="/us/services/payroll-management-services-in-the-newyork/" element={<PsNY />} />
        <Route path="/us/services/payroll-management-services-in-the-northcarolina/" element={<PsNC />} />
        <Route path="/us/services/payroll-management-services-in-the-ohio/" element={<PsOH />} />
        <Route path="/us/services/payroll-management-services-in-the-pennsylvania/" element={<PsPA />} />
        <Route path="/us/services/payroll-management-services-in-the-southcarolina/" element={<PsSC />} />
        <Route path="/us/services/payroll-management-services-in-the-virginia/" element={<PsVI />} />
        <Route path="/us/services/payroll-management-services-in-the-california/" element={<PsCA />} />
        <Route path="/us/services/payroll-management-services-in-the-texas/" element={<PsTE />} />






      </Routes>
      <StickyButtons />
      <Footer />

    </>
  );
}



export default App;
