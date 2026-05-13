// src/routes/UkRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import UkHeader from "../uk-components/common/UkHeader";
import UkFooter from "../uk-components/common/UkFooter";
import StickyButtons from "../components/common/StickyButtons";
import ScrollToTop from "../components/common/ScrollToTop";

/* UK Pages */
import UkHome from "../uk-pages/Home";
import UkAbout from "../uk-pages/About";
import UkService from "../uk-pages/Services";
import UkBook from "../uk-pages/BookKeeping";
import UkContact from "../uk-pages/Contact";
import AccountingOutsourcing from "../uk-pages/AccountingOutsourcing";
import UkEcommerce from "../uk-pages/Ecommerce-accounting";
import UkAccountsPayable from "../uk-pages/AccountsPayable";
import UkAccountsReceivable from "../uk-pages/AccountsReceivable";
import UkFinancialReporting from "../uk-pages/FinancialReporting";
import UkPayrollOutsourcing from "../uk-pages/PayrollOutsourcing";
import UkInvoiceProcessing from "../uk-pages/InvoiceProcessing";
import UkTaxPlanning from "../uk-pages/TaxPlanning";
import UkDigitalMarketing from "../uk-pages/DigitalMarketing";
import UkDataEntry from "../uk-pages/DataEntry";
import UkControllerService from "../uk-pages/ControllerService";
import UkContractors from "../uk-pages/Contractors";
import UkRealEstate from "../uk-pages/RealEstate";
import UkHealthcare from "../uk-pages/Healthcare";
import Hospitality from "../uk-pages/Hospitality";
import UkManufacturing from "../uk-pages/Manufacturing";
import UkRestaurant from "../uk-pages/Restaurant";
import UkNonProfit from "../uk-pages/Non-Profit";
import UkRetailBusiness from "../uk-pages/RetailBusiness";
import UkLawFirms from "../uk-pages/LawFirms";
import Blog from "../uk-pages/Blog";
import BlogDetails from "../uk-pages/BlogDetails";
import UkWhyMilta from "../uk-pages/WhyMilta";
import UkVirtualAssistance from "../uk-pages/VirtualAssistance";
import AddBlog from "../uk-pages/Addblog";
import PrivacyPolicy from "../uk-pages/PrivacyPolicy";
import TermsOfService from "../uk-pages/TermsofService";

import ConstructorCompanies from "../uk-pages/Contractors";

function UkRoutes() {
  return (
    <>
      <ScrollToTop />
      <UkHeader />
      <Routes>
        <Route path="/" element={<UkHome />} />
        <Route path="about" element={<UkAbout />} />
        <Route path="services" element={<UkService />} />
        <Route path="blogs" element={<Blog />} />
         <Route path="blogs/:slug" element={<BlogDetails />} />
         <Route path="/add-blog" element={<AddBlog />} />
        <Route path="bookkeeping-services-for-small-business" element={<UkBook />} />
        <Route path="accounting-outsourcing" element={<AccountingOutsourcing />} />
        <Route path="accounts-payable-services-in-uk" element={<UkAccountsPayable />} />
       <Route path="accounts-receivable-services-in-uk" element={<UkAccountsReceivable />} />
        <Route path="financial-reporting" element={<UkFinancialReporting />} />
        <Route path="payroll-services-for-small-business" element={<UkPayrollOutsourcing />} />
        <Route path="invoice-processing" element={<UkInvoiceProcessing />} />
        <Route path="tax-planning" element={<UkTaxPlanning />} />
        <Route path="best-digital-marketing-service-in-uk" element={<UkDigitalMarketing />} />
        <Route path="accounting-data-entry-services-uk" element={<UkDataEntry />} />
        <Route path="controller-service" element={<UkControllerService />} />
        <Route path="contractors" element={<UkContractors />} />
        <Route path="contact" element={<UkContact />} />
        <Route path="real-estate" element={<UkRealEstate />} />
        <Route path="health-care" element={<UkHealthcare />} />
        <Route path="manufacturing" element={<UkManufacturing />} />
        <Route path="restaurant" element={<UkRestaurant />} />
        <Route path="non-profit" element={<UkNonProfit />} />
        <Route path="retail-business" element={<UkRetailBusiness />} />
        <Route path="law-firms" element={<UkLawFirms />} />
        <Route path="hospitality-accounting-services" element={<Hospitality />} />
        <Route path="contractors" element={<UkContractors />} />
        <Route path="why-choose-milta" element={<UkWhyMilta />} />
        <Route path="virtual-assistant-services-in-the-uk" element={<UkVirtualAssistance />} />
        <Route path="ecommerce-accounting-service" element={<UkEcommerce />} />
        <Route path="accounting-services-for-healthcare" element={<UkHealthcare />} />
        <Route path="law-firm-accounting-services" element={<UkLawFirms />} />
        <Route path="accounting-services-for-real-estate" element={<UkRealEstate />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<UkHome />} /> {/* fallback route */}
      </Routes>
      <StickyButtons />
      <UkFooter />
    </>
  );
}

export default UkRoutes;
