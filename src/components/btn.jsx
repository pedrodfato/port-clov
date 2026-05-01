import { GoArrowRight } from "react-icons/go";
export function MainBtn() {
  return (
    <button className="flex items-center gap-3 justify-between px-4 py-2 bg-linear-to-r from-[#F5FDF1] to-[#E8FFE8] rounded-[9px] font-medium">
      Entrar em contato
    <span className="bg-[#69E77B] p-1.5 rounded-[5px] text-black!"><GoArrowRight /> </span>
    </button>
  );
}

export function SecBtn() {
  return (
    <button className="px-4 py-2 border-gray-400 border rounded-[9px] font-medium text-white/80 font-extralight">
      Ver projetos
    </button>
  );
}
