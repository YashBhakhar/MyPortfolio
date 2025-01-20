import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="min-h-[96vh] bg-black py-20 px-4 border-b border-[#2c3437] overflow-hidden">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 relative left-title">About Me</h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image */}
          <div className="relative h-full flex justify-center items-center">
            <Card className="bg-transparent border-0">
              <CardContent className="max-w-[400px] p-3 rounded-lg overflow-hidden border-green-500/20 border">
                <Image
                  src="/IMG_1472.jpg" // Replace with your graduation image
                  alt="Graduation photo"
                  className="w-full h-auto rounded-lg"
                  width={374}
                  height={500}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <Card className="bg-zinc-900/50 border-green-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span role="img" aria-label="laptop">
                    💻
                  </span>
                  <h2 className="text-white font-semibold">
                    Welcome to my world of code!
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="text-green-400">
                    Let me tell you a bit about my journey in software
                    engineering...
                  </p>

                  <p>
                    My passion for technology and problem-solving led me to
                    pursue a Bachelor's in Computer Applications (BCA). During
                    my academic journey, I discovered my love for creating
                    user-centric web applications and diving deep into modern
                    development technologies.
                  </p>

                  <p>
                    What truly excites me is the{" "}
                    <span className="text-green-400">React ecosystem</span>.
                    I've immersed myself in ReactJS, NextJS, and React Native,
                    building everything from responsive web applications to
                    seamless mobile experiences. Each project has been a
                    stepping stone in mastering these technologies.
                  </p>

                  <p>
                    I believe in writing clean, maintainable code and creating
                    intuitive user interfaces that make a difference. Whether
                    it's optimizing performance, implementing complex state
                    management, or ensuring cross-platform compatibility, I'm
                    always up for the challenge.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quotes Section */}
            <Card className="bg-zinc-900/50 border-green-500/20">
              <CardContent className="p-4 space-y-4">
                {/* Programming Quote */}
                <div className="flex gap-2">
                  <Quote className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="italic text-green-400">
                      "Clean code always looks like it was written by someone
                      who cares."
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      - Robert C. Martin
                    </p>
                  </div>
                </div>

                {/* Personal Quote */}
                <div className="mt-6 border-t border-green-500/20 pt-4">
                  <p className="italic text-gray-300">
                    "Every line of code is an opportunity to make something
                    better, every project is a chance to learn something new,
                    and every challenge is a stepping stone to innovation."
                  </p>
                  <p className="text-green-400 mt-2">- My coding philosophy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
