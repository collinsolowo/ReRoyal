import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin by understanding your unique requirements, investment goals, and preferences.'
    },
    {
      step: '02',
      title: 'Market Analysis',
      description: 'Our experts conduct comprehensive market research to identify the best opportunities.'
    },
    {
      step: '03',
      title: 'Property Selection',
      description: 'We present curated options that align with your criteria and arrange exclusive viewings.'
    },
    {
      step: '04',
      title: 'Due Diligence',
      description: 'Thorough verification of legal documents, property conditions, and market valuations.'
    },
    {
      step: '05',
      title: 'Negotiation',
      description: 'Skilled negotiation to secure the best terms and pricing for your investment.'
    },
    {
      step: '06',
      title: 'Transaction & Handover',
      description: 'Seamless completion of all paperwork and smooth transition to property ownership.'
    }
  ];

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="Our Services"
        subtitle="Comprehensive real estate solutions tailored for high-net-worth individuals"
        backgroundImage="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent-silver mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              What We Offer
            </h2>
            <p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              From luxury residential sales to comprehensive asset management, we provide end-to-end real estate services designed for sophisticated investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
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
              Our Process
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-reroyal-violet to-reroyal-purple hidden lg:block"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1000"
                >
                  <div className="flex-1 lg:text-right">
                    <div
                      className={`bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border border-reroyal-purple/20 hover:border-reroyal-violet/50 transition-all duration-300 ${
                        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-accent-silver mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-full flex items-center justify-center shadow-lg shadow-reroyal-violet/50">
                      <span className="text-2xl font-bold text-accent-silver">{step.step}</span>
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-reroyal-darker to-reroyal-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-reroyal-purple to-reroyal-violet rounded-2xl p-12 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-accent-silver mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Ready to Experience Excellence?
            </h2>
            <p
              className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Let us help you navigate Lagos' luxury real estate market with expertise and discretion
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-accent-silver text-reroyal-purple rounded-md font-bold hover:bg-white transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
