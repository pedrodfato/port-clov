import { MainBtn, SecBtn } from './btn.jsx'
import { FloatTextHero } from './floatinsElements.jsx'

export default function Hero() {
  return (
    <section className="flex justify-center items-center h-screen relative">
      <FloatTextHero />
      <img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="./imgs/imgppoggers.png" alt="" />
      <div className="flex flex-col items-center container max-w-[1100px] gap-[20px] text-center z-10">
        <h1 className="text-[48px]/[1.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F5FDF1] from-40% to-[#A0F3BE] font-normal ">Onde a criatividade<br/>
encontra a estratégia</h1>
        <p className="text-white font-normal text-[18px]">Se o seu site parece com todos os outros, ele já falhou.</p>
        <div className="flex gap-8 mt-[15px]">
          <MainBtn />
          <SecBtn />
        </div>
      </div>
    </section>
  );
}