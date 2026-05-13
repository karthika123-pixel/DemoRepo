import heroImage from "../../assets/BookkeepingImage.jpg";
import bookkeepingImage from "../../assets/bookkeeping.jpg";
import accountingImage from "../../assets/accounting.jpg";
import financeImage from "../../assets/finance.jpg";
import serviceLinks from "./serviceLinks";

const bookkeepingContent = {
  activeService: "/us/services/bookkeeping-company-in-the-usa/",
  seo: {
    title: "Advanced Bookkeeping Services in the USA | Free Bookkeeping Quotes",
    description:
      "We create customized bookkeeping solutions for small and growing businesses in the USA. Speak with our bookkeeping pros and get a free consultation today.",
    keywords:
      "bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, payroll and bookkeeping services, bookkeeping company in the usa",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/",
    ogTitle:
      "Advanced Bookkeeping Services in the USA | Free Bookkeeping Quotes",
    ogDescription:
      "We create customized bookkeeping solutions for small and growing businesses in the USA. Speak with our bookkeeping pros and get a free consultation today.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/",
  },
  hero: {
    title: "Bookkeeping Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Bookkeeping Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#Bookkeeping",
      "#SmallBusiness",
      "#MonthlyReports",
      "#CashFlow",
      "#PayrollSupport",
      "#APAR",
      "#Compliance",
      "#QuickBooks",
    ],
  },
  content: {
    heroImage: bookkeepingImage,
    sectionTitle: "Reliable bookkeeping support for cleaner records and better financial visibility",
    intro:
      "Our bookkeeping services are built for business owners who need accurate books, timely reporting, and a dependable team behind the scenes. We handle the day-to-day financial organization so you can make decisions with confidence and spend more time growing the business.",
    bullets: [
      "Bank and credit card reconciliations",
      "Accounts payable and receivable tracking",
      "Monthly financial statements",
      "Expense categorization and clean-up",
      "QuickBooks and cloud bookkeeping support",
      "Ongoing compliance-ready recordkeeping",
    ],
    galleryImages: [
      {
        src: accountingImage,
        alt: "Accounting review and bookkeeping planning",
      },
      {
        src: financeImage,
        alt: "Financial reporting and bookkeeping insights",
      },
    ],
    secondaryTitle: "Bookkeeping systems tailored to the way your business actually runs",
    secondaryParagraphs: [
      "Every business has different transaction volumes, reporting needs, and internal workflows. That is why we do not force a generic process onto your books. We align the bookkeeping system with your actual operations, making it easier to stay organized month after month.",
      "From reconciliations and payable tracking to management reports and clean financial histories, our team creates structure that supports decision-making. Whether you are catching up overdue books or maintaining steady monthly processes, we keep your records current and useful.",
    ],
  },
  faqs: [
    {
      question: "What bookkeeping tasks do you manage each month?",
      answer:
        "We handle reconciliations, transaction recording, expense categorization, accounts payable and receivable tracking, reporting support, and general bookkeeping maintenance based on your workflow.",
    },
    {
      question: "Can you work with my current accounting software?",
      answer:
        "Yes. We regularly support businesses using QuickBooks and other cloud-based accounting tools, and we can adapt our process to your existing bookkeeping environment.",
    },
    {
      question: "Do you help clean up overdue or messy books?",
      answer:
        "Yes. If your records are behind or inconsistent, we can help organize prior periods, reconcile accounts, and restore a reliable monthly bookkeeping rhythm.",
    },
    {
      question: "Will I receive reports I can actually understand?",
      answer:
        "That is part of the goal. We structure the books carefully so your reports are clear, timely, and useful for tracking cash flow, profitability, and operational decisions.",
    },
    {
      question: "Is this suitable for small businesses and growing teams?",
      answer:
        "Yes. The service is designed for startups, owner-led businesses, and expanding companies that need dependable bookkeeping without building a large in-house finance team.",
    },
  ],
};

export default bookkeepingContent;
