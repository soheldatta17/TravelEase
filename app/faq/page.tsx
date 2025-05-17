"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I book a flight?</AccordionTrigger>
          <AccordionContent>
            You can book a flight by using our flight search tool. Simply enter your departure and arrival cities, dates, and number of passengers to see available options.
          </AccordionContent>
        </AccordionItem>
        {/* Add more FAQ items */}
      </Accordion>
    </div>
  );
}