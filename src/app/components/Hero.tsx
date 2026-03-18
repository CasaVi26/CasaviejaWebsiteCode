import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import HeroImage from '../../assets/hero.webp';

export function Hero() {
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
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImage}
          alt="Interior of Casa Vieja Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-[#ea1758] text-white rounded-full">
            The Best Mexican Cuisine in Town
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Authentic Mexican Cuisine in Peachtree City
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Experience the vibrant flavors of Mexico with fresh ingredients, traditional recipes, and generous portions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('menu')}
              size="lg"
              className="bg-[#6d1c57] hover:bg-[#93327a] text-white text-lg px-8 py-6"
            >
              View Menu
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              onClick={() => scrollToSection('location')}
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6"
            >
              <MapPin className="mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
