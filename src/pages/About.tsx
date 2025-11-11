import Hero from '../components/Hero';
import { FaAward, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaHandshake,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency and ethical practices in every transaction.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and market insights to deliver exceptional results.'
    },
    {
      icon: FaShieldAlt,
      title: 'Discretion',
      description: 'Protecting our clients\' privacy while providing personalized, white-glove service.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Maintaining the highest standards in every aspect of our real estate services.'
    }
  ];

  const team = [
    {
      name: 'Oluwaseun Adeyemi',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in luxury real estate'
    },
    {
      name: 'Fatima Hassan',
      role: 'Head of Investment Advisory',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in commercial properties'
    },
    {
      name: 'Chukwudi Okafor',
      role: 'Director of Sales',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Luxury residential specialist'
    },
    {
      name: 'Amina Bello',
      role: 'Legal & Compliance Officer',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Property law expert'
    }
  ];

  const achievements = [
    'Best Luxury Real Estate Firm 2023',
    'Excellence in Client Service Award',
    'Top Commercial Real Estate Agency',
    'Most Trusted Realtor in Lagos'
  ];

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="About REROYAL"
        subtitle="Redefining luxury real estate through sophistication, trust, and innovation"
        backgroundImage="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl font-bold text-accent-silver mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Founded over 15 years ago, REROYAL Realtors Limited has established itself as Lagos' premier luxury real estate firm. We specialize in connecting high-net-worth individuals with exceptional properties that match their vision and lifestyle.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our deep understanding of the Lagos luxury market, combined with our commitment to discretion and excellence, has made us the trusted partner for Nigeria's most discerning property investors.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From exclusive residential estates to prime commercial developments, we bridge the gap between luxury and vision, creating opportunities that transcend traditional real estate transactions.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="relative">
              <img
                src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="REROYAL Office"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-lg -z-10"></div>
            </div>
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
              Our Values
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 text-center border border-reroyal-purple/20 hover:border-reroyal-violet/50 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-full mb-6">
                  <value.icon className="text-2xl text-accent-silver" />
                </div>
                <h3 className="text-xl font-bold text-accent-silver mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
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
              Meet Our Team
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Industry experts dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg overflow-hidden border border-reroyal-purple/20 hover:border-reroyal-violet/50 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-accent-silver mb-2">{member.name}</h3>
                  <p className="text-reroyal-violet font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent-silver mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-lg p-6 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <FaAward className="text-4xl text-accent-gold mx-auto mb-4" />
                <p className="text-accent-silver font-semibold">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
