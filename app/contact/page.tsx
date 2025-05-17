"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={5} />
            </div>
            <Button>Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-3" />
              <span>123 Travel Street, City, Country</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <span>support@travelease.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}