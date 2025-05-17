"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";

export default function HotelSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0]);
  const [rooms, setRooms] = useState({
    adults: 2,
    children: 0,
    rooms: 1
  });

  const handleSearch = () => {
    // In a real app, we would navigate to the search results page with query params
    router.push(`/hotels/search?location=${location}&checkIn=${checkIn?.toISOString()}&checkOut=${checkOut?.toISOString()}&adults=${rooms.adults}&children=${rooms.children}&rooms=${rooms.rooms}&maxPrice=${priceRange[0]}`);
  };

  const updateRoom = (type: 'adults' | 'children' | 'rooms', increment: boolean) => {
    setRooms(prev => {
      const newCount = increment ? prev[type] + 1 : Math.max(type === 'rooms' || type === 'adults' ? 1 : 0, prev[type] - 1);
      return { ...prev, [type]: newCount };
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col space-y-4">
        {/* Location */}
        <div className="relative">
          <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white">
            <MapPin className="h-4 w-4 ml-3 text-gray-400" />
            <Input 
              placeholder="Enter city, location or hotel name" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500">
            CITY, LOCATION OR HOTEL
          </Label>
        </div>

        {/* Check-in and Check-out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : <span>Check-in Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
              CHECK-IN
            </Label>
          </div>

          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    !checkOut && "text-muted-foreground"
                  )}
                  disabled={!checkIn}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : <span>Check-out Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={{ 
                    before: checkIn || new Date() 
                  }}
                />
              </PopoverContent>
            </Popover>
            <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
              CHECK-OUT
            </Label>
          </div>
        </div>

        {/* Rooms & Guests */}
        <div className="relative">
          <Popover open={roomsOpen} onOpenChange={setRoomsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full justify-start h-10 font-normal"
              >
                <Users className="mr-2 h-4 w-4" />
                <span>
                  {rooms.rooms} {rooms.rooms === 1 ? "Room" : "Rooms"},&nbsp;
                  {rooms.adults} {rooms.adults === 1 ? "Adult" : "Adults"}
                  {rooms.children > 0 && `, ${rooms.children} ${rooms.children === 1 ? "Child" : "Children"}`}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Rooms</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateRoom('rooms', false)}
                      disabled={rooms.rooms <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{rooms.rooms}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateRoom('rooms', true)}
                      disabled={rooms.rooms >= 5}
                    >
                      +
                    </Button>
                  </div>
                </div>

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
                      onClick={() => updateRoom('adults', false)}
                      disabled={rooms.adults <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{rooms.adults}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateRoom('adults', true)}
                      disabled={rooms.adults >= 10}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Children</h4>
                    <p className="text-sm text-gray-500">0-11 years</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateRoom('children', false)}
                      disabled={rooms.children <= 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{rooms.children}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => updateRoom('children', true)}
                      disabled={rooms.children >= 6}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full mt-2"
                  onClick={() => setRoomsOpen(false)}
                >
                  Done
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-500 z-10">
            ROOMS & GUESTS
          </Label>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <Label>
            Price per night: ${priceRange[0]}
          </Label>
          <Slider
            defaultValue={[200]}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>

        {/* Search Button */}
        <Button 
          className="bg-orange-500 hover:bg-orange-600 h-12 mt-4"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-5 w-5" />
          Search Hotels
        </Button>
      </div>
    </div>
  );
}