import React from 'react';
import N2 from '../assets/N2.png';
import N3 from '../assets/N3.png';
import N4 from '../assets/N4.png';
import shows from '../assets/shadow.svg';

const Quality = () => {
  const qualitySteps = [
    {
      icon: N2,
      title: "100% Cotton",
      description: "Cotton fibers for Durability, Comfort, and Eco-friendly Everyday Performance"
    },
    {
      icon: N3,
      title: "Strong Load-Bearing Capacity",
      description: "Engineered construction capable of carrying heavy loads safely"
    },
    {
      icon: N4,
      title: "Washable & Reusable",
      description: "Durable materials designed for repeated washing and long-term use"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 font-sans w-full relative overflow-hidden" 
      style={{ backgroundColor: '#D8D2C6' }} 
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={shows} 
          alt="" 
          className="w-full h-full min-h-full object-cover opacity-100 md:opacity-90" 
        />
      </div>

      <div className="max-w-[1600px] mx-auto text-center px-6 md:px-16 lg:px-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 md:mb-20">
          Quality Commitment
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mb-16 md:mb-24 gap-12 lg:gap-4">
          {qualitySteps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="flex flex-col items-center flex-1 z-10">
                <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[#E5E1D8] rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-inner border border-white/20 transition-transform hover:scale-105 duration-300">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain" 
                  />
                </div>
                
                {/* Title with whitespace-nowrap to prevent line breaks */}
                <h4 className="font-extrabold text-[#000000] text-lg md:text-xl mb-3 whitespace-nowrap">
                  {step.title}
                </h4>
                
                <p className="text-sm text-[#000000] leading-relaxed max-w-[260px] md:max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Decorative Arrow (Desktop Only) */}
              {index < qualitySteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center flex-1 pt-16">
                  <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path 
                      d="M99.3536 4.35355C99.5488 4.15829 99.5488 3.84171 99.3536 3.64645L96.1716 0.464466C95.9763 0.269204 95.6597 0.269204 95.4645 0.464466C95.2692 0.659728 95.2692 0.976311 95.4645 1.17157L98.2929 4L95.4645 6.82843C95.2692 7.02369 95.2692 7.34027 95.4645 7.53553C95.6597 7.7308 95.9763 7.7308 96.1716 7.53553L99.3536 4.35355ZM0 4.5H99V3.5H0V4.5Z" 
                      fill="#986E1B63"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className="w-full pt-12 md:pt-16 border-t border-black/5">
          <h3 className="text-xl md:text-2xl font-extrabold text-[#000000] mb-4 md:mb-6">Ready to Start?</h3>
          <p className="text-base md:text-lg text-[#000000] leading-relaxed max-w-3xl mx-auto px-4">
            Whether you're launching a new eco-friendly product line or seeking reliable 
            cotton bag suppliers, WeNest Products offers the quality, flexibility, and 
            competitive pricing you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;