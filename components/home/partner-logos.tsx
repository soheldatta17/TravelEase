export default function PartnerLogos() {
  return (
    <section className="py-8 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-gray-500 font-medium">TRUSTED BY LEADING TRAVEL PARTNERS</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {/* These would typically be images, but for this example we'll use text */}
          <div className="text-lg font-bold text-gray-400 hover:text-gray-700 transition-colors">
            AirlineName
          </div>
          <div className="text-lg font-bold text-gray-400 hover:text-gray-700 transition-colors">
            HotelBrand
          </div>
          <div className="text-lg font-bold text-gray-400 hover:text-gray-700 transition-colors">
            TravelCorp
          </div>
          <div className="text-lg font-bold text-gray-400 hover:text-gray-700 transition-colors">
            TourOperator
          </div>
          <div className="text-lg font-bold text-gray-400 hover:text-gray-700 transition-colors">
            RentalCars
          </div>
          <div className="text-lg font-bold text-gray-400 hover:text-gray-700 transition-colors">
            InsuranceCo
          </div>
        </div>
      </div>
    </section>
  );
}