import { Users, ChefHat, Heart, Award } from 'lucide-react';
import HeroImage from '../../assets/hero.webp';

export function About() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Authentic Recipes",
      description: "Traditional Mexican recipes passed down through generations"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest, highest quality ingredients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Generous Portions",
      description: "You'll never leave hungry with our hearty servings"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Friendly",
      description: "A welcoming atmosphere for the whole family"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#6d1c57] mb-6">
              Welcome to Casa Vieja
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Casa Vieja is your home for authentic Mexican cuisine in Peachtree City. We're a welcoming local Mexican restaurant known for our traditional recipes, fresh ingredients, and generous portions.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From sizzling fajitas to perfectly crafted margaritas, every dish is prepared with care and authenticity. Whether you're joining us for a casual lunch or a festive dinner, Casa Vieja brings the vibrant flavors of Mexico to your table.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6d1c57]/10 rounded-lg flex items-center justify-center text-[#6d1c57]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={HeroImage}
                alt="Casa Vieja Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#ea1758]/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#6d1c57]/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
