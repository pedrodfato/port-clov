import { FloatingTexts } from '../components/floatinsElements'

function ErrorPage () {

  return (
    <section className="h-screen w-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
       <FloatingTexts />
      <div className="flex justify-center items-center flex-col max-w-[1100px] py-[60px] text-center">
        <h1 className=" text-[140px] font-bold neon-text">4<span className="trevor"></span>4</h1>
        <p className="font-mono absolute top-9 left-[42%]">Website is under construction</p>
      </div>
      <div className="green-glow"></div>
    </section>
  )
}

export default ErrorPage;
