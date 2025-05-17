"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

type TestimonialProps = {
  avatar: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  tripType: string;
  date: string;
};

const testimonials: TestimonialProps[] = [
  {
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    name: "Sophie Williams",
    location: "New York, USA",
    rating: 5,
    text: "TravelEase made booking our honeymoon so simple! We got a great deal on flights and the hotel exceeded our expectations. The customer service team was incredibly helpful when we needed to adjust our itinerary last minute.",
    tripType: "Honeymoon to Maldives",
    date: "February 2025"
  },
  {
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    name: "James Rodriguez",
    location: "London, UK",
    rating: 4,
    text: "Our family trip to Disney World was perfectly planned thanks to TravelEase. The hotel was close to the parks and the flight times worked well with our schedule. The kids had an amazing time!",
    tripType: "Family trip to Disney World",
    date: "March 2025"
  },
  {
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 5,
    text: "I've used TravelEase for all my business trips this year and couldn't be happier. Their interface is intuitive, prices are competitive, and the rewards program is actually worth it. Highly recommended!",
    tripType: "Business trip to Tokyo",
    date: "January 2025"
  },
  {
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "Booked a last-minute weekend getaway and was blown away by how easy the process was. The app is super user-friendly and I found a great deal on a luxury hotel that I wouldn't have been able to afford otherwise.",
    tripType: "Weekend in Chicago",
    date: "April 2025"
  }
];

function TestimonialCard({ avatar, name, location, rating, text, tripType, date }: TestimonialProps) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="mb-5 flex justify-between items-start">
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={avatar}
                alt={name}
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <Quote className="h-8 w-8 text-blue-100 mb-2" />
        
        <p className="text-gray-700 mb-4 italic">{text}</p>
        
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-medium">{tripType}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers!
            We take pride in providing exceptional travel experiences.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}