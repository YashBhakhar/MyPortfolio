import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github } from "lucide-react";

const Header = ({ handleGithub }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#career", label: "Career" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const MobileMenuItem = ({ href, label, onClick }) => (
    <NavigationMenuLink
      href={href}
      className="block px-4 py-2 text-sm hover:bg-gray-800 rounded-md w-full text-white"
      onClick={onClick}
    >
      {label}
    </NavigationMenuLink>
  );

  return (
    <div>
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between md:justify-start">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-64 bg-black/95 border-gray-800 text-white"
                >
                  <nav className="flex flex-col space-y-4 mt-8">
                    <NavigationMenu>
                      <NavigationMenuList className="flex-col">
                        {menuItems.map((item) => (
                          <MobileMenuItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            onClick={() => setIsOpen(false)}
                          />
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo/Name - Centered on mobile */}
            <div className="flex-1 flex justify-center text-center md:text-left md:w-2/12 md:flex-none">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuLink
                    href="#dashboard"
                    className="text-xl font-semibold italic"
                  >
                    Yash Bhakhar
                  </NavigationMenuLink>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block w-8/12">
              <NavigationMenu>
                <NavigationMenuList className="justify-center">
                  {menuItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        href={item.href}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Icons */}
            <div className="flex items-center justify-end md:w-2/12">
              <Button variant="ghost" size="icon" onClick={handleGithub}>
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
