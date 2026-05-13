import heroImage from "../../assets/DigitalMarketing.jpg";
import supportImage from "../../assets/accounting-data-entry.jpg";
import workflowImage from "../../assets/work.webp";
import serviceLinks from "./serviceLinks";

const digitalMarketingContent = {
  activeService: "/us/services/best-digital-marketing-agency-in-usa/",
  seo: {
    title: "Digital Marketing Agency in the USA | PPC, SEO, and More.",
    description:
      "Best digital marketing agency in the USA. Boost your online presence, drive traffic, and increase sales with our expert services.",
    keywords:
      "digital marketing agency, digital marketing services in the usa, digital marketing services usa, a digital marketing agency in the usa",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/",
    ogTitle: "Digital Marketing Agency in the USA | PPC, SEO, and More.",
    ogDescription:
      "Best digital marketing agency in the USA. Boost your online presence, drive traffic, and increase sales with our expert services.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:
      "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/",
  },
  hero: {
    title: "Digital Marketing Services",
    image: heroImage,
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Digital Marketing Services" },
    ],
  },
  sidebar: {
    services: serviceLinks,
    tags: [
      "#SEO",
      "#PPC",
      "#SocialMedia",
      "#ContentMarketing",
      "#EmailMarketing",
      "#WebDesign",
      "#LeadGeneration",
      "#Analytics",
    ],
  },
  content: {
    heroImage,
    sectionTitle:
      "Performance-focused digital marketing for businesses that want stronger visibility and better lead flow",
    intro:
      "Milta's digital marketing services are designed to help businesses improve visibility, attract qualified traffic, and convert attention into revenue. We combine SEO, content, paid campaigns, social media strategy, email marketing, and website improvement into a more coordinated growth approach.",
    bullets: [
      "Search engine optimization and technical SEO support",
      "PPC campaign setup and performance refinement",
      "Social media strategy and campaign execution",
      "Content writing aligned with search and conversion goals",
      "Email marketing and audience engagement support",
      "Website design and development with clear user journeys",
    ],
    galleryImages: [
      {
        src: supportImage,
        alt: "Digital marketing planning and analytics review",
      },
      {
        src: workflowImage,
        alt: "Campaign workflow and online growth strategy",
      },
    ],
    secondaryTitle: "A practical mix of traffic-building and conversion-focused execution",
    secondaryParagraphs: [
      "Many businesses need more than isolated tactics. Our approach connects organic search, paid visibility, website experience, and ongoing optimization so your marketing efforts support each other instead of competing for attention.",
      "Whether the goal is stronger search rankings, better ad performance, improved engagement, or a clearer website journey, we build digital marketing around measurable business outcomes rather than generic activity.",
    ],
    featureList: [
      "Search engine optimization (SEO)",
      "Technical SEO",
      "Link building",
      "Web design and development",
      "Social media marketing",
      "PPC management",
      "Content writing",
      "Email marketing",
    ],
  },
  faqs: [
    {
      question: "How does Milta create a customized marketing plan?",
      answer:
        "We begin by understanding your business goals, audience, and market conditions, then we choose the most effective channels and tactics for your specific growth priorities.",
    },
    {
      question: "Can Milta help with website design and development?",
      answer:
        "Yes. We support website design and development work that aligns with branding, usability, and conversion goals.",
    },
    {
      question: "How does Milta ensure a high return on investment (ROI)?",
      answer:
        "We use data-driven optimization, focus on lead quality and conversion performance, and refine campaigns over time based on measurable outcomes.",
    },
    {
      question: "How long does it take for digital marketing to show measurable results?",
      answer:
        "Timelines vary by channel and competition, but many businesses begin seeing meaningful traction after a few months of consistent execution and optimization.",
    },
    {
      question: "What digital marketing services does Milta offer?",
      answer:
        "We offer SEO, technical SEO, PPC, social media marketing, content writing, email marketing, website design and development, and related growth-focused support.",
    },
  ],
};

export default digitalMarketingContent;
