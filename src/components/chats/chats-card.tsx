"use client";



interface ChatsCardProps {
  className?: string;
}

export const ChatsCard: React.FC<ChatsCardProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-[220px] md:h-[250px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-[35px] p-6 relative overflow-hidden ${className}`}>
      <h2 className="font-['Jubilat'] font-normal text-[28px] text-[#65413D] relative z-10">
        Chats
      </h2>

      {/* Flèche de navigation */}
      <div className="absolute right-6 top-6 w-[40px] h-[40px] rounded-full bg-[rgba(221,176,104,0.1)] flex items-center justify-center z-10">
        <div className="w-5 h-5 text-[#DDB068] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      
      {/* Formes organiques exactement comme dans l'image */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-gradient-to-br from-[#DDB068]/30 to-[#DDB068]/60 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px]"></div>
      
      {/* Cercle plus petit */}
      <div className="absolute top-[40%] left-[30%] w-[60px] h-[60px] bg-[#DDB068] rounded-full opacity-80"></div>
    </div>
  );
};

export default ChatsCard; 