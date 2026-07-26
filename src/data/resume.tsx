import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-.83-.728-1.502-1.92-2.024-.954-.42-1.428-.684-1.428-1.128 0-.445.42-.696 1.02-.696.588 0 .972.276 1.224.696.228.372.24.684.24.9h2.82c0-.42-.048-1.008-.348-1.572-.456-.84-1.296-1.416-2.904-1.416-2.508 0-3.876 1.344-3.876 3.12 0 1.956 1.152 2.664 3.036 3.42 1.176.48 1.488.756 1.488 1.284 0 .54-.516.912-1.284.912-.876 0-1.344-.456-1.584-1.02-.156-.372-.228-.792-.228-1.176h-3.036c0 .408.06 1.044.384 1.632.552 1.02 1.62 1.608 3.516 1.608 2.616 0 4.044-1.296 4.044-3.324 0-1.74-1.008-2.58-2.904-3.348zM12.138 24h3.048v-3.78c0-3.324-1.908-4.524-4.836-4.524-2.82 0-4.308 1.2-4.308 2.904h2.88c0-.792.516-1.116 1.428-1.116.972 0 1.764.444 1.764 1.908V24z"/>
  </svg>
);

const MongoDBIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm3.84 15.54c-.6.9-1.44 1.56-2.52 1.86v3.24h-2.64v-3.24c-1.08-.3-1.92-.96-2.52-1.86-.96-1.44-1.2-3.48-1.2-4.56 0-1.08.36-2.04.96-2.88.6-.84 1.56-1.44 2.76-1.56v-2.76h2.64v2.76c1.2.12 2.16.72 2.76 1.56.6.84.96 1.8 0 2.88 0 1.08-.24 3.12-1.2 4.56z" />
  </svg>
);

const N8NIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <line x1="7" y1="7" x2="10" y2="10" />
    <line x1="17" y1="7" x2="14" y2="10" />
    <line x1="7" y1="17" x2="10" y2="14" />
    <line x1="17" y1="17" x2="14" y2="14" />
  </svg>
);

const ClaudeCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
  </svg>
);

const RAGIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const LangGraphIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="4" r="2.5" fill="currentColor" />
    <circle cx="5" cy="18" r="2.5" />
    <circle cx="19" cy="18" r="2.5" />
    <line x1="12" y1="6.5" x2="6.5" y2="15.5" />
    <line x1="12" y1="6.5" x2="17.5" y2="15.5" />
    <line x1="7.5" y1="18" x2="16.5" y2="18" strokeDasharray="2 2" stroke="currentColor" />
  </svg>
);

const VectorDBIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <line x1="12" y1="5" x2="12" y2="22" strokeDasharray="2 2" stroke="currentColor" />
    <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="2 2" stroke="currentColor" />
  </svg>
);

export const DATA = {
  name: "Sandeep Megharaj",
  initials: "SM",
  url: "https://github.com/sandeepmegharaj?tab=repositories",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Software Engineer",
  summary:
    "Based in Hyderabad, India. I turn business requirements into technical solutions through AI-infused development across web development and Agentic AI. An open Web Developer pivoting to AI Engineering to reach the hierarchy of what's underneath.\n\nReach me via [email](mailto:sandeepmegharaj@gmail.com) or [book a call](tel:9347775873). See my code and contributions on [GitHub](https://github.com/sandeepmegharaj?tab=repositories).\n\nFind me on [LinkedIn](https://www.linkedin.com/in/sandeep-megharaj-87a9b525b/), [Twitter/X](https://x.com/sandeeepmegh), read my writing on [Medium](https://medium.com/@sandeepmegharaj), or grab my [resume](https://drive.google.com/file/d/1Ay8JVXP7cZwjhFZoAfJsMTXe8xwqOT8I/view?usp=sharing).",
  avatarUrl: "/sandeep_red.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "ReactJS", icon: ReactLight },
    { name: "NextJS", icon: NextjsIconDark },
    { name: "SQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "n8n", icon: N8NIcon },
    { name: "Claude Code", icon: ClaudeCodeIcon },
    { name: "RAG", icon: RAGIcon },
    { name: "LangGraph", icon: LangGraphIcon },
    { name: "Vector DB", icon: VectorDBIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sandeepmegharaj@gmail.com",
    tel: "9347775873",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sandeepmegharaj?tab=repositories",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sandeep-megharaj-87a9b525b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sandeeepmegh",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@sandeepmegharaj",
        icon: Icons.medium,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1Ay8JVXP7cZwjhFZoAfJsMTXe8xwqOT8I/view?usp=sharing",
        icon: Icons.googleDrive,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sandeepmegharaj@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "EXECRON",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Founding Developer",
      logoUrl: "/execron.png",
      start: "March 2026",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "Gokaraju Rangaraju Institute of Engineering and Technology",
      href: "http://www.griet.ac.in/",
      degree: "BTech in Electronics",
      logoUrl: "/griet.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "AI Multi-Agent",
      href: "https://github.com/sandeepmegharaj/AI-Custom-Agent.git",
      dates: "2026",
      active: true,
      description:
        "Built a conversational multi-agent AI system using DeepAgents on LangGraph with Streamlit, featuring autonomous planning, real-time web search, and a confidence-scored AI news summarization subagent.",
      technologies: [
        "Python",
        "LangGraph",
        "DeepAgents",
        "Streamlit",
        "Claude Code",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sandeepmegharaj/AI-Custom-Agent.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    {
      title: "AI Career Guide",
      href: "https://ai-career-guidance-lyart.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Built a GenAI-powered full-stack SaaS platform delivering personalized career guidance through AI-driven assessments, learning roadmaps, resume analysis, and interview preparation.",
      technologies: [
        "React.js",
        "Next.js",
        "PostgreSQL",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-career-guidance-lyart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sandeepmegharaj/CareerguideAI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Gen AI Exchange Hackathon - Google Cloud",
      dates: "October 2025",
      location: "Hyderabad, India",
      description:
        "Built a GenAI-powered career guidance SaaS with scalable AI tools including AI assessments, learning roadmaps, resume analysis, and interview prep, leveraging Google Cloud and Gemini APIs.",
      image: "/hack-genai.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepmegharaj/CareerguideAI.git",
        },
      ],
    },
    {
      title: "HACKATHON 1.0 - International Level",
      dates: "December 2025",
      location: "Greater Hyderabad, India",
      description:
        "Top 5 Finalist. Integrated AI Voice Interview and Course Generation Tool into the pre-existing Career Guidance SaaS, extending the platform with automated assessments and personalised learning paths.",
      image: "/hack-spec.png",
      links: [],
    },
  ],
} as const;
