import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  height?: string;
  children?: ReactNode;
}

const Hero = ({ title, subtitle, backgroundImage, backgroundVideo, height = 'h-[70vh]', children }: HeroProps) => {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {backgroundVideo ? (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-reroyal-darkest/80 via-reroyal-darkest/70 to-reroyal-darkest/90"></div>
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-reroyal-darkest/80 via-reroyal-darkest/70 to-reroyal-darkest/90"></div>
        </div>
      )}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent-silver mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            {children}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-reroyal-darkest to-transparent"></div>
    </div>
  );
};

export default Hero;
