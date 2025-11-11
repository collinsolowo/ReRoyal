import Hero from '../components/Hero';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const Insights = () => {
  const articles = [
    {
      title: 'Lagos Luxury Real Estate Market Outlook 2024',
      excerpt: 'An in-depth analysis of market trends, price movements, and investment opportunities in Lagos\' premium property sector.',
      author: 'Oluwaseun Adeyemi',
      date: 'November 5, 2025',
      category: 'Market Analysis',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read'
    },
    {
      title: 'Top 5 Investment Locations in Lagos',
      excerpt: 'Discover the most promising neighborhoods for property investment and what makes them stand out in the Lagos market.',
      author: 'Fatima Hassan',
      date: 'November 1, 2025',
      category: 'Investment Tips',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    },
    {
      title: 'Understanding Property Valuation in Nigeria',
      excerpt: 'A comprehensive guide to how properties are valued in the Nigerian market and factors that influence pricing.',
      author: 'Chukwudi Okafor',
      date: 'October 28, 2025',
      category: 'Education',
      image: 'https://images.pexels.com/photos/7578968/pexels-photo-7578968.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read'
    },
    {
      title: 'Legal Considerations for Foreign Investors',
      excerpt: 'Essential legal information for international investors looking to enter the Nigerian real estate market.',
      author: 'Amina Bello',
      date: 'October 25, 2025',
      category: 'Legal',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read'
    },
    {
      title: 'Luxury Property Trends: What Buyers Want',
      excerpt: 'Explore the latest trends in luxury property features and amenities that high-net-worth buyers are seeking.',
      author: 'Oluwaseun Adeyemi',
      date: 'October 20, 2025',
      category: 'Trends',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    },
    {
      title: 'Commercial Real Estate: Office Space Demand',
      excerpt: 'Analysis of the commercial office market in Lagos and opportunities for investors in the post-pandemic era.',
      author: 'Fatima Hassan',
      date: 'October 15, 2025',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min read'
    }
  ];

  const marketData = [
    { metric: 'Average Price Growth', value: '+15.2%', period: 'YoY' },
    { metric: 'Transaction Volume', value: '₦120B+', period: 'Q3 2024' },
    { metric: 'Luxury Properties Sold', value: '342', period: 'Last 12 Months' },
    { metric: 'Average Days on Market', value: '45', period: 'Current' }
  ];

  return (
    <div className="bg-reroyal-darkest">
      <Hero
        title="Market Insights"
        subtitle="Expert analysis and industry trends to inform your investment decisions"
        backgroundImage="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-gradient-to-b from-reroyal-darkest to-reroyal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent-silver mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Lagos Market Overview
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Key metrics from the Lagos luxury real estate market
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 border border-reroyal-purple/20 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <p className="text-gray-400 text-sm mb-2">{data.metric}</p>
                <p className="text-4xl font-bold text-accent-gold mb-2">{data.value}</p>
                <p className="text-reroyal-violet text-sm">{data.period}</p>
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
              Latest Articles
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Expert insights and analysis from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg overflow-hidden border border-reroyal-purple/20 hover:border-reroyal-violet/50 transition-all duration-300 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-reroyal-violet/90 text-accent-silver text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent-silver mb-3 group-hover:text-reroyal-violet transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-reroyal-purple/30">
                    <div className="flex items-center">
                      <FaUser className="mr-2 text-reroyal-violet" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-2 text-reroyal-violet" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                    <button className="flex items-center text-reroyal-violet hover:text-accent-silver transition-colors text-sm font-medium">
                      Read More
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-reroyal-darker to-reroyal-darkest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-gradient-to-r from-reroyal-purple to-reroyal-violet rounded-2xl p-12 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-silver mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Get exclusive market reports, investment tips, and property alerts delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-md text-reroyal-darkest focus:outline-none focus:ring-2 focus:ring-accent-silver"
              />
              <button className="px-8 py-4 bg-accent-silver text-reroyal-purple rounded-md font-bold hover:bg-white transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
