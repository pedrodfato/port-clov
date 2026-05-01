import Navbar from './components/navbar.jsx'
import About from './components/about.jsx'
import Services from './components/services.jsx'
import Hero from './components/hero.jsx'
import Contact from './components/contact.jsx'
import Partners from './components/partners.jsx'
import Metodology from './components/metodology.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
      <Hero />  
      <Partners />
      <Metodology />
      <About />
      <Services />
      <Contact />
      </main>
    </div>
  );
}
