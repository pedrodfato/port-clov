import { Input } from '@/components/ui/input'
import { Circle, Github, Linkedin, MapPin } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Footer from '@/components/footer'

export default function Contact() {
  return (
    <>
    <section className="flex text-white justify-center gap-40 h-screen items-center">
      <div className="flex flex-col gap-2 justify-center items-start w-[30%]">
        <div className="bg-gradient-to-r from-[#5BB421] to-[#0B4C11]/60 flex items-center justify-center p-[1px] rounded-md mb-3"><span className="bg-gradient-to-r from-[#021002] to-[#000000] flex rounded-md px-4 py-1 gap-2 items-center text-[14px]"><Circle className="w-2.5 h-2.5 bg-[#A6ED69] rounded-full text-[#A6ED69] " /> Entre em contato</span></div>
        <h1 className="title">Vamos dar vida a sua ideia!</h1>
        <p className="text-white/80">Estou aberto para discutir sobre novas ideias e futuros projetos. Sinta-se à vontade para entrar em contato e transformar sua ideia em uma máquina de resultados.</p>
        <div className="flex flex-col md:flex-row gap-4 items-center mt-5 bg-[#033409]/40 px-4 py-2 rounded-md border-[#F7FC88]/10 border">
          <div className=" bg-[#A6ED69]/15 p-2 rounded-md border border-[#F7FC88]/30 ">
            <Mail className="text-[#A6ED69] h-5 w-5" />
          </div>
          <div>
            <p className="text-white/85">contato@webpedro.com.br</p>
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-5 bg-[#033409]/40 px-4 py-2 rounded-md border-[#F7FC88]/10 border w-[297px]">
            <div className=" bg-[#A6ED69]/15 p-2 rounded-md border border-[#F7FC88]/30 ">
              <MapPin className="text-[#A6ED69] h-5 w-5" />
            </div>
            <div>
              <p className="text-white/85">Jau, SP</p>
            </div>
          </div>
        <div className="flex flex-col gap-4 items-center mt-5">
          <h4 className="w-full">Redes</h4>
          <div className="flex gap-4">
          <div className=" bg-black p-2 rounded-md border border-[#F7FC88]/30">
            <Linkedin className="text-white/50 h-5 w-5" />
          </div>
          <div className=" bg-black p-2 rounded-md border border-[#F7FC88]/30">
            <Github className="text-white/50 h-5 w-5" />
          </div>
          </div>
        </div>
      </div>
      <div className="bg-[#033409]/20 p-2 rounded-md border px-[25px] py-[30px] w-[35%] border-[#033409]/60">
        <form className="gap-5 flex flex-col">
          <label className="text-white/80" htmlFor="name">Nome</label>
          <Input className="mt-[-5px]" id="name" type="text" placeholder="Nome completo" />
          <label className="text-white/80" htmlFor="email">Email</label>
          <Input className="mt-[-5px]" id="email" type="email" placeholder="Seu melhor email" />
          <label className="text-white/80" htmlFor="message">Como posso ajudar?</label>
          <Textarea rows={4} className="mt-[-5px]" id="message" placeholder="Fale mais sobre o que você precisa" />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  );
}