import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedDishes />
        <MenuSection />
        <About />
        <Gallery />
        <Location />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
