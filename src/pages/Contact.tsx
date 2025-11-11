import { useState } from 'react';
import Hero from '../components/Hero';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Office Location',
      details: ['Lagos, Nigeria', 'Victoria Island & Ikoyi Offices'],
      link: '#map'
    },
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      details: ['+234-XXX-XXXX-XXX', '+234-XXX-XXXX-XXX'],
      link: 'tel:+234-XXX-XXXX-XXX'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: ['info@reroyalrealtors.com', 'sales@reroyalrealtors.com'],
      link: 'mailto:info@reroyalrealtors.com'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: ['+234-XXX-XXXX-XXX', 'Available 24/7'],
      link: 'https://wa.me/234XXXXXXXXXX'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' }
  ];

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="Get In Touch"
        subtitle="Let's discuss how we can help you achieve your real estate goals"
        backgroundImage="https://images.pexels.com/photos/7875382/pexels-photo-7875382.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-6 border border-reroyal-purple/20 hover:border-reroyal-violet/50 transition-all duration-300 text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="text-2xl text-accent-silver" />
                </div>
                <h3 className="text-lg font-bold text-accent-silver mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">
                    {detail}
                  </p>
                ))}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border border-reroyal-purple/20"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="text-3xl font-bold text-accent-silver mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                        placeholder="+234-XXX-XXXX-XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Luxury Residential</option>
                        <option value="commercial">Commercial Real Estate</option>
                        <option value="investment">Investment Advisory</option>
                        <option value="development">Property Development</option>
                        <option value="management">Asset Management</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-reroyal-darkest border border-reroyal-purple/30 rounded-md text-accent-silver focus:outline-none focus:border-reroyal-violet transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-bold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border border-reroyal-purple/20"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h3 className="text-2xl font-bold text-accent-silver mb-6">Office Hours</h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-reroyal-purple/30 last:border-b-0">
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="text-reroyal-violet font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border border-reroyal-purple/20"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3 className="text-2xl font-bold text-accent-silver mb-6">Follow Us</h3>
                <p className="text-gray-400 mb-6">Stay connected with us on social media for the latest updates and property listings.</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-reroyal-purple/30 flex items-center justify-center hover:bg-reroyal-violet transition-all duration-300 hover:scale-110"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-reroyal-darker" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-accent-silver mb-8 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Find Us
          </h2>
          <div
            className="rounded-lg overflow-hidden h-96 border-2 border-reroyal-purple/20"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7158687230947!2d3.4209822!3d6.4281238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
