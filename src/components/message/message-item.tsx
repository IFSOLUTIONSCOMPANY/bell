"use client";

import Image from 'next/image';
interface MessageItemProps {
  name: string;
  message: string;
  timestamp: string;
  service: string;
  priority: 'High' | 'Medium' | 'Low';
  avatar?: string;
  className?: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  name,
  message,
  timestamp,
  service,
  priority,
  avatar,
  className = ''
}) => {
  const priorityColor = {
    High: 'bg-[#DE4B21]',
    Medium: 'bg-[#DDB068]',
    Low: 'bg-[#65413D]/50'
  }[priority];

  return (
    <div className={`w-full h-auto min-h-[90px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-md backdrop-blur-md rounded-[25px] p-4 md:p-5 relative transition-all hover:shadow-lg ${className}`}>
      {/* Indicateur rouge à gauche (visible seulement si la classe inclut border-l-[#DE4B21]) */}
      <div className="flex items-start">
        <div className="relative">
          {/* Indicateur rouge (notification) */}
          <div className="w-[12px] h-[12px] bg-[#DE4B21] rounded-full absolute top-0 left-0 z-10"></div>
          
          {/* Avatar */}
          <div className="w-[50px] h-[50px] rounded-full bg-[rgba(101,65,61,0.5)] ml-4 mr-4 flex-shrink-0">
            {avatar && <Image src={avatar} alt={name} className="w-full h-full rounded-full object-cover" width={100} height={100} />}
          </div>
        </div>
        
        <div className="flex-1 ml-2">
          {/* Nom */}
          <h4 className="text-[16px] font-semibold text-[#65413D]">
            {name}
          </h4>
          
          {/* Message */}
          <p className="mt-1 text-[14px] font-light text-[rgba(101,65,61,0.7)]">
            {message}
          </p>
        </div>
      </div>
      
      {/* Métadonnées du message (date, service, priorité) */}
      <div className="flex items-center gap-13 flex-wrap mt-3 md:mt-0 md:absolute md:right-5 md:top-1/2 md:transform md:-translate-y-1/2">
        {/* Service */}
        <div className="h-[45px] bg-[rgba(217,208,195,0.5)] border-[0.5px] border-[#BDB1A8] shadow-sm backdrop-blur-md rounded-[15px] flex items-center justify-center px-12">
          <span className="text-[13px] font-medium text-[#65413D]">
            {service}
          </span>
        </div>

        {/* Date */}
        <div className="text-right text-[14px] font-medium text-[#65413D]">
          {timestamp}
        </div>
        
        
        {/* Priorité */}
        <div className={`h-[45px] ${priorityColor} shadow-sm backdrop-blur-md rounded-[15px] flex items-center justify-center px-12`}>
          <span className="text-[13px] font-medium text-white">
            {priority}
          </span>
        </div>

      </div>
    </div>
  );
};

export default MessageItem; 