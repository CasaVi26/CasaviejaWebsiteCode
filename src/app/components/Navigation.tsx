import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src="https://i.ibb.co/fGC4VwBM/logo-removebg-preview.png" alt="Casa Vieja Logo" />
              </div>
              <span className="text-2xl font-bold text-[#6d1c57]">Casa Vieja</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-[#6d1c57] transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-[#6d1c57] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-[#6d1c57] transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-foreground hover:text-[#6d1c57] transition-colors"
            >
              Location
            </button>
            <Button 
              onClick={() => scrollToSection('menu')}
              className="bg-[#6d1c57] hover:bg-[#93327a] text-white"
            >
              View Menu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-[#6d1c57]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-[#6d1c57] transition-colors text-left py-2"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-[#6d1c57] transition-colors text-left py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-[#6d1c57] transition-colors text-left py-2"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-foreground hover:text-[#6d1c57] transition-colors text-left py-2"
              >
                Location
              </button>
              <Button 
                onClick={() => scrollToSection('menu')}
                className="bg-[#6d1c57] hover:bg-[#93327a] text-white w-full"
              >
                View Menu
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
