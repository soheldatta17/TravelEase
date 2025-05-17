"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Palmtree, Train, Bus, CarTaxiFront as Taxi, User, Menu, X, CreditCard, MapPin, Phone } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Flights", icon: <Plane className="h-4 w-4 mr-2" />, href: "/flights" },
  { label: "Hotels", icon: <Hotel className="h-4 w-4 mr-2" />, href: "/hotels" },
  { label: "Holiday Packages", icon: <Palmtree className="h-4 w-4 mr-2" />, href: "/holidays" },
  { label: "Trains", icon: <Train className="h-4 w-4 mr-2" />, href: "/trains" },
  { label: "Buses", icon: <Bus className="h-4 w-4 mr-2" />, href: "/buses" },
  { label: "Cabs", icon: <Taxi className="h-4 w-4 mr-2" />, href: "/cabs" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-md py-2" 
        : "bg-gradient-to-r from-blue-600 to-blue-500 py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Plane className={cn(
                "h-6 w-6 mr-1 transition-colors",
                isScrolled ? "text-blue-600" : "text-white"
              )} />
              <span className={cn(
                "font-bold text-xl transition-colors",
                isScrolled ? "text-blue-600" : "text-white"
              )}>
                TravelEase
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button 
                  variant={isScrolled ? "ghost" : "ghost"} 
                  className={cn(
                    "flex items-center",
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:bg-blue-700"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={cn(
                    "hidden md:flex items-center",
                    isScrolled ? "text-gray-700" : "text-white hover:bg-blue-700"
                  )}
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>USD</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem>EUR - Euro</DropdownMenuItem>
                <DropdownMenuItem>GBP - British Pound</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/mytrips">
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(
                  "hidden md:flex items-center",
                  isScrolled ? "text-gray-700" : "text-white hover:bg-blue-700"
                )}
              >
                <CreditCard className="h-4 w-4 mr-1" />
                <span>My Trips</span>
              </Button>
            </Link>

            <Link href="/login">
              <Button 
                variant={isScrolled ? "outline" : "secondary"}
                size="sm"
                className={cn(
                  "hidden md:flex items-center",
                  isScrolled ? "border-blue-600 text-blue-600" : ""
                )}
              >
                <User className="h-4 w-4 mr-1" />
                <span>Login</span>
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={cn(
                    "md:hidden",
                    isScrolled ? "text-gray-700" : "text-white"
                  )}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4 border-b">
                    <div className="flex items-center">
                      <Plane className="h-5 w-5 mr-1 text-blue-600" />
                      <span className="font-bold text-lg text-blue-600">TravelEase</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col py-4 space-y-1">
                    {navItems.map((item) => (
                      <Link key={item.label} href={item.href}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start"
                        >
                          {item.icon}
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                    <div className="border-t my-2 pt-2">
                      <Link href="/login">
                        <Button variant="default" className="w-full mt-2 bg-blue-600">
                          <User className="h-4 w-4 mr-1" />
                          <span>Login or Create Account</span>
                        </Button>
                      </Link>
                      <Link href="/mytrips">
                        <Button variant="outline" className="w-full mt-2 border-blue-600 text-blue-600">
                          <CreditCard className="h-4 w-4 mr-1" />
                          <span>My Trips</span>
                        </Button>
                      </Link>
                    </div>
                  </nav>
                  <div className="mt-auto border-t py-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>© 2025 TravelEase</p>
                      <p>All rights reserved</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}