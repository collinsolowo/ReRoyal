import { Link } from 'react-router-dom';
import { FaBuilding, FaChartLine, FaUsers, FaTrophy } from 'react-icons/fa';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Home = () => {
  const featuredProperties = properties.slice(0, 3);

  const stats = [
    { icon: FaBuilding, value: '200+', label: 'Luxury Properties' },
    { icon: FaChartLine, value: '₦50B+', label: 'Transactions' },
    { icon: FaUsers, value: '99%', label: 'Client Satisfaction' },
    { icon: FaTrophy, value: '15+', label: 'Years Excellence' },
  ];

  const testimonials = [
    {
      name: 'Dr. Adebayo Okonkwo',
      role: 'CEO, TechVentures',
      content: 'REROYAL transformed our search for commercial space into a seamless experience. Their market knowledge and discretion are unmatched.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mrs. Chioma Nwankwo',
      role: 'Investment Banker',
      content: 'The team at REROYAL delivered beyond expectations. They understood our vision and found the perfect luxury residence for our family.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Alhaji Mohammed Ibrahim',
      role: 'Real Estate Investor',
      content: 'Professional, thorough, and results-driven. REROYAL has been instrumental in building my property portfolio in Lagos.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
  ];

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="Bridging Luxury with Vision"
        subtitle="Premium real estate solutions for discerning investors across Lagos' most exclusive locations"
        backgroundImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="h-screen"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/properties"
            className="px-8 py-4 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-semibold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300 text-center"
          >
            Explore Properties
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-accent-silver rounded-md text-accent-silver font-semibold hover:bg-accent-silver hover:text-reroyal-darkest transition-all duration-300 text-center"
          >
            Schedule Consultation
          </Link>
        </div>
      </Hero>

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-full mb-4">
                  <stat.icon className="text-3xl text-accent-silver" />
                </div>
                <h3 className="text-4xl font-bold text-accent-gold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent-silver mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Featured Properties
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Discover our handpicked selection of luxury properties in Lagos' most prestigious locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <Link
              to="/properties"
              className="inline-block px-8 py-3 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-semibold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-reroyal-darker to-reroyal-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent-silver mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Client Testimonials
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Hear from our satisfied clients about their experience with REROYAL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border border-reroyal-purple/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-accent-silver font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-reroyal-purple to-reroyal-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-accent-silver mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Ready to Find Your Dream Property?
          </h2>
          <p
            className="text-gray-200 text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Let our experts guide you through Lagos' luxury real estate market
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent-silver text-reroyal-purple rounded-md font-bold hover:bg-white transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
