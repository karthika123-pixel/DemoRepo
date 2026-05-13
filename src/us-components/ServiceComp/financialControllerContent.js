import heroImage from "../../assets/finance.jpg";
import accountingImage from "../../assets/accounting-solution.jpg";
import reportingImage from "../../assets/accounting.jpg";
import serviceLinks from "./serviceLinks";

const financialControllerContent = {
  activeService: "/us/services/financial-controller-services-in-the-usa/",
  seo: {
    title: "Outsourced Financial Controller Services for SMEs in the USA",
    description:
      "Our Outsourced Financial Controller Services support small and medium businesses with expert reporting, compliance, cash flow, and financial management.",
    keywords:
      "financial controller services in the usa, financial controller services, outsourced financial controller, accounting controller, financial controller services for smes",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/",
    ogTitle: "Outsourced Financial Controller Services for SMEs in the USA",
    ogDescription:
      "Our Outsourced Financial Controller Services support small and medium businesses with expert reporting, compliance, cash flow, and financial management.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/",
  },
  hero: {
    title: "Financial Controller Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Financial Controller Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#FinancialController",
      "#Reporting",
      "#CashFlow",
      "#Compliance",
      "#InternalControls",
      "#AuditSupport",
      "#SMEFinance",
      "#FractionalController",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Outsourced controller support that strengthens reporting, oversight, and financial discipline",
    intro:
      "Milta's financial controller service is built for businesses that need deeper accounting oversight, clearer reporting, and stronger financial processes without hiring a full-time controller right away. We support management reporting, transaction oversight, policy alignment, compliance, and audit readiness.",
    bullets: [
      "Management reporting and month-end review support",
      "Oversight of transaction processing and controls",
      "Cash flow and liability payment management",
      "Policy, procedure, and compliance alignment",
      "Audit assistance and requested reporting",
      "Fractional controller support for growing teams",
    ],
    galleryImages: [
      {
        src: accountingImage,
        alt: "Controller services dashboard and reporting review",
      },
      {
        src: reportingImage,
        alt: "Financial analysis and compliance planning",
      },
    ],
    secondaryTitle: "A practical bridge between bookkeeping operations and executive finance leadership",
    secondaryParagraphs: [
      "For many small and mid-sized businesses, there is a real gap between basic accounting support and the need for higher-level financial oversight. Our controller service helps fill that gap with structured reporting, process reviews, internal control assessment, and support around key financial decisions.",
      "This is especially useful for businesses that need stronger discipline around reporting and compliance but are not yet ready for a full-time controller or CFO. The service is designed to improve visibility, reduce risk, and keep accounting operations running with greater consistency.",
    ],
    featureList: [
      "Management reporting",
      "Transaction oversight",
      "Internal control assessment",
      "Policy and procedure conformity",
      "Monthly review and reporting",
      "Audit assistance",
    ],
  },
  faqs: [
    {
      question: "What is a Financial Controller?",
      answer:
        "A financial controller oversees accounting operations, reporting accuracy, compliance, and core financial management processes within a business.",
    },
    {
      question: "Why should I outsource Financial Controller Services?",
      answer:
        "Outsourcing gives you access to experienced financial oversight without the cost of a full-time hire, which is especially helpful for growing businesses.",
    },
    {
      question: "What types of businesses benefit from Financial Controller Services?",
      answer:
        "Startups, small businesses, and growing mid-sized companies often benefit when they need stronger reporting and compliance support but are not ready for a full-time controller.",
    },
    {
      question: "What services does a Financial Controller provide?",
      answer:
        "Typical services include reporting, budgeting support, cash flow review, compliance oversight, internal controls, accounting process management, and audit assistance.",
    },
    {
      question: "What's the difference between a Financial Controller and a CFO?",
      answer:
        "A controller is more focused on accounting operations, reporting, and compliance, while a CFO is typically responsible for broader long-term financial strategy and executive planning.",
    },
  ],
};

export default financialControllerContent;
