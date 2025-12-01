import Hero from '../components/Hero';
import { FaAward, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaHandshake,
      title: 'Professionalism',
      description: 'Delivering exemplary service standards and ethical practices in every transaction with developers and investors.'
    },
    {
      icon: FaLightbulb,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and accountability in all business relationships.'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Service',
      description: 'Providing comprehensive real estate solutions including management, listing, and project oversight.'
    },
    {
      icon: FaAward,
      title: 'Client-Centric',
      description: 'Prioritizing the unique needs of high-net-worth clients and premium developers in every engagement.'
    }
  ];

  const team = [
    {
      name: 'Oluwaseun Adeyemi',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in premium real estate and developer relations'
    },
    {
      name: 'Fatima Hassan',
      role: 'Head of Investor Relations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in high-net-worth investment strategies'
    },
    {
      name: 'Chukwudi Okafor',
      role: 'Director of Projects',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in luxury residential and commercial projects'
    },
    {
      name: 'Amina Bello',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensures seamless property management and compliance'
    }
  ];

  const achievements = [
    'Premier Developer Network Partner 2024',
    'Excellence in Investor Relations Award',
    'Leading Property Management Services',
    'Trusted High-Net-Worth Real Estate Advisor'
  ];

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="About REROYAL Realtors Limited"
        subtitle="Connecting premium developers with high-net-worth investors in Lagos' most exclusive markets"
        backgroundImage="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl font-bold text-accent-silver mb-6">Our Mission & Vision</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-reroyal-violet mb-3">Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To provide exceptional real estate experiences through professionalism and integrity.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-reroyal-violet mb-3">Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the world's leading online real estate retailer where customers can find any property they want to buy online by just visiting one site.
                </p>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                REROYAL Realtors Limited specializes in connecting premium developers with affluent investors and clients in both primary and secondary markets. Our expertise spans luxury residential estates, prime commercial developments, and strategic investment opportunities across Lagos.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a comprehensive suite of services including property management, project management, and pre-commissioning services, we deliver complete real estate solutions for high-net-worth individuals and institutional investors.
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
