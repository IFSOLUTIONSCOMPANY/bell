"use client";


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: 'fluent:clover-48-regular' },
    { name: 'Chats', href: '/chats', icon: 'solar:chat-round-dots-bold-duotone' },
    { name: 'Bookings', href: '/bookings', icon: 'solar:calendar-bold-duotone' },
    { name: 'Rooms', href: '/rooms', icon: 'solar:bed-bold-duotone' },
    { name: 'Analytics', href: '/analytics', icon: 'solar:chart-bold-duotone' },
  ];

  return (
    <>
      {/* Desktop sidebar (left) - basé sur l'image */}
      <aside 
        className={`hidden md:block fixed left-[24px] top-[calc(50%-320px/2)] h-[320px] w-[70px] bg-[rgba(250,249,245,0.5)] border-[0.5px] border-[#D9D0C3] shadow-[0px_0px_20px_rgba(101,65,61,0.05),0px_1px_5px_rgba(101,65,61,0.1)] backdrop-blur-[12.5px] rounded-[35px] z-10 ${className}`}
      >
        <div className="flex flex-col items-center h-full py-6 relative">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`mb-6 p-2 rounded-full ${pathname === item.href ? 'bg-[#65413D]' : ''}`}
            >
              <Icon 
                icon={item.icon} 
                width="24" 
                height="24"
                className={pathname === item.href ? 'text-white' : 'text-[#65413D] opacity-70'}
              />
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 