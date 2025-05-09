"use client";

interface MobileNavProps {
  className?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ className = '' }) => {
  return (
    <div className={`fixed top-6 right-6 z-40 ${className}`}>
      <button 
        className="w-[45px] h-[45px] flex flex-col items-center justify-center gap-[6px] rounded-full border-[0.7px] border-[#65413D]"
        aria-label="Menu"
      >
        <span className="w-[20px] h-[2.5px] bg-[#65413D]"></span>
        <span className="w-[20px] h-[2.5px] bg-[#65413D]"></span>
        <span className="w-[20px] h-[2.5px] bg-[#65413D]"></span>
      </button>
    </div>
  );
};

export default MobileNav; 