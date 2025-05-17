"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

export default function HolidaySearch() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [duration, setDuration] = useState("7");
  const [travelers, setTravelers] = useState({
    adults: 2,
    children: 0
  });
  const [travelersOpen, setTravelersOpen] = useState(false);

  const handleSearch = () => {
    router.push(`/holidays/search?from=${from}&destination=${destination}&startDate=${startDate?.toISOString()}&duration=${duration}&adults=${travelers.adults}&children=${travelers.children}`);
  };

  const updateTraveler = (type: 'adults' | 'children', increment: boolean) => {
    setTravelers(prev => {
      const newCount = increment ? prev[type] + 1 : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1);
      return { ...prev, [type]: newCount };
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col space-y-4">
        {/* From */}
        <div className="relative">
          <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white">
            <MapPin className="h-4 w-4 ml-3 text-gray-400" />
            <Input 
              placeholder="Enter your city or nearest airport" 
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500">
            FROM
          </Label>
        </div>

        {/* Destination */}
        <div className="relative">
          <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white">
            <MapPin className="h-4 w-4 ml-3 text-gray-400" />
            <Input 
              placeholder="Search destinations or packages" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500">
            DESTINATION
          </Label>
        </div>

        {/* Date and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Start Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
              WHEN
            </Label>
          </div>

          <div className="relative">
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="3">3 Nights / 4 Days</SelectItem>
                <SelectItem value="4">4 Nights / 5 Days</SelectItem>
                <SelectItem value="5">5 Nights / 6 Days</SelectItem>
                <SelectItem value="7">7 Nights / 8 Days</SelectItem>
                <SelectItem value="10">10 Nights / 11 Days</SelectItem>
                <SelectItem value="14">14 Nights / 15 Days</SelectItem>
              </SelectContent>
            </Select>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
              DURATION
            </Label>
          </div>
        </div>

        {/* Travelers */}
        <div className="relative">
          <Popover open={travelersOpen} onOpenChange={setTravelersOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full justify-start h-10 font-normal"
              >
                <Users className="mr-2 h-4 w-4" />
                <span>
                  {travelers.adults} {travelers.adults === 1 ? "Adult" : "Adults"}
                  {travelers.children > 0 && `, ${travelers.children} ${travelers.children === 1 ? "Child" : "Children"}`}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Adults</h4>
                    <p className="text-sm text-gray-500">12+ years</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateTraveler('adults', false)}
                      disabled={travelers.adults <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{travelers.adults}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateTraveler('adults', true)}
                      disabled={travelers.adults >= 10}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Children</h4>
                    <p className="text-sm text-gray-500">2-11 years</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateTraveler('children', false)}
                      disabled={travelers.children <= 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{travelers.children}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateTraveler('children', true)}
                      disabled={travelers.children >= 6}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full mt-2"
                  onClick={() => setTravelersOpen(false)}
                >
                  Done
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
            TRAVELERS
          </Label>
        </div>

        {/* Search Button */}
        <Button 
          className="bg-orange-500 hover:bg-orange-600 h-12 mt-4"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-5 w-5" />
          Search Holiday Packages
        </Button>
      </div>
    </div>
  );
}