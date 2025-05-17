"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Plane, Hotel, Palmtree, Train, Bus, CarTaxiFront as Taxi } from "lucide-react";
import FlightSearch from "@/components/home/flight-search";
import HotelSearch from "@/components/home/hotel-search";
import HolidaySearch from "@/components/home/holiday-search";

type TabType = "flights" | "hotels" | "holidays" | "trains" | "buses" | "cabs";

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("flights");

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs 
        defaultValue="flights" 
        className="w-full"
        onValueChange={(value) => setActiveTab(value as TabType)}
      >
        <TabsList className="grid grid-cols-6 md:grid-cols-6 w-full h-auto bg-white/20 backdrop-blur-sm rounded-t-xl overflow-hidden">
          <TabsTrigger 
            value="flights"
            className="py-3 text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
          >
            <Plane className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Flights</span>
          </TabsTrigger>
          <TabsTrigger 
            value="hotels"
            className="py-3 text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
          >
            <Hotel className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Hotels</span>
          </TabsTrigger>
          <TabsTrigger 
            value="holidays"
            className="py-3 text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
          >
            <Palmtree className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Holidays</span>
          </TabsTrigger>
          <TabsTrigger 
            value="trains"
            className="py-3 text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
          >
            <Train className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Trains</span>
          </TabsTrigger>
          <TabsTrigger 
            value="buses"
            className="py-3 text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
          >
            <Bus className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Buses</span>
          </TabsTrigger>
          <TabsTrigger 
            value="cabs"
            className="py-3 text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
          >
            <Taxi className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Cabs</span>
          </TabsTrigger>
        </TabsList>
        
        <Card className="border-none shadow-lg rounded-b-xl rounded-tr-xl">
          <TabsContent value="flights" className="m-0">
            <FlightSearch />
          </TabsContent>
          <TabsContent value="hotels" className="m-0">
            <HotelSearch />
          </TabsContent>
          <TabsContent value="holidays" className="m-0">
            <HolidaySearch />
          </TabsContent>
          <TabsContent value="trains" className="m-0">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Book Train Tickets</h3>
              <p className="text-gray-500">Train booking coming soon!</p>
            </div>
          </TabsContent>
          <TabsContent value="buses" className="m-0">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Book Bus Tickets</h3>
              <p className="text-gray-500">Bus booking coming soon!</p>
            </div>
          </TabsContent>
          <TabsContent value="cabs" className="m-0">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Book a Cab</h3>
              <p className="text-gray-500">Cab booking coming soon!</p>
            </div>
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}