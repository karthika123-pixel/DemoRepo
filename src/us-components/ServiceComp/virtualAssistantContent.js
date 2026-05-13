import heroImage from "../../assets/virtualAssistant.jpg";
import supportImage from "../../assets/virtual-assistant-services.webp";
import workflowImage from "../../assets/dataentry.jpg";
import serviceLinks from "./serviceLinks";

const virtualAssistantContent = {
  activeService: "/us/services/virtual-assistant-service-in-the-usa/",
  seo: {
    title:
      "Hire Virtual Assistants & Remote Personal | Virtual Assistant Services",
    description:
      "Professional virtual assistant services for small businesses. Specializing in real estate, data entry, bookkeeping, event planning, and more. Affordable and scalable solutions.",
    keywords:
      "virtual assistant service, virtual assistant services for small business, virtual bookkeeping service, accounting virtual service, virtual assistant services in the usa, accounting virtual service in the usa",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/",
    ogTitle:
      "Hire Virtual Assistants & Remote Personal | Virtual Assistant Services",
    ogDescription:
      "Professional virtual assistant services for small businesses. Specializing in real estate, data entry, bookkeeping, event planning, and more. Affordable and scalable solutions.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/",
  },
  hero: {
    title: "Virtual Assistant Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Virtual Assistant Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#VirtualAssistant",
      "#AdminSupport",
      "#Scheduling",
      "#DataEntry",
      "#Bookkeeping",
      "#Research",
      "#CustomerSupport",
      "#Productivity",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Flexible remote support for small businesses that need more capacity without more overhead",
    intro:
      "Milta's virtual assistant services help business owners delegate repetitive, administrative, and support-driven work to trained professionals. From scheduling and correspondence to research, bookkeeping, and customer-facing tasks, the service is built to reduce workload and improve day-to-day efficiency.",
    bullets: [
      "Calendar and appointment scheduling support",
      "Data entry and database organization",
      "Correspondence and inbox management",
      "Internet research and admin assistance",
      "Bookkeeping and business support tasks",
      "Travel coordination and presentation help",
    ],
    galleryImages: [
      {
        src: supportImage,
        alt: "Virtual assistant providing remote business support",
      },
      {
        src: workflowImage,
        alt: "Administrative workflow and business task management",
      },
    ],
    secondaryTitle: "A scalable support layer for owners and lean internal teams",
    secondaryParagraphs: [
      "Small businesses often lose time to tasks that are important but not the best use of leadership attention. Our virtual assistants step into those workflows with structured support across administration, customer communication, calendar management, research, and back-office coordination.",
      "Because the service is flexible, businesses can start with targeted support and expand as operations grow. That makes it easier to improve productivity without committing to full-time in-house hiring for every support function.",
    ],
    featureList: [
      "Real estate virtual assistant support",
      "Data entry and database maintenance",
      "Appointment scheduling",
      "Call answering and correspondence management",
      "Bookkeeping assistance",
      "Travel, presentation, and spreadsheet support",
    ],
  },
  faqs: [
    {
      question: "What distinguishes a typical employee from a virtual assistant?",
      answer:
        "A virtual assistant works remotely and provides flexible support without the same office, staffing, and overhead requirements that usually come with a traditional in-house employee.",
    },
    {
      question: "Can virtual assistants handle confidential data?",
      answer:
        "Yes. We follow structured security practices and careful handling standards to protect sensitive business information.",
    },
    {
      question: "Are virtual assistant services affordable for small businesses?",
      answer:
        "Yes. Virtual assistant support is often more cost-effective than hiring full-time staff for every administrative or recurring support task.",
    },
    {
      question: "How can I contact my virtual assistant?",
      answer:
        "We work through practical communication channels such as email, calls, video meetings, and shared project tools depending on the workflow.",
    },
    {
      question: "Can I customize the tasks assigned to my virtual assistant?",
      answer:
        "Yes. The service can be tailored around your business priorities, recurring tasks, and preferred processes.",
    },
  ],
};

export default virtualAssistantContent;
