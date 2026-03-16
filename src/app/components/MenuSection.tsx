import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function MenuSection() {
  const [activeTab, setActiveTab] = useState('appetizers');

  const menuData = {
    appetizers: [
      {
        name: "Chips & Salsa",
        description: "Crispy tortilla chips with house-made salsa",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1579639482794-abf71bcd3960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlwcyUyMHNhbHNhJTIwbWV4aWNhbiUyMGFwcGV0aXplcnxlbnwxfHx8fDE3NzM2Mjg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Fresh Guacamole",
        description: "Made to order with ripe avocados",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1619810816619-8f98478ce85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFjYW1vbGUlMjBhdm9jYWRvJTIwY2hpcHMlMjBmcmVzaHxlbnwxfHx8fDE3NzM2Mjg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Loaded Nachos",
        description: "Tortilla chips loaded with cheese, jalapeños, and your choice of meat",
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1757774551171-91143e145b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWNob3MlMjBjaGVlc2UlMjBqYWxhcGVub3MlMjBtZXhpY2FufGVufDF8fHx8MTc3MzYyODU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    tacos: [
      {
        name: "Street Tacos",
        description: "Three soft corn tortillas with cilantro and onions",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBjb2xvcmZ1bCUyMGZyZXNofGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Carne Asada Tacos",
        description: "Grilled steak with fresh toppings",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBjb2xvcmZ1bCUyMGZyZXNofGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Fish Tacos",
        description: "Grilled or fried fish with cabbage slaw",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBjb2xvcmZ1bCUyMGZyZXNofGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    burritos: [
      {
        name: "Classic Burrito",
        description: "Large flour tortilla filled with rice, beans, cheese, and your choice of meat",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwYnVycml0byUyMHJpY2UlMjBiZWFuc3xlbnwxfHx8fDE3NzM2Mjg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "California Burrito",
        description: "Stuffed with carne asada, fries, cheese, and guacamole",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwYnVycml0byUyMHJpY2UlMjBiZWFuc3xlbnwxfHx8fDE3NzM2Mjg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Chimichanga",
        description: "Deep-fried burrito topped with cheese sauce",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwYnVycml0byUyMHJpY2UlMjBiZWFuc3xlbnwxfHx8fDE3NzM2Mjg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    fajitas: [
      {
        name: "Chicken Fajitas",
        description: "Sizzling grilled chicken with peppers and onions",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZmFqaXRhcyUyMHNpenpsaW5nJTIwcGxhdGV8ZW58MXx8fHwxNzczNjI4NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Steak Fajitas",
        description: "Tender grilled steak with peppers and onions",
        price: "$18.99",
        image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZmFqaXRhcyUyMHNpenpsaW5nJTIwcGxhdGV8ZW58MXx8fHwxNzczNjI4NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Mixed Fajitas",
        description: "Combination of chicken and steak",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZmFqaXRhcyUyMHNpenpsaW5nJTIwcGxhdGV8ZW58MXx8fHwxNzczNjI4NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    enchiladas: [
      {
        name: "Cheese Enchiladas",
        description: "Three cheese enchiladas topped with red sauce",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1734989435134-7e4885259231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZW5jaGlsYWRhcyUyMHNhdWNlJTIwY2hlZXNlfGVufDF8fHx8MTc3MzYyODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Chicken Enchiladas",
        description: "Three chicken enchiladas with green sauce",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1734989435134-7e4885259231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZW5jaGlsYWRhcyUyMHNhdWNlJTIwY2hlZXNlfGVufDF8fHx8MTc3MzYyODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Beef Enchiladas",
        description: "Three beef enchiladas with mole sauce",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1734989435134-7e4885259231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZW5jaGlsYWRhcyUyMHNhdWNlJTIwY2hlZXNlfGVufDF8fHx8MTc3MzYyODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    combinations: [
      {
        name: "Two Item Combo",
        description: "Choose any two items with rice and beans",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmljZSUyMGJlYW5zJTIwc2lkZXxlbnwxfHx8fDE3NzM2Mjg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Three Item Combo",
        description: "Choose any three items with rice and beans",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmljZSUyMGJlYW5zJTIwc2lkZXxlbnwxfHx8fDE3NzM2Mjg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    sides: [
      {
        name: "Mexican Rice",
        description: "Traditional Spanish rice",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmljZSUyMGJlYW5zJTIwc2lkZXxlbnwxfHx8fDE3NzM2Mjg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Refried Beans",
        description: "Creamy refried beans",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmljZSUyMGJlYW5zJTIwc2lkZXxlbnwxfHx8fDE3NzM2Mjg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Black Beans",
        description: "Seasoned black beans",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1705515943119-e85d4c81f08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmljZSUyMGJlYW5zJTIwc2lkZXxlbnwxfHx8fDE3NzM2Mjg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    drinks: [
      {
        name: "Horchata",
        description: "Sweet rice milk drink with cinnamon",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Jamaica",
        description: "Hibiscus flower tea",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Soft Drinks",
        description: "Coca-Cola products",
        price: "$2.99",
        image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    margaritas: [
      {
        name: "Classic Margarita",
        description: "Premium tequila, lime juice, triple sec",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Strawberry Margarita",
        description: "Fresh strawberries blended with tequila",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Mango Margarita",
        description: "Sweet mango with a kick of tequila",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    { id: 'sides', label: 'Sides' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'margaritas', label: 'Margaritas' }
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
                      <p className="text-foreground/70 text-sm">{item.description}</p>
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
