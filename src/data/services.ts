export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Luxury Residential Sales',
    description: 'Exclusive access to Lagos\' most prestigious mansions, penthouses, and premium estates. We specialize in connecting discerning buyers with exceptional properties.',
    icon: 'fa-home',
    features: ['Exclusive Listings', 'Private Showings', 'Negotiation Expertise', 'Market Analysis']
  },
  {
    id: 2,
    title: 'Commercial Real Estate',
    description: 'Premier office complexes, retail spaces, and mixed-use developments in prime Lagos locations. Strategic investments for sophisticated portfolios.',
    icon: 'fa-building',
    features: ['Office Spaces', 'Retail Properties', 'Industrial Units', 'Mixed-Use Developments']
  },
  {
    id: 3,
    title: 'Investment Advisory',
    description: 'Comprehensive investment strategies tailored for high-net-worth individuals. Portfolio diversification and market analysis from industry experts.',
    icon: 'fa-chart-line',
    features: ['Portfolio Analysis', 'ROI Projections', 'Risk Assessment', 'Market Insights']
  },
  {
    id: 4,
    title: 'Property Development',
    description: 'End-to-end luxury project development and management. From concept to completion, we deliver exceptional real estate projects.',
    icon: 'fa-hammer',
    features: ['Project Planning', 'Construction Management', 'Quality Control', 'Timely Delivery']
  },
  {
    id: 5,
    title: 'Asset Management',
    description: 'Comprehensive property portfolio oversight and optimization. Maximize returns while minimizing operational complexities.',
    icon: 'fa-briefcase',
    features: ['Portfolio Management', 'Tenant Relations', 'Maintenance Coordination', 'Financial Reporting']
  },
  {
    id: 6,
    title: 'Relocation Services',
    description: 'White-glove moving assistance for executive clients. Seamless transitions to your new luxury residence.',
    icon: 'fa-truck-moving',
    features: ['Moving Coordination', 'Settling-in Support', 'Local Orientation', 'Concierge Assistance']
  },
  {
    id: 7,
    title: 'Legal & Documentation',
    description: 'Expert property law guidance, due diligence, and transaction support. Ensuring secure and compliant property transactions.',
    icon: 'fa-gavel',
    features: ['Title Verification', 'Contract Review', 'Due Diligence', 'Transaction Support']
  },
  {
    id: 8,
    title: 'Market Research',
    description: 'Exclusive market insights and investment opportunity reports. Stay ahead with data-driven real estate intelligence.',
    icon: 'fa-search-dollar',
    features: ['Market Trends', 'Price Analysis', 'Investment Reports', 'Forecasting']
  },
  {
    id: 9,
    title: 'Interior Design Consultation',
    description: 'Luxury space planning and design coordination. Transform your property into a masterpiece of elegance and functionality.',
    icon: 'fa-palette',
    features: ['Space Planning', 'Design Coordination', 'Luxury Finishes', 'Project Management']
  },
  {
    id: 10,
    title: 'Property Valuation',
    description: 'Professional appraisal services for high-value properties. Accurate valuations backed by comprehensive market analysis.',
    icon: 'fa-calculator',
    features: ['Professional Appraisal', 'Market Comparison', 'Detailed Reports', 'Expert Analysis']
  },
  {
    id: 11,
    title: 'Concierge Services',
    description: 'Personal assistance for all property-related needs. Exceptional service tailored to your lifestyle and preferences.',
    icon: 'fa-concierge-bell',
    features: ['24/7 Support', 'Personal Assistant', 'Vendor Coordination', 'Lifestyle Management']
  },
  {
    id: 12,
    title: 'International Properties',
    description: 'Global real estate opportunities and strategic partnerships. Expand your portfolio beyond Nigerian borders.',
    icon: 'fa-globe',
    features: ['Global Network', 'International Listings', 'Cross-border Transactions', 'Partnership Opportunities']
  }
];
