"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Users, ArrowRightLeft, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

export default function FlightSearch() {
  const router = useRouter();
  const [tripType, setTripType] = useState("roundTrip");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengersOpen, setPassengersOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = () => {
    // In a real app, we would navigate to the search results page with query params
    router.push(`/flights/search?from=${fromCity}&to=${toCity}&depart=${departDate?.toISOString()}&return=${returnDate?.toISOString()}&adults=${passengers.adults}&children=${passengers.children}&infants=${passengers.infants}`);
  };

  const updatePassenger = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    setPassengers(prev => {
      const newCount = increment ? prev[type] + 1 : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1);
      return { ...prev, [type]: newCount };
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col space-y-4">
        {/* Trip Type Selection */}
        <RadioGroup
          defaultValue="roundTrip"
          className="flex space-x-4 mb-2"
          onValueChange={setTripType}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundTrip" id="roundTrip" />
            <Label htmlFor="roundTrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneWay" id="oneWay" />
            <Label htmlFor="oneWay">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multiCity" id="multiCity" />
            <Label htmlFor="multiCity">Multi City</Label>
          </div>
        </RadioGroup>

        {/* From and To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white">
              <MapPin className="h-4 w-4 ml-3 text-gray-400" />
              <Input 
                placeholder="From" 
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500">
              FROM
            </Label>
          </div>

          <div className="relative flex">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md"
              onClick={handleSwapCities}
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white w-full">
              <MapPin className="h-4 w-4 ml-3 text-gray-400" />
              <Input 
                placeholder="To" 
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500">
              TO
            </Label>
          </div>
        </div>

        {/* Date Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    !departDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {departDate ? format(departDate, "PPP") : <span>Departure Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={departDate}
                  onSelect={setDepartDate}
                  initialFocus
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
              DEPARTURE
            </Label>
          </div>

          {tripType === "roundTrip" && (
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-10",
                      !returnDate && "text-muted-foreground"
                    )}
                    disabled={!departDate}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "PPP") : <span>Return Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    disabled={{ 
                      before: departDate || new Date() 
                    }}
                  />
                </PopoverContent>
              </Popover>
              <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
                RETURN
              </Label>
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className="relative">
          <Popover open={passengersOpen} onOpenChange={setPassengersOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full justify-start h-10 font-normal"
              >
                <Users className="mr-2 h-4 w-4" />
                <span>
                  {passengers.adults} {passengers.adults === 1 ? "Adult" : "Adults"}
                  {passengers.children > 0 && `, ${passengers.children} ${passengers.children === 1 ? "Child" : "Children"}`}
                  {passengers.infants > 0 && `, ${passengers.infants} ${passengers.infants === 1 ? "Infant" : "Infants"}`}
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
                      onClick={() => updatePassenger('adults', false)}
                      disabled={passengers.adults <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.adults}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updatePassenger('adults', true)}
                      disabled={passengers.adults + passengers.children + passengers.infants >= 9}
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
                      onClick={() => updatePassenger('children', false)}
                      disabled={passengers.children <= 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.children}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updatePassenger('children', true)}
                      disabled={passengers.adults + passengers.children + passengers.infants >= 9}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Infants</h4>
                    <p className="text-sm text-gray-500">Below 2 years</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updatePassenger('infants', false)}
                      disabled={passengers.infants <= 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.infants}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updatePassenger('infants', true)}
                      disabled={passengers.infants >= passengers.adults || passengers.adults + passengers.children + passengers.infants >= 9}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full mt-2"
                  onClick={() => setPassengersOpen(false)}
                >
                  Done
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
            TRAVELERS & CLASS
          </Label>
        </div>

        {/* Search Button */}
        <Button 
          className="bg-orange-500 hover:bg-orange-600 h-12 mt-4"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-5 w-5" />
          Search Flights
        </Button>
      </div>
    </div>
  );
}