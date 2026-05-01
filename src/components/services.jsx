import "../index.css";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ShoppingCart, Globe, LayoutTemplate, BookOpen, User, ArrowUpRight
} from "lucide-react";

// Arc config — semicírculo na lateral direita do eixo
const ARC_SPAN = 200;   // graus totais do arco (−100° a +100°)
const RADIUS   = 140;   // px do centro até os cards
const N        = 5;
const STEP     = ARC_SPAN / (N - 1); // 50° entre cada item

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);
  const dragAccum  = useRef(0);
  const DRAG_THRESH = 36;

  const services = [
    { id: 1, title: "Site Institucional", description: "Criamos sites institucionais personalizados para atender às suas necessidades.", icon: Globe },
    { id: 2, title: "E-commerce",         description: "Desenvolvemos lojas virtuais personalizadas para vender seus produtos online.", icon: ShoppingCart },
    { id: 3, title: "Landing Pages",      description: "Desenvolvemos páginas de captura personalizadas para aumentar sua visibilidade.", icon: LayoutTemplate },
    { id: 4, title: "Blog",               description: "Desenvolvemos blogs personalizados para compartilhar informações e conhecimento.", icon: BookOpen },
    { id: 5, title: "Portfolio",          description: "Desenvolvemos portfólios personalizados para mostrar seus projetos e habilidades.", icon: User },
  ];

  const norm = (idx) => ((idx % N) + N) % N;
  const activeNorm   = norm(currentIndex);
  const activeService = services[activeNorm];
  const ActiveIcon   = activeService.icon;

  // Slot = posição relativa ao ativo (-2 a +2), envolto infinitamente
  const getSlot = (i) => {
    let slot = i - activeNorm;
    if (slot >  N / 2) slot -= N;
    if (slot < -N / 2) slot += N;
    return slot;
  };

  const scales    = [1, 0.83, 0.63];
  const opacities = [1, 0.68, 0.35];

  const handleItemClick = useCallback((i) => {
    let diff = i - norm(currentIndex);
    if (diff >  N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    setCurrentIndex(prev => prev + diff);
  }, [currentIndex]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    dragAccum.current  = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    dragAccum.current += e.movementY;
    if (dragAccum.current > DRAG_THRESH) {
      setCurrentIndex(prev => prev - 1);
      dragAccum.current = 0;
    } else if (dragAccum.current < -DRAG_THRESH) {
      setCurrentIndex(prev => prev + 1);
      dragAccum.current = 0;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    dragAccum.current  = 0;
  };

  return (
    <section
      className="min-h-[100vh] overflow-hidden flex flex-col justify-center items-center w-full py-24"
      id="services"
    >
      <div className="text-white w-full max-w-[1200px] px-6">
        <div className="mb-16">
          <h2 className="title relative z-20">Como eu posso te ajudar</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-4 items-center justify-between">

          {/* Roda / Arco */}
          <div
            className="w-full md:w-5/12 relative h-[500px] md:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10 select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* Centro da roda — movimentado para perto do centro para ficar próximo à direita */}
            <div
              className="absolute top-1/2 left-[50px] md:left-[110px]"
              style={{ transform: 'translateY(-50%)' }}
            >
              {services.map((serv, i) => {
                const slot     = getSlot(i);
                const angleDeg = slot * STEP;
                const angleRad = (angleDeg * Math.PI) / 180;
                const x        = Math.cos(angleRad) * RADIUS;
                const y        = Math.sin(angleRad) * RADIUS;
                const slotAbs  = Math.abs(slot);
                const scale    = scales[slotAbs]    ?? 0.5;
                const op       = opacities[slotAbs] ?? 0.2;
                const isActive = slotAbs === 0;

                return (
                  <div
                    key={serv.id}
                    onClick={(e) => { e.stopPropagation(); handleItemClick(i); }}
                    className="absolute top-0 left-0 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex justify-center items-center cursor-pointer"
                    style={{
                      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${scale})`,
                      opacity: op,
                      zIndex: 10 - slotAbs,
                    }}
                  >
                    <div className={`relative px-8 py-3 rounded-[12px] whitespace-nowrap transition-all duration-[600ms] flex flex-col justify-center items-center ${
                      isActive
                        ? 'border border-[#E2FB71]/60 shadow-[0_0_15px_rgba(226,251,113,0.15)] bg-[#E2FB71]/[0.03]'
                        : 'border border-transparent'
                    }`}>
                      {isActive && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                          {/* Partículas brilhantes do canto superior esquerdo */}
                          <div className="absolute top-1 left-4 flex gap-1.5 opacity-90">
                            <div className="w-1 h-1 rounded-full bg-[#E2FB71] shadow-[0_0_4px_#E2FB71] animate-[ping_2s_ease-in-out_infinite]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E2FB71] animate-[ping_2.5s_ease-in-out_infinite_0.5s]" />
                            <div className="w-1 h-1 rounded-full bg-[#E2FB71] shadow-[0_0_4px_#E2FB71] animate-[ping_3s_ease-in-out_infinite_1s]" />
                          </div>
                          {/* Partículas sutis no canto inferior direito */}
                          <div className="absolute bottom-1 right-6 flex gap-1 opacity-50">
                            <div className="w-1 h-1 rounded-full bg-[#E2FB71] animate-[ping_2.5s_ease-in-out_infinite_0.3s]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E2FB71] shadow-[0_0_5px_#E2FB71] animate-[ping_3s_ease-in-out_infinite_1.2s]" />
                          </div>
                        </div>
                      )}
                      
                      <h3 className={`font-semibold text-center transition-all duration-[600ms] tracking-wide ${
                        isActive        ? 'text-white text-[28px] md:text-[36px]'
                        : slotAbs === 1 ? 'text-white/70 text-[24px] md:text-[28px] filter blur-[0.3px]'
                        :                 'text-white/40 text-[20px] md:text-[24px] filter blur-[0.8px]'
                      }`}>
                        {serv.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-7/12 flex flex-col items-start relative min-h-[400px] mt-8 md:mt-0 md:pl-6 z-10 pointer-events-none">
            <div className="pointer-events-auto w-full">
              <div key={activeService.id} className="animate-in fade-in slide-in-from-right-10 duration-[600ms] ease-out fill-mode-both w-full">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 w-fit border border-white/10 mb-8 backdrop-blur-sm">
                  <div className="bg-[#E2FB71]/20 p-1.5 rounded-full">
                    <ActiveIcon className="w-4 h-4 text-[#E2FB71]" />
                  </div>
                  <span className="text-[13px] uppercase tracking-wider font-semibold text-[#E2FB71]/90">Serviço Principal</span>
                </div>

                <h3 className="text-4xl md:text-5xl xl:text-6xl font-medium text-white mb-8 leading-[1.2] flex flex-col gap-3">
                  <span>Especialistas em</span>
                  <div className="relative inline-block w-fit">
                    <span className="relative z-10 inline-flex px-6 py-2 bg-[#1A2518] text-[#E2FB71] rounded-2xl border border-[#E2FB71]/40 shadow-[0_0_20px_rgba(226,251,113,0.15)]">
                      {activeService.title}
                    </span>
                    <div className="absolute inset-0 bg-[#E2FB71] blur-2xl opacity-10 rounded-2xl z-0"></div>
                  </div>
                </h3>

                <p className="text-white/60 text-lg md:text-xl max-w-md mb-12 leading-relaxed">
                  {activeService.description}
                </p>

                <button className="flex items-center gap-3 px-8 py-3.5 bg-transparent border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300 group hover:border-[#E2FB71]/50 cursor-pointer">
                  <span className="font-medium">Explorar projeto</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#E2FB71] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;