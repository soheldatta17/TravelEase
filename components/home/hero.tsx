import Image from 'next/image';
import SearchTabs from '@/components/home/search-tabs';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg"
          alt="Travel background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/70 to-blue-900/70 backdrop-blur-[2px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Journey Begins Here
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover amazing deals on flights, hotels, and holiday packages. 
            Book your perfect trip with confidence.
          </p>
        </div>
        
        <SearchTabs />
      </div>
    </div>
  );
}