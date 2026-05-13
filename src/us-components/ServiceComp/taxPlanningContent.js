import heroImage from "../../assets/tax.jpg";
import accountingImage from "../../assets/accounting.jpg";
import financeImage from "../../assets/finance.jpg";
import serviceLinks from "./serviceLinks";

const taxPlanningContent = {
  activeService: "/us/services/tax-planning-and-preparation-services-usa/",
  seo: {
    title: "US Expat Tax Service | Federal, State, and City Tax Filing",
    description:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation. We specialize in Forms 1040, 1041, 1065, 1120, 1120S, 990 and more.",
    keywords:
      "us expat tax service, tax planning and preparation services, tax preparation service in the usa, tax planning and preparation services in the usa",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/tax-planning-and-preparation-services-usa/",
    ogTitle: "US Expat Tax Service | Federal, State, and City Tax Filing",
    ogDescription:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation. We specialize in Forms 1040, 1041, 1065, 1120, 1120S, 990 and more.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://www.milta.com/us/services/tax-planning-and-preparation-services-usa/",
  },
  hero: {
    title: "Tax Planning and Preparation Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Tax Planning and Preparation Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#TaxPlanning",
      "#TaxPrep",
      "#IRS",
      "#Compliance",
      "#FederalTax",
      "#StateTax",
      "#Efiling",
      "#Refunds",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Structured tax planning and filing support across federal, state, and city requirements",
    intro:
      "Milta provides tax planning and preparation services for individuals, businesses, estates, trusts, and non-profits. We help clients organize filings, review forms carefully, and manage federal, state, and local obligations with an emphasis on accuracy, compliance, and timely submission.",
    bullets: [
      "Federal, state, and city tax preparation support",
      "Tax review and finalization before submission",
      "Form 1040, 1041, 1065, 1120, 1120S, and 990 preparation",
      "Electronic filing for faster, more efficient processing",
      "Deduction and credit review to reduce avoidable liabilities",
      "Year-round planning support beyond tax season",
    ],
    galleryImages: [
      {
        src: accountingImage,
        alt: "Tax review and filing preparation",
      },
      {
        src: financeImage,
        alt: "Financial records prepared for tax planning",
      },
    ],
    secondaryTitle: "Planning that looks beyond filing day",
    secondaryParagraphs: [
      "Our tax work is not limited to completing forms. We help clients review financial records, identify deductions and credits, and prepare filings that align with federal, state, and local requirements. That reduces avoidable errors and gives you a clearer filing process from start to finish.",
      "We also support businesses and individuals who need consistent guidance throughout the year. From recurring planning and estimated payments to document preparation and e-filing, the service is built to make tax obligations more manageable and more strategic.",
    ],
    featureList: [
      "Tax preparation",
      "Tax review and finalization",
      "Specialized tax form support",
      "Tax e-filing",
      "Refund optimization guidance",
      "Year-round planning assistance",
    ],
  },
  faqs: [
    {
      question: "Can Milta prepare both personal and company tax returns?",
      answer:
        "Yes. We support individual and business tax returns, including more complex filings for partnerships, corporations, estates, trusts, and non-profits.",
    },
    {
      question: "Do you assist with IRS audits?",
      answer:
        "Yes. We can help organize records, review filings, and provide support when responding to IRS questions or audit-related requests.",
    },
    {
      question: "What documents are required for tax preparation?",
      answer:
        "Typical requirements include personal information, prior returns, income documents such as W-2s and 1099s, business records, rental or investment details, and documentation tied to deductions, credits, or other reporting obligations.",
    },
    {
      question: "Can you help with state and city taxes?",
      answer:
        "Yes. We provide support for federal, state, and city tax requirements so filings stay aligned across all required jurisdictions.",
    },
    {
      question: "Is Milta's service affordable?",
      answer:
        "We aim to provide strong value with competitive pricing while maintaining careful review, compliance support, and responsive communication.",
    },
  ],
};

export default taxPlanningContent;
