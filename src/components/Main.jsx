import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

export default function Main() {
  return (
    <div className="bg-dark text-light min-vh-100" style={{ backgroundColor: '#141414' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-800 py-4 bg-dark">
        <div className="custom-navbar max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-white-400 text-sm">
              © 2026 Portfolio | Karthick Nathan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}