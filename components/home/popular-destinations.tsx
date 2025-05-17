import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

type DestinationProps = {
  image: string;
  name: string;
  country: string;
  attractions: number;
  hotels: number;
  price: number;
  link: string;
};

const destinations: DestinationProps[] = [
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    name: 'Bali',
    country: 'Indonesia',
    attractions: 124,
    hotels: 567,
    price: 499,
    link: '/destinations/bali'
  },
  {
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
    name: 'Paris',
    country: 'France',
    attractions: 215,
    hotels: 893,
    price: 649,
    link: '/destinations/paris'
  },
  {
    image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg',
    name: 'Santorini',
    country: 'Greece',
    attractions: 78,
    hotels: 342,
    price: 589,
    link: '/destinations/santorini'
  },
  {
    image: 'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg',
    name: 'New York',
    country: 'USA',
    attractions: 287,
    hotels: 1245,
    price: 799,
    link: '/destinations/new-york'
  },
  {
    image: 'https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg',
    name: 'Tokyo',
    country: 'Japan',
    attractions: 198,
    hotels: 756,
    price: 749,
    link: '/destinations/tokyo'
  },
  {
    image: 'https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg',
    name: 'Dubai',
    country: 'UAE',
    attractions: 143,
    hotels: 678,
    price: 599,
    link: '/destinations/dubai'
  }
];

function DestinationCard({ image, name, country, attractions, hotels, price, link }: DestinationProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{country}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="font-bold text-lg text-blue-600">${price}</p>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{attractions} Attractions</span>
          <span>{hotels} Hotels</span>
        </div>
        
        <Link href={link}>
          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
            View Packages
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function PopularDestinations() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Popular Destinations</h2>
            <p className="text-gray-600 mt-1">Explore our most sought-after vacation spots</p>
          </div>
          <Link href="/destinations">
            <Button variant="outline" className="border-blue-600 text-blue-600">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}