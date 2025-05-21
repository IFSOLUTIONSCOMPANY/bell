"use client";

import { MoreButtonIcon, SpeakButtonIcon } from '../icons';

interface ChatInputProps {
  className?: string;
  onFocus?: () => void;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  className = '',
  onFocus,
  placeholder = "Chat with Bell..."
}) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 rounded-t-[50px] bg-[rgba(234,230,220,0.9)] border-t-[1px] border-white blur-backdrop pt-4 pb-8 px-6 z-40 ${className}`}>
      <div className="w-full h-[60px] border-[1px] border-white shadow-lg rounded-full bell-shadow bg-[rgba(245,244,239,0.75)] px-5 flex items-center mb-5">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[17px] text-[#A59582] placeholder-[#A59582] border-none focus:outline-none"
          onClick={onFocus}
        />
      </div>

      {/* Buttons below input */}
      <div className="flex justify-between">
        {/* More button */}
        <button className="w-[40px] h-[40px] rounded-full border border-[rgba(165,149,130,0.33)] flex items-center justify-center">
          <MoreButtonIcon />
        </button>

        {/* Speak button */}
        <button className="w-[40px] h-[40px] rounded-full border border-[rgba(165,149,130,0.33)] flex items-center justify-center">
          <SpeakButtonIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatInput; 