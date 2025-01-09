'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { marketplaceListings, premiumListings, MarketplaceCar, PremiumCar } from '@/app/data/carData';
import { ArrowLeft, Calendar, DollarSign, Fuel, Gauge, MapPin, Settings, Tag, Tool } from 'lucide-react';
import Link from 'next/link';

export default function ListingDetailPage() {
  const params = useParams();
  const [listing, setListing] = useState<MarketplaceCar | PremiumCar | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const marketplaceListing = marketplaceListings.find(car => car.id === id);
    const premiumListing = premiumListings.find(car => car.id === id);

    if (marketplaceListing) {
      setListing(marketplaceListing);
      setIsPremium(false);
    } else if (premiumListing) {
      setListing(premiumListing);
      setIsPremium(true);
    }
  }, [params.id]);

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Link href="/listingSearch" className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to listings
          </Link>
        </div>
      </div>
    );
  }

  const isMarketplaceListing = 'engine' in listing;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/listingSearch" className="text-blue-500 hover:text-blue-400 flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </Link>

        <div className={`rounded-lg overflow-hidden border ${isPremium ? 'border-yellow-500' : 'border-blue-500'}`}>
          {/* Header */}
          <div className={`p-6 ${isPremium ? 'bg-yellow-500/10' : 'bg-blue-500/10'}`}>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{listing.make} {listing.model}</h1>
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {listing.year}
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {isMarketplaceListing 
                      ? `${(listing as MarketplaceCar).price.toLocaleString()} ${(listing as MarketplaceCar).currency}`
                      : (listing as PremiumCar).price
                    }
                  </span>
                </div>
              </div>
              <div className={`px-4 py-2 rounded ${isPremium ? 'bg-yellow-500' : 'bg-blue-500'} text-white`}>
                {listing.marketplace}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 grid grid-cols-2 gap-8">
            {/* Left Column - Image and Key Details */}
            <div className="space-y-6">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={isMarketplaceListing ? (listing as MarketplaceCar).imageUrl : '/api/placeholder/800/600'} 
                  alt={`${listing.make} ${listing.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Mileage</span>
                  </div>
                  <span className="text-lg">{listing.mileage}</span>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Body Type</span>
                  </div>
                  <span className="text-lg">{listing.bodyType}</span>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Location</span>
                  </div>
                  <span className="text-lg">{listing.location}</span>
                </div>

                {isMarketplaceListing && (
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-400">Transmission</span>
                    </div>
                    <span className="text-lg">{(listing as MarketplaceCar).transmission}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Technical Details */}
            <div className="space-y-6">
              {isMarketplaceListing ? (
                <>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Engine Details</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Engine Type</span>
                        <span>{(listing as MarketplaceCar).engine.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Engine Size</span>
                        <span>{(listing as MarketplaceCar).engine.size}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Power</span>
                        <span>{(listing as MarketplaceCar).engine.power}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Premium Features</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {(listing as PremiumCar).details}
                  </p>
                </div>
              )}

              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
