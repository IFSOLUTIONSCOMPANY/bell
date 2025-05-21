"use client";

import Image from 'next/image';

interface WelcomeViewProps {
  className?: string;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ className = '' }) => {
  return (
    <div className={`welcome-message relative z-10 pt-[110px] pb-[20px] px-6 overflow-y-auto max-h-[calc(100vh-250px)] ${className}`}>
      {/* Status info bar est maintenant fixe, pas besoin de l'inclure ici */}
      
      {/* Welcome message with Bell icon */}
      <div className="text-center mt-3">
        <h2 className="font-['Jubilat'] text-[36px] leading-[1.25] text-[#65413D] mb-6">
          How can I help you
          <br />
          this morning ?
        </h2>
        
        {/* Bell icon below the text */}
        <div className="flex justify-center mt-12">
          <Image 
            src="/icons/mobile-chat/bell-logo.svg"
            width={100}
            height={86}
            alt="Bell"
            className="text-[#F2930D]"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeView; 