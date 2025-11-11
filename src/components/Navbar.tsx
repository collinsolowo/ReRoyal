import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/properties' },
    { name: 'Investment', path: '/investment' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-reroyal-darker text-accent-silver py-2 px-4 md:px-8 text-xs md:text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+234-XXX-XXXX-XXX" className="flex items-center gap-2 hover:text-reroyal-violet transition">
              <FaPhone className="text-xs" />
              <span>+234-XXX-XXXX-XXX</span>
            </a>
            <a href="mailto:info@reroyalrealtors.com" className="flex items-center gap-2 hover:text-reroyal-violet transition">
              <FaEnvelope className="text-xs" />
              <span>info@reroyalrealtors.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-accent-gold">Bridging Luxury with Vision</span>
          </div>
        </div>
      </div>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-reroyal-darkest/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl md:text-3xl font-bold text-accent-silver">
                <span className="text-reroyal-violet">RE</span>ROYAL
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-reroyal-violet bg-reroyal-violet/10'
                      : 'text-accent-silver hover:text-reroyal-violet hover:bg-reroyal-violet/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-reroyal-violet to-reroyal-purple px-6 py-2.5 rounded-md text-accent-silver font-medium hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-accent-silver text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-reroyal-darkest/98 backdrop-blur-md border-t border-reroyal-violet/20">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-reroyal-violet bg-reroyal-violet/10'
                      : 'text-accent-silver hover:text-reroyal-violet hover:bg-reroyal-violet/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-reroyal-violet to-reroyal-purple px-6 py-3 rounded-md text-accent-silver font-medium text-center mt-4"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
