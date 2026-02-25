import React from 'react';
import Landthree from '../components/landingthree';
// Product Images
import l1 from '../assets/l1.png'; 
import l2 from '../assets/l2.png'; 
import l3 from '../assets/l3.png'; 
import l4 from '../assets/l4.png'; 
import l5 from '../assets/l5.png'; 
import l6 from '../assets/l6.png'; 
import l7 from '../assets/l7.png'; 
import shows from '../assets/shadow.svg'; 
// SVG Icons for Why Choose Section
import s1 from '../assets/s1.svg';
import s2 from '../assets/s2.svg';
import s3 from '../assets/s3.svg';
import s4 from '../assets/s4.svg';
import s5 from '../assets/s5.svg';
import s6 from '../assets/s6.svg';

const LandingTwo: React.FC = () => {
  const productRange = [
    { id: 'l1', title: "Heavy Duty Cotton Bags (Box Bottom)", img: l1, bgColor: "bg-[#F3F2EF]", span: "lg:col-span-2" },
    { id: 'l2', title: "Plain Cotton Tote Bags", img: l2, bgColor: "bg-[#D6EBF8]", span: "col-span-1" },
    { id: 'l3', title: "Foldable Cotton Shopping Bags", img: l3, bgColor: "bg-[#FCF5C7]", span: "col-span-1" },
    { id: 'l4', title: "D-Cut Cotton Bags", img: l4, bgColor: "bg-[#E2F7D6]", span: "col-span-1" },
    { id: 'l5', title: "Drawstring Cotton Bags", img: l5, bgColor: "bg-[#E2F7E6]", span: "col-span-1" },
    { id: 'l6', title: "Bottle Cotton Bags", img: l6, bgColor: "bg-[#F7E2E2]", span: "col-span-1" },
    { id: 'l7', title: "Melange Bags", img: l7, bgColor: "bg-[#E2E6F7]", span: "col-span-1" },
  ];

  const whyChooseFeatures = [
    { icon: s1, title: "Sustainable Without Compromise", desc: "Eco-friendly materials that support your brand's responsibility goals while maintaining durability and premium feel." },
    { icon: s2, title: "Cost-Efficient at Scale", desc: "Competitive bulk pricing designed to help you maximize margins without sacrificing product quality." },
    { icon: s3, title: "Consistent Export Quality", desc: "Our products are designed with your comfort in mind, with ergonomic features and premium materials." },
    { icon: s4, title: "Built for Long-Term Use", desc: "Reinforced stitching, durable handles, and premium cotton sourcing ensure products withstand real-world usage." },
    { icon: s5, title: "Custom Branding That Stands Out", desc: "Flexible design options with professional screen printing help your brand stay visible and memorable." },
    { icon: s6, title: "Smooth Global Delivery Support", desc: "End-to-end export assistance, documentation, and reliable logistics ensure hassle-free international shipping." },
  ];

  return (
    <div className="min-h-screen bg-[#CAC4B8] font-['Montserrat',_sans-serif] overflow-x-hidden">
      
      {/* --- UNIFIED BACKGROUND WRAPPER --- */}
      <div className="relative w-full">
        {/* Unified Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={shows} 
            alt="" 
            className="w-full h-full object-cover opacity-100" 
          />
        </div>

        {/* --- PRODUCT RANGE SECTION --- */}
        {/* scroll-mt-32 ensures the fixed header doesn't cover the title when clicking 'Products' */}
        <section 
          id="products" 
          className="relative z-10 px-4 md:px-12 lg:px-24 pt-24 pb-12 md:pt-32 scroll-mt-24"
        >
          <div className="bg-[#E5E1D8]/40 rounded-[28px] p-6 md:p-12 shadow-sm backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-12 pl-4 text-[#FFFFF]">Our Premium Product Range</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productRange.map((product, index) => {
                const needsFullWidth = ['l2', 'l4', 'l5', 'l7'].includes(product.id);
                return (
                  <div 
                    key={index} 
                    className={`${product.bgColor} ${product.span} rounded-[40px] overflow-hidden flex flex-col h-[400px] shadow-sm group`}
                  >
                    <div className="p-10 pb-2">
                      <h4 className="text-[22px] font-extrabold text-[#4C4C4CA6] leading-[1.1] max-w-[240px] text-balance">
                        {product.title}
                      </h4>
                    </div>
                    <div className="flex-1 flex items-end overflow-hidden">
                      <img 
                        src={product.img} 
                        alt={product.title} 
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${needsFullWidth ? 'object-cover' : 'object-contain'} object-bottom`} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE SECTION --- */}
        <section 
          id="why-us" 
          className="relative z-10 px-4 md:px-12 lg:px-24 pt-15 pb-24 md:pt-22 md:pb-22 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-24 text-black">Why Choose WeNest Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
              {whyChooseFeatures.map((feature, idx) => (
                <div key={idx} className="relative group pt-6">
                  {/* Square Icon Box */}
                  <div className="absolute top-0 left-0 w-14 h-14 bg-[#D1CCBF] rounded-[10px] flex items-center justify-center z-20 shadow-sm">
                    <img src={feature.icon} alt="icon" className="w-6 h-6 object-contain opacity-90" />
                  </div>

                  {/* Main White Card */}
                  <div className="bg-white p-10 pt-16 rounded-[30px] shadow-sm group-hover:shadow-md transition-all h-full flex flex-col items-center text-center border border-white/10">
                    <h4 className="text-[20px] font-bold mb-5 text-[#000000] leading-tight px-2">
                      {feature.title}
                    </h4>
                    <p className="text-[#5A5858] text-[14px] leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- LANDTHREE SECTION --- */}
      <section className="relative overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={shows} 
            alt="" 
            className="w-full h-full object-cover opacity-100" 
          />
        </div>
        <div className="relative z-10">
          <Landthree />
        </div>
      </section>

    </div>
  );
};

export default LandingTwo;