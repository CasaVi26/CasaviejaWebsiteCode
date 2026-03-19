export function FeaturedDishes() {
  const dishes = [
    {
      name: "Chicken Upon Tacos",
      description: "Lots of meat upon awesome tacos with very good flavor and sauce",
      price: "$14.99",
      image: "https://i.ibb.co/j9TSJvd9/unnamed.jpg"
    },
    {
      name: "Tacos",
      description: "Grilled chicken or beef, onions, very nice tacos with lots of vegies",
      price: "$9.99",
      image: "https://i.ibb.co/0p0ht1Q6/tacos.jpg"
    },
    {
      name: "Cheese Quesadilla",
      description: "Flour tortilla stuffed with melted cheese, grilled to perfection",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1588798571170-5e9df66a6c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcXVlc2FkaWxsYSUyMGNoZWVzZSUyMG1lbHRlZHxlbnwxfHx8fDE3NzM1OTc2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Classic Margarita",
      description: "Premium tequila, fresh lime juice, triple sec, served on the rocks",
      price: "$8.99",
      image: "https://i.postimg.cc/SsdBgzx7/unnamed.png"
    },
    {
      name: "Fresh Guacamole",
      description: "Made to order with ripe avocados, tomatoes, onions, cilantro, and lime",
      price: "$15.99",
      image: "https://i.postimg.cc/769FKTZN/unnamed-(1).png"
    },
    {
      name: "Stuffed Pig Bowl",
      description: "Deep-fried burrito filled with your choice of meat, not actual dish thats in the picture.",
      price: "$14.99",
      image: "https://i.postimg.cc/VLMXCyLv/unnamed-(2)-(1).png"
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
