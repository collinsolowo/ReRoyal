import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return `₦${(price / 1000000).toFixed(0)}M`;
  };

  return (
    <div
      className="bg-reroyal-dark rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-reroyal-violet/30 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
              property.status === 'available'
                ? 'bg-green-500/90 text-white'
                : property.status === 'pending'
                ? 'bg-yellow-500/90 text-white'
                : 'bg-gray-500/90 text-white'
            }`}
          >
            {property.status.toUpperCase()}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-reroyal-darkest/90 to-transparent p-4">
          <span className="inline-block px-3 py-1 bg-reroyal-violet/80 text-accent-silver text-xs font-medium rounded-full">
            {property.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-accent-silver mb-2 group-hover:text-reroyal-violet transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-400 mb-4">
          <FaMapMarkerAlt className="mr-2 text-reroyal-violet" />
          <span className="text-sm">{property.location}</span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{property.description}</p>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-reroyal-purple/30">
          {property.bedrooms && (
            <div className="flex items-center text-gray-400">
              <FaBed className="mr-2 text-reroyal-violet" />
              <span className="text-sm">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center text-gray-400">
              <FaBath className="mr-2 text-reroyal-violet" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center text-gray-400">
            <FaRulerCombined className="mr-2 text-reroyal-violet" />
            <span className="text-sm">{property.size} sqm</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Price</p>
            <p className="text-2xl font-bold text-accent-gold">{formatPrice(property.price)}</p>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver text-sm font-medium hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
