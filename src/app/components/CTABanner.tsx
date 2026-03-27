import { Button } from './ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

export function CTABanner() {
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
    <section className="relative py-20 bg-gradient-to-r from-[#6d1c57] to-[#93327a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

    <img src="https://i.postimg.cc/vmR3fHbL/full-logo.jpg" alt="Casa Vieja Logo" className="mx-auto max-w-300 w-4/5 object-contain border-white/20 rounded-xl mb-6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready for Traditional Mexican Cuisine?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Visit Casa Vieja today and experience the vibrant flavors of Mexico in Peachtree City
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('menu')}
            size="lg"
            className="bg-white text-[#6d1c57] hover:bg-white/90 text-lg px-8 py-6"
          >
            View Our Menu
            <ArrowRight className="ml-2" />
          </Button>
          <Button 
            onClick={() => scrollToSection('location')}
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <MapPin className="mr-2" />
            Visit Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
