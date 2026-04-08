export function FeaturedDishes() {
  const dishes = [
    {
      name: "Casa Salad",
      description: "Grilled chicken, greens, spinach, avocado, tomato. Steak or grilled chicken -> $14, shrimp $17. **Add avocado $2, add queso fresco $1.",
      price: "$15",
      image: "https://i.ibb.co/ch2h7Tth/casasalad-removebg-preview.png"
    },
    {
      name: "Texas Fajitas",
      description: "Grilled shrimp, steak, and grilled chicken, sauteed onions, bell peppers, tomato",
      price: "For 1: $23 / For 2: $42",
      image: "https://i.ibb.co/rKqL6ZtD/texasfajitas-removebg-preview.png"
    },
    {
      name: "Vieja Quesadilla",
      description: "Grilled chicken, sauteed onions, bell peppers, spinach, salsa verde, cheese, pico de gallo, guacamole, sour cream",
      price: "$15",
      image: "https://i.ibb.co/H58hPVM/viejaques-removebg-preview.png"
    },
    {
      name: "Fish Tacos",
      description: "Three fried tilapia tacos, pico de gallo, red cabbage, chipotle salsa",
      price: "$13",
      image: "https://i.ibb.co/pBg0KhWk/fishtacos.png"
    },
    {
      name: "Guacamole Mexicano",
      description: "Avocado, tomato, onion, jalapeño, cilantro, lime",
      price: "$13",
      image: "https://i.ibb.co/VpNvks8J/guemec-removebg-preview.png"
    },
    {
      name: "Mole Poblano",
      description: "Shredded chicken, mole sauce, sesame seeds, rice, beans, tortillas",
      price: "$14",
      image: "https://i.ibb.co/Cpn3hhQm/Screenshot-2026-03-28-192923-removebg-preview.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6d1c57] mb-4">
            Featured Dishes
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our most popular dishes, crafted with authentic recipes and the freshest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#ea1758] text-white px-4 py-2 rounded-full font-bold">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#6d1c57] mb-2">{dish.name}</h3>
                <p className="text-foreground/70">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
