export function FloatingTexts() {
  const items = [
    { text: "Page not found", x: "10%", y: "20%" },
    { text: "Oops", x: "80%", y: "30%" },
    { text: "Error", x: "15%", y: "70%" },
    { text: "Nothing to see here", x: "75%", y: "75%" },
    { text: "Awkward", x: "50%", y: "10%" },
    { text: "Sorry", x: "50%", y: "85%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          className="floating-item"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export function FloatTextHero() {
  const items = [
    // Elementos circundando a posição central do Hero
    { text: "Site Institucional", top: "20%", left: "15%" },
    { text: "Landing Page", top: "25%", left: "80%" },
    { text: "Portfolio", top: "75%", left: "18%" },
    { text: "Blog", top: "80%", left: "75%" },
    { text: "E-commerce", top: "12%", left: "30%" },
    { text: "SEO", top: "15%", left: "65%" },
    { text: "Responsividade", top: "55%", left: "85%" },
    { text: "Conversão", top: "85%", left: "55%" },
    { text: "Otimização", top: "45%", left: "10%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <style>
        {`
          @keyframes driftFade {
            0% {
              opacity: 0;
              transform: translate(0, 30px) scale(0.95);
            }
            15% {
              /* Aumenta a opacidade rápido ao aparecer */
              opacity: 0.6;
              transform: translate(15px, 15px) scale(1);
            }
            100% {
              /* Diminui a opacidade lentamente conforme se afasta */
              opacity: 0;
              transform: translate(30px, -60px) scale(1.05);
            }
          }
        `}
      </style>
      {items.map((item, i) => {
        const duration = 14 + (i % 4) * 4; 
        const delay = (i * 3.7) % 18;      
        
        return (
          <span
            key={i}
            className="absolute font-mono text-[13px] md:text-[15px] whitespace-nowrap tracking-widest text-[#00E87A] filter blur-[0.6px]"
            style={{
              left: item.left,
              top: item.top,
              opacity: 0,
              animation: `driftFade ${duration}s ease-out ${delay}s infinite`,
            }}
          >
            {item.text}
          </span>
        );
      })}
    </div>
  );
}