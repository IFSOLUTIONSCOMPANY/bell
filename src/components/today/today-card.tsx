"use client";



interface TodoItem {
  room: string;
  tags: string[];
  title: string;
  description: string;
  timestamp: string;
  author: string;
}

interface TodayCardProps {
  className?: string;
  todoItems?: TodoItem[];
}

export const TodayCard: React.FC<TodayCardProps> = ({ 
  className = '',
  todoItems = [
    {
      room: '608',
      tags: ['Housekeeping', 'Front Office'],
      title: 'Late Checkout',
      description: 'Mr.Dupont will late checkout at 3:00 PM. He already paid for it by cash.',
      timestamp: '09:24',
      author: 'Ilian Mountassir'
    },
    {
      room: '405',
      tags: ['Room Service'],
      title: 'Breakfast Order',
      description: 'Continental breakfast at 7:30 AM for 2 persons.',
      timestamp: '08:15',
      author: 'Marie Leblanc'
    },
    {
      room: '302',
      tags: ['Maintenance'],
      title: 'TV Not Working',
      description: 'Guest reports TV not turning on. Remote batteries replaced but still not working.',
      timestamp: '07:45',
      author: 'Paul Martin'
    }
  ]
}) => {
  return (
    <div className={`w-full h-auto lg:h-[490px] bg-[#65413D] rounded-[35px] border-[0.5px] border-[rgba(85,70,64,0.2)] shadow-sm relative ${className}`}>
      {/* Titre */}
      <div className="p-6">
        <h2 className="font-['Jubilat'] font-normal text-[28px] text-[#E5DED4]">
          Today
        </h2>
        
        {/* Flèche de navigation */}
        <div className="absolute right-6 top-6 w-[40px] h-[40px] rounded-full bg-[rgba(229,222,212,0.15)] flex items-center justify-center">
          <div className="w-5 h-5 text-[#E5DED4] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        
        {/* Carte todo avec effet de pile - style plus proche de l'image de référence */}
        <div className="relative mx-auto mt-10">
          {/* Cartes empilées en fond */}
          <div className="relative mx-auto" style={{ height: '320px' }}>
            {/* Cartes en arrière-plan - cartes 3 et 2 */}
            <div 
              className="absolute top-0 left-0 right-0 mx-auto w-[85%] h-[100px] bg-[#E5DED4] opacity-70 rounded-[25px] shadow-sm"
              style={{ transform: 'translateY(30px)' }}
            ></div>
            
            <div 
              className="absolute top-0 left-0 right-0 mx-auto w-[92%] h-[120px] bg-[#E5DED4] opacity-85 rounded-[25px] shadow-sm"
              style={{ transform: 'translateY(15px)' }}
            ></div>
            
            {/* Carte principale au premier plan */}
            <div className="absolute top-0 left-0 right-0 mx-auto w-full bg-[#E5DED4] rounded-[25px] shadow-md p-6">
              {/* Tags dans un conteneur flex avec espace pour s'aligner sur une ligne */}
              <div className="flex flex-wrap gap-2 mb-5">
                {/* Room Tag */}
                <div className="h-[32px] bg-[#D18730] rounded-full flex items-center justify-center px-5">
                  <span className="font-medium text-[14px] text-center text-white">
                    Room #{todoItems[0].room}
                  </span>
                </div>
                
                {/* Autres Tags */}
                {todoItems[0].tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="h-[32px] bg-[#65413D] rounded-[15px] flex items-center justify-center px-5">
                    <span className="font-medium text-[14px] text-center text-white">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Titre */}
              <h3 className="font-['Jubilat'] font-[500] text-[32px] leading-[1.2] text-[#65413D]">
                {todoItems[0].title}
              </h3>
              
              {/* Description */}
              <p className="mt-4 font-light text-[16px] leading-[1.4] text-[rgba(101,65,61,0.7)]">
                {todoItems[0].description}
              </p>
              
              {/* Timestamp & Auteur */}
              <p className="mt-10 text-right font-light text-[14px] text-[rgba(101,65,61,0.5)]">
                {todoItems[0].timestamp} by {todoItems[0].author}
              </p>
            </div>
          </div>
          
          {/* Bouton flèche vers le bas - bien séparé de la carte */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 w-[40px] h-[40px] rounded-full bg-[#E5DED4] shadow-sm flex items-center justify-center cursor-pointer z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#65413D" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayCard; 