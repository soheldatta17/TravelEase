"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Badge } from "@/components/ui/badge";
import { Star, Filter, RotateCw, Wifi, Utensils, Minimize as Swimming, Car, Dumbbell, Heart, MapPin, Search } from "lucide-react";
import HotelSearch from "@/components/home/hotel-search";

// Sample hotel data
const hotels = [
  {
    id: 'ht1',
    name: 'Grand Plaza Hotel',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    location: 'Downtown, New York',
    stars: 5,
    rating: 4.8,
    reviews: 2456,
    price: 299,
    perNight: true,
    discount: 15,
    amenities: ['wifi', 'pool', 'restaurant', 'gym', 'parking'],
    promoted: true
  },
  {
    id: 'ht2',
    name: 'Ocean View Resort',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    location: 'Beachfront, Miami',
    stars: 4,
    rating: 4.5,
    reviews: 1876,
    price: 249,
    perNight: true,
    discount: 0,
    amenities: ['wifi', 'pool', 'restaurant', 'parking'],
    promoted: false
  },
  {
    id: 'ht3',
    name: 'City Lights Inn',
    image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
    location: 'Midtown, Chicago',
    stars: 3,
    rating: 4.2,
    reviews: 987,
    price: 179,
    perNight: true,
    discount: 0,
    amenities: ['wifi', 'restaurant'],
    promoted: false
  },
  {
    id: 'ht4',
    name: 'Mountain View Lodge',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    location: 'Rocky Mountains, Colorado',
    stars: 4,
    rating: 4.7,
    reviews: 1254,
    price: 269,
    perNight: true,
    discount: 10,
    amenities: ['wifi', 'restaurant', 'gym', 'parking'],
    promoted: false
  },
  {
    id: 'ht5',
    name: 'Sunset Bay Resort',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    location: 'Coastal, California',
    stars: 5,
    rating: 4.9,
    reviews: 3128,
    price: 349,
    perNight: true,
    discount: 0,
    amenities: ['wifi', 'pool', 'restaurant', 'gym', 'parking'],
    promoted: true
  }
];

function HotelCard({ hotel }: { hotel: any }) {
  return (
    <Card className="mb-6 overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Hotel Image */}
          <div className="relative w-full md:w-72 h-48 md:h-auto">
            <Image 
              src={hotel.image} 
              alt={hotel.name}
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 rounded-full h-8 w-8"
            >
              <Heart className="h-5 w-5" />
            </Button>
            {hotel.promoted && (
              <Badge className="absolute top-2 left-2 bg-blue-600">
                Featured
              </Badge>
            )}
          </div>
          
          {/* Hotel Details */}
          <div className="flex-1 p-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="font-bold text-lg">{hotel.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  {hotel.location}
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < hotel.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">{hotel.rating}/5</span>
                    <span className="text-gray-500 ml-1">
                      ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {hotel.amenities.includes('wifi') && (
                    <Badge variant="outline" className="text-xs bg-gray-50 flex items-center">
                      <Wifi className="h-3 w-3 mr-1" />
                      WiFi
                    </Badge>
                  )}
                  {hotel.amenities.includes('pool') && (
                    <Badge variant="outline" className="text-xs bg-gray-50 flex items-center">
                      <Swimming className="h-3 w-3 mr-1" />
                      Pool
                    </Badge>
                  )}
                  {hotel.amenities.includes('restaurant') && (
                    <Badge variant="outline" className="text-xs bg-gray-50 flex items-center">
                      <Utensils className="h-3 w-3 mr-1" />
                      Restaurant
                    </Badge>
                  )}
                  {hotel.amenities.includes('gym') && (
                    <Badge variant="outline" className="text-xs bg-gray-50 flex items-center">
                      <Dumbbell className="h-3 w-3 mr-1" />
                      Gym
                    </Badge>
                  )}
                  {hotel.amenities.includes('parking') && (
                    <Badge variant="outline" className="text-xs bg-gray-50 flex items-center">
                      <Car className="h-3 w-3 mr-1" />
                      Parking
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Price & Booking */}
              <div className="mt-3 md:mt-0 md:text-right">
                {hotel.discount > 0 && (
                  <div className="mb-1">
                    <span className="text-sm line-through text-gray-500">
                      ${Math.round(hotel.price / (1 - hotel.discount / 100))}
                    </span>
                    <Badge className="ml-2 bg-green-600">
                      {hotel.discount}% OFF
                    </Badge>
                  </div>
                )}
                <div className="font-bold text-2xl text-blue-600">
                  ${hotel.price}
                  <span className="text-sm font-normal text-gray-500">
                    {hotel.perNight ? '/night' : ''}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Includes taxes & fees
                </p>
                <Button className="w-full md:w-auto">
                  View Deal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Hotels() {
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState([500]);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search section with background */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Find Hotels</h1>
            <Tabs defaultValue="hotels" className="w-full">
              <TabsList className="grid grid-cols-2 w-full h-auto bg-white/20 backdrop-blur-sm rounded-t-xl overflow-hidden mb-0">
                <TabsTrigger 
                  value="hotels"
                  className="py-3 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
                >
                  Hotels
                </TabsTrigger>
                <TabsTrigger 
                  value="homes"
                  className="py-3 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all"
                >
                  Vacation Homes & Apartments
                </TabsTrigger>
              </TabsList>
              
              <Card className="border-none shadow-lg rounded-b-xl rounded-tr-xl">
                <TabsContent value="hotels" className="m-0">
                  <HotelSearch />
                </TabsContent>
                <TabsContent value="homes" className="m-0">
                  <HotelSearch />
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

                {/* Search filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Search</h4>
                  <div className="space-y-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                      <Input placeholder="Hotel name" className="pl-8" />
                    </div>
                  </div>
                </div>

                {/* Price filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price per night</h4>
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

                {/* Star Rating filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Star Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <Checkbox id={`star-${rating}`} />
                        <Label htmlFor={`star-${rating}`} className="ml-2 flex">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Rating filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Guest Rating</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="rating-excellent" />
                      <Label htmlFor="rating-excellent" className="ml-2 text-sm">Excellent (4.5+)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="rating-verygood" />
                      <Label htmlFor="rating-verygood" className="ml-2 text-sm">Very Good (4.0+)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="rating-good" />
                      <Label htmlFor="rating-good" className="ml-2 text-sm">Good (3.5+)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="rating-fair" />
                      <Label htmlFor="rating-fair" className="ml-2 text-sm">Fair (3.0+)</Label>
                    </div>
                  </div>
                </div>

                {/* Amenities filter */}
                <div>
                  <h4 className="font-medium mb-3">Amenities</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="amenity-wifi" />
                      <Label htmlFor="amenity-wifi" className="ml-2 text-sm">WiFi</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="amenity-pool" />
                      <Label htmlFor="amenity-pool" className="ml-2 text-sm">Swimming Pool</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="amenity-parking" />
                      <Label htmlFor="amenity-parking" className="ml-2 text-sm">Parking</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="amenity-restaurant" />
                      <Label htmlFor="amenity-restaurant" className="ml-2 text-sm">Restaurant</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="amenity-gym" />
                      <Label htmlFor="amenity-gym" className="ml-2 text-sm">Fitness Center</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="amenity-spa" />
                      <Label htmlFor="amenity-spa" className="ml-2 text-sm">Spa</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="amenity-ac" />
                      <Label htmlFor="amenity-ac" className="ml-2 text-sm">Air Conditioning</Label>
                    </div>
                    <Button variant="link" className="text-sm p-0">Show more</Button>
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
                    <span className="font-medium">{filteredHotels.length}</span> properties found
                  </p>
                  <div className="flex items-center">
                    <Label htmlFor="sort" className="mr-2 text-sm">Sort by:</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort" className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price">Price: Low to High</SelectItem>
                        <SelectItem value="pricehigh">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Guest Rating</SelectItem>
                        <SelectItem value="stars">Star Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel results */}
            {filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}