import { useState } from 'react';
import Hero from '../components/Hero';
import { FaChartLine, FaShieldAlt, FaGlobeAmericas, FaCalculator } from 'react-icons/fa';

const Investment = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(50000000);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(5);

  const calculateReturns = () => {
    const annualReturn = 0.15;
    const totalReturn = investmentAmount * Math.pow(1 + annualReturn, investmentPeriod);
    const profit = totalReturn - investmentAmount;
    return {
      totalReturn: totalReturn.toFixed(0),
      profit: profit.toFixed(0),
      roi: ((profit / investmentAmount) * 100).toFixed(1)
    };
  };

  const returns = calculateReturns();

  const packages = [
    {
      name: 'Starter Portfolio',
      minInvestment: '₦50M - ₦200M',
      features: [
        'Curated property selection',
        'Quarterly market reports',
        'Standard legal support',
        'Annual portfolio review',
        'Email support'
      ],
      recommended: false
    },
    {
      name: 'Executive Portfolio',
      minInvestment: '₦200M - ₦1B',
      features: [
        'Exclusive property access',
        'Monthly market insights',
        'Priority legal support',
        'Quarterly portfolio review',
        'Dedicated account manager',
        'Property management services'
      ],
      recommended: true
    },
    {
      name: 'Elite Portfolio',
      minInvestment: '₦1B+',
      features: [
        'Off-market opportunities',
        'Weekly market intelligence',
        'Premium legal & tax advisory',
        'Monthly portfolio review',
        'Personal relationship manager',
        'Concierge services',
        'International property access',
        'Private investment events'
      ],
      recommended: false
    }
  ];

  const benefits = [
    {
      icon: FaChartLine,
      title: 'Strong Returns',
      description: 'Lagos real estate has consistently delivered 12-18% annual returns over the past decade.'
    },
    {
      icon: FaShieldAlt,
      title: 'Asset Security',
      description: 'Property ownership provides tangible asset security and protection against inflation.'
    },
    {
      icon: FaGlobeAmericas,
      title: 'Market Growth',
      description: 'Lagos continues to experience rapid urbanization and economic expansion.'
    }
  ];

  const formatCurrency = (value: number) => {
    return `₦${(value / 1000000).toFixed(0)}M`;
  };

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="Investment Solutions"
        subtitle="Strategic real estate investments tailored for sophisticated investors"
        backgroundImage="https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent-silver mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Why Invest in Lagos Real Estate?
            </h2>
            <p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Lagos offers exceptional opportunities for property investors seeking strong returns in Africa's largest economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 text-center border border-reroyal-purple/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-full mb-6">
                  <benefit.icon className="text-3xl text-accent-silver" />
                </div>
                <h3 className="text-xl font-bold text-accent-silver mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
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
              Investment Packages
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Choose the package that aligns with your investment goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border-2 ${
                  pkg.recommended ? 'border-accent-gold' : 'border-reroyal-purple/20'
                } hover:border-reroyal-violet/50 transition-all duration-300 relative`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-gold text-reroyal-darkest px-4 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-accent-silver mb-2">{pkg.name}</h3>
                <p className="text-reroyal-violet font-semibold mb-6">{pkg.minInvestment}</p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-400">
                      <span className="w-1.5 h-1.5 bg-reroyal-violet rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-medium hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-reroyal-darker to-reroyal-darkest">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 md:p-12 border border-reroyal-purple/20"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-center mb-8">
              <FaCalculator className="text-4xl text-reroyal-violet mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-accent-silver">Investment Calculator</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-gray-400 mb-3 text-sm font-medium">
                  Investment Amount: {formatCurrency(investmentAmount)}
                </label>
                <input
                  type="range"
                  min="10000000"
                  max="5000000000"
                  step="10000000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full h-2 bg-reroyal-darkest rounded-lg appearance-none cursor-pointer accent-reroyal-violet"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₦10M</span>
                  <span>₦5B</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-3 text-sm font-medium">
                  Investment Period: {investmentPeriod} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                  className="w-full h-2 bg-reroyal-darkest rounded-lg appearance-none cursor-pointer accent-reroyal-violet"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 year</span>
                  <span>20 years</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-reroyal-darkest rounded-lg p-6">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Initial Investment</p>
                <p className="text-2xl font-bold text-accent-silver">{formatCurrency(investmentAmount)}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Projected Profit</p>
                <p className="text-2xl font-bold text-green-500">{formatCurrency(Number(returns.profit))}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Total Return</p>
                <p className="text-2xl font-bold text-accent-gold">{formatCurrency(Number(returns.totalReturn))}</p>
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center mt-6">
              *Based on average annual return of 15%. Actual returns may vary.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-reroyal-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-accent-silver mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Ready to Build Your Portfolio?
          </h2>
          <p
            className="text-gray-400 text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Schedule a consultation with our investment advisors to discuss your goals
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-reroyal-violet to-reroyal-purple rounded-md text-accent-silver font-bold hover:shadow-lg hover:shadow-reroyal-violet/50 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Investment;
