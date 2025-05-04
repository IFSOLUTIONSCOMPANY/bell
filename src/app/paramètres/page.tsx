

export default function ParametresPage() {
  return (
    <main className="relative min-h-screen bg-[#EFEDE4] pb-20 md:pb-0 px-4 pt-4 md:p-6">
      {/* Background avec effet de flou */}
      <div className="absolute inset-0 bg-[rgba(239,237,228,0.5)] backdrop-blur-[375px]"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Status Bar */}
        <div className="box-border w-full md:w-auto md:max-w-[530px] mx-auto md:mx-0 md:ml-auto h-[60px] md:h-[70px] bg-[rgba(250,249,245,0.5)] border-[0.5px] border-[#D9D0C3] shadow-[0px_0px_20px_rgba(101,65,61,0.05),0px_1px_5px_rgba(101,65,61,0.1)] backdrop-blur-[12.5px] rounded-[25px] flex items-center justify-between px-6 mb-6">
          <div className="font-[500] text-[16px] md:text-[18px] leading-[24px] text-[#65413D]">
            Desk
          </div>
          <div className="font-[300] text-[16px] md:text-[18px] leading-[24px] text-right text-[#65413D]">
            Oceania Porte de Versailles
          </div>
        </div>
        
        {/* Contenu de la page Paramètres */}
        <div className="mt-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#65413D]">Page des Paramètres</h1>
          <p className="mt-4 text-lg text-[rgba(101,65,61,0.7)]">Contenu à venir</p>
        </div>
      </div>
    </main>
  );
} 