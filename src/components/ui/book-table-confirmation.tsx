import React from "react";

interface BookingData {
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

interface BookTableConfirmationProps {
  isOpen: boolean;
  bookingData: BookingData;
}

export function BookTableConfirmation({
  isOpen,
  bookingData,
}: BookTableConfirmationProps) {
  if (!isOpen) return null;

  // Formatage de la date pour l'affichage
  const formatDate = (dateStr: string) => {
    const day = dateStr.split("/")[0];
    return `Mercredi ${day} Janvier à ${bookingData.time}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#EFEDE4] w-full max-w-[390px] mx-auto">
      {/* Header */}
      <div className="pt-12 px-5">
        <div className="flex items-center justify-between mb-8">
          <img src="/images/book-table/burger.png" className="z-100" />
          <svg
            width="50"
            height="21"
            viewBox="0 0 50 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-40"
          >
            <path
              d="M15.3144 11.0086C14.5604 10.4628 13.5397 10.0958 12.2596 9.90002C13.147 9.7024 13.8843 9.41631 14.4641 9.038C15.6682 8.24939 16.2702 7.026 16.2702 5.36784C16.2702 4.15387 16.0164 3.17892 15.5089 2.44113C15.0013 1.70333 14.1955 1.16316 13.0914 0.818728C11.9873 0.474297 10.5294 0.303023 8.71772 0.303023H0V2.57664H1.49309C1.71168 2.57664 1.86173 2.63687 1.94139 2.75921C2.02104 2.88155 2.0618 3.10364 2.0618 3.42736V17.2874C2.0618 17.6111 2.01734 17.8389 1.92657 17.9706C1.83765 18.1024 1.69316 18.1682 1.49309 18.1682H0V20.4437H8.68623C10.6573 20.4437 12.2541 20.2518 13.4767 19.8678C14.7012 19.4838 15.6052 18.8872 16.1924 18.0779C16.7797 17.2686 17.0724 16.2183 17.0724 14.9234C17.0724 13.1636 16.4851 11.8593 15.3107 11.0105L15.3144 11.0086ZM8.59731 2.57852C9.85143 2.57852 10.7314 2.82132 11.2389 3.30691C11.7465 3.7925 12.0003 4.65263 12.0003 5.88543C12.0003 7.01847 11.7058 7.84661 11.1204 8.37173C10.5331 8.89684 9.63284 9.16034 8.41947 9.16034H6.1502V2.57852H8.59731ZM11.8354 17.3777C11.2482 17.9047 10.2571 18.1663 8.86592 18.1663H6.1502V11.1309H9.04561C10.3386 11.1309 11.2741 11.4038 11.8521 11.9497C12.4282 12.4955 12.7172 13.4158 12.7172 14.7089C12.7172 16.0019 12.4227 16.8526 11.8373 17.3777H11.8354Z"
              fill="#65413D"
            />
            <path
              d="M29.7006 6.20163C28.6262 5.58429 27.3313 5.27562 25.8197 5.27562C24.3081 5.27562 23.0392 5.60499 21.8943 6.26186C20.7495 6.91872 19.8603 7.83344 19.2231 9.00601C18.5858 10.1786 18.2672 11.5224 18.2672 13.0394C18.2672 14.5564 18.5654 15.9304 19.1619 17.1029C19.7584 18.2755 20.655 19.1902 21.848 19.8471C23.0429 20.504 24.4952 20.8333 26.2069 20.8333C27.9186 20.8333 29.4005 20.4494 30.475 19.6815C31.5494 18.9136 32.3052 17.8821 32.7442 16.5872L30.475 15.5558C30.1174 16.4856 29.6191 17.1933 28.9819 17.6789C28.3446 18.1645 27.5295 18.4073 26.5348 18.4073C25.6196 18.4073 24.8527 18.2096 24.2359 17.8163C23.619 17.421 23.1559 16.8601 22.8484 16.1336C22.5686 15.4749 22.4223 14.7032 22.3964 13.828H32.9536V13.0695C32.9536 11.4528 32.6794 10.0562 32.1329 8.88367C31.5846 7.7111 30.7751 6.81708 29.7006 6.19975V6.20163ZM23.8802 8.14399C24.397 7.79015 25.0435 7.61323 25.8197 7.61323C26.5551 7.61323 27.1479 7.76003 27.5962 8.05365C28.0445 8.34726 28.3724 8.81215 28.5817 9.44831C28.7763 10.0412 28.8781 10.8166 28.893 11.769H22.326C22.3778 10.9935 22.5019 10.331 22.702 9.78333C22.9706 9.04553 23.3633 8.49971 23.882 8.14587L23.8802 8.14399Z"
              fill="#65413D"
            />
            <path
              d="M39.791 18.0158C39.7114 17.9141 39.6706 17.7033 39.6706 17.3796V0C38.7555 0.20327 37.5903 0.303023 36.1787 0.303023H33.7316V2.57664H35.1339C35.3136 2.57664 35.4377 2.63687 35.5063 2.75921C35.5748 2.88155 35.61 3.12246 35.61 3.48759V17.3777C35.61 17.7015 35.5693 17.9141 35.4915 18.0139C35.4118 18.1155 35.2914 18.1663 35.1339 18.1663H33.7909V20.4418H41.3434V18.1663H40.1486C39.9893 18.1663 39.8689 18.1155 39.791 18.0139V18.0158Z"
              fill="#65413D"
            />
            <path
              d="M48.8052 18.1663C48.6458 18.1663 48.5254 18.1155 48.4476 18.0139C48.368 17.9123 48.3272 17.7015 48.3272 17.3777V0C47.4121 0.20327 46.2469 0.303023 44.8353 0.303023H42.3882V2.57664H43.7905C43.9702 2.57664 44.0943 2.63687 44.1629 2.75921C44.2314 2.88155 44.2666 3.12246 44.2666 3.48759V17.3777C44.2666 17.7015 44.2259 17.9141 44.148 18.0139C44.0684 18.1155 43.948 18.1663 43.7905 18.1663H42.4475V20.4418H50V18.1663H48.8052Z"
              fill="#65413D"
            />
            <path
              d="M25.6345 4.28938C26.7046 4.28938 27.5721 3.45599 27.5721 2.42795C27.5721 1.39991 26.7046 0.566522 25.6345 0.566522C24.5643 0.566522 23.6968 1.39991 23.6968 2.42795C23.6968 3.45599 24.5643 4.28938 25.6345 4.28938Z"
              fill="#65413D"
            />
          </svg>
          <img src="/images/book-table/profile.png" className="z-100" />
        </div>

        {/* Room info */}
        <div className="bg-white border-t-white border-2 rounded-md px-4 py-2 mb-8 shadow-md">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#65413D] font-medium">Room #1023</span>
            <span className="text-[#65413D] font-light">
              Oceania Porte de Versailles
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 py-8">
        {/* Bell message */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-6">
          <p className="text-[#65413D] font-['Jubilat'] text-[17px] leading-relaxed">
            Votre réservation pour {bookingData.guests} personne
            {bookingData.guests > 1 ? "s" : ""} {formatDate(bookingData.date)} a
            été validée et transmise au restaurant de l&apos;hôtel.
          </p>

          <p className="text-[#65413D] font-['Jubilat'] text-[17px] leading-relaxed mt-4">
            Pour toute informations ou réclamations supplémentaire,
            n&apos;hésitez pas à m&apos;en faire part directement ou à contacter
            la réception.
          </p>

          <p className="text-[#65413D] font-['Jubilat'] text-[17px] leading-relaxed mt-4">
            Puis-je vous aider sur un autre sujet ?
          </p>
        </div>

        {/* Bell disclaimer */}
        <div className="flex justify-between items-start mt-6 space-x-2">
          <div className="w-2 h-2 bg-[#F2930D] rounded-full mt-1" />
          <div className="text-[rgba(101,65,61,0.33)] text-xs font-normal leading-snug">
            <p>Bell can make mistakes.</p>
            <p>Please double-check responses.</p>
          </div>
        </div>
      </div>

      {/* Top blur overlay */}
      <div className="fixed top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#EFEDE4] via-[#EFEDE4]/75 to-transparent pointer-events-none"></div>

      {/* Bottom blur overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#EFEDE4] via-[#EFEDE4]/50 to-transparent pointer-events-none"></div>

      {/* Chat Input */}
      <div className="fixed bottom-4 left-4 right-4 max-w-[390px] mx-auto">
        <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-4 shadow-lg border border-white/70">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              <img src="/images/book-table/camera.png" className="z-100" />
            </div>
            <span className="text-[#65413D] text-[17px] flex-1">
              Chat with Bell…
            </span>
            <div className="flex space-x-1">
              <img src="/images/book-table/voice.png" className="z-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
