import { Button } from "@/components/ui/button";
import { QrCode, Phone, CheckCircle } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download Our Mobile App
            </h2>
            <p className="text-white/80 mb-6 max-w-md">
              Get exclusive mobile-only deals and manage your bookings on the go.
              Our app makes travel planning even easier!
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white" />
                <span>Exclusive app-only discounts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white" />
                <span>Real-time flight updates and notifications</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white" />
                <span>Offline access to itineraries and bookings</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white" />
                <span>24/7 in-app customer support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-900 text-white">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9,19.9l-5.4,3c-0.4,0.2-0.8,0.3-1.2,0.3c-0.4,0-0.8-0.1-1.1-0.3l-5.5-3C3.9,19.2,3.5,18,3.5,17v-10 c0-1,0.4-2.2,1.3-2.9l5.5-3C10.6,0.9,11,0.8,11.3,0.8c0.4,0,0.8,0.1,1.2,0.3l5.4,3c0.8,0.7,1.3,1.9,1.3,2.9v10 C19.2,18,18.8,19.2,17.9,19.9z M9.5,17.1l7.2-5.4V9.4L9.5,7.5V17.1z"></path>
                </svg>
                Google Play
              </Button>
              <Button className="bg-black hover:bg-gray-900 text-white">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22,17.3c-0.4,1-0.9,1.9-1.6,2.8c-1,1.3-2.1,1.9-3.3,1.9c-0.8,0-1.8-0.2-3-0.7c-1.2-0.5-2.3-0.7-3.1-0.7 c-0.9,0-2,0.2-3.2,0.7c-1.2,0.5-2.1,0.7-2.8,0.7c-1.3,0-2.6-0.7-3.7-2.1c-2.1-2.8-3.1-6.2-3.1-10.2c0-3.3,0.8-6,2.5-7.9 C2,0.1,3.5-0.6,5.3-0.6c1,0,2.2,0.3,3.7,0.8C10.2,0.7,11,1,11.5,1c0.4,0,1.2-0.2,2.3-0.7s2.4-0.7,3.6-0.7c1.5,0,2.9,0.4,4.1,1.2 c0.7,0.5,1.3,1.1,1.9,1.8C21,5.5,19.9,7.6,19.9,10c0,2.4,1,4.5,3,6.2C22.5,16.6,22.3,16.9,22,17.3z M16.9-6.8 c0,0.1,0,0.2,0,0.3c0,0.8-0.2,1.7-0.6,2.6c-0.4,1-1,1.8-1.7,2.4c-0.7,0.5-1.3,0.8-2,0.9c0-1.2,0.3-2.4,1-3.5 C13.9-5.3,15.2-6.3,16.9-6.8z"></path>
                </svg>
                App Store
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
              <QrCode className="h-32 w-32 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Scan to Download</h3>
              <p className="text-sm text-gray-600">
                Scan this QR code with your phone camera to download our app
              </p>
              <div className="mt-4 py-2 px-3 bg-blue-50 rounded-md flex items-center justify-center">
                <Phone className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm text-blue-600 font-medium">
                  Available for iOS and Android
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}