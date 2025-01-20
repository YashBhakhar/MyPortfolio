import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Diamond Connect",
      description: [
        "Baseball Scheduler: Developed event scheduling and score management",
        "Signup Flow: Designed and implemented a multi-page signup process",
        "Code Optimization: Replaced class components with functional components",
        "Data Visualization: Integrated charts, resolved bugs, and improved code quality",
      ],
      image: "./dimondconnect.png",
      tech: ["React.js", "Redux Toolkit", "Simple React Validator"],
      techColors: {
        "React.js": "bg-[#1E282E] text-[#90CDF4]",
        "Redux Toolkit": "bg-my-custom-red text-[#fc3535]",
        "Simple React Validator": "bg-my-custom-pink text-my-custom-pink-text",
      },
      link: "https://www.diamondconnect.com/",
    },
    {
      title: "Sundance Festival",
      description: [
        "Ticket & Passes: Developed add ticket and pass module for movies.",
        "Movie list: can watch rented movie",
        "Sponsor Module: Sponsors for organizing Events",
        "Code Optimization: Replaced class components with functional components",
      ],
      image: "./sundance.png",
      tech: ["React.js", "Fullcalendar", "Socket.IO"],
      techColors: {
        "React.js": "bg-[#1E282E] text-[#90CDF4]",
        Fullcalendar: "bg-my-custom-red text-[#fc3535]",
        "Socket.IO": "bg-my-custom-green text-my-custom-green-text",
      },
      link: "https://festival.sundance.org/",
    },
    {
      title: "Ampliteach",
      description: [
        "Developed online platform for musical instrument classes",
        "Implemented lesson scheduler using FullCalendar library",
        "Created role-based access control and user permissions",
        "Built embeddable widget and common signup form for integration",
      ],
      image: "./ampliteach.png",
      tech: ["MUI", "FullCalendar", "React Hook Form", "Redux"],
      techColors: {
        MUI: "bg-[#E3A5BA] text-[#2F2428]",
        FullCalendar: "bg-my-custom-red text-[#fc3535] ",
        "React Hook Form": "bg-[#1E282E] text-[#90CDF4]",
        Redux: "text-my-custom-orange-text bg-my-custom-orange",
      },
      link: "https://www.ampliteach.com/login",
    },
    {
      title: "Superworks",
      description: [
        "Built attendance module for employee records and modification requests",
        "Developed visitor module for tracking external company visitors",
        "Implemented plan selection module for modular company subscriptions",
      ],
      image: "./superwork.png",
      tech: ["React.js", "Custome Component"],
      techColors: {
        "React.js": "bg-[#1E282E] text-[#90CDF4]",
        "Custome Component": "bg-[#2F291E] text-[#FBD38D]",
      },
      link: "https://hrms.superworks.com/",
    },
    {
      title: "Jainam",
      description: [
        "Developed signup and verification module",
        "Integrated analytics and event tracking with Mixpanel",
        "Implemented document verification through Hyperverge API",
      ],
      image: "./jainam.png",
      tech: ["Next.js", "Zustand", "Tailwind", "Tankstack"],
      techColors: {
        "Next.js": "bg-[#1E282E] text-[#90CDF4]",
        Zustand: "bg-my-custom-red text-[#fc3535]",
        Tailwind: "bg-my-custom-pink text-my-custom-pink-text",
        Tankstack: "bg-[#2F291E] text-[#FBD38D]",
      },
      link: "https://signup.jainam.in/",
    },
    {
      title: "IMS (Internal System Management)",
      description: [
        "Developed resource allocation system for PCs, mice, and inventory",
        "Built the project from scratch, utilizing various UI and form libraries",
        "Implemented tracking for inventory levels and resource allocation",
        "Utilized Rematch for efficient state management",
      ],
      image: "./ims.png",
      tech: ["React.js", "Rematch", "Ant Design"],
      techColors: {
        "React.js": "bg-[#1E282E] text-[#90CDF4]",
        Rematch: "bg-my-custom-red text-[#fc3535]",
        "Ant Design": "bg-my-custom-pink text-my-custom-pink-text",
      },
      link: "https://imsdev.artoon.in/",
    },
  ];

  return (
    <div id="projects" className="w-full bg-black text-white py-16 overflow-hidden border-b border-[#2c3437]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 relative left-title">Projects</h2>
        <p className="text-gray-400 mb-4">
          Here's some of my projects that I have worked on.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-zinc-950 border-zinc-800 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="grid gap-4">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <ExternalLink
                      onClick={()=>window.open(project.link, "_blank", "noopener noreferrer")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-white cursor-pointer"
                        size={20}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 border-b-[#2c3437] border-b pb-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded text-xs font-bold ${project.techColors[tech]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm py-4">
                      {project.description.map(d=>(
                        <p>• {d}</p>
                      ))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
