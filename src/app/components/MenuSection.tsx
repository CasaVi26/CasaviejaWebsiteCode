import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function MenuSection() {
  const [activeTab, setActiveTab] = useState('appetizers');


  // Wherever there's a (1/2 $15), find a way to make that a different color, under neath the main price in a smaller font.
  // Make subcategrories of main categrories here. For example, Appetizers should have a soup section and a salad section within them.
const menuData = {
  appetizers: [
    { name: "Appetizer's Plate", description: "Quesadillas, taquitos, nachos al carbon, sour cream, guacamole salad", price: "$16" },
    { name: "Nachos", description: "Shredded chicken or ground beef, cheese, jalapeños", price: "$12 (1/2 $10)" },
    { name: "Macho Nachos", description: "Shredded chicken or ground beef, cheese, beans, lettuce, tomato, guacamole, sour cream", price: "$14 (1/2 $12)" },
    { name: "Nachos Al Carbon", description: "Grilled steak, beans, cheese", price: "$16 (1/2 $13)" },
    { name: "Taquitos", description: "Chicken or steak, lettuce, tomatoes, guacamole, sour cream", price: "$14" },
    { name: "Grande Quesadilla", description: "Shredded chicken or ground beef, peppers, onions, lettuce, tomato, sour cream, guacamole (steak or grilled chicken -> $18)", price: "$14" },
    { name: "Fajita Nachos", description: "Grilled chicken or steak, onions, bell peppers, tomato, beans, cheese", price: "$18 (1/2 $13)" },
    { name: "Texas Dip", description: "Grilled shrimp, steak, grilled chicken, beans, cheese", price: "$16" },
    { name: "Texas Fajita Nachos", description: "Steak, chicken, shrimp, onions, peppers, tomato, beans, cheese", price: "$20 (1/2 $15)" },
    { name: "Guacamole Mexicano", description: "Avocado, tomato, onion, jalapeño, cilantro, lime", price: "$13" },
    { name: "Queso Con Chorizo", description: "Cheese dip with Mexican sausage", price: "$12" },
    // Make a seperate small section for dips, each dip described below have its own item entre, no description.
    { name: "Signature Dips", description: "Guacamole ($10)/Bean ($9)/Beef ($9)/Spinach ($9)/Queso ($8) Dips", price: "$8 - $10" },

    // Give salads their own section and note: Steak " Grilled chicken -> $14, shrimp $17. ** Add avacado $2, add queso fresco $1."
    { name: "Casa Salad", description: "Grilled chicken, greens, spinach, avocado, tomato", price: "$15" },
    { name: "Taco Salad", description: "Beef or chicken, lettuce, tomato, cheese, sour cream, guacamole", price: "$13" },
    // Give soups their own little section at the end of the appetizers.
    { name: "Sopa De Tortilla", description: "Chicken, broth, rice, cilantro, lime, chips", price: "$8" },
    { name: "Black Bean Soup", description: "Black beans, crema, queso fresco, pico, chips", price: "$8" },
    
  ],
  aLaCarta: [ // Get rid of descriptions here, but make it still look nice and not as if its missing something.
    { name: "1. Enchilada", description: "Single enchilada", price: "$4.25" },
    { name: "2. Chile Con Carne", description: "Mexican style chili", price: "$4.50" },
    { name: "3. Chile Relleno", description: "Stuffed poblano pepper", price: "$5.50" },
    { name: "4. Chalupa Fiesta", description: "Large topped chalupa", price: "$9.00" },
    { name: "5. Chalupa", description: "Single chalupa", price: "$4.50" },
    { name: "6. Arroz (Rice)", description: "Traditional Mexican rice", price: "$3.50" },
    { name: "7. Frijoles (Beans)", description: "Refried or black beans", price: "$3.50" },
    { name: "8. Tamale", description: "Single traditional tamale", price: "$4.50" },
    { name: "9. Quesadilla", description: "Single cheese quesadilla", price: "$5.75" },
    { name: "10. Tostada", description: "Single toasted tortilla", price: "$6.00" },
    { name: "11. Burrito", description: "Single burrito", price: "$5.75" },
    { name: "12. Shrimp Quesadilla", description: "Quesadilla with shrimp", price: "$10.50" },
    { name: "13. Taco", description: "Single crunchy or soft taco", price: "$3.50" },
    { name: "14. Fajita Quesadilla", description: "Steak or chicken fajita quesadilla", price: "$10.00" },
    { name: "15. Flauta", description: "Single crispy rolled taco", price: "$4.50" },
    { name: "16. Enchilada Burrito", description: "Burrito with enchilada sauce", price: "$6.75" }
  ],
  vegetarianAndChicken: [
    { name: "17. Plato Vegetariano", description: "Cheese chile relleno, enchilada, chalupa, rice, beans", price: "$14" },
    { name: "18. Enchiladas Rancheras", description: "Three cheese/onion enchiladas, salad", price: "$13" },
    { name: "19. Plato Rustico", description: "Bean burrito, cheese enchilada, rice", price: "$11" },
    { name: "20. Chalupas Mexicanas", description: "Two chalupas, beans, lettuce, tomato, guacamole", price: "$9" },
    { name: "Fajitas Vegetarianas", description: "sauted onions, bell peppers, tomato, cauliflower, mushrooms, carrots, broccoli, rice, beans, guacamole salad, tortillas", price: "$16" },
    { name: "QV. Quesadillas Vegetarianas", description: "sauteed onions, bell peppers, mushrooms, tomato, melted cheese, pico de galo, side salad", price: "$14" },
    { name: "VC. Plato Combinado", description: "cheese quesadillas, chalupa, bean burrito", price: "$13" },
    { name: "Spinach Quesadillas", description: "sauteed spinach, cheese, side salad", price: "$14" },
    
    // Seperate subsection, De La Granja
    { name: "21. Enchiladas De Pollo", description: "Three chicken enchiladas, cheese, salad", price: "$13" },
    { name: "22. Flautas Mexicanas", description: "Four chicken flautas, lettuce, tomato, sour cream", price: "$15" },
    { name: "23. Tacos De Pollo", description: "Three crunchy chicken tacos, lettuce, cheese", price: "$10" },
    { name: "24. Quesadillas De La Granja", description: "Two chicken quesadillas, side salad", price: "$14" }
  ],
  platosMexicanos: [
    { name: "25. Enchiladas Supreme", description: "one chicken, one cheese, one beef, and one bean enchilada, salsa, lettuce, tomato, cheese, sour cream", price: "$15" },
    { name: "26. Chiles Rellenos", description: "Two stuffed beef and cheese mexican chiles, guacamole salad", price: "$14" },
    { name: "27. Burrito Supreme", description: "Ground beef, beans, melted cheese, lettuce,tomato, sour cream, guacamole", price: "$13" },
    { name: "28. Enchilada Dinner", description: "Two enchiladas (your choice), rice, beans", price: "$13" },
    { name: "29. Casa Special", description: "Grilled chicken, rice, melted cheese", price: "$14" },
    { name: "30. Burrito Don Nacho", description: "Steak, grilled chicken, shrimp, chorizo, melted cheese", price: "$20" },
    { name: "31. Sandwich De Fajita", description: "Steak, sauteed onions, bell peppers, mushrooms, cheese, hoagie roll, french fries", price: "$15" },
    { name: "32. Tacos Al Pastor (4)", description: "Marinated pork, pineapple, onions, cilantro, salsa verde, lime", price: "$17" },
    // stopped here for now. Check rest for accurate details on description, price, and name.
    { name: "33. Plato Fiesta", description: "Large platter: Relleno, enchilada, burrito, taco, flauta, tostada", price: "$18" },
    { name: "34. Fajita Quesadillas", description: "Two quesadillas, steak or chicken, peppers, onions", price: "$20" },
    { name: "35. Carnitas", description: "Pork chunks, rice, beans, pico, tortillas", price: "$15" },
    { name: "36. Tacos", description: "Three ground beef tacos, lettuce, cheese", price: "$10" },
    { name: "37. Burrito Blanco", description: "Steak, mushrooms, onions, cheese", price: "$16" },
    { name: "38. Chimichanga Dinner", description: "Beef/chicken, fried, cheese, rice, beans", price: "$14" },
    { name: "39. Hot & Spicy Burrito", description: "Beef, rice, beans, chili, cheese", price: "$15" },
    { name: "40. Chimichanga", description: "Single chimichanga with guacamole salad", price: "$13" },
    { name: "41. Enchiladas Verdes", description: "Three chicken enchiladas, salsa verde", price: "$13" },
    { name: "42. Fish Tacos", description: "Three tilapia tacos, red cabbage, chipotle sauce", price: "$13" },
    { name: "43. Mole Poblano", description: "Chicken, mole sauce, sesame, rice, beans", price: "$14" },
    { name: "44. Tostada De Pollo", description: "Chicken, lettuce, tomato, cheese, sour cream", price: "$12" },
    { name: "45. Vieja Quesadilla", description: "Chicken, spinach, peppers, salsa verde, cheese", price: "$15" },
    { name: "46. Burrito Verde", description: "Chicken or steak, peppers, onions, salsa verde, rice, beans", price: "$14" },
    { name: "47. Chilaquiles", description: "Tortilla strips, salsa roja, eggs, cheese, rice, beans", price: "$13" },
    { name: "48. Tacos De Carne Asada", description: "Steak, pico, salsa verde, rice, beans", price: "$16" },
    { name: "49. Grilled Chicken Strips", description: "Adult portion with fries", price: "$14" }
  ],
  combinations: [
    { name: "Combination A", description: "Taco, Enchilada, Rice, Beans", price: "$11.95" },
    { name: "Combination B", description: "Chile Relleno, Rice, Beans", price: "$11.75" },
    { name: "Combination C", description: "Cheese Enchilada, Rice, Beans", price: "$10.25" },
    { name: "Combination D", description: "Taco, Enchilada, Burrito", price: "$11.95" },
    { name: "Combination E", description: "Chile Relleno, Taco, Enchilada, Rice, Beans", price: "$14.50" },
    { name: "Combination F", description: "Chalupa, Taco, Rice, Beans", price: "$11.95" },
    { name: "Combination G", description: "Two Beef Enchiladas, Taco, Beans", price: "$11.95" },
    { name: "Combination H", description: "Guacamole Tostada, Enchilada, Rice, Beans", price: "$11.75" },
    { name: "Combination I", description: "Enchilada, Burrito, Rice, Beans", price: "$12.75" },
    { name: "Combination J", description: "Burrito, Rice, Beans", price: "$11.50" },
    { name: "Combination K", description: "Burrito, Chalupa, Enchilada, Taco", price: "$12.50" },
    { name: "Combination L", description: "Beef Tostada, Burrito, Flauta", price: "$11.95" },
    { name: "Combination M", description: "Chile Relleno, Fajita Quesadilla", price: "$14.50" },
    { name: "Combination N", description: "Two Mini Beef Quesadillas, Rice, Beans", price: "$11.95" },
    { name: "Combination O", description: "Two Tacos, Rice, Beans", price: "$11.50" },
    { name: "Combination P", description: "Chile Relleno, Burrito, Taco", price: "$12.75" },
    { name: "Combination Q", description: "Two Tamales, Rice, Beans", price: "$12.75" }
  ],
  specialties: [
    { name: "Fajitas (Steak or Chicken)", description: "Veggies, rice, beans, salad, tortillas", price: "For 1: $19 / For 2: $36" },
    { name: "Texas Fajitas", description: "Shrimp, steak, chicken, rice, beans, salad", price: "For 1: $23 / For 2: $42" },
    { name: "Molcajete", description: "Steak, chicken, shrimp, chorizo, queso fresco", price: "$25" },
    { name: "Plato Del Mar", description: "Shrimp, tilapia, rice, salad", price: "$23" }
  ],
  lunch: [
    { name: "Lunch #1-34", description: "Full variety of daily lunch specials (11am-3pm)", price: "$8.00 - $15.50" }
  ],
  kids: [
    { name: "1. Chicken Strips & Fries", description: "For kids 12 and under", price: "$7.95" },
    { name: "7. Pepperoni Pizza", description: "For kids 12 and under", price: "$6.25" }
  ],
  drinks: [
    { name: "Soft Drinks", description: "Coke products, Tea, Coffee", price: "$3.25" }
  ]
};

const categories = [
  // Row 1
  { id: 'appetizers', label: 'Appetizers & Soups' },
  { id: 'aLaCarta', label: 'A La Carta (1-16)' },
  { id: 'vegetarianAndChicken', label: 'Chicken & Veggie (17-24)' },
  { id: 'platosMexicanos', label: 'Platos Mexicanos (25-49)' },
  { id: 'combinations', label: 'Combinations (A-Q)' },
  // Row 2
  { id: 'specialties', label: 'House Specialties' },
  { id: 'lunch', label: 'Lunch Specials' },
  { id: 'kids', label: 'Kids Menu' },
  { id: 'drinks', label: 'Beverages' }
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
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                        {item.name}
                      </h3>

                      <span className="text-lg font-bold text-[#ea1758] whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>

                    <div className="border-b border-gray-200 my-2"></div>

                    <p className="text-foreground/70 text-m leading-relaxed">
                      {item.description}
                    </p>
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
