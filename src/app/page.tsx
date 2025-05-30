
import { ChatsCard } from '@/components/chats';
import { TodayCard } from '@/components/today';
import { ActivityCard } from '@/components/activity';
import { MessageList } from '@/components/message';
import { Icon } from '@iconify/react';
import Image from 'next/image';
export default function Home() {
  const messages = [
    {
      id: '1',
      name: 'Mr. Maël Mountassir',
      message: 'The AC is leaking in my room, can you send the maintenance please?',
      timestamp: '16 / 03 / 2025 09:42',
      service: 'Maintenance',
      priority: 'High' as const
    },
    {
      id: '2',
      name: 'Mr. Maël Mountassir',
      message: 'The AC is leaking in my room, can you send the maintenance please?',
      timestamp: '16 / 03 / 2025 09:42',
      service: 'Maintenance',
      priority: 'High' as const
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#EFEDE4] pb-20 md:pb-0 px-4 pt-4 md:p-6">
      {/* Background avec effet de flou */}
      <div className="absolute inset-0 bg-[rgba(239,237,228,0.5)] backdrop-blur-[375px]"></div>
      
      {/* Logo Bell - fixé en haut à gauche */}
      <div className="fixed top-4 left-4 w-[60px] h-[60px] z-50">
        <Image src="/icons/bell-icon.svg" alt="Bell Logo" className="w-full h-full" width={100} height={100} />
      </div>
      
      {/* Logo Profile - fixé en bas à gauche */}
      <div className="fixed bottom-4 left-4 w-[60px] h-[60px] z-50">
        <Image src="/icons/icon-profile.svg" alt="Profile" className="w-full h-full" width={100} height={100} />
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-[1400px] mx-auto">        
        {/* Status Bar */}
        <div className="box-border w-full md:w-[530px] mx-auto h-[50px] md:h-[60px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-full flex items-center justify-between px-6 mb-6">
          <div className="font-medium text-[16px] text-[#65413D]">
            Desk
          </div>
          <div className="font-light text-[16px] text-[#65413D]">
            Oceania Porte de Versailles
          </div>
        </div>
        
        {/* Settings Button */}
        <div className="absolute top-4 right-4 md:top-5 md:right-5 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[rgba(250,249,245,0.7)] rounded-full border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md flex items-center justify-center">
          <Icon icon="solar:settings-bold-duotone" width="24" height="24" className="text-[#65413D]" />
        </div>
        
        {/* Grid layout pour desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {/* CHATS */}
          <ChatsCard />
          
          {/* REQUESTS */}
          <div className="w-full h-[220px] md:h-[250px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-[35px] p-6 relative">
            <h2 className="font-['Jubilat'] font-normal text-[28px] text-[#65413D]">
              Requests
            </h2>
            
            {/* Enter Tab */}
            <div className="absolute right-6 top-6 w-[40px] h-[40px] rounded-full bg-[rgba(221,176,104,0.1)] flex items-center justify-center">
              <Icon icon="solar:arrow-right-bold-duotone" width="20" height="20" className="text-[#DDB068]" />
            </div>
            
            {/* Circular chart */}
            <div className="absolute right-16 top-16 w-[120px] h-[120px] rounded-full border-[15px] border-[rgba(101,65,61,0.15)] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[15px] border-transparent border-t-[#65413D] border-r-[#65413D]"></div>
            </div>
            
            {/* Services et barres */}
            <div className="mt-14 w-[60%]">
              <div className="flex items-center mb-4 gap-4">
                <div className="w-4 h-4 rounded-sm bg-[rgba(101,65,61,0.9)]"></div>
                <span className="text-[14px] font-light text-[#65413D]">Room Service</span>
              </div>
              <div className="flex items-center mb-4 gap-4">
                <div className="w-4 h-4 rounded-sm bg-[rgba(101,65,61,0.5)]"></div>
                <span className="text-[14px] font-light text-[#65413D]">Spa & Massage</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-sm bg-[rgba(101,65,61,0.25)]"></div>
                <span className="text-[14px] font-light text-[#65413D]">Housekeeping</span>
              </div>
            </div>
          </div>
          
          {/* TODAY */}
          <TodayCard className="lg:row-span-2" />
          
          {/* ACTIVITY */}
          <ActivityCard />
        </div>
        
        {/* Filtres et recherche */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="w-full h-[50px] md:h-[60px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-full flex items-center px-5">
            <span className="text-[16px] font-medium text-[rgba(101,65,61,0.5)]">
              Search
            </span>
            <div className="ml-auto">
              <Icon icon="solar:magnifer-bold-duotone" width="20" height="20" className="text-[#65413D]" />
            </div>
          </div>
          
          <div className="w-full h-[50px] md:h-[60px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-full flex items-center px-5">
            <span className="text-[16px] font-medium text-[#65413D]">
              Maintenance
            </span>
            <div className="ml-auto">
              <Icon icon="solar:alt-arrow-down-bold-duotone" width="20" height="20" className="text-[#65413D]" />
            </div>
          </div>
          
          <div className="w-full h-[50px] md:h-[60px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-full flex items-center px-5">
            <span className="text-[16px] font-medium text-[#65413D]">
              Date
            </span>
            <div className="ml-auto">
              <Icon icon="solar:alt-arrow-down-bold-duotone" width="20" height="20" className="text-[#65413D]" />
            </div>
          </div>
          
          <div className="w-full h-[50px] md:h-[60px] bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm backdrop-blur-md rounded-full flex items-center px-5">
            <span className="text-[16px] font-medium text-[#65413D]">
              Priority
            </span>
            <div className="ml-auto">
              <Icon icon="solar:alt-arrow-down-bold-duotone" width="20" height="20" className="text-[#65413D]" />
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <MessageList messages={messages} />
      </div>
    </main>
  );
} 