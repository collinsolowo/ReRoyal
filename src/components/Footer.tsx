import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-reroyal-darkest to-reroyal-darker text-accent-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-reroyal-violet">RE</span>ROYAL
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bridging Luxury with Vision. Your premier partner in high-end real estate investments across Lagos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-reroyal-violet transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-reroyal-violet transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-reroyal-violet transition-colors duration-300">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-gray-400 hover:text-reroyal-violet transition-colors duration-300">
                  Investment Solutions
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-reroyal-violet transition-colors duration-300">
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent-gold">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Luxury Residential Sales</li>
              <li className="text-gray-400">Commercial Real Estate</li>
              <li className="text-gray-400">Investment Advisory</li>
              <li className="text-gray-400">Property Development</li>
              <li className="text-gray-400">Asset Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-reroyal-violet mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-reroyal-violet flex-shrink-0" />
                <a href="tel:+234-XXX-XXXX-XXX" className="hover:text-reroyal-violet transition-colors">
                  +234-XXX-XXXX-XXX
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-reroyal-violet flex-shrink-0" />
                <a href="mailto:info@reroyalrealtors.com" className="hover:text-reroyal-violet transition-colors">
                  info@reroyalrealtors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-reroyal-purple/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} REROYAL Realtors Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-reroyal-violet text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-reroyal-violet text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
