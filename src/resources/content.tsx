import { About, Home, Person, Social, Work, Newsletter, Blog, Gallery } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rakha Bayu",
  lastName: "Pratama",
  name: `Rakha Bayu Pratama`,
  role: "Data Analyst | Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "bprakha06@gmail.com",
  location: "Bandung, Indonesia" as any,
  languages: ["English", "Bahasa"],
};

const social: Social = [
  
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rakhabayupratama",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rakhabayupratama/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/rakhabyprtm/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&to=bprakha06@gmail.com",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6281220848242",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning raw data into meaningful insights</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Latest Projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Recommender System for App Store Applications Based on Heterogeneous Graph Neural Networks
        </Text>
      </Row>
    ),
    href: "/work/thesis",
  },
  subline: (
    <>
    I'm Rakha, a Data Analyst | Data Scientist based in <Text as="span" weight="strong">Bandung</Text>. I transform complex datasets into clear, actionable insights that drive smarter decisions.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  cv: {
    display: true,
    link: "/Rakha Bayu Pratama-Resume-2026.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Fresh graduate in Informatics from Telkom University (Cum Laude, GPA 3.56/4.00) with hands-on experience as a Data Analyst Intern at Telkomsel, where I automated reporting processes and delivered solutions. Skilled in Python, SQL, Power BI, and machine learning, with proven ability to turn complex data into actionable business insights.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "Telkomsel",
        timeframe: "July 1, 2025 - August 31, 2025",
        role: "Data Analyst Intern",
        achievements: [
          <>
            Automated monthly asset capitalization reporting using Power BI and MySQL, cutting report generation time from 6–8 hours to under 5 minutes (+98% faster), replacing error-prone manual Excel workflows with a structured, interactive dashboard system.
          </>,
          <>
            Processed and integrated 300,000+ rows of financial and asset data across Excel and MySQL through data cleaning, validation, and reconciliation, ensuring accuracy and consistency for management reporting.
          </>,
          <>
            Designed and deployed interactive KPI dashboards in Power BI to monitor financial and asset performance, enabling faster and more data-driven decision-making for the finance team.
          </>,
          <>
            Presented dashboard solution directly to Manager, Team, and General Manager, adopted immediately for the August asset report and recognized by the Vice President, demonstrating direct business impact within the internship period.
          </>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true, 
    title: "Education",
    institutions: [
      {
        name: "Telkom University",
        description: <>Bachelor of Informatics - GPA 3.56/4.00</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Skills",
    skills: [
      {
        title: "Certification",
        description: (
          <>Credentials that validate my technical knowledge and commitment to continuous learning in the fields of data, AI, and cloud technology.</>
        ),
        tags: [
          {
            name: "Microsoft Certified: Azure AI Fundamentals",
            icon: "microsoftoffice",
          },
        ],
      },
      {
        title: "Soft Skills",
        description: (
          <>Interpersonal and professional skills developed through academic projects, organizational experience, and real-world internship environments.</>
        ),
        tags: [
          {
            name: "Teamwork / Collaboration",
          },
          {
            name: "Communication",
          },
          {
            name: "Analytical thinking",
          },
          {
            name: "Problem solving",
          },
          {
            name: "Attention to detail",
          },
          {
            name: "Leadership",
          },
          {
            name: "Time management",
          },
          {
            name: "Information management",
          },
          {
            name: "Adaptability",
          },
          {
            name: "Initiative",
          },
        ],
        images: [],
      },
      {
        title: "Hard Skills",
        description: (
          <>A versatile technical stack spanning data analysis, visualization, database management, and software development, built through coursework, projects, and hands-on internship experience.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "R",
            icon: "",
          },
          {
            name: "Microsoft Power BI",
            icon: "powerbi",
          },
          {
            name: "Tableau",
            icon: "",
          },
          {
            name: "Microsoft Office",
            icon: "microsoftoffice",
          },
          {
            name: "Google Looker Studio",
            icon: "looker",
          },
          {
            name: "R Studio",
            icon: "",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Oracle",
            icon: "oracle",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Google Colab",
            icon: "googlecolab",
          },
          {
            name: "Jupyter Notebook",
            icon: "jupyter",
          },
          {
            name: "Microsoft Fabric",
            icon: "microsoftfabric",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Technical Writing",
            icon: "",
          },
          {
            name: "GoLang",
            icon: "golang",
          },
          {
            name: "C++",
            icon: "cplusplus",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <></>,
};

const blog: Blog = {
  label: "Blog",
  title: "Blog",
  description: "",
  path: "/blog",
};

const gallery: Gallery = {
  label: "Gallery",
  title: "Gallery",
  description: "",
  images: [],
  path: "/gallery",
};

export { person, social, newsletter, home, about, blog, work, gallery };
