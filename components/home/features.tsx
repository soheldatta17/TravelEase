import { 
  ShieldCheck, Clock, CreditCard, Headphones, 
  MapPin, BadgePercent 
} from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Secure Booking",
    description: "Your payments and personal information are always protected"
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Fast & Easy Booking",
    description: "Book your trip in minutes with our streamlined process"
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "No Hidden Charges",
    description: "We're transparent about costs with no surprise fees"
  },
  {
    icon: <Headphones className="h-8 w-8 text-blue-600" />,
    title: "24/7 Support",
    description: "Our travel experts are always ready to help whenever you need"
  },
  {
    icon: <MapPin className="h-8 w-8 text-blue-600" />,
    title: "10,000+ Destinations",
    description: "Explore a wide variety of destinations around the world"
  },
  {
    icon: <BadgePercent className="h-8 w-8 text-blue-600" />,
    title: "Best Price Guarantee",
    description: "We match any lower price you find elsewhere"
  }
];

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="p-2 mb-4 rounded-full bg-blue-50">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Why Choose TravelEase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making your travel experience as seamless and enjoyable as possible.
            Here's what sets us apart from other travel sites.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}