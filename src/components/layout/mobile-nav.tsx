"use client";


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

interface MobileNavProps {
  className?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ className = '' }) => {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: 'solar:home-bold-duotone' },
    { name: 'Chats', href: '/chats', icon: 'solar:chat-round-dots-bold-duotone' },
    { name: 'Bookings', href: '/bookings', icon: 'solar:calendar-bold-duotone' },
    { name: 'Rooms', href: '/rooms', icon: 'solar:bed-bold-duotone' },
    { name: 'Analytics', href: '/analytics', icon: 'solar:chart-bold-duotone' },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 z-50 w-full md:hidden bg-[rgba(250,249,245,0.7)] backdrop-blur-md border-t border-[rgba(217,208,195,0.5)] shadow-sm ${className}`}>
      <div className="flex justify-around items-center h-16">
        {navigation.map((item) => (
          <Link 
            key={item.name}
            href={item.href}
            className={`flex items-center justify-center w-12 h-12 rounded-full ${
              pathname === item.href ? 'bg-[#65413D]' : ''
            }`}
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
    </nav>
  );
};

export default MobileNav; 