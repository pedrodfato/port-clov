
import TechStacks from "./techStacks.jsx";

export default function About() {
  return (
    <section className="h-screen w-full flex flex-row justify-center items-center gap-[40px] px-40 text-white/80">
      <div className="w-1/2 flex flex-col gap-[20px] relative">
        <h1 className="text-[32px]/[1.2em] capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#F5FDF1] from-40% to-[#A0F3BE] font-normal pb-[10px]">Transformo ideias em produtos digitais que funcionam de verdade</h1>
        <p>Me chamo Pedro, sou Desenvolvedor com mais de 4 anos de experiência criando interfaces, aplicativos, landing pages e sistemas web. Já desenvolvi mais de 100 projetos, atuando tanto no design quanto na parte técnica, sempre com foco em performance, clareza e resultado.<br /><br />
          Trabalho com empresas e profissionais que querem mais do que “só um site bonito”: querem uma presença digital que realmente gere valor, autoridade e conversão.</p>
        <TechStacks />
      </div>
      <div className="w-1/2 flex justify-end items-end flex-col">
        <div className="flex flex-col items-center justify-center w-[200px] relative">
          <div className="absolute inset-0 bg-linear-to-r from-black/90 from-5% via-black/80 via-20% to-transparent to-150% w-full"></div>
          <h2 className="text-[92px]/[1.2em] capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#F5FDF1] from-40% to-[#A0F3BE] font-normal"><span className="text-[#91E939]">+</span>4</h2>
          <p className="z-10 text-white/60">Anos de experiência.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[200px] mr-50 relative">
          <div className="absolute inset-0 bg-linear-to-r from-black/90 from-5% via-black/80 via-20% to-transparent to-150% w-full"></div>
          <h2 className="text-[92px]/[1.2em] capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#F5FDF1] from-40% to-[#A0F3BE] font-normal"><span className="text-[#91E939]">+</span>100</h2>
          <p className="z-10 text-white/60">Projetos desenvolvidos.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[200px] mr-100 relative">
          <div className="absolute inset-0 bg-linear-to-r from-black/90 from-5% via-black/80 via-20% to-transparent to-150% w-full"></div>
          <h2 className="text-[92px]/[1.2em] capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#F5FDF1] from-40% to-[#A0F3BE] font-normal"><span className="text-[#91E939]">+</span>100</h2>
          <p className="z-10 text-white/60">Clientes satisfeitos.</p>
        </div>
      </div>
    </section>
  )
}