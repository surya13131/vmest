import React from 'react';
import i1 from '../assets/i1.png'; 
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import N1 from '../assets/N1.png';
import Quality from './quality';
import logo from '../assets/logo.svg';
import shows from '../assets/shadow.svg'; 

const Aldmognpaegthree = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* SECTION 1: Business Opportunities */}
      <section className="relative py-16 md:py-24 lg:py-36 font-sans w-full overflow-hidden">
        {/* IMPROVED: Responsive Background Shadow for Mobile & Desktop */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src={shows} 
            alt="" 
            className="w-full h-full object-cover opacity-100" 
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2D312E] mb-8 md:mb-12">
            Business Opportunities
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center">
            {/* Left Side: Main Product Image */}
            <div className="w-full lg:w-1/2 flex"> 
              <div className="rounded-2xl overflow-hidden w-full h-full ">
                <img 
                  src={N1} 
                  alt="Wenest Products" 
                  className="w-full h-64 sm:h-80 md:h-[500px] lg:h-full object-cover" 
                />
              </div>
            </div>

            {/* Right Side: Content Area */}
            <div className="w-full lg:w-1/2 bg-[#D8D2C6] rounded-[24px] py-8 px-6 md:py-10 md:px-10 border-[0.75px] border-[#F5F5F4] flex flex-col justify-between shadow-sm">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2D312E] mb-4 md:mb-6">We Welcome</h3>
                  
                  <div className="space-y-5 md:space-y-6">
                    {[
                      { img: i1, title: "Importers & Wholesalers", p: "Partners seeking reliable suppliers for sustainable packaging." },
                      { img: i2, title: "Retail Chains", p: "Brands requiring private label or promotional cotton bags." },
                      { img: i3, title: "Promotional Companies", p: "Agencies needing custom printed bags for client campaigns." },
                      { img: i4, title: "Private Label Brands", p: "Companies wanting to build their own eco-friendly product lines." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <img src={item.img} alt="" className="w-5 h-5 object-contain shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#2D312E] text-sm md:text-base leading-tight">{item.title}</h4>
                          <p className="text-xs md:text-sm text-[#545955] leading-snug">{item.p}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Low MOQ Box */}
                <div className="bg-white/80 rounded-xl p-4 md:p-5 border border-white/40 shadow-sm">
                  <h4 className="font-bold text-[#2D312E] text-sm md:text-base mb-1">Low MOQ Available</h4>
                  <p className="text-[11px] md:text-xs text-[#545955] leading-relaxed">
                    Flexible minimum order quantities ideal for startups and smaller buyers.
                  </p>
                </div>

                {/* Customization Services */}
                <div className="space-y-3">
                  <h4 className="font-bold text-[#2D312E] text-sm md:text-base">Customization Available</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {[
                      "Size & Dimensions", "Fabric & GSM options", "Logo Printing & Branding", "Handle styles", "Private labeling & packing"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img src={i5} alt="check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                        <span className="text-xs md:text-sm text-[#545955] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Quality Commitment */}
      <section className="relative overflow-hidden w-full">
        {/* IMPROVED: Responsive Shadow for Quality Section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={shows} 
            alt="" 
            className="w-full h-full object-cover opacity-100" 
          />
        </div>
        <div className="relative z-10">
          <Quality />
        </div>
      </section>

      {/* SECTION 3: Footer */}
      <footer className="relative w-full py-12 md:py-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-transparent">
        <div className="relative z-10 max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8">
            
            {/* Left Section: Heading and Info Grid */}
            <div className="flex-1 w-full">
              <h4 className="text-3xl md:text-[40px] font-[700] text-[#1A1A1A] mb-8 leading-tight">
                Let's Build a Sustainable <br className="hidden md:block" />
                Partnership
              </h4>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-start gap-8 md:gap-12">
                <div className="max-w-[200px]">
                  <p className="text-sm md:text-[15px] text-[#545955] leading-tight">
                    Quality assured in affordability, delivered across globe
                  </p>
                </div>

                <div>
                  <h5 className="text-base md:text-[17px] font-bold text-[#1A1A1A] mb-3">Address</h5>
                  <p className="text-sm md:text-[15px] text-[#545955] leading-relaxed">
                    234F Dharapuram street,<br />
                    Rajapalayam, Tamil Nadu -<br />
                    626 117
                  </p>
                </div>

                <div>
                  <h5 className="text-base md:text-[17px] font-bold text-[#1A1A1A] mb-3">Contact</h5>
                  <div className="text-sm md:text-[15px] text-[#545955] space-y-1">
                    <p>+91 9344461082</p>
                    <p className="break-all">wenestproducts@gmail.com</p>
                    <p>www.wenestproducts.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Large Decorative Logo */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0 mt-4 lg:mt-0">
              <img 
                src={logo} 
                alt="WeNest Large Logo" 
                className="w-[250px] sm:w-[300px] md:w-[450px] object-contain opacity-80"
              />
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-12 md:mt-16 pt-4 border-t border-black/10 text-center">
            <p className="text-xs md:text-[15px] text-[#545955]">
              © 2025 wenestproducts All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Aldmognpaegthree;