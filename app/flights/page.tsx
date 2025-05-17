"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown, Filter, Clock, Coffee, Wifi, Plug, RotateCw, ArrowDownUp, Plane, Plane as PlaneDown } from "lucide-react";
import FlightSearch from "@/components/home/flight-search";

// Sample flight data
const flights = [
  {
    id: 'fl1',
    airline: 'Delta Airlines',
    logo: 'https://images.pexels.com/photos/87017/plane-airport-runway-airbus-87017.jpeg',
    flightNo: 'DL 302',
    departure: {
      city: 'New York',
      code: 'JFK',
      time: '08:30',
      date: '10 Jul 2025'
    },
    arrival: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '11:45',
      date: '10 Jul 2025'
    },
    duration: '5h 15m',
    stops: 0,
    price: 349,
    amenities: ['wifi', 'power', 'meals'],
    seatsAvailable: 12
  },
  {
    id: 'fl2',
    airline: 'American Airlines',
    logo: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg',
    flightNo: 'AA 189',
    departure: {
      city: 'New York',
      code: 'JFK',
      time: '10:15',
      date: '10 Jul 2025'
    },
    arrival: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '13:40',
      date: '10 Jul 2025'
    },
    duration: '5h 25m',
    stops: 0,
    price: 320,
    amenities: ['wifi', 'power'],
    seatsAvailable: 8
  },
  {
    id: 'fl3',
    airline: 'United Airlines',
    logo: 'https://images.pexels.com/photos/1193268/pexels-photo-1193268.jpeg',
    flightNo: 'UA 425',
    departure: {
      city: 'New York',
      code: 'LGA',
      time: '12:30',
      date: '10 Jul 2025'
    },
    arrival: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '16:10',
      date: '10 Jul 2025'
    },
    duration: '5h 40m',
    stops: 1,
    stopCity: 'Chicago (ORD)',
    stopDuration: '1h 15m',
    price: 289,
    amenities: ['meals'],
    seatsAvailable: 16
  },
  {
    id: 'fl4',
    airline: 'JetBlue',
    logo: 'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg',
    flightNo: 'B6 624',
    departure: {
      city: 'New York',
      code: 'JFK',
      time: '15:45',
      date: '10 Jul 2025'
    },
    arrival: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '19:05',
      date: '10 Jul 2025'
    },
    duration: '5h 20m',
    stops: 0,
    price: 304,
    amenities: ['wifi', 'power', 'meals'],
    seatsAvailable: 5
  },
  {
    id: 'fl5',
    airline: 'Southwest',
    logo: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg',
    flightNo: 'WN 2175',
    departure: {
      city: 'New York',
      code: 'EWR',
      time: '17:10',
      date: '10 Jul 2025'
    },
    arrival: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '20:40',
      date: '10 Jul 2025'
    },
    duration: '5h 30m',
    stops: 1,
    stopCity: 'Denver (DEN)',
    stopDuration: '1h 05m',
    price: 276,
    amenities: ['wifi'],
    seatsAvailable: 22
  }
];

