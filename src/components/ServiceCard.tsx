import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div
      className="bg-gradient-to-br from-reroyal-dark to-reroyal-darker rounded-lg p-8 hover:shadow-2xl hover:shadow-reroyal-violet/30 transition-all duration-300 border border-reroyal-purple/20 hover:border-reroyal-violet/50 group"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-reroyal-violet to-reroyal-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <i className={`fas ${service.icon} text-2xl text-accent-silver`}></i>
      </div>

      <h3 className="text-xl font-bold text-accent-silver mb-4 group-hover:text-reroyal-violet transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-400">
            <span className="w-1.5 h-1.5 bg-reroyal-violet rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="mt-6 px-6 py-2 bg-reroyal-purple/30 hover:bg-gradient-to-r hover:from-reroyal-violet hover:to-reroyal-purple rounded-md text-accent-silver text-sm font-medium transition-all duration-300 w-full">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
