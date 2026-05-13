// src/us-pages/careersub.jsx
import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import JobFilterBar from "../us-components/careerComp/JobFilterBar";
import JobList from "../us-components/careerComp/JobList";
import JobDetails from "../us-components/careerComp/JobDetails";

// --- Job Data ---
const jobsData = [
  {
    id: 1,
    title: "US Senior Accountant",
    location: "Coimbatore",
    type: "Full Time",
    experience: "4+ Years Experience Needed",
    Education: "Bachelor's (Preferred)",
    Software: "QuickBooks",
    category: "Accounts",
    summary:
      "Milta Accounting Services is seeking an experienced and detail-oriented Senior US Accountant roles in Coimbatore to lead client accounting operations for US-based businesses.This role involves managing US GAAP accounting, QuickBooks bookkeeping, financial reporting, and client relationship management. The ideal candidate will possess strong analytical skills, industry-specific knowledge, and the ability to deliver actionable financial insights that enable clients to make informed business decisions.",
    responsibilities: [
      "Manage day-to-day bookkeeping, general ledger, and reconciliations for US clients.",
      "Review and ensure accuracy of journal entries, trial balances, and financial statements.",
      "Generate and analyze Profit & Loss (P&L) statements, Balance Sheets, and Cash Flow Reports.",
      "Assist clients with budgeting, forecasting, and financial planning.",
      "Provide business insights and performance analysis to support decision-making.",
      "Oversee accounts receivable/payable, bank reconciliation, and payroll accounting.",
      "Lead month-end and year-end closing activities and ensure timely deliverables.",
      "Identify and resolve accounting discrepancies and perform variance analysis.",
      "Maintain compliance with US GAAP and client accounting standards.",
      "Communicate effectively with US clients to address accounting queries and present reports.",
      "Mentor and guide junior accountants to ensure process accuracy and efficiency.",
      "Contribute industry-specific expertise to enhance the accuracy and value of financial reports.",
      "Collaborate with management to improve accounting processes and client satisfaction.",
      
    ],
    skills: [
      "In-depth knowledge of US GAAP, bookkeeping, and financial accounting principles.",
      "Experience in preparing P&L, balance sheet, and cash flow statements.",
      "Proficiency in QuickBooks Online/Desktop, Xero, and Microsoft Excel.",
      "Strong analytical, problem-solving, and business advisory skills.",
      "Excellent communication and client management abilities.",
      "Ability to manage multiple clients and deliver accurate results under deadlines.",
      "Leadership and mentoring capabilities to guide junior accountantss",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years",
    category: "IT",
    summary:
      "Develop and maintain responsive web applications using React.js and Material UI.",
    responsibilities: [
      "Build dynamic, responsive UIs using React and modern JS tools.",
      "Collaborate with backend engineers for API integration.",
      "Ensure performance optimization and cross-browser compatibility.",
    ],
    skills: ["React", "JavaScript", "MUI", "Git"],
  },
  {
    id: 3,
    title: "Virtual Assistant",
    location: "Coimbatore (Work from office only)",
    type: " Full time(Night Shifts Only)",
    experience: "1+ Years",
    Education:"Bachelor's (Preferred)",
    category: "Virtual Assistance",
    Contact:"Kavitha  / 9600103723",
    Mail:"hr@miltafs.com",
    summary:
      "Assist executives with scheduling, data entry, and communication tasks.",
    responsibilities: [
      "Perform administrative tasks as needed",
      "Update and maintain the accounts database",
      "Check spreadsheets for accuracy",
      "Prepare bank deposits",
      "Monitoring daily communications and answering calls",
      "Manage the CEO’s calendar (including scheduling meetings)",
      "Strong working knowledge of MS Office and/or G Suite (specifically word-processing and spreadsheet software)",
    ],
    skills: ["Diploma or Bachelor’s degree in the related field.", "Ability to manage and prioritize multiple tasks", "Excellent written and oral communication skills", "Strong understanding of accounting principles and financial reporting"
      , "Ability to operate independently and in a collaborative setting", "Understanding of accounting software (e.g., QuickBooks, SAP, Microsoft Excel)"
      , "Ability to handle sensitive, confidential information"
    ],
  },
  {
    id: 4,
    title: "Business Development Executive",
    location: "Coimbatore (Work from office only)",
    type: "Full time(Night Shifts Only)" ,
    experience: "2 – 7 years",
    category: "Business Development",
    Contact:"Kavitha  / 9600103723",
    Mail:"hr@miltafs.com",
    summary:
      "We are offering excellent opportunities for Business Development Executive jobs in Coimbatore. Join our dynamic team to drive sales and business growth.",
    responsibilities: [
        "Promote the company’s products and services while effectively addressing client needs.",
  "Generate new business opportunities through direct outreach and collaboration with the marketing team.",
  "Conduct market research to identify emerging markets, customer demands, and growth opportunities.",
  "Build and maintain strong relationships with existing clients to ensure long-term satisfaction.",
  "Develop and implement strategic sales initiatives to drive business growth.",
  "Maintain and update sales pipelines, reports, and business development documentation.",
  "Provide reliable feedback and exceptional after-sales support to enhance the client experience.",
  "Collaborate with the marketing team on promotional campaigns and brand-building activities.",
  "Negotiate with clients to secure profitable deals and long-term partnerships."
    ],
    skills: [
  "Bachelor’s degree in Sales, Marketing, Business Administration, or a related field.",
  "Minimum of 2–3 years of proven experience as a Business Development Executive.",
  "Strong ability to generate revenue by identifying and pursuing new business opportunities.",
  "Proficiency in CRM platforms and business development tools.",
  "Excellent written and verbal communication skills.",
  "Strong persuasion and negotiation abilities to convert potential clients.",
  "Ability to collaborate effectively within a team environment.",
  "Outstanding presentation and client engagement skills."
    ],
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    location: "Coimbatore",
    type: "Full Time (Night Shifts Only)",
    experience: "4+ Years Experience Needed",
    category: "Digital Marketing",
    summary:
      "Are you a passionate digital marketer looking to elevate your career in Coimbatore? We’re hiring Digital Marketing Specialists and offering internships for aspiring professionals eager to dive into the fast-paced world of digital campaigns, SEO, and social media strategy. Join our innovative team and contribute to impactful projects while growing your expertise.",
    responsibilities: [
      "Plan and execute all web, SEO/SEM, database marketing, email, social media, and display advertising campaigns.",
      "Design, build, and maintain our social media presence.",
      "Measure and report the performance of all digital marketing campaigns and assess against goals (ROI and KPIs).",
      "Identify trends and insights and optimize spend and performance based on insights.",
      "Collaborate with internal teams to create landing pages and optimize user experience.",
    ],
    skills: [
      "Minimum 4 years of relevant experience in digital marketing.",
      "Bachelor’s or master’s degree in marketing or a related field.",
      "Proven working experience in digital marketing.",
    ],
  },
  {
    id: 6,
    title: "Junior US Accountant",
    location: "Coimbatore",
    type: "Full Time (Night Shifts Only)",
    experience: "0 - 2 Years",
    category: "Accounts",
    summary:
      "Milta Accounting Services is looking for motivated and detail-oriented Junior US Accountants in Coimbatore to support our accounting team in managing bookkeeping and financial reporting for US-based clients.",
    responsibilities: [
      "Maintain accurate financial records for assigned US-based clients.",
      "Keep track of all daily financial transactions such as receipts, payments, and invoices.",
      "Post journal entries and reconcile the general ledger and bank accounts.",
      "Support month-end and year-end closing activities.",
      "Assist in preparing financial statements, reports, and schedules.",
      "Review and update accounts receivable/payable regularly.",
      "Perform basic financial analysis and identify accounting discrepancies.",
      "Communicate effectively with team members and clients via email and calls.",
      "Ensure compliance with US GAAP and internal accounting procedures.",
    ],
    skills: [
      "Basic knowledge of accounting principles and US GAAP.",
      "Proficiency in Microsoft Excel and familiarity with QuickBooks or similar accounting software.",
      "Exceptional attention to detail and proficiency with numerical data.",
      "Good written and verbal communication skills.",
      "The ability to learn quickly and do good work while being supervised.",
      "Strong time management and multitasking abilities.",
      "Willingness to work on night shifts aligned with US time zones.",
    ],
  },
  {
    id: 7,
    title: "Associate US Accountant",
    location: "Coimbatore",
    type: "Full Time (Night Shifts Only)",
    experience: "0 - 1 Year",
    category: "Accounts",
    summary:
      "Milta Accounting Services is seeking an enthusiastic Associate Accountant to join our growing US Accounting team.",
    responsibilities: [
      "Maintain and update accurate accounting records for US-based clients.",
      "Prepare, post, and reconcile journal entries in compliance with US GAAP.",
      "Manage bookkeeping and reconciliation activities using QuickBooks and other accounting tools.",
      "Prepare monthly and annual financial statements and client reports.",
      "Record vendor bills, invoices, and customer payments accurately.",
      "Assist in US tax preparation and compliance processes under IRS guidelines.",
      "Analyze and resolve accounting discrepancies or queries.",
      "Support the month-end and year-end closing processes.",
      "Communicate effectively with clients via email and calls regarding account updates.",
      "Ensure timely completion of assigned accounting deliverables.",
      "Provide general accounting support to the team.",
    ],
    skills: [
      "Strong knowledge of accounting principles and financial reporting.",
      "Familiarity with QuickBooks or similar accounting platforms.",
      "Working knowledge of Microsoft Excel (pivot tables, formulas, reconciliation sheets).",
      "Good understanding of US GAAP and basic US tax processes.",
      "Excellent written and oral communication skills for US client interaction.",
      "Ability to work under minimal supervision and manage multiple priorities.",
      "Strong analytical thinking, accuracy, and attention to detail.",
      "Ability to work independently and in a team environment",
      "Willingness to work on night shifts to align with US time zones",
      
    ],
  },
  {
    id: 8, // ✅ FIXED: added missing id
    title: "US Accounts Reviewer",
    location: "Coimbatore",
    type: "Full Time (Night Shifts Only)",
    experience: "3+ Years",
    category: "Accounts",
    summary:
      "Milta Accounting Services is looking for a detail-oriented US Accounts Reviewer to check the correctness, completeness, and compliance of accounting records for its US-based clients.",
    responsibilities: [
      "Guide and support team members in performing accounting and bookkeeping functions efficiently.",
      "Supervise financial data entry, reconciliations, and reporting processes in QuickBooks across multiple client accounts.",
      "Collaborate with clients to implement and customize QuickBooks based on their specific business and industry requirements.",
      "Deliver end-to-end accounting and financial advisory services utilizing in-depth QuickBooks expertise.",
      "Prepare, review, and analyze financial reports, including Profit & Loss statements, balance sheets, and cash flow statements.",
      "Exhibit strong initiative, innovation, and analytical thinking to enhance accounting operations and workflows.",
      "Proactively identify and resolve accounting discrepancies, conducting research and consulting with the US engagement team as needed.",
      "Serve as a key communication bridge between US offices and the India team to ensure seamless coordination and task execution.",
      "Manage multiple client projects concurrently, maintaining high standards of accuracy and timely delivery.",
      "Communicate regularly with management to highlight workflow updates, challenges, and recommendations.",
      "Ensure adherence to industry standards and best practices for financial accuracy, compliance, and reporting quality.",
    ],
    skills: [
      "In-depth knowledge of US GAAP and financial review standards.",
      "Proficient in QuickBooks Online/Desktop, Xero, SAP, and other leading accounting software platforms.",
      "Strong analytical, problem-solving, and business advisory capabilities.",
      "Excellent written and verbal communication skills to effectively engage with clients.",
      "Proven ability to mentor, guide, and review the work of junior accounting staff.",
      "Highly organized and capable of managing multiple client accounts independently with precision and professionalism.",
      
    ],
  },
  {
   id: 9,
   title: "Junior US Tax Preparer",
   location: "Coimbatore (Work from office only)",
   type: "Full time(Night Shifts Only)" ,// remove leading space
   experience: "0-2 years",
   category: "Tax",
   Contact:"Kavitha  / 9600103723",
   Mail: "hr@miltafs.com",

  summary:
    "Are you a passionate digital marketer looking to elevate your career in Coimbatore? We’re hiring Digital Marketing Specialists and offering internships and full-time opportunities.",
  responsibilities: [
    "Prepare basic Form 1040 returns and related schedules.",
    "Enter W-2, 1099, 1098, bank statements, and financial data into tax software.",
    "Assist in preparing Schedule C, rental (Schedule E), and investment income returns.",
    "Perform bank and ledger reconciliations before tax preparation.",
    "Organize and verify client documents; follow up for missing info.",
    "Support with e-filing, IRS letters, and administrative tasks.",
    "Maintain confidentiality and accuracy in all filings.",
  ],
  skills: [
    "Bachelor’s in Accounting/Finance or related field.",
    "0–2 years of US tax or bookkeeping experience.",
    "Basic knowledge of IRS forms and tax concepts.",
    "Familiar with Drake / ProSeries / Lacerte or willing to learn.",
    "Good Excel skills and attention to detail.",
    "Strong communication and willingness to learn.",
  ],
  whyJoinUs: [
    "Gain hands-on experience in US tax and QuickBooks.",
    "Learn from senior professionals in an international work environment.",
    "Career growth opportunities in finance and accounting outsourcing.",
    "Competitive salary and performance-based learning opportunities.",
    "Good Excel skills and attention to detail.",
    "Supportive team culture and structured training support.",
  ],
},
  {
    id: 10,
    title: "Senior US Tax Preparer",
    location: "Coimbatore (Work from office only)",
    type: "Full time(Night Shifts Only)" ,
    experience: "2 - 7 years",
    category: "Tax",
    Contact:"Kavitha  / 9600103723",
    Mail: "hr@miltafs.com",
  summary:
    "Milta Accounting Services is looking for a motivated and detail-oriented Senior Tax Preparer who is responsible for leading the preparation and review of complex federal and state tax returns for individuals and businesses.This position offers an excellent opportunity to build a strong foundation in Forms 1040, 1065, 1120, and 1120S, while working with international clients in a professional environment.",
  responsibilities: [
    "Prepare and review complex Form 1040 returns with multi-state, investments, rental properties, and business income.",
    "Review and finalize business returns including Form 1065, Form 1120/1120S, Schedule C, Schedule E, and Schedule F.",
    "Ensure accurate preparation of K-1s, depreciation schedules, and year-end adjustments.",
    "Oversee bank reconciliations, balance sheet tie-outs, and book-to-tax adjustments.",
    "Review returns prepared by junior staff and provide corrections, feedback, and guidance.",
    "Ensure compliance with IRS regulations, state tax laws, and current tax code updates.",
    "Handle e-filing issues, IRS correspondence, and tax notices.",
    "Maintain high data security, workpaper standards, and documentation accuracy.",
    "Coordinate with clients to gather missing documents and clearly explain tax return results.",
    "Maintain strong client relationships and ensure high satisfaction."
  ],
  skills: [
  "Deep understanding of IRS rules, federal and state tax laws, and tax forms",
  "Strong analytical and problem-solving ability",
  "Excellent review skills and high accuracy in finalizing returns",
  "Ability to manage high-volume workloads during peak season",
  "Effective communication and leadership skills",
  "Drake / UltraTax / Lacerte / ProSeries / TaxAct",
  "QuickBooks Online and Desktop",
  "Advanced Excel — reconciliations, pivot tables, and tax workpapers"
]
},
  {
    id: 11,
    title: "Business Development Associate",
    location: "Coimbatore (Work from office only)",
    type: "Full time(Night Shifts Only)" ,// remove leading space

    experience: "0 – 7 years",
    category: "Business Development",
    Contact:"Kavitha  / 9600103723",
Mail: "hr@miltafs.com",
    summary:
      "Develop and maintain responsive web applications using React.js and Material UI.",
    responsibilities: [
  "Become familiar with the company’s products and services.",
  "Attract new customers through direct contact and coordination with the marketing team.",
  "Research and identify prospective clients to connect with.",
  "Maintain strong relationships with existing clients.",
  "Identify new business opportunities for growth.",
  "Develop and implement effective sales strategies.",
  "Maintain and update sales and business development reports.",
  "Assist the marketing department with promotional projects.",
  "Negotiate with clients to secure deals at competitive prices.",
  "Review client feedback and recommend necessary improvements."
],
  skills: [
  "Bachelor’s degree in sales, marketing, business administration, English, or a related field",
  "Excellent written and verbal communication skills",
  "Strong ability to persuade and convince potential clients",
  "Ability to work effectively within a team",
  "Negotiation and persuasion skills"
],
  },
];
const CareerPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);
  const isMobile = useMediaQuery("(max-width:900px)");

  // --- Filter Logic ---
  const handleFilter = (filters) => {
    const filtered = jobsData.filter((job) => {
      const matchesCategory =
        filters.category === "All Openings" || job.category === filters.category;

      const matchesType =
        filters.type === "All" ||
        job.type.toLowerCase().includes(filters.type.toLowerCase());

      const matchesSearch = job.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      return matchesCategory && matchesType && matchesSearch;
    });

    setFilteredJobs(filtered);
    setSelectedJob(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box
      sx={{
        maxWidth: "1300px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* --- Filter Bar --- */}
      <JobFilterBar onFilter={handleFilter} />
{/* --- Job List & Details Layout --- */}
<Box
  sx={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: { xs: 2, md: 4 },
    width: "100%",
    mt: 3,
    alignItems: "flex-start", // ensures sticky works in flex row
  }}
>
  {/* LEFT — Job List */}
  <Box sx={{ width: isMobile ? "100%" : "45%"}}>
    <JobList
      jobs={filteredJobs}
      selectedJob={selectedJob}
      onSelectJob={setSelectedJob}
      isMobile={isMobile}
    />

    {/* Mobile: show details below the list */}
    {isMobile && selectedJob && (
      <Box sx={{ mt: 2 }}>
        <JobDetails job={selectedJob} />
      </Box>
    )}
  </Box>

  {/* RIGHT — Desktop Job Details */}
  {!isMobile && selectedJob && (
     <Box
  sx={{
    width: "55%",
    alignSelf: "flex-start",
    position: "sticky",
    top: "100px",
    maxHeight: "calc(100vh - 120px)",
    overflowY: "auto",        // ✅ enables scrolling
    pr: 1,                    // spacing so scrollbar doesn't overlap text
    mb: "100px",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#bdbdbd",
      borderRadius: "10px",
    },
  }}
>
  <JobDetails job={selectedJob} />
</Box>

  )}
</Box>

</Box>
    </ThemeProvider>
  );
};

export default CareerPage;