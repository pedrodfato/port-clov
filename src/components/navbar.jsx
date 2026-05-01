import { MainBtn } from './btn.jsx';
import trevo from '../assets/clov.svg';


export default function Navbar() {
  const links = [
    { href: "/home", text: "Home"},
    { href: "/about", text: "Sobre Mim" },
    { href: "/services", text: "Serviços" },
    { href: "/projects", text: "Projetos"},
    { href: "/skills", text: "Habilidades"}
  ]
  
  return (
    <header className="pt-5 pb-8 px-12 w-full fixed bg-transparent z-50">
    <nav className="flex justify-around items-center flex-row ">
      <h1 className="w-45 text-white text-xl text-center" >Clov<span className="text-[#00E87A] font-bold">.STUDIO</span></h1>
        <div className="text-white flex flex-row gap-12">
        {links.map((link, index) => (
              <a key={index} href={link.href}>{link.text}</a>
        ))}
        </div>
      <div className="flex flex-row gap-5">
        <MainBtn />
      </div>
      </nav>
    </header>
  );
}
