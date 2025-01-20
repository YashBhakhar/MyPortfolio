import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Power } from "lucide-react";
import Image from "next/image";

const ExperienceSection = ({handleRedirect}) => {
  const projects = [
    {
      name: "Diamond Connect",
      duration: "2023",
      technologies: ["React.js", "Redux Toolkit", "Simple React Validator"],
      highlights: [
        "Baseball Scheduler: Developed event scheduling and score management",
        "Signup Flow: Designed and implemented a multi-page signup process",
        "Code Optimization: Replaced class components with functional components",
        "Data Visualization: Integrated charts, resolved bugs, and improved code quality",
      ],
      image: "./dimondconnect.png",
      link: 'https://www.diamondconnect.com/'
    },
    {
        name: "Sundance Festival",
        duration: "2023",
        technologies: ["React.js", "Fullcalendar", "Socket.IO"],
        highlights: [
          "Ticket & Passes: Developed add ticket and pass module for movies.",
          "Movie list: can watch rented movie",
          "Sponsor Module: Sponsors for organizing Events",
          "Code Optimization: Replaced class components with functional components"
        ],
        image: "./sundance.png",
        link: 'https://festival.sundance.org/'
      },
    {
        name: "Ampliteach",
        duration: "2023",
        technologies: ["MUI", "FullCalendar", "React Hook Form", "Redux"],
        highlights: [
            "Developed online platform for musical instrument classes",
            "Implemented lesson scheduler using FullCalendar library",
            "Created role-based access control and user permissions",
            "Built embeddable widget and common signup form for integration"
        ],
      image: "./ampliteach.png",
      link: 'https://www.ampliteach.com/login'
    },
    {
      name: "Superworks",
      duration: "2024",
      technologies: ["React.js", "Custome Component"],
      highlights: [
          "Built attendance module for employee records and modification requests",
          "Developed visitor module for tracking external company visitors",
        "Implemented plan selection module for modular company subscriptions"
    ],
    image: "./superwork.png",
      link: "https://hrms.superworks.com/"
    },
    {
        name: "Jainam",
      duration: "2024",
      technologies: ["Next.js", "Zustand", "Tailwind", "Tankstack"],
      highlights: [
          "Developed signup and verification module",
          "Integrated analytics and event tracking with Mixpanel",
          "Implemented document verification through Hyperverge API"
        ],
        image: "./jainam.png",
        link: "https://signup.jainam.in/"
    },
    {
      name: "IMS (Internal System Management)",
      duration: "2023",
      technologies: ["React.js", "Rematch", "Ant Design"],
      highlights: [
        "Developed resource allocation system for PCs, mice, and inventory",
        "Built the project from scratch, utilizing various UI and form libraries",
        "Implemented tracking for inventory levels and resource allocation",
        "Utilized Rematch for efficient state management"
      ],
      image: "./ims.png",
      link: "https://imsdev.artoon.in/"
    },
  ];

  return (
    <section id="experience" className="w-full bg-black text-white sm:px-20 px-5 py-20 border-b border-[#2c3437] overflow-hidden">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-3 relative left-title">Experience</h2>
        <p className="inline-block bg-gray-800 rounded-md px-4 py-2 text-sm">
          Rooted in academic excellence and growth.
        </p>
      </div>

      <div className="space-y-8">
        <Card className="bg-zinc-900/50 border border-green-500/20 hover:border-green-500/50 transition-colors duration-300 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/artoon-logo-2-removebg-preview.png"
                alt="École Numérique"
                className="h-8"
                width={89}
                height={32}
              />
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">
                Software Engineer - As a Junior ReactJS Developer!
              </h3>
              <span className="text-gray-400 text-sm">Jan. 2023 - Current</span>
            </div>
            <p className="text-gray-300">
              Throughout my academic journey, I have completed over{" "}
              <span className="text-green-500">5+ projects</span> using
              <span className="text-green-500"> ReactJS</span> and{" "}
              <span className="text-green-500">NextJS</span> focused on
              designing and developing
              <span className="text-green-500"> User Friendly</span>{" "}
              applications.
            </p>
          </CardContent>
        </Card>        
      </div>
    </section>
  );
};

export default ExperienceSection;
