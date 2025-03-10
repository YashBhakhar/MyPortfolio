"use client";
import About from "@/components/About";
import CareerSection from "@/components/CareerSection";
import ContactSection from "@/components/Contact";
import Dashboard from "@/components/Dashboard";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  const LINKEDIN_URL = "https://www.linkedin.com/in/yash-bhakhar/";
  const EMAIL = "ybhakhar10@gmail.com";
  const GITHUB_URL = "https://github.com/YashBhakhar";

  const handleGithub = () => {
    window.open(GITHUB_URL, "_blank", "noopener noreferrer");
  };

  const handleDownloadCV = async () => {
    try {
      const link = document.createElement("a");
      link.href = "./yash-bhakhar.pdf";
      link.download = "resume.pdf"; // Name for downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log({
        title: "Download Failed",
        description: error,
      });
    }
  };

  const handleLinkdin = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener noreferrer");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${EMAIL}?subject=Portfolio Inquiry`;
  };

  const handleRedirect = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white main-scroll">
      <Header handleGithub={handleGithub} />
      <Dashboard
        handleDownloadCV={handleDownloadCV}
        handleEmail={handleEmail}
        handleLinkdin={handleLinkdin}
      />
      <About />
      <CareerSection />
      <ExperienceSection handleRedirect={handleRedirect} />
      <SkillsSection />
      <Projects />
      <ContactSection handleEmail={handleEmail} handleLinkdin={handleLinkdin} />
      <Footer />
    </div>
  );
}
