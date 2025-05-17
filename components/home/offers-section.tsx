import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

type OfferCardProps = {
  image: string;
  title: string;
  description: string;
  code: string;
  expiryDate: string;
  type: 'flight' | 'hotel' | 'holiday' | 'general';
  link: string;
};

function OfferCard({ image, title, description, code, expiryDate, type, link }: OfferCardProps) {
  const typeBg = {
    flight: 'bg-blue-100 text-blue-800',
    hotel: 'bg-emerald-100 text-emerald-800',
    holiday: 'bg-amber-100 text-amber-800',
    general: 'bg-purple-100 text-purple-800',
  };

  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <Badge className={`absolute top-3 left-3 ${typeBg[type]}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold line-clamp-1 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">
            {code}
          </div>
          <span className="text-xs text-gray-500">Valid till {expiryDate}</span>
        </div>
        <Link href={link}>
          <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-8">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function OffersSection() {
  const offers: OfferCardProps[] = [
    {
      image: "https://images.pexels.com/photos/2937641/pexels-photo-2937641.jpeg",
      title: "Domestic Flights Offer",
      description: "Get up to 25% off on domestic flight bookings. No minimum booking amount required.",
      code: "FLYNOW25",
      expiryDate: "30 Jun",
      type: "flight",
      link: "/offers/domestic-flights"
    },
    {
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      title: "Luxury Hotel Deals",
      description: "Enjoy luxury stays at 30% off with complimentary breakfast and spa access.",
      code: "LUXSTAY30",
      expiryDate: "15 Jul",
      type: "hotel",
      link: "/offers/luxury-hotels"
    },
    {
      image: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg",
      title: "Beach Holiday Package",
      description: "Book beach holiday packages and get instant $100 cashback on min. spend of $500.",
      code: "BEACH100",
      expiryDate: "31 Jul",
      type: "holiday",
      link: "/offers/beach-holidays"
    },
    {
      image: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg",
      title: "International Flight Offer",
      description: "Flat 10% off on international flights to Europe, Asia, and Australia.",
      code: "INTFLY10",
      expiryDate: "15 Aug",
      type: "flight",
      link: "/offers/international-flights"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Best Offers & Discounts</h2>
            <p className="text-gray-600 mt-1">Handpicked deals for your perfect trip</p>
          </div>
          <Link href="/offers">
            <Button variant="outline" className="border-blue-600 text-blue-600">
              View All Offers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
}