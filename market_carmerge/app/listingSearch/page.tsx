'use client';

import React, { useState, useEffect } from 'react';
import { Search, Car, MapPin, Fuel, Gauge, DollarSign, Filter, Calendar, Settings, Tag, Star, ArrowUpDown } from 'lucide-react';
import { marketplaceListings, premiumListings, makes, fuelTypes, bodyTypes, sortOptions, MarketplaceCar, PremiumCar } from '../data/carData';
import Link from 'next/link';

interface Filters {
  make: string;
  model: string;
  location: string;
  fuelType: string;
  bodyType: string;
  minYear: string;
  maxPrice: string;
}

const CarMerge = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    make: '',
    model: '',
    location: '',
    fuelType: '',
    bodyType: '',
    minYear: '',
    maxPrice: ''
  });
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const filterAndSortListings = (listings: MarketplaceCar[] | PremiumCar[], isPremium: boolean) => {
    return listings.filter(car => {
      const searchMatch = 
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.location.toLowerCase().includes(searchTerm.toLowerCase());

      const filterMatches = 
        (!filters.make || car.make === filters.make) &&
        (!filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
        (!filters.location || car.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.bodyType || car.bodyType === filters.bodyType) &&
        (!filters.minYear || car.year >= parseInt(filters.minYear));

      // Additional filter for marketplace cars
      if (!isPremium) {
        const marketplaceCar = car as MarketplaceCar;
        if (filters.fuelType && marketplaceCar.engine.type !== filters.fuelType) return false;
        if (filters.maxPrice && marketplaceCar.price > parseInt(filters.maxPrice)) return false;
      }

      return searchMatch && filterMatches;
    }).sort((a, b) => {
      let aValue: any;
      let bValue: any;

      if (selectedSort.value.startsWith('price')) {
        aValue = isPremium 
          ? parseInt((a as PremiumCar).price.replace(/[^0-9]/g, ''))
          : (a as MarketplaceCar).price;
        bValue = isPremium
          ? parseInt((b as PremiumCar).price.replace(/[^0-9]/g, ''))
          : (b as MarketplaceCar).price;
      } else {
        const field = selectedSort.value.split('_')[0];
        aValue = isPremium 
          ? (a as any)[field]
          : (a as MarketplaceCar)[field as keyof MarketplaceCar];
        bValue = isPremium
          ? (b as any)[field]
          : (b as MarketplaceCar)[field as keyof MarketplaceCar];
      }

      return selectedSort.ascending ? 
        (aValue > bValue ? 1 : -1) :
        (aValue < bValue ? 1 : -1);
    });
  };

  const filteredMarketplace = filterAndSortListings(marketplaceListings, false);
  const filteredPremium = filterAndSortListings(premiumListings, true);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by make, model, or location..."
              className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <ArrowUpDown className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              className="bg-gray-800 rounded-lg pl-8 pr-4 py-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none appearance-none"
              value={sortOptions.findIndex(opt => opt.value === selectedSort.value)}
              onChange={(e) => setSelectedSort(sortOptions[parseInt(e.target.value)])}
            >
              {sortOptions.map((option, index) => (
                <option key={option.value} value={index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Bars */}
        <div className="max-w-6xl mx-auto mb-6 grid grid-cols-7 gap-4">
          <div className="relative">
            <Car className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <select
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.make}
              onChange={(e) => setFilters({ ...filters, make: e.target.value })}
            >
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Settings className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Model"
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.model}
              onChange={(e) => setFilters({ ...filters, model: e.target.value })}
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Location"
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>

          <div className="relative">
            <Fuel className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <select
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.fuelType}
              onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
            >
              <option value="">All Fuel Types</option>
              {fuelTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Tag className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <select
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.bodyType}
              onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}
            >
              <option value="">All Body Types</option>
              {bodyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Calendar className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="number"
              placeholder="Min Year"
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.minYear}
              onChange={(e) => setFilters({ ...filters, minYear: e.target.value })}
            />
          </div>

          <div className="relative">
            <DollarSign className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="number"
              placeholder="Max Price"
              className="bg-gray-800 rounded p-2 pl-8 text-sm w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          Found {filteredMarketplace.length + filteredPremium.length} listings
        </div>

        {/* Car Listings */}
        <div className="max-w-6xl mx-auto">
          {/* Premium Listings */}
          {filteredPremium.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Premium Listings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPremium.map((car) => (
                  <Link href={`/listing/${car.id}`} key={car.id} className="block">
                    <div className="bg-gray-800 rounded-lg overflow-hidden border border-yellow-500/50 hover:border-yellow-500 transition-colors h-full">
                      <div className="flex">
                        <div className="w-1/2">
                          <div className="relative h-full">
                            <img
                              src="/premium-placeholder.jpg"
                              alt={`${car.make} ${car.model}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">
                              {car.marketplace}
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-1/2 p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-white">
                              {car.make} {car.model}
                            </h3>
                            <div className="text-sm font-medium text-yellow-400 mb-2">
                              <Calendar className="inline-block w-4 h-4 mr-1" />
                              {car.year}
                            </div>
                            
                            <div className="space-y-2 text-sm text-gray-300">
                              <div className="flex items-center gap-1">
                                <Gauge className="w-4 h-4 text-gray-400" />
                                <span>{car.mileage}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>{car.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4 text-gray-400" />
                                <span>{car.bodyType}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <span className="text-xl font-bold text-yellow-500">
                              {car.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Marketplace Listings */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Marketplace Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredMarketplace.map((car) => (
                <Link href={`/listing/${car.id}`} key={car.id} className="block">
                  <div className="bg-gray-800 rounded-lg overflow-hidden border border-blue-500/50 hover:border-blue-500 transition-colors h-full">
                    <div className="flex">
                      <div className="w-1/2">
                        <div className="relative h-full">
                          <img
                            src={car.imageUrl}
                            alt={`${car.make} ${car.model}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">
                            {car.marketplace}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-1/2 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-white">
                            {car.make} {car.model}
                          </h3>
                          <div className="text-sm font-medium text-blue-400 mb-2">
                            <Calendar className="inline-block w-4 h-4 mr-1" />
                            {car.year}
                          </div>
                          
                          <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                              <Gauge className="w-4 h-4 text-gray-400" />
                              <span>{car.mileage.toLocaleString()} km</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Settings className="w-4 h-4 text-gray-400" />
                              <span>{car.engine.size} {car.engine.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Fuel className="w-4 h-4 text-gray-400" />
                              <span>{car.transmission}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Tag className="w-4 h-4 text-gray-400" />
                              <span>{car.bodyType}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <span className="text-xl font-bold text-blue-500">
                            {car.price.toLocaleString()} €
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarMerge;