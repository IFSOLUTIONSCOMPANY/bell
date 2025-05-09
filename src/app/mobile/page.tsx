'use client'
import { useState } from 'react';

export default function MobilePage() {
  const [showConversation, setShowConversation] = useState(false);
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F2F1EA]">
      {/* Background avec effet de gradient et flou léger */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/mesh-gradient.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[rgba(239,237,228,0.5)] backdrop-blur-[100px]"></div>
      </div>
      
      {/* Status bar (iPhone style) */}
      <div className="fixed top-0 left-0 right-0 h-[44px] flex justify-between items-center px-5 pt-2 z-50">
        <div className="text-[15px] font-medium text-[#65413D]">9:41</div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[172px] h-[30px] bg-black rounded-b-[18px] z-10"></div>
        <div className="flex items-center gap-1">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5C1 5 3 2 5.5 2C8 2 10 5 10 5C10 5 8 8 5.5 8C3 8 1 5 1 5Z" stroke="#65413D" strokeWidth="1.5"/>
            <path d="M13.5 1.5L15.5 5.5L13.5 9.5" stroke="#65413D" strokeWidth="1.5"/>
            <path d="M9.5 10.5L8 11" stroke="#65413D" strokeWidth="1.5"/>
          </svg>
          <div className="w-6 h-3 border border-[#65413D] rounded-sm relative">
            <div className="absolute inset-[1px] right-[3px] bg-[#65413D] rounded-[1px]"></div>
          </div>
        </div>
      </div>
      
      {/* Header avec logo Bell, hamburger menu et profile */}
      <div className="fixed top-[44px] left-0 right-0 px-6 py-4 flex justify-between items-center z-40 bg-[rgba(242,241,234,0.5)] backdrop-blur-sm">
        <button className="w-[40px] h-[40px] flex flex-col items-center justify-center gap-[5px]">
          <span className="w-[18px] h-[2px] bg-[#65413D] rounded-full"></span>
          <span className="w-[18px] h-[2px] bg-[#65413D] rounded-full"></span>
          <span className="w-[18px] h-[2px] bg-[#65413D] rounded-full"></span>
        </button>
        
        <div className="text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="font-['Jubilat'] text-[32px] text-[#65413D] tracking-normal">Bèll</span>
        </div>
        
        <button className="w-[40px] h-[40px] rounded-full border border-[#65413D] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" stroke="#65413D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.4425 16.5C15.4425 13.5975 12.5775 11.25 9 11.25C5.4225 11.25 2.5575 13.5975 2.5575 16.5" stroke="#65413D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Page d'accueil */}
      {!showConversation && (
        <div className="relative z-10 pt-[110px] pb-[120px] px-6">
          {/* Status bar */}
          <div className="box-border w-full h-[46px] bg-[rgba(234,230,220,0.2)] border-[0.7px] border-[#D9D0C3] backdrop-blur-md rounded-[10px] flex items-center justify-between px-5 mb-10">
            <div className="font-medium text-[11.5px] text-[#65413D]">
              Room #1023
            </div>
            <div className="font-light text-[11.5px] text-[#65413D]">
              Oceania Porte de Versailles
            </div>
          </div>
          
          {/* Welcome message et icon central */}
          <div className="text-center mb-20 mt-24">
            <div className="w-[100px] h-[100px] mx-auto mb-8">
              <svg width="100" height="100" viewBox="0 0 172 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.833 63.9167C82.833 54.7025 90.2775 47.25 99.4999 47.25H155.333C164.555 47.25 172 54.7025 172 63.9167V106.417C172 115.631 164.555 123.083 155.333 123.083H99.4999C90.2775 123.083 82.833 115.631 82.833 106.417V63.9167Z" fill="#D18730" fillOpacity="0.15"/>
                <path d="M59.5835 139.75C92.4918 139.75 119.167 113.075 119.167 80.1667C119.167 47.2583 92.4918 20.5833 59.5835 20.5833C26.6751 20.5833 0 47.2583 0 80.1667C0 113.075 26.6751 139.75 59.5835 139.75Z" fill="#D18730" fillOpacity="0.15"/>
                <path d="M134.983 28.1548C140.036 23.1022 140.036 14.9549 134.983 9.90236L134.184 9.10339C129.131 4.05086 120.984 4.05086 115.932 9.10339L77.9142 47.1212C72.8617 52.1737 72.8617 60.321 77.9142 65.3736L78.7132 66.1726C83.7657 71.2251 91.913 71.2251 96.9655 66.1726L134.983 28.1548Z" fill="#D18730" fillOpacity="0.15"/>
                <path d="M86.6332 138.947C86.6332 119.684 102.284 104.034 121.546 104.034H121.546C140.809 104.034 156.459 119.684 156.459 138.947V138.947C156.459 138.947 156.459 138.947 156.459 138.947H86.6332C86.6332 138.947 86.6332 138.947 86.6332 138.947V138.947Z" fill="#D18730" fillOpacity="0.15"/>
              </svg>
            </div>
            <h2 className="font-['Jubilat'] text-[36px] text-[#65413D]">
              How can I help you<br />this morning ?
            </h2>
          </div>
        </div>
      )}
      
      {/* Page conversation */}
      {showConversation && (
        <div className="relative z-10 pt-[110px] pb-[130px] px-6">
          {/* Status bar */}
          <div className="box-border w-full h-[46px] bg-[rgba(234,230,220,0.2)] border-[0.7px] border-[#D9D0C3] backdrop-blur-md rounded-[10px] flex items-center justify-between px-5 mb-6">
            <div className="font-medium text-[11.5px] text-[#65413D]">
              Room #1023
            </div>
            <div className="font-light text-[11.5px] text-[#65413D]">
              Oceania Porte de Versailles
            </div>
          </div>
          
          {/* User message */}
          <div className="flex justify-end mb-4 mt-20">
            <div className="max-w-[80%] bg-white rounded-[18px] shadow-sm p-4">
              <p className="text-[16px] text-[#65413D]">
                I would like to book a table for two at my hotel&apos;s restaurant for tonight please.
              </p>
            </div>
          </div>
          
          {/* Bell response */}
          <div className="flex justify-start mb-4">
            <div className="max-w-[90%] bg-[rgba(242,241,234,0.3)] backdrop-blur-sm border border-[#D8D1C5] rounded-[18px] p-4">
              <p className="text-[16px] text-[#65413D] leading-relaxed font-['Jubilat'] font-light">
                Good morning !
                <br /><br />
                I&apos;d be delighted to help you reserve a table for two at our restaurant tonight.
                <br /><br />
                Could you please let me know your preferred dining time ? Our dinner service runs from 5:30 PM to 10:30 PM (last seating).
                <br /><br />
                We also offer our intimate Chef&apos;s Table experience and window seating upon request, subject to availability.
              </p>
            </div>
          </div>
          
          {/* Typing indicator */}
          <div className="flex mb-16">
            <div className="w-3 h-3 bg-[#D18730] rounded-full mr-1"></div>
          </div>
          
          {/* Error message */}
          <div className="text-right mb-3 absolute bottom-[120px] right-6">
            <p className="text-[8.5px] text-[rgba(101,65,61,0.33)] leading-[11px]">
              Bell can make mistakes.<br />
              Please double-check responses.
            </p>
          </div>
          
          {/* Back button */}
          <div className="fixed top-[110px] left-6 z-40">
            <button 
              onClick={() => setShowConversation(false)}
              className="w-[40px] h-[40px] rounded-full bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2383 16.5L7.73828 11L13.2383 5.5" stroke="#65413D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Service tags - Scrollable horizontal en bas */}
      {!showConversation && (
        <div className="fixed bottom-[130px] left-0 right-0 overflow-x-auto pb-2 px-6">
          <div className="flex gap-3 w-max">
            <div className="h-[38px] px-6 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">📑 Guide</span>
            </div>
            <div className="h-[38px] px-6 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">🏨 Amenities</span>
            </div>
            <div className="h-[38px] px-6 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">👨‍🍳 Room Service</span>
            </div>
            <div className="h-[38px] px-6 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">🧹 Housekeeping</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat input bar - Fixé en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-[rgba(242,241,234,0.7)] backdrop-blur-md pt-4 pb-8 px-6 z-30">
        <div className="w-full h-[60px] bg-[rgba(255,255,255,0.5)] border-[1px] border-[#D8D1C5] rounded-full shadow-sm backdrop-blur-md px-5 flex items-center mb-5">
          <input 
            type="text" 
            placeholder="Chat with Bell..." 
            className="flex-1 bg-transparent text-[17px] text-[#A59582] placeholder-[#A59582] border-none focus:outline-none"
            onClick={() => !showConversation && setShowConversation(true)}
          />
        </div>
        
        {/* Buttons below input */}
        <div className="flex justify-center gap-4">
          {/* Button plus */}
          <button className="w-[52px] h-[52px] rounded-full border border-[rgba(165,149,130,0.33)] bg-[rgba(255,255,255,0.5)] flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 4.125V17.875" stroke="#A59582" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.125 11H17.875" stroke="#A59582" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Button speak */}
          <button className="w-[52px] h-[52px] rounded-full border border-[rgba(165,149,130,0.33)] bg-[rgba(255,255,255,0.5)] flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.375C9.76055 1.375 8.76172 2.37383 8.76172 3.61328V11.4102C8.76172 12.6496 9.76055 13.6484 11 13.6484C12.2395 13.6484 13.2383 12.6496 13.2383 11.4102V3.61328C13.2383 2.37383 12.2395 1.375 11 1.375Z" stroke="#A59582" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.9404 9.48047V11.4104C16.9404 14.6631 14.2527 17.3508 11 17.3508C7.74727 17.3508 5.05957 14.6631 5.05957 11.4104V9.48047" stroke="#A59582" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 17.3516V20.625" stroke="#A59582" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.29883 20.625H14.7012" stroke="#A59582" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
} 