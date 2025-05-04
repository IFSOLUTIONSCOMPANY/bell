"use client";



interface ActivityMetric {
  label: string;
  value: string | React.ReactNode;
}

interface ActivityCardProps {
  className?: string;
  metrics?: ActivityMetric[];
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ 
  className = '',
  metrics = [
    { label: 'Check-In', value: '12' },
    { label: 'Check-Out', value: '09' },
    { label: 'Occupancy', value: <><span>68</span><span className="text-[40px] md:text-[50px]">%</span></> },
    { label: 'Satisfaction', value: <><span>4.7</span><span className="text-[#65413D] text-2xl mt-4">★</span></> }
  ]
}) => {
  return (
    <div className={`col-span-1 md:col-span-2 lg:col-span-2 w-full h-auto min-h-[250px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-[35px] p-6 relative ${className}`}>
      <h2 className="font-['Jubilat'] font-normal text-[28px] text-[#65413D]">
        Activity
      </h2>
      
      {/* Flèche de navigation */}
      <div className="absolute right-6 top-6 w-[40px] h-[40px] rounded-full bg-[rgba(221,176,104,0.1)] flex items-center justify-center">
        <div className="w-5 h-5 text-[#DDB068] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      
      {/* Métriques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <span className="block text-[14px] md:text-[16px] font-light text-[#9C8473]">
              {metric.label}
            </span>
            <div className="text-[64px] md:text-[90px] lg:text-[100px] font-semibold text-[#65413D] leading-[0.9] tracking-[-3px] flex items-start">
              {typeof metric.value === 'string' ? metric.value : metric.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard; 