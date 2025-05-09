"use client";
import { useState } from "react";
import localFont from "next/font/local";

import {
  StatusBarIcon,
  BellLogoIcon,
  ProfileIcon,
  BellHeaderIcon,
  SpeakButtonIcon,
  MoreButtonIcon,
} from "@/components/icons";

const JubilatFont = localFont({
  src: "../../../public/fonts/Jubilat-Light.otf",
});

const AcuminFont = localFont({
  src: "../../../public/fonts/Acumin-RPro.otf",
});

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
      <div className="fixed top-0 left-0 right-0 h-[44px] flex items-center px-5 pt-2 z-50">
        <span className="text-black font-medium">9:41</span>

        {/* Pillule absolument centrée */}
        <span
          className="absolute left-1/2 top-1/2 
               transform -translate-x-1/2 -translate-y-1/2
               bg-black w-[120px] h-[28px] rounded-full"
        />

        <div className="ml-auto">
          <StatusBarIcon />
        </div>
      </div>

      {/* Header avec logo Bell, hamburger menu et profile */}
      <div className="fixed top-[44px] left-0 right-0 px-6 py-4 flex justify-between items-center z-40 ">
        <button className="w-[40px] h-[40px] flex flex-col items-center justify-center gap-[5px]">
          <span className="w-[18px] h-[2px] bg-[#65413D] rounded-full"></span>
          <span className="w-[18px] h-[2px] bg-[#65413D] rounded-full"></span>
          <span className="w-[18px] h-[2px] bg-[#65413D] rounded-full"></span>
        </button>

        <div className="text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="tracking-normal">
            <BellHeaderIcon />
          </span>
        </div>

        <button className="w-[40px] h-[40px] flex items-center justify-center">
          <ProfileIcon />
        </button>
      </div>

      {/* Page d'accueil */}
      {!showConversation && (
        <div className="relative z-10 pt-[110px] pb-[120px] px-6">
          {/* Status bar */}
          <div className="box-border mx-auto max-w-[80%] h-[46px] bg-[rgba(234,230,220,0.2)] border-[0.7px] border-[#D9D0C3] backdrop-blur-md rounded-[15px] flex items-center justify-between px-5 mt-5">
            <div className="font-medium text-[11.5px] text-[#65413D]">
              Room #1023
            </div>
            <div className="font-light text-[11.5px] text-[#65413D]">
              Oceania Porte de Versailles
            </div>
          </div>

          {/* Welcome message et icon central */}
          <div className="text-center mb-20 mt-24">
            <div className="flex justify-center mt-40 mb-4">
              <BellLogoIcon />
            </div>
            <h2 className="font-['Jubilat'] text-[36px] text-[#65413D]">
              How can I help you
              <br />
              this morning ?
            </h2>
          </div>
        </div>
      )}

      {/* Page conversation */}
      {showConversation && (
        <div className="relative z-10 pt-[110px] pb-[130px] px-6">
          {/* Status bar */}
          <div
            className="box-border fixed top-[100px] left-1/2 -translate-x-1/2 
                  w-[80%] h-[46px] mt-5
                  bg-[rgba(234,230,220,0.2)] border-[0.7px] border-[#D9D0C3]                   
                  backdrop-blur-md rounded-[15px]
                  flex items-center justify-center px-5"
          >
            <div className="font-medium text-[11.5px] text-[#65413D] pr-4">
              Room #1023
            </div>
            <div className="font-light text-[11.5px] text-[#65413D]">
              Oceania Porte de Versailles
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end mb-4 mt-20">
            <div className="max-w-[80%] bg-[#F2F1EA] border-t-white border-1 rounded-[18px] shadow-lg p-4">
              <p className={`${AcuminFont.className} text-[#65413D]`}>
                I would like to book a table for two at my hotel&apos;s
                restaurant for tonight please.
              </p>
            </div>
          </div>

          {/* Bell response */}
          <div className="flex justify-start mb-2">
            <div className="max-w-[90%] p-4">
              <div
                className={`${JubilatFont.className} text-[16px] text-[#65413D] leading-relaxed space-y-4`}
              >
                <p>
                  Good morning !
                  <br />
                  I&apos;d be delighted to help you reserve a table for two at
                  our restaurant tonight.
                </p>
                <p>
                  Could you please let me know your preferred dining time ? Our
                  dinner service runs from 5:30 PM to 10:30 PM (last seating).
                </p>
                <p>
                  We also offer our intimate Chef&apos;s Table experience and
                  window seating upon request, subject to availability.
                </p>
              </div>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="flex">
            <div className="w-3 h-3 bg-[#D18730] rounded-full mr-1"></div>
          </div>

          {/* Error message */}
          <div className="text-right mb-16">
            <p className="text-[8.5px] text-[rgba(101,65,61,0.33)] leading-[11px]">
              Bell can make mistakes.
              <br />
              Please double-check responses.
            </p>
          </div>

          {/* Back button */}
          <div className="fixed top-[110px] left-6 z-40">
            <button
              onClick={() => setShowConversation(false)}
              className="w-[40px] h-[40px] rounded-full bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2383 16.5L7.73828 11L13.2383 5.5"
                  stroke="#65413D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Service tags - Scrollable horizontal en bas */}
      {!showConversation && (
        <div className="fixed bottom-[180px] left-0 right-0 overflow-x-auto pb-4 px-6">
          <div className="flex gap-3 w-max">
            <div className="h-[38px] px-2 bg-[#EAE6DC] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">📑 Guide</span>
            </div>
            <div className="h-[38px] px-2 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">🏨 Amenities</span>
            </div>
            <div className="h-[38px] px-2 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">
                👨‍🍳 Room Service
              </span>
            </div>
            <div className="h-[38px] px-2 bg-[rgba(234,230,220,0.8)] border-[1px] border-[#D8D1C5] rounded-[10px] flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] text-[#A59582]">
                🧹 Housekeeping
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Chat input bar - Fixé en bas */}
      <div className="fixed bottom-0 left-0 right-0 rounded-t-[50px] bg-[rgba(234,230,220)] border-white border-t-1 pt-4 pb-8 px-6 z-30">
        <div className="w-full h-[60px]  border-[1px] border-t-white shadow-lg rounded-full  backdrop-blur-md px-5 flex items-center mb-5">
          <input
            type="text"
            placeholder="Chat with Bell..."
            className="flex-1 bg-transparent text-[17px] text-[#A59582] placeholder-[#A59582] border-none focus:outline-none"
            onClick={() => !showConversation && setShowConversation(true)}
          />
        </div>

        {/* Buttons below input */}
        <div className="flex justify-between">
          {/* Button plus */}
          <button className="w-[52px] h-[52px] flex items-center justify-center">
            <MoreButtonIcon />
          </button>

          {/* Button speak */}
          <button className="w-[52px] h-[52px] flex items-center justify-center">
            <SpeakButtonIcon />
          </button>
        </div>
      </div>
    </main>
  );
}
