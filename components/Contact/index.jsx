import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = ({ handleLinkdin, handleEmail }) => {
  return (
    <div id="contact" className="w-full bg-black text-white py-14 border-b border-[#2c3437]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg mb-6">Contact me</h2>

        <h1 className="text-5xl font-bold mb-8">Keep In Touch.</h1>

        <p className="text-lg mb-2">
          I'm currently specializing in{" "}
          <span className="text-emerald-400">
            Software Development React/Next
          </span>
          .
        </p>

        <p className="text-gray-400 mb-12">
          Feel free to get in touch and talk more about your projects.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            onClick={handleLinkdin}
            variant="outline"
            className="bg-zinc-800/50 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-800 text-white gap-2"
          >
            <Linkedin className="w-4 h-4 text-emerald-400" />
            Linkedin
          </Button>

          <Button
            onClick={handleEmail}
            variant="outline"
            className="bg-zinc-800/50 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-800 text-white gap-2"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
