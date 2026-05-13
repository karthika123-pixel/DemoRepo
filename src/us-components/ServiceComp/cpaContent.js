import heroImage from "../../assets/cpa.jpg";
import accountingImage from "../../assets/accounting.jpg";
import financeImage from "../../assets/finance.jpg";
import serviceLinks from "./serviceLinks";

const cpaContent = {
  activeService: "/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
  seo: {
    title: "The best CPA service for small businesses in the USA | Milta",
    description:
      "We offer the best CPA service for small businesses in the USA as well as accounting firms that support and foster sustainable growth.",
    keywords:
      "cpa services in usa, cpa firms near me, cpa firms in the usa, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in the usa, certified public accountant near me",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
    ogTitle: "The best CPA service for small businesses in the USA | Milta",
    ogDescription:
      "We offer the best CPA service for small businesses in the USA as well as accounting firms that support and foster sustainable growth.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
  },
  hero: {
    title: "CPA Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "CPA Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#CPA",
      "#Accounting",
      "#TaxSupport",
      "#Compliance",
      "#Advisory",
      "#Audit",
      "#QuickBooks",
      "#Growth",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Core CPA support for small businesses that need accuracy, guidance, and room to grow",
    intro:
      "Milta's CPA services combine bookkeeping, tax support, financial advisory, clean-up work, software setup, and compliance-focused reporting. The goal is to give growing businesses access to dependable accounting expertise without the overhead of a larger in-house team.",
    bullets: [
      "Monthly, quarterly, and annual financial statements",
      "Tax returns for individuals and businesses",
      "Cash flow, budgeting, and forecasting support",
      "Catch-up and clean-up accounting projects",
      "QuickBooks, Xero, and software conversion guidance",
      "Audit support and compliance-ready reporting",
    ],
    galleryImages: [
      {
        src: accountingImage,
        alt: "CPA team reviewing accounting records",
      },
      {
        src: financeImage,
        alt: "Financial planning and advisory discussion",
      },
    ],
    secondaryTitle: "Support that covers both day-to-day accounting and strategic financial needs",
    secondaryParagraphs: [
      "Our CPA offering is designed for businesses that need more than transaction processing alone. We support recurring accounting operations, tax preparation, reporting reviews, and business advisory work so your financial systems stay organized and decision-ready.",
      "Whether you need help with reconciliations, compliance filings, audit preparation, or system upgrades, the service is built to adapt to where your company is now and what it needs next.",
    ],
    featureList: [
      "Accounting and bookkeeping services",
      "Tax planning and preparation",
      "Financial consulting and advisory",
      "Catch-up and clean-up accounting",
      "Software setup and conversions",
      "Audit and assurance support",
    ],
  },
  faqs: [
    {
      question: "Why should I outsource CPA services?",
      answer:
        "Outsourcing CPA services helps reduce operational costs, improves efficiency, and gives you access to experienced accounting professionals without the expense of building a larger in-house team.",
    },
    {
      question: "Is Milta experienced in handling U.S.-based accounting regulations?",
      answer:
        "Yes. Our team works with U.S. tax requirements, accounting standards, and compliance expectations to support accurate reporting and filings.",
    },
    {
      question: "What accounting software does Milta support?",
      answer:
        "We support widely used accounting and tax platforms including QuickBooks, Xero, Lacerte, Drake, TaxSlayer, TurboTax, and other common business systems.",
    },
    {
      question: "Do you offer consulting services for business growth?",
      answer:
        "Yes. We provide budgeting, forecasting, profitability analysis, and broader financial advisory support to help businesses plan for sustainable growth.",
    },
  ],
};

export default cpaContent;
