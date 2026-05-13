import heroImage from "../../assets/Accounting & Bookkeeping Services.jpg";
import supportImage from "../../assets/accounting.jpg";
import workflowImage from "../../assets/work.webp";
import serviceLinks from "./serviceLinks";

const servicesOverviewContent = {
  activeService: "/services",
  seo: {
    title: "Milta - Our Services You Can Trust to Make Business Easier.",
    description:
      "At Milta, we don't just provide services, we provide solutions. Our services are customised to meet your specific needs and planned solutions.",
    keywords:
      "bookkeeping services for small business, tax planning and preparation service, cpa services for small business, virtual assistant service, digital marketing services usa, financial controller services, accounting data entry services",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/services",
    ogTitle: "Milta - Our Services You Can Trust to Make Business Easier.",
    ogDescription:
      "At Milta, we don't just provide services, we provide solutions. Our services are customised to meet your specific needs and planned solutions.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/services",
  },
  hero: {
    title: "Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#Bookkeeping",
      "#TaxPlanning",
      "#CPA",
      "#VirtualAssistant",
      "#Payroll",
      "#ControllerServices",
      "#DigitalMarketing",
      "#DataEntry",
    ],
  },
  content: {
    heroImage: supportImage,
    sectionTitle:
      "Accounting, finance, support, and growth services designed around small business needs",
    intro:
      "Milta brings together bookkeeping, tax planning, CPA support, financial controller services, payroll, virtual assistance, digital marketing, and accounting data entry under one service ecosystem. The focus is simple: help businesses operate more smoothly, stay compliant, and grow with better support behind the scenes.",
    bullets: [
      "Bookkeeping and monthly reporting support",
      "Tax planning and preparation services",
      "CPA and compliance-focused accounting assistance",
      "Payroll and financial controller services",
      "Virtual assistant and back-office support",
      "Digital marketing and data entry operations support",
    ],
    galleryImages: [
      {
        src: supportImage,
        alt: "Business accounting and advisory collaboration",
      },
      {
        src: workflowImage,
        alt: "Team workflow across operations and service delivery",
      },
    ],
    secondaryTitle: "One place to explore the services behind operational clarity and sustainable growth",
    secondaryParagraphs: [
      "Businesses rarely need just one isolated solution. They need financial accuracy, reliable processes, responsive support, and in many cases better visibility into how the business is performing. Our services are built to work individually or together depending on where your company needs help most.",
      "Use this page as a starting point to explore each service area in more detail. Whether the need is cleaner books, stronger tax preparation, better payroll management, outsourced controller guidance, digital growth support, or dependable data entry, each service page breaks the offering down more clearly.",
    ],
    featureList: [
      "Bookkeeping services",
      "Tax planning and preparation",
      "CPA services",
      "Virtual assistant services",
      "Financial controller services",
      "Payroll management services",
      "Digital marketing services",
      "Accounting data entry services",
    ],
  },
  faqs: [
    {
      question: "What services does Milta offer?",
      answer:
        "Milta offers bookkeeping, tax planning and preparation, CPA support, financial controller services, payroll management, virtual assistant support, digital marketing, and accounting data entry services.",
    },
    {
      question: "Does Milta provide services for small businesses?",
      answer:
        "Yes. Our services are especially structured for small and growing businesses that need dependable support without unnecessary complexity or overhead.",
    },
    {
      question: "Can businesses use more than one service together?",
      answer:
        "Yes. Many businesses combine financial, operational, and support services so workflows stay more connected across bookkeeping, tax, payroll, back-office support, and growth initiatives.",
    },
  ],
};

export default servicesOverviewContent;
