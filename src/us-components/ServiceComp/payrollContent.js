import heroImage from "../../assets/payroll.jpg";
import accountingImage from "../../assets/accounting.jpg";
import financeImage from "../../assets/finance.webp";
import serviceLinks from "./serviceLinks";

const payrollContent = {
  activeService: "/us/services/payroll-management-services-in-the-usa/",
  seo: {
    title: "Payroll Management Services in the USA | Milta FS",
    description:
      "Best payroll management services in the USA. Streamline your payroll processes, ensure compliance, and save time with our expert services.",
    keywords:
      "payroll management services, payroll management services in the usa, payroll management company in the usa, a payroll management company in the usa",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-usa/",
    ogTitle: "Payroll Management Services in the USA | Milta FS",
    ogDescription:
      "Best payroll management services in the USA. Streamline your payroll processes, ensure compliance, and save time with our expert services.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-usa/",
  },
  hero: {
    title: "Payroll Management Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Payroll Management Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#Payroll",
      "#Compliance",
      "#SalaryProcessing",
      "#PayrollTax",
      "#Onboarding",
      "#EmployeeBenefits",
      "#Reporting",
      "#ADP",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Reliable payroll operations that protect accuracy, compliance, and employee confidence",
    intro:
      "Milta's payroll management services are built to help businesses process salaries accurately, handle payroll taxes, support onboarding and offboarding, and maintain clear reporting. The service is designed to reduce compliance pressure while giving internal teams back valuable time.",
    bullets: [
      "End-to-end payroll calculation and processing",
      "Payroll tax compliance and filing support",
      "Employee onboarding and final settlement setup",
      "Time, attendance, and deduction coordination",
      "Custom payroll reporting and audit-ready outputs",
      "Integration with common payroll and accounting tools",
    ],
    galleryImages: [
      {
        src: accountingImage,
        alt: "Payroll records and compliance documentation",
      },
      {
        src: financeImage,
        alt: "Payroll reporting and finance workflow review",
      },
    ],
    secondaryTitle: "Built for growing businesses that need dependable payroll rhythm",
    secondaryParagraphs: [
      "Payroll touches employee trust, legal compliance, and operational stability all at once. Our process supports accurate wage calculations, timely payments, payroll tax handling, and clearer reporting so businesses can run payroll with fewer surprises and fewer manual bottlenecks.",
      "The service is also useful for companies that are scaling and want payroll systems that can grow with them. From onboarding and deductions to dashboards and audit-ready reports, we help create a steadier payroll operation over time.",
    ],
    featureList: [
      "End-to-end payroll processing",
      "Payroll tax compliance and filing",
      "Employee onboarding and offboarding",
      "Time and attendance integration",
      "Custom payroll reports",
      "Payroll software integration",
    ],
  },
  faqs: [
    {
      question: "What are payroll management services?",
      answer:
        "Payroll management services handle wage calculations, deductions, salary processing, payslips, and payroll-related compliance so employees are paid accurately and businesses stay aligned with regulations.",
    },
    {
      question: "How do payroll management services ensure compliance and accuracy?",
      answer:
        "They use structured payroll systems, review processes, current tax rules, and experienced specialists to reduce errors and keep filings and payments on time.",
    },
    {
      question: "Why should businesses outsource payroll management services in the USA?",
      answer:
        "Outsourcing can save time, reduce compliance risk, lower payroll errors, and provide access to specialists without requiring a larger internal payroll team.",
    },
    {
      question: "Is payroll outsourcing suitable for small and growing businesses?",
      answer:
        "Yes. It is often a strong fit for small and growing teams that need reliable payroll support but do not want the full overhead of in-house payroll infrastructure.",
    },
  ],
};

export default payrollContent;