function FlightCard({ flight }: { flight: any }) {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 rounded-full overflow-hidden relative">
              <Image 
                src={flight.logo}
                alt={flight.airline}
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div>
              <p className="font-medium">{flight.airline}</p>
              <p className="text-sm text-gray-500">{flight.flightNo}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl text-blue-600">${flight.price}</p>
            <p className="text-sm text-gray-500">per person</p>
          </div>
        </div>

        <div className="p-4 grid grid-cols-12 gap-2 items-center">
          {/* Departure */}
          <div className="col-span-3 md:col-span-3">
            <p className="font-bold text-lg">{flight.departure.time}</p>
            <p className="text-sm font-medium">{flight.departure.code}</p>
            <p className="text-xs text-gray-500">{flight.departure.date}</p>
          </div>

          {/* Flight path visualization */}
          <div className="col-span-6 md:col-span-6 px-2">
            <div className="flex items-center justify-between">
              <Plane className="h-4 w-4 text-gray-400" />
              <div className="flex-1 mx-2 relative">
                <div className="border-t border-dashed border-gray-300"></div>
                {flight.stops > 0 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                )}
              </div>
              <PlaneDown className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex justify-between mt-1">
              <div className="text-xs text-gray-500">
                {flight.duration}
              </div>
              <div className="text-xs text-gray-500">
                {flight.stops === 0 ? (
                  <span className="text-green-600 font-medium">Direct</span>
                ) : (
                  <span>{flight.stops} Stop</span>
                )}
              </div>
            </div>
            
            {flight.stops > 0 && (
              <div className="text-xs text-gray-500 text-center mt-1">
                {flight.stopCity} ({flight.stopDuration})
              </div>
            )}
          </div>

          {/* Arrival */}
          <div className="col-span-3 md:col-span-3 text-right">
            <p className="font-bold text-lg">{flight.arrival.time}</p>
            <p className="text-sm font-medium">{flight.arrival.code}</p>
            <p className="text-xs text-gray-500">{flight.arrival.date}</p>
          </div>
        </div>

        <div className="px-4 pb-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-3 text-xs text-gray-600">
            {flight.amenities.includes('wifi') && (
              <span className="flex items-center">
                <Wifi className="h-3 w-3 mr-1" />
                WiFi
              </span>
            )}
            {flight.amenities.includes('power') && (
              <span className="flex items-center">
                <Plug className="h-3 w-3 mr-1" />
                Power
              </span>
            )}
            {flight.amenities.includes('meals') && (
              <span className="flex items-center">
                <Coffee className="h-3 w-3 mr-1" />
                Meals
              </span>
            )}
          </div>
          
          <div className="flex items-center mt-2 sm:mt-0">
            <p className="text-xs text-gray-500 mr-3">
              {flight.seatsAvailable} seats left
            </p>
            <Button>Select</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Flights() {
  const [sortBy, setSortBy] = useState("price");
  const [priceRange, setPriceRange] = useState([500]);
  const [filteredFlights, setFilteredFlights] = useState(flights);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search section with background */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Find Flights</h1>
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="grid grid-cols-3 w-full h-auto bg-white/20 backdrop-blur-sm rounded-t-xl overflow-hidden mb-0">
                <TabsTrigger 
                  value="search"
                  className="py-3 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
                >
                  Search
                </TabsTrigger>
                <TabsTrigger 
                  value="schedule"
                  className="py-3 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
                >
                  Flight Schedule
                </TabsTrigger>
                <TabsTrigger 
                  value="status"
                  className="py-3 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
                >
                  Flight Status
                </TabsTrigger>
              </TabsList>
              
              <Card className="border-none shadow-lg rounded-b-xl rounded-tr-xl">
                <TabsContent value="search" className="m-0">
                  <FlightSearch />
                </TabsContent>
                <TabsContent value="schedule" className="m-0">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Flight Schedule</h3>
                    <p className="text-gray-500 mb-4">Check the schedule of flights between cities.</p>
                    {/* Schedule search form would go here */}
                  </div>
                </TabsContent>
                <TabsContent value="status" className="m-0">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Flight Status</h3>
                    <p className="text-gray-500 mb-4">Check the status of a flight by flight number.</p>
                    {/* Status search form would go here */}
                  </div>
                </TabsContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Results section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </h3>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    <RotateCw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                </div>

                {/* Price filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price</h4>
                  <div className="space-y-2">
                    <Slider
                      defaultValue={[500]}
                      max={1000}
                      step={10}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">$0</span>
                      <span className="text-sm font-medium">${priceRange[0]}</span>
                      <span className="text-sm text-gray-500">$1000</span>
                    </div>
                  </div>
                </div>

                {/* Stops filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Stops</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="direct" />
                      <Label htmlFor="direct" className="ml-2 text-sm">Direct</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="1stop" />
                      <Label htmlFor="1stop" className="ml-2 text-sm">1 Stop</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="2stops" />
                      <Label htmlFor="2stops" className="ml-2 text-sm">2+ Stops</Label>
                    </div>
                  </div>
                </div>

                {/* Airlines filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Airlines</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="delta" />
                      <Label htmlFor="delta" className="ml-2 text-sm">Delta Airlines</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="american" />
                      <Label htmlFor="american" className="ml-2 text-sm">American Airlines</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="united" />
                      <Label htmlFor="united" className="ml-2 text-sm">United Airlines</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="jetblue" />
                      <Label htmlFor="jetblue" className="ml-2 text-sm">JetBlue</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="southwest" />
                      <Label htmlFor="southwest" className="ml-2 text-sm">Southwest</Label>
                    </div>
                  </div>
                </div>

                {/* Times filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Departure Time</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="morning" />
                      <Label htmlFor="morning" className="ml-2 text-sm">Morning (6AM - 12PM)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="afternoon" />
                      <Label htmlFor="afternoon" className="ml-2 text-sm">Afternoon (12PM - 6PM)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="evening" />
                      <Label htmlFor="evening" className="ml-2 text-sm">Evening (6PM - 12AM)</Label>
                    </div>
                  </div>
                </div>

                {/* Amenities filter */}
                <div>
                  <h4 className="font-medium mb-3">Amenities</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="wifi" />
                      <Label htmlFor="wifi" className="ml-2 text-sm">WiFi</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="power" />
                      <Label htmlFor="power" className="ml-2 text-sm">Power Outlets</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="meals" />
                      <Label htmlFor="meals" className="ml-2 text-sm">Meals</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results listing */}
          <div className="lg:w-3/4">
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <p className="text-gray-600 mb-3 sm:mb-0">
                    <span className="font-medium">{filteredFlights.length}</span> flights found
                  </p>
                  <div className="flex items-center">
                    <Label htmlFor="sort" className="mr-2 text-sm">Sort by:</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort" className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price">Price: Low to High</SelectItem>
                        <SelectItem value="pricehigh">Price: High to Low</SelectItem>
                        <SelectItem value="duration">Duration: Shortest</SelectItem>
                        <SelectItem value="departure">Departure: Earliest</SelectItem>
                        <SelectItem value="arrival">Arrival: Earliest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flight results */}
            {filteredFlights.map(flight => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}