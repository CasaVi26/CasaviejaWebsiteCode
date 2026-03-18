import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2d2d2d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-[#6d1c57] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CV</span>
              </div>
              <span className="text-2xl font-bold">Casa Vieja</span>
            </div>
            <p className="text-white/70 mb-6">
              Authentic Mexican cuisine in Peachtree City. Fresh ingredients, traditional recipes, and generous portions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/casaviejamex/" 
                className="w-10 h-10 bg-white/10 hover:bg-[#6d1c57] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>1200 GA-74 #12, Peachtree City, GA 30269</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="tel:7706318338"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (770) 631-8338
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Hours
            </h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex flex-col">
                <span className="font-medium text-white">Monday - Thursday</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Friday - Saturday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
          <p>Designed and developed by <a href="https://gaweb.dev/?casavieja" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Emir Gamaleev at gaweb.dev</a></p>
          <p>&copy; {new Date().getFullYear()} Casa Vieja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}