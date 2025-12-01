import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaTimes, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { properties } from '../data/properties';

interface PropertyImage {
  id: string;
  url: string;
  type: 'image' | 'video';
  title?: string;
}

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const property = properties.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug?.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!property) {
    return (
      <div className="bg-reroyal-darkest min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent-silver mb-4">Property Not Found</h1>
          <p className="text-gray-400 mb-8">The property you're looking for doesn't exist.</p>
          <Link
            to="/properties"
            className="inline-block px-8 py-3 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-semibold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const propertyImages: PropertyImage[] = [
    { id: '1', url: property.image, type: 'image', title: 'Main View' },
  ];

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setShowEnquiryForm(false);
    alert('Thank you for your enquiry. Our team will contact you shortly.');
  };

  const formatPrice = (price: number) => {
    return `$${(price / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-reroyal-darkest min-h-screen">
      <div className="sticky top-0 z-40 bg-reroyal-darkest/95 backdrop-blur-md border-b border-reroyal-purple/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={() => navigate('/properties')}
            className="flex items-center gap-2 text-accent-silver hover:text-reroyal-violet transition-colors"
          >
            <FaChevronLeft /> Back
          </button>
          <h1 className="text-2xl font-bold text-accent-silver">{property.title}</h1>
          <div className="w-24"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-reroyal-dark rounded-lg overflow-hidden mb-8">
              <div className="relative aspect-video bg-reroyal-darker group">
                {propertyImages[selectedImageIndex].type === 'video' ? (
                  <video
                    src={propertyImages[selectedImageIndex].url}
                    className="w-full h-full object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={propertyImages[selectedImageIndex].url}
                    alt={propertyImages[selectedImageIndex].title}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setIsLightboxOpen(true)}
                  />
                )}

                {propertyImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {propertyImages.length}
                </div>
              </div>

              {propertyImages.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto">
                  {propertyImages.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-reroyal-violet'
                          : 'border-reroyal-purple/30 hover:border-reroyal-purple'
                      }`}
                    >
                      {img.type === 'video' ? (
                        <div className="w-full h-full bg-reroyal-darker flex items-center justify-center text-reroyal-violet">
                          ▶
                        </div>
                      ) : (
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-reroyal-dark rounded-lg p-8 border border-reroyal-purple/20 mb-8">
              <h2 className="text-3xl font-bold text-accent-silver mb-6">Property Details</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-reroyal-purple/20">
                {property.bedrooms && (
                  <div className="text-center">
                    <FaBed className="text-2xl text-reroyal-violet mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Bedrooms</p>
                    <p className="text-xl font-bold text-accent-silver">{property.bedrooms}</p>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="text-center">
                    <FaBath className="text-2xl text-reroyal-violet mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Bathrooms</p>
                    <p className="text-xl font-bold text-accent-silver">{property.bathrooms}</p>
                  </div>
                )}
                <div className="text-center">
                  <FaRulerCombined className="text-2xl text-reroyal-violet mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Size</p>
                  <p className="text-xl font-bold text-accent-silver">{property.size} sqm</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl text-reroyal-violet mx-auto mb-2 block">📍</span>
                  <p className="text-gray-400 text-sm">Type</p>
                  <p className="text-xl font-bold text-accent-silver capitalize">{property.type}</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">{property.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-accent-silver mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Premium Location',
                    'Luxury Finishes',
                    'Smart Home Technology',
                    ' Secure Gated Community',
                    'Swimming Pool',
                    '24/7 Security',
                    'Concierge Service',
                    'Parking Facilities'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400">
                      <FaCheckCircle className="text-reroyal-violet flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-reroyal-darker rounded-lg p-6 border border-reroyal-purple/20">
                <h3 className="text-lg font-bold text-accent-silver mb-3">Location</h3>
                <div className="flex items-center gap-3 text-gray-400 mb-4">
                  <FaMapMarkerAlt className="text-reroyal-violet text-xl flex-shrink-0" />
                  <span>{property.location}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Located in one of Lagos' most prestigious neighborhoods, this property offers exclusive access to premium amenities, fine dining, and world-class services.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-lg p-8 text-center">
                <p className="text-gray-200 text-sm mb-2">Price</p>
                <p className="text-4xl font-bold text-accent-gold mb-6">{formatPrice(property.price)}</p>
                <button
                  onClick={() => setShowEnquiryForm(true)}
                  className="w-full px-6 py-4 bg-accent-silver text-reroyal-purple rounded-lg font-bold hover:bg-white transition-all duration-300 mb-4"
                >
                  Make an Enquiry
                </button>
                <button className="w-full px-6 py-4 bg-transparent border-2 border-accent-silver text-accent-silver rounded-lg font-bold hover:bg-accent-silver hover:text-reroyal-purple transition-all duration-300">
                  Schedule Tour
                </button>
              </div>

              <div className="bg-reroyal-dark rounded-lg p-6 border border-reroyal-purple/20">
                <h3 className="text-lg font-bold text-accent-silver mb-4">Contact REROYAL</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+234"
                    className="flex items-center gap-3 p-3 bg-reroyal-darker rounded-lg hover:bg-reroyal-purple/20 transition-colors"
                  >
                    <FaPhone className="text-reroyal-violet" />
                    <span className="text-gray-400">Call Us</span>
                  </a>
                  <a
                    href="mailto:info@reroyalrealtors.com"
                    className="flex items-center gap-3 p-3 bg-reroyal-darker rounded-lg hover:bg-reroyal-purple/20 transition-colors"
                  >
                    <FaEnvelope className="text-reroyal-violet" />
                    <span className="text-gray-400">Email Us</span>
                  </a>
                </div>
              </div>

              <div className="bg-reroyal-dark rounded-lg p-6 border border-reroyal-purple/20">
                <h3 className="text-lg font-bold text-accent-silver mb-4">Property Status</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                    property.status === 'available'
                      ? 'bg-green-500/90 text-white'
                      : property.status === 'pending'
                      ? 'bg-yellow-500/90 text-white'
                      : 'bg-gray-500/90 text-white'
                  }`}>
                    {property.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 transition"
          >
            <FaTimes />
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={propertyImages[selectedImageIndex].url}
              alt="Lightbox"
              className="max-w-full max-h-full object-contain"
            />
            {propertyImages.length > 1 && (
              <>
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition"
                >
                  <FaChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {showEnquiryForm && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-reroyal-dark rounded-lg max-w-md w-full p-8 border border-reroyal-purple/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-accent-silver">Property Enquiry</h2>
              <button
                onClick={() => setShowEnquiryForm(false)}
                className="text-gray-400 hover:text-accent-silver transition"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-reroyal-darker border border-reroyal-purple/30 rounded-lg text-accent-silver focus:outline-none focus:border-reroyal-violet placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-reroyal-darker border border-reroyal-purple/30 rounded-lg text-accent-silver focus:outline-none focus:border-reroyal-violet placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-reroyal-darker border border-reroyal-purple/30 rounded-lg text-accent-silver focus:outline-none focus:border-reroyal-violet placeholder-gray-500"
                  placeholder="+234..."
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-reroyal-darker border border-reroyal-purple/30 rounded-lg text-accent-silver focus:outline-none focus:border-reroyal-violet placeholder-gray-500 resize-none"
                  placeholder="Tell us about your interest in this property..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-reroyal-violet to-reroyal-purple text-accent-silver rounded-lg font-semibold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
