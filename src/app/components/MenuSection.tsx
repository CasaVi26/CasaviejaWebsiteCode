import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function MenuSection() {
  const [activeTab, setActiveTab] = useState('appetizers');

const menuData = {
  appetizers: [
    {
      name: "Appetizer's Plate",
      description: "Quesadillas, taquitos, nachos al carbon, sour cream, guacamole salad",
      price: "$16",
      image: "https://images.unsplash.com/photo-1579639482794-abf71bcd3960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Macho Nachos",
      description: "Shredded chicken or ground beef, cheese, beans, lettuce, tomato, guacamole, sour cream",
      price: "$14",
      image: "https://images.unsplash.com/photo-1757774551171-91143e145b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Texas Dip",
      description: "Grilled shrimp, steak, grilled chicken, beans, cheese",
      price: "$16",
      image: "https://images.unsplash.com/photo-1579639482794-abf71bcd3960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Guacamole Mexicano",
      description: "Avocado, tomato, onion, jalapeño, cilantro, lime",
      price: "$13",
      image: "https://images.unsplash.com/photo-1619810816619-8f98478ce85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  tacos: [
    {
      name: "Tacos Al Pastor",
      description: "Four marinated pork tacos with pineapple, onions, cilantro, salsa verde, and lime",
      price: "$17",
      image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Fish Tacos",
      description: "Three fried tilapia tacos, pico de gallo, red cabbage, chipotle salsa",
      price: "$13",
      image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Tacos de Carne Asada",
      description: "Marinated steak, corn tortillas, pico de gallo, salsa verde, rice, beans",
      price: "$16",
      image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Tacos de Pollo",
      description: "Three crunchy shredded chicken tacos, lettuce, cheese",
      price: "$10",
      image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  burritos: [
    {
      name: "Burrito Supreme",
      description: "Ground beef, beans, melted cheese, lettuce, tomato, sour cream, guacamole",
      price: "$13",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Burrito Don Nacho",
      description: "Steak, grilled chicken, shrimp, chorizo, melted cheese",
      price: "$20",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Hot & Spicy Burrito",
      description: "Ground beef, rice, beans, chile con carne, melted cheese, sour cream",
      price: "$15",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  fajitas: [
    {
      name: "Fajitas (Chicken or Steak)",
      description: "Sizzling grilled chicken or steak, sautéed onions, bell peppers, tomato",
      price: "$19",
      image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Texas Fajitas",
      description: "Grilled shrimp, steak, and grilled chicken, sautéed onions, bell peppers, tomato",
      price: "$23",
      image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Fajitas Vegetarianas",
      description: "Sautéed onions, bell peppers, tomato, cauliflower, mushrooms, carrots, broccoli, rice, beans, guacamole salad, tortillas",
      price: "$16",
      image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  enchiladas: [
    {
      name: "Enchiladas Supreme",
      description: "One chicken, one cheese, one beef, and one bean enchilada, salsa, lettuce, tomato, cheese, sour cream",
      price: "$15",
      image: "https://images.unsplash.com/photo-1734989435134-7e4885259231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Enchiladas Verdes",
      description: "Three chicken enchiladas, melted cheese, salsa verde, lettuce, tomato, sour cream",
      price: "$13",
      image: "https://images.unsplash.com/photo-1734989435134-7e4885259231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Enchiladas Rancheras",
      description: "Three cheese + onion enchiladas, lettuce, tomato, sour cream",
      price: "$13",
      image: "https://images.unsplash.com/photo-1734989435134-7e4885259231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  combinations: [
    {
      name: "Combination A",
      description: "Taco, Enchilada, Rice, and Beans",
      price: "$11.95",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Combination E",
      description: "Chile Relleno, Taco, Enchilada, Rice, and Beans",
      price: "$14.50",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  sides: [
    {
      name: "Arroz (Rice)",
      description: "Traditional Mexican rice",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Frijoles (Beans)",
      description: "Traditional Mexican beans",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Tamale",
      description: "Single traditional tamale",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  houseSpecials: [
    {
      name: "Molcajete",
      description: "Grilled steak, chicken, shrimp, chorizo, grilled queso fresco, poblano and roasted green onions",
      price: "$25",
      image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Carnitas",
      description: "Deep fried beer-marinated pork chunks, rice, beans, pico de gallo, salsa verde, tortillas",
      price: "$15",
      image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Mole Poblano",
      description: "Shredded chicken breast, mole sauce, sesame seeds, rice, beans, tortillas",
      price: "$14",
      image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  lunch: [
    {
      name: "Lunch #1",
      description: "Burrito, Taco, Enchilada, and Chalupa",
      price: "$10.50",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Huevos con Chorizo",
      description: "Eggs with Mexican sausage, rice, and beans",
      price: "$11.50",
      image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ],
  drinks: [
    {
      name: "Soft Drinks",
      description: "Coke, Diet Coke, Coke Zero, Sprite, Lemonade, Fanta, Mr. Pibb, Tea, Coffee",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Cerveza Mexicana",
      description: "Corona, Modelo, Dos Equis, Pacifico, Sol, Victoria",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ]
};

const categories = [
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'tacos', label: 'Tacos' },
  { id: 'burritos', label: 'Burritos' },
  { id: 'fajitas', label: 'Fajitas' },
  { id: 'enchiladas', label: 'Enchiladas' },
  { id: 'combinations', label: 'Combination Plates' },
  { id: 'houseSpecials', label: 'House Specials' },
  { id: 'lunch', label: 'Lunch Specials' },
  { id: 'sides', label: 'A La Carta' },
  { id: 'drinks', label: 'Drinks' }
];

  return (
    <section id="menu" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6d1c57] mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Browse our complete menu of authentic Mexican dishes
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-12 flex flex-wrap h-auto justify-center gap-2 bg-white p-2 rounded-xl shadow-md">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-[#6d1c57] data-[state=active]:text-white px-4 py-2 rounded-lg transition-all"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData[category.id as keyof typeof menuData].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-[#ea1758] text-white px-3 py-1 rounded-full font-bold">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-[#6d1c57] mb-2">{item.name}</h3>
                      <p className="text-foreground/70 text-m">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
