import { Outlet, Link } from 'react-router';
import { Navigation } from './Navigation';

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Outlet />
      
      {/* Footer */}
      <footer className="bg-[#09090b] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="relative mb-6 h-24 md:h-28 w-full max-w-md overflow-hidden">
                <img
                  src="/mmf%20logo%20trasparent.png"
                  alt="Maiden Manzanal Frank"
                  className="absolute left-1/2 top-1/2 w-[2900px] md:w-[3250px] max-w-none -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-white/60 max-w-md text-justify">
                Empowering leaders and transforming organizations through expert coaching, keynote speaking, and proven frameworks.
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="font-semibold mb-4">Services</div>
              <div className="space-y-2">
                <Link to="/speaking" className="block text-white/60 hover:text-white transition-colors">Speaking</Link>
                <Link to="/books#additional-resources" className="block text-white/60 hover:text-white transition-colors">Books and Resources</Link>
                <a href="https://flourish-in-purpose.netlify.app/" target="_blank" rel="noopener noreferrer" className="block pl-6 text-white/60 hover:text-white transition-colors">New Book Preview: Flourish In Purpose</a>
                <Link to="/coaching" className="block text-white/60 hover:text-white transition-colors">Coaching</Link>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4">Connect</div>
              <div className="space-y-2">
                <Link to="/" className="block text-white/60 hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="block text-white/60 hover:text-white transition-colors">Meet Maiden</Link>
                <Link to="/contact" className="block text-white/60 hover:text-white transition-colors">Connect</Link>
                <a href="https://www.linkedin.com/in/MaidenManzanalFrank" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2026 Maiden Manzanal Frank. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
