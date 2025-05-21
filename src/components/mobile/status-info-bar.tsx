"use client";

interface StatusInfoBarProps {
  roomNumber?: string;
  hotelName?: string;
  className?: string;
}

export const StatusInfoBar: React.FC<StatusInfoBarProps> = ({
  roomNumber = "Room #1023",
  hotelName = "Oceania Porte de Versailles",
  className = ''
}) => {
  const baseClasses = `
    status-info-bar
    box-border mx-auto max-w-[68%] h-[46px] 
    bg-[rgba(234,230,220,0.2)] border-[0.7px] border-[#D9D0C3] 
    backdrop-blur-md rounded-[15px] 
    flex items-center justify-between px-5
    fixed top-[50px] left-1/2 -translate-x-1/2 
    w-[80%] h-[46px] z-40
    mt-3
  `;
  
  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="font-medium text-[11.5px] text-[#65413D]">
        {roomNumber}
      </div>
      <div className="font-light text-[11.5px] text-[#65413D]">
        {hotelName}
      </div>
    </div>
  );
};

export default StatusInfoBar; 