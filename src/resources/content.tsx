import { About, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rakha Bayu",
  lastName: "Pratama",
  name: `Rakha Bayu Pratama`,
  role: "Data Analyst | Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "bprakha06@gmail.com",
  location: "Bandung, Indonesia",
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
    link: "/Resume-Rakha Bayu Pratama-2026.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Fresh graduate in Informatics with a strong interest in data analytics, data science, and machine learning. Experienced in developing end-to-end machine learning projects and conducting data analysis. Proficient in Python, SQL, and Power BI. Analytical, reliable, and effective working independently or in teams.
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
            Automated monthly asset capitalization reports by integrating Excel, MySQL (SQL queries), and Power BI, transforming manual reporting processes into a structured dashboard system.
          </>,
          <>
            Designed and developed interactive dashboards to monitor financial and asset-related KPIs, enabling faster and more accurate management decision-making.
          </>,
          <>
            Performed data cleaning, validation, and reconciliation to ensure accuracy and consistency across multiple data sources.
          </>,
          <>
            Improved reporting efficiency by reducing manual processing time and minimizing human error through data automation.
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
        images: [
          {
            src: "/images/Cert4228834162.jpg",
            alt: "Microsoft Certified: Azure AI Fundamentals",
            width: 16,
            height: 12,
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
          <>A versatile technical stack spanning data analysis, visualization, database management, and software development — built through coursework, projects, and hands-on internship experience.</>
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

export { person, social, home, about, work };
