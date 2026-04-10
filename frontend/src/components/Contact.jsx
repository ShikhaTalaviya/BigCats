import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6" ref={ref}>
      <div className={`max-w-[1200px] mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-[#C9A84C] font-['Playfair_Display'] font-bold text-[32px] md:text-[48px] mb-8 md:mb-12 text-center">
          Get In Touch
        </h2>

        {/* Email Section */}
        <div className="text-center mb-10 md:mb-14">
          <a
            href="mailto:info@bigcatsentertainment.com"
            className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[18px] md:text-[28px] hover:text-white transition-all duration-500 block mb-3 break-words transform hover:scale-105"
          >
            info@bigcatsentertainment.com
          </a>
          <a
            href="mailto:bigcatsfilm@gmail.com"
            className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[18px] md:text-[28px] hover:text-white transition-all duration-500 block break-words transform hover:scale-105"
          >
            bigcatsfilm@gmail.com
          </a>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[900px] mx-auto">
          {/* Head Office - India */}
          <div className="text-center md:text-left">
            <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[20px] md:text-[24px] mb-4">
              Head Office
            </h3>
            <div className="text-white font-['Montserrat'] text-[13px] md:text-[14px] leading-relaxed space-y-1">
              <p className="font-semibold">Big Cats Entertainment</p>
              <p>4, Chandragupt apt,</p>
              <p>Ambawadi,</p>
              <p>Ahmedabad 380015</p>
              <p>India</p>
              <a 
                href="tel:+919824844777"
                className="block mt-3 text-[#C9A84C] hover:text-white transition-colors duration-300"
              >
                +91 9824844777
              </a>
            </div>
          </div>

          {/* Branch Office - Australia */}
          <div className="text-center md:text-left">
            <h3 className="text-[#C9A84C] font-['Playfair_Display'] font-semibold text-[20px] md:text-[24px] mb-4">
              Branch Office
            </h3>
            <div className="text-white font-['Montserrat'] text-[13px] md:text-[14px] leading-relaxed space-y-1">
              <p className="font-semibold">Big Cats Entertainment</p>
              <p>Nankeen Loop,</p>
              <p>Beveridge,</p>
              <p>Victoria 3753</p>
              <p>Australia</p>
              <a 
                href="tel:+61491061844"
                className="block mt-3 text-[#C9A84C] hover:text-white transition-colors duration-300"
              >
                +61 491 061 844
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
