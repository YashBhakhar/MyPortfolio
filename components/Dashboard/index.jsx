import React from "react";
import { Download, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = ({ handleDownloadCV, handleLinkdin, handleEmail }) => {
  return (
    <div id="dashboard" className="border-b border-[#2c3437]">
      <main className="pt-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-16">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <Card className="w-fit bg-green-900/30 border-green-900/50">
              <CardContent className="p-3 flex items-center">
                <span className="text-green-500 mr-2">Welcome</span>
                <span className="text-gray-300">to my portfolio website!</span>
                <span className="ml-2">→</span>
              </CardContent>
            </Card>

            <h1 className="text-5xl font-bold">
              Hey folks, I'm{" "}
              <span className="text-green-500">Software Engineer</span>
            </h1>

            <p className="text-gray-400 text-lg">
              Passionate about crafting exceptional web and mobile experiences
              using React ecosystem. Specializing in ReactJS, NodeJS, NextJS, and React
              Native, I transform complex requirements into elegant,
              user-centric solutions that drive business success.
            </p>

            <Button
              className="bg-green-900/30 hover:bg-green-900/50"
              size="lg"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (CV)
            </Button>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="secondary" size="lg" onClick={handleLinkdin}>
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="secondary" size="lg" onClick={handleEmail}>
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="md:w-1/2 mt-8 md:mt-0 sm:block hidden">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-0 relative">
                {/* Tech Stack Cards */}

                {/* Developer Illustration */}
                <img
                  src="./wmremove-transformed.png"
                  alt="Developer illustration"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
