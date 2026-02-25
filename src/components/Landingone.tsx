import React from 'react';
import Header from './Header';
import Landtwo from '../components/landingtwo';
// Local assets
import home1 from '../assets/home1.png'; // Main bag image
import home2 from '../assets/home2.png'; // Woman with bag (TOP/Front)
import home3 from '../assets/home3.png'; // Stacked bags (BOTTOM/Back)
import starIcon from '../assets/star.svg'; 
// Background SVG import
import shows from '../assets/shadow.svg'; 

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#D8D2C6] font-sans text-[#1A1A1A] overflow-x-hidden">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 md:pt-52 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center lg:items-end justify-between overflow-hidden pb-0">
          
          {/* Background Image - Optimized for all devices */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src={shows} 
              alt="" 
              className="w-full h-full object-cover opacity-100" 
            />
          </div>

          {/* Decorative Star 1 - Adjusted for all devices */}
          <img 
            src={starIcon} 
            className="absolute top-28 left-[10%] lg:top-40 lg:left-[42%] w-8 h-8 lg:w-12 lg:h-12 z-10 animate-pulse" 
            alt="" 
          />
          
          <div className="w-full lg:w-1/2 mb-12 lg:mb-32 space-y-6 md:space-y-8 z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#2D312E]">
              Sustainable <br className="hidden sm:block" />
              Cotton Bags for <br className="hidden sm:block" />
              Brands that Care
            </h1>
            
            <p className="text-base md:text-lg text-[#545955] max-w-md mx-auto lg:mx-0 leading-relaxed">
              Premium eco-friendly cotton bags manufactured for global businesses. 
              Reliable quality, flexible customization, and export-ready delivery.
            </p>

            {/* Added Contact Us Button */}
            <div className="pt-4">
              <button className="bg-[#6CB33E] hover:bg-[#5a9a32] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-sm active:scale-95">
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end relative z-10 mt-8 lg:mt-0">
            {/* Decorative Stars near the bags - Visible on all devices */}
            <img 
              src={starIcon} 
              className="absolute top-10 left-4 lg:top-20 lg:left-10 w-8 h-8 lg:w-12 lg:h-12" 
              alt="" 
            />
            <img 
              src={starIcon} 
              className="absolute bottom-20 right-4 lg:top-40 lg:right-10 w-8 h-8 lg:w-12 lg:h-12" 
              alt="" 
            />
            
            <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-[850px]">
              <img 
                src={home1} 
                alt="Product Showcase" 
                className="w-full h-auto block m-0 p-0"
              />
            </div>
          </div>
        </section>

        {/* --- MISSION & VISION SECTION --- */}
        <section className="relative py-16 md:py-24 px-6 bg-[#C7C0B3] md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
          
          {/* Background Image for Mission Section */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src={shows} 
              alt="" 
              className="w-full h-full object-cover opacity-100 mix-blend-multiply" 
            />
          </div>

          {/* Overlapping Images Layout - Fully Responsive */}
          <div className="relative h-[400px] md:h-[550px] w-full max-w-[320px] md:max-w-[550px] mx-auto z-10">
             {/* home3 (Stacked Bags - Bottom Layer) */}
             <div className="absolute top-12 left-0 md:top-20 md:left-4 w-[180px] h-[240px] md:w-[310px] md:h-[390px] rounded-2xl overflow-hidden border-4 md:border-[6px] border-white z-0 shadow-lg">
                <img 
                  src={home3} 
                  className="w-full h-full object-cover block" 
                  alt="Cotton bag stacks" 
                />
             </div>

             {/* home2 (Woman with Bag - Top Layer) */}
             <div className="absolute top-0 right-0 w-[180px] h-[240px] md:w-[310px] md:h-[390px] rounded-2xl border-4 md:border-[6px] border-white z-10 overflow-hidden shadow-xl">
                <img 
                  src={home2} 
                  className="w-full h-full object-cover block"
                  alt="Sustainable lifestyle" 
                />
             </div>
          </div>

          <div className="space-y-8 md:space-y-12 z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#2D312E]">
              Committed to <br className="hidden md:block" /> Sustainable Solutions
            </h2>
            
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-bold text-lg md:text-xl text-[#2D312E]">Our Mission</h3>
              <p className="text-[#545955] text-lg md:text-xl leading-relaxed">
                Manufacturing high-quality, eco-friendly cotton bags that help 
                businesses reduce plastic waste and promote sustainable living worldwide.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h3 className="font-bold text-lg md:text-xl text-[#2D312E]">Our Vision</h3>
              <p className="text-[#545955] text-lg md:text-xl leading-relaxed">
                Become a trusted global supplier of reusable cotton shopping bags, 
                renowned for quality, reliability, and innovation in sustainable 
                packaging solutions.
              </p>
            </div>
          </div>
        </section>

        <Landtwo />
      </main>
    </div>
  );
};

export default LandingPage;