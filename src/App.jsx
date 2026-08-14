import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import MissionSection from './pages/MissionSection';
import About from './pages/About';
import ProjectCard1 from './pages/ProjectCard1';
import ProjectList from './pages/ProjectList';
import Services from './pages/Services';
import Features from './pages/Features';
import ProcessSection from './pages/ProcessSection';
import KickstartSection from './pages/KickstartSection';
import Testimonials from './pages/Testimonial';
import FAQ from './pages/FAQ';
import FooterCTA from './components/Footer';


export default function App() {
  return (
    <>
     <Navbar />

<section id="home">
  <HeroSection />
</section>

<section id="mission">
  <MissionSection />
</section>

<section id="about">
  <About />
</section>

<section id="projects">
  <ProjectCard1 />
  <ProjectList />
</section>

<section id="services">
  <Services />
</section>

<section id="features">
  <Features />
</section>

<section id="process">
  <ProcessSection />
</section>

<section id="kickstart">
  <KickstartSection />
</section>

<section id="testimonials">
  <Testimonials />
</section>

<section id="faq">
  <FAQ />
</section>

<section id="contact">
  <FooterCTA />
</section>
    </>
  );
}


