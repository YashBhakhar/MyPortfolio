import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, GraduationCap, Briefcase, Code } from 'lucide-react';
import Image from 'next/image';

const CareerSection = () => {
  return (
    <section id="career" className="py-20 bg-black px-4 border-b border-[#2c3437] overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4 relative center-title">Career</h1>
        <p className="text-lg text-gray-400 mb-12">Rooted in academic excellence and growth.</p>

        {/* Powered By Connection Lines */}
        <div className="relative">
          
          {/* Powered By Text */}
          <Card className="w-fit mx-auto bg-zinc-900/50 border-green-500/20 mb-12">
            <CardContent className="px-6 py-2">
              <h2 className="text-white">Powered By</h2>
            </CardContent>
          </Card>

          {/* Career Timeline */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* BCA Education */}
            <Card className="bg-zinc-900/50 border-green-500/20 hover:border-green-500/40 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <Image 
                    src="/bca.png"
                    alt="Swarrnim University Logo"
                    className="max-h-full"
                    width={26}
                    height={32}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg">Swarrnim University</h3>
                  <ExternalLink className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <GraduationCap className="w-5 h-5" />
                  <span>BCA</span>
                </div>
                <p className="text-gray-400 text-left">
                  Completed Bachelor of Computer Applications from Swarrnim Startup & Innovation University
                </p>
              </CardContent>
            </Card>

            {/* TOPS Technologies */}
            <Card className="bg-zinc-900/50 border-green-500/20 hover:border-green-500/40 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <Image 
                    src="/tops.png"
                    alt="TOPS Technologies Logo"
                    className="max-h-full"
                    width={25}
                    height={30}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg">TOPS Technologies</h3>
                  <ExternalLink className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <Code className="w-5 h-5" />
                  <span>Web & React Development</span>
                </div>
                <p className="text-gray-400 text-left">
                  Specialized training in web designing and React development, gaining hands-on experience with modern web technologies
                </p>
              </CardContent>
            </Card>

            {/* Artoon Solutions */}
            <Card className="bg-zinc-900/50 border-green-500/20 hover:border-green-500/40 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <Image 
                    src="/artoon.png"
                    alt="Artoon Solutions Logo"
                    className="max-h-full"
                    width={25}
                    height={30}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg">Artoon Solutions</h3>
                  <ExternalLink className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <Briefcase className="w-5 h-5" />
                  <span>Internship</span>
                </div>
                <p className="text-gray-400 text-left">
                  Gained practical experience in software development through internship at Artoon Solutions Private Limited
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;