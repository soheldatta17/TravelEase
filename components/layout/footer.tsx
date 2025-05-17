import Link from "next/link";
import { Plane, Hotel, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Plane className="h-6 w-6 mr-2 text-blue-400" />
              <span className="font-bold text-xl">TravelEase</span>
            </div>
            <p className="text-gray-400 mb-4">
              Book flights, hotels, holiday packages and more at the best prices.
            </p>
            <div className="flex items-center mb-3 text-gray-400">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center mb-3 text-gray-400">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@travelease.com</span>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <span>123 Travel Street, City, Country</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Offers & Discounts
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Types */}
          <div>
            <h3 className="font-bold text-lg mb-4">Travel Options</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/flights" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Domestic Flights
                </Link>
              </li>
              <li>
                <Link href="/flights/international" className="text-gray-400 hover:text-blue-400 transition-colors">
                  International Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels/india" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Domestic Hotels
                </Link>
              </li>
              <li>
                <Link href="/hotels/international" className="text-gray-400 hover:text-blue-400 transition-colors">
                  International Hotels
                </Link>
              </li>
              <li>
                <Link href="/holidays/india" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Holiday Packages
                </Link>
              </li>
              <li>
                <Link href="/visa" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/cruise" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cruise Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter and get exclusive deals you won't find anywhere else.
            </p>
            <div className="flex space-x-2 mb-4">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            <h3 className="font-bold text-lg mb-2 mt-4">Follow Us</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Made with ❤️ by Sohel Datta © 2025 TravelEase. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}