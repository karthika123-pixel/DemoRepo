import heroImage from "../../assets/accounting-data-entry.jpg";
import supportImage from "../../assets/accountsPayable.jpg";
import workflowImage from "../../assets/dataentry.jpg";
import serviceLinks from "./serviceLinks";

const dataEntryContent = {
  activeService:
    "/us/services/outsourcing-accounting-data-entry-services-in-the-usa/",
  seo: {
    title: "Outsourcing Accounting Data Entry Services In the USA",
    description:
      "Our professional accounting data entry services improve accuracy, save time, and support the growth of your small business operations.",
    keywords:
      "data entry services in the usa, accounting data entry services, data entry companies, bookkeeping data entry, outsourcing accounting data entry",
    author: "Milta Accounting",
    canonical:
      "https://miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/",
    ogTitle: "Outsourcing Accounting Data Entry Services In the USA",
    ogDescription:
      "Our professional accounting data entry services improve accuracy, save time, and support the growth of your small business operations.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/",
  },
  hero: {
    title: "Accounting Data Entry Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Accounting Data Entry Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#DataEntry",
      "#Accounting",
      "#QuickBooks",
      "#Reconciliation",
      "#Invoices",
      "#GeneralLedger",
      "#Security",
      "#Reporting",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Accurate accounting data entry for businesses that need cleaner records and better financial consistency",
    intro:
      "Milta provides accounting data entry support for small and medium-sized businesses that need reliable transaction capture, organized records, and consistent financial data. We help reduce manual workload while improving reporting readiness, accuracy, and operational clarity.",
    bullets: [
      "General ledger entry and transaction posting",
      "Accounts payable and receivable data entry",
      "Invoice processing and payroll data entry",
      "Bank reconciliation and expense management support",
      "Financial statement preparation support",
      "QuickBooks and customized data entry workflows",
    ],
    galleryImages: [
      {
        src: supportImage,
        alt: "Accounts payable and receivable data management",
      },
      {
        src: workflowImage,
        alt: "Accounting data entry workflow and reconciliation process",
      },
    ],
    secondaryTitle: "Built around accuracy, verification, and business-ready reporting",
    secondaryParagraphs: [
      "Accounting data entry becomes far more valuable when it is organized with clear verification steps and strong consistency checks. Our process focuses on secure collection, validation, structured categorization, double-entry discipline, reconciliation, and reporting visibility.",
      "This helps businesses reduce avoidable errors, save internal time, and keep records in a condition that supports better decision-making, compliance readiness, and more scalable financial operations.",
    ],
    featureList: [
      "General ledger entry",
      "Accounts payable and receivable data entry",
      "Invoice data entry",
      "Bank reconciliation",
      "Payroll data entry",
      "Expense report data management",
      "Financial statement preparation",
      "QuickBooks data entry",
    ],
  },
  faqs: [
    {
      question: "What is accounting data entry?",
      answer:
        "Accounting data entry is the process of recording financial transactions such as invoices, payments, expenses, and receipts into organized accounting systems for accurate reporting and analysis.",
    },
    {
      question: "Why should I outsource accounting data entry services?",
      answer:
        "Outsourcing can save time, lower administrative overhead, improve consistency, and give you access to trained specialists and structured processes.",
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer:
        "We use secure handling practices, controlled access, and confidentiality-focused processes to protect sensitive financial information.",
    },
    {
      question: "Is your team familiar with U.S. accounting standards?",
      answer:
        "Yes. Our work is aligned with common U.S. accounting expectations and business reporting practices, including the tools many U.S.-based businesses already use.",
    },
    {
      question: "Can you handle customized data entry requests?",
      answer:
        "Yes. We can adapt workflows based on your record structure, software environment, reporting needs, and document volume.",
    },
  ],
};

export default dataEntryContent;
