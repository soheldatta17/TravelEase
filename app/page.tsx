import Hero from '@/components/home/hero';
import OffersSection from '@/components/home/offers-section';
import PopularDestinations from '@/components/home/popular-destinations';
import Features from '@/components/home/features';
import Testimonials from '@/components/home/testimonials';
import PartnerLogos from '@/components/home/partner-logos';
import DownloadApp from '@/components/home/download-app';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <OffersSection />
      <PopularDestinations />
      <Features />
      <Testimonials />
      <DownloadApp />
    </>
  );
}