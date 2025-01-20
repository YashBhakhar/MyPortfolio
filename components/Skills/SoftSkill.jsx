import React from "react";
import Marquee from 'react-fast-marquee';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Scale, MessageSquare, Users, Workflow, Puzzle, Clock } from "lucide-react";

const SoftSkill = () => {
  const skills = [
    { icon: Brain, text: "Critical Thinking" },
    { icon: Lightbulb, text: "Creativity" },
    { icon: Scale, text: "Decision Making" },
    { icon: MessageSquare, text: "Communication" },
    { icon: Users, text: "Teamwork - SCRUM" },
    { icon: Workflow, text: "Adaptability" },
    { icon: Puzzle, text: "Problem Solving" },
    { icon: Clock, text: "Time Management"}
  ];

  return (
    <div className="w-full pt-12 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-lg sm:text-3xl font-bold sm:mb-8 text-center">Soft skills</h2>
        
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          {skills.map((Skill, index) => (
            <Card key={index} className="mx-4 bg-transparent border-none">
              <CardContent className="flex flex-col items-center p-4">
                <Skill.icon className="w-6 h-6 mb-2 text-white text-lg font-extrabold" />
                <span className="text-sm sm:text-lg font-semibold sm:font-extrabold text-white">{Skill.text}</span>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SoftSkill;
