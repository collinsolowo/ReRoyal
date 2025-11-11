import { useState } from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { properties, Property } from '../data/properties';
import { FaFilter } from 'react-icons/fa';

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const handleFilter = (type: string, status: string, price: string) => {
    let filtered = properties;

    if (type !== 'all') {
      filtered = filtered.filter(p => p.type === type);
    }

    if (status !== 'all') {
      filtered = filtered.filter(p => p.status === status);
    }

    if (price !== 'all') {
      if (price === 'under-500m') {
        filtered = filtered.filter(p => p.price < 500000000);
      } else if (price === '500m-1b') {
        filtered = filtered.filter(p => p.price >= 500000000 && p.price < 1000000000);
      } else if (price === '1b-2b') {
        filtered = filtered.filter(p => p.price >= 1000000000 && p.price < 2000000000);
      } else if (price === 'over-2b') {
        filtered = filtered.filter(p => p.price >= 2000000000);
      }
    }

    setFilteredProperties(filtered);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    handleFilter(type, selectedStatus, priceRange);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    handleFilter(selectedType, status, priceRange);
  };

  const handlePriceChange = (price: string) => {
    setPriceRange(price);
    handleFilter(selectedType, selectedStatus, price);
  };

  const resetFilters = () => {
    setSelectedType('all');
    setSelectedStatus('all');
    setPriceRange('all');
    setFilteredProperties(properties);
  };

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="Luxury Properties"
        subtitle="Explore our exclusive collection of premium properties across Lagos"
        backgroundImage="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-6 mb-12 border border-reroyal-purple/20"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center mb-6">
              <FaFilter className="text-reroyal-violet text-xl mr-3" />
              <h3 className="text-xl font-bold text-accent-silver">Filter Properties</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-400 mb-2 text-sm font-medium">Property Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                >
                  <option value="all">All Types</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm font-medium">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                >
                  <option value="all">All Status</option>
                  <option value="available">Available</option>
                  <option value="pending">Pending</option>
                  <option value="sold">Sold</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm font-medium">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => handlePriceChange(e.target.value)}
                  className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                >
                  <option value="all">All Prices</option>
                  <option value="under-500m">Under ₦500M</option>
                  <option value="500m-1b">₦500M - ₦1B</option>
                  <option value="1b-2b">₦1B - ₦2B</option>
                  <option value="over-2b">Over ₦2B</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-gray-400">
                Showing <span className="text-reroyal-violet font-semibold">{filteredProperties.length}</span> of {properties.length} properties
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2 bg-reroyal-purple/30 hover:bg-gradient-to-r hover:from-reroyal-violet hover:to-reroyal-purple rounded-md text-accent-silver text-sm font-medium transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl mb-4">No properties found matching your criteria</p>
              <button
                onClick={resetFilters}
                className="px-8 py-3 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-medium hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
              >
                View All Properties
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-reroyal-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-accent-silver mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Can't Find What You're Looking For?
          </h2>
          <p
            className="text-gray-400 text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            We have access to exclusive off-market listings. Contact us to discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-bold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default Properties;
