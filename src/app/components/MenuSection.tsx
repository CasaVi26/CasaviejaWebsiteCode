import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category?: string;
}

interface CategoryState {
  isExpanded: boolean;
  initialVisibleItems: number;
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState('appetizers');
  const [categoryStates, setCategoryStates] = useState<Record<string, CategoryState>>({
    appetizers: { isExpanded: false, initialVisibleItems: 6 },
    aLaCarta: { isExpanded: true, initialVisibleItems: 6 },
    vegetarianAndChicken: { isExpanded: true, initialVisibleItems: 6 },
    platosMexicanos: { isExpanded: true, initialVisibleItems: 6 },
    combinations: { isExpanded: true, initialVisibleItems: 6 },
    delmar: { isExpanded: true, initialVisibleItems: 6 },
    delacasa: { isExpanded: true, initialVisibleItems: 6 },
    almuerzo: { isExpanded: true, initialVisibleItems: 6 },
    kids: { isExpanded: true, initialVisibleItems: 6},
    drinks: { isExpanded: true, initialVisibleItems: 3 },
  });


    // For webiste.com/#menu, scroll to the menu section on page load
  useEffect(() => {
    // Check if the URL has a hash (like #menu)
    if (window.location.hash === '#menu') {
      // Scroll to the menu section
      const menuElement = document.getElementById('menu');
      if (menuElement) {
        // Smooth scroll to the menu section
        menuElement.scrollIntoView({ behavior: 'smooth' });
        
        // Optional: You could also automatically expand the first category
        // setCategoryStates(prev => ({
        //   ...prev,
        //   appetizers: { ...prev.appetizers, isExpanded: true }
        // }));
      }
    }
  }, []);



  const toggleCategory = (categoryId: string) => {
    setCategoryStates(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        isExpanded: !prev[categoryId].isExpanded
      }
    }));
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Keep all existing category states - don't reset them!
  };

  const formatPrice = (price: string) => {
    if (price.includes('(1/2')) {
      const [mainPrice, halfPrice] = price.split('(1/2');
      return (
        <div className="flex flex-col items-end">
          <span className="text-lg font-bold text-[#ea1758] whitespace-nowrap">
            {mainPrice.trim()}
          </span>
          <span className="text-sm text-black-500 whitespace-nowrap">
            (1/2{halfPrice}
          </span>
        </div>
      );
    }
    return <span className="text-lg font-bold text-[#ea1758] whitespace-nowrap">{price}</span>;
  };

const menuData = {
  appetizers: [
    { 
      category: 'appetizers',
      name: "Appetizer's Plate", 
      description: "Quesadillas, taquitos, nachos al carbon, sour cream, guacamole salad", 
      price: "$16" 
    },
    { 
      category: 'appetizers',
      name: "Nachos", 
      description: "Shredded chicken or ground beef, cheese, jalapeños", 
      price: "$12 (1/2 $10)" 
    },
    { 
      category: 'appetizers',
      name: "Macho Nachos", 
      description: "Shredded chicken or ground beef, cheese, beans, lettuce, tomato, guacamole, sour cream", 
      price: "$14 (1/2 $12)" 
    },
    { 
      category: 'appetizers',
      name: "Nachos Al Carbon", 
      description: "Grilled steak, beans, cheese", 
      price: "$16 (1/2 $13)" 
    },
    { 
      category: 'appetizers',
      name: "Taquitos", 
      description: "Chicken or steak, lettuce, tomatoes, guacamole, sour cream", 
      price: "$14" 
    },
    { 
      category: 'appetizers',
      name: "Grande Quesadilla", 
      description: "Shredded chicken or ground beef, peppers, onions, lettuce, tomato, sour cream, guacamole (steak or grilled chicken -> $18)", 
      price: "$14" 
    },
    { 
      category: 'appetizers',
      name: "Fajita Nachos", 
      description: "Grilled chicken or steak, onions, bell peppers, tomato, beans, cheese", 
      price: "$18 (1/2 $13)" 
    },
    { 
      category: 'appetizers',
      name: "Texas Dip", 
      description: "Grilled shrimp, steak, grilled chicken, beans, cheese", 
      price: "$16" 
    },
    { 
      category: 'appetizers',
      name: "Texas Fajita Nachos", 
      description: "Steak, chicken, shrimp, onions, peppers, tomato, beans, cheese", 
      price: "$20 (1/2 $15)" 
    },
    { 
      category: 'appetizers',
      name: "Guacamole Mexicano", 
      description: "Avocado, tomato, onion, jalapeño, cilantro, lime", 
      price: "$13" 
    },
    { 
      category: 'appetizers',
      name: "Queso Con Chorizo", 
      description: "Cheese dip with Mexican sausage", 
      price: "$12" 
    },
    // Dips Section
    { 
      category: 'dips',
      name: "Guacamole Dip", 
      description: "", 
      price: "$10" 
    },
    { 
      category: 'dips',
      name: "Bean Dip", 
      description: "", 
      price: "$9" 
    },
    { 
      category: 'dips',
      name: "Beef Dip", 
      description: "", 
      price: "$9" 
    },
    { 
      category: 'dips',
      name: "Spinach Dip", 
      description: "", 
      price: "$9" 
    },
    { 
      category: 'dips',
      name: "Queso Dip", 
      description: "", 
      price: "$8" 
    },
    // Salads Section
    { 
      category: 'salads',
      name: "Casa Salad", 
      description: "Grilled chicken, greens, spinach, avocado, tomato. Steak or grilled chicken -> $14, shrimp $17. **Add avocado $2, add queso fresco $1.", 
      price: "$15" 
    },
    { 
      category: 'salads',
      name: "Taco Salad", 
      description: "Beef or chicken, lettuce, tomato, cheese, sour cream, guacamole. Steak or grilled chicken -> $14, shrimp $17. **Add avocado $2, add queso fresco $1.", 
      price: "$13" 
    },
    // Soups Section
    { 
      category: 'soups',
      name: "Sopa De Tortilla", 
      description: "Chicken, broth, rice, cilantro, lime, chips", 
      price: "$8" 
    },
    { 
      category: 'soups',
      name: "Black Bean Soup", 
      description: "Black beans, crema, queso fresco, pico, chips", 
      price: "$8" 
    },
  ],
  aLaCarta: [
    { name: "1. Enchilada", description: "", price: "$4.25" },
    { name: "2. Chile Con Carne", description: "", price: "$4.50" },
    { name: "3. Chile Relleno", description: "", price: "$5.50" },
    { name: "4. Chalupa Fiesta", description: "", price: "$9.00" },
    { name: "5. Chalupa", description: "", price: "$4.50" },
    { name: "6. Arroz (Rice)", description: "", price: "$3.50" },
    { name: "7. Frijoles (Beans)", description: "", price: "$3.50" },
    { name: "8. Tamale", description: "", price: "$4.50" },
    { name: "9. Quesadilla", description: "", price: "$5.75" },
    { name: "10. Tostada", description: "", price: "$6.00" },
    { name: "11. Burrito", description: "", price: "$5.75" },
    { name: "12. Shrimp Quesadilla", description: "", price: "$10.50" },
    { name: "13. Taco", description: "", price: "$3.50" },
    { name: "14. Fajita Quesadilla", description: "", price: "$10.00" },
    { name: "15. Flauta", description: "", price: "$4.50" },
    { name: "16. Enchilada Burrito", description: "", price: "$6.75" }
  ],
  vegetarianAndChicken: [
    { 
      category: 'vegetarian',
      name: "17. Plato Vegetariano", 
      description: "Cheese chile relleno, enchilada, chalupa, rice, beans", 
      price: "$14" 
    },
    { 
      category: 'vegetarian',
      name: "18. Enchiladas Rancheras", 
      description: "Three cheese/onion enchiladas, salad", 
      price: "$13" 
    },
    { 
      category: 'vegetarian',
      name: "19. Plato Rustico", 
      description: "Bean burrito, cheese enchilada, rice", 
      price: "$11" 
    },
    { 
      category: 'vegetarian',
      name: "20. Chalupas Mexicanas", 
      description: "Two chalupas, beans, lettuce, tomato, guacamole", 
      price: "$9" 
    },
    { 
      category: 'vegetarian',
      name: "Fajitas Vegetarianas", 
      description: "sauted onions, bell peppers, tomato, cauliflower, mushrooms, carrots, broccoli, rice, beans, guacamole salad, tortillas", 
      price: "$16" 
    },
    { 
      category: 'vegetarian',
      name: "QV. Quesadillas Vegetarianas", 
      description: "sauteed onions, bell peppers, mushrooms, tomato, melted cheese, pico de galo, side salad", 
      price: "$14" 
    },
    { 
      category: 'vegetarian',
      name: "VC. Plato Combinado", 
      description: "cheese quesadillas, chalupa, bean burrito", 
      price: "$13" 
    },
    { 
      category: 'vegetarian',
      name: "Spinach Quesadillas", 
      description: "sauteed spinach, cheese, side salad", 
      price: "$14" 
    },
    // De La Granja Subsection
    { 
      category: 'granja',
      name: "21. Enchiladas De Pollo", 
      description: "Three chicken enchiladas, cheese, salad", 
      price: "$13" 
    },
    { 
      category: 'granja',
      name: "22. Flautas Mexicanas", 
      description: "Four chicken flautas, lettuce, tomato, sour cream", 
      price: "$15" 
    },
    { 
      category: 'granja',
      name: "23. Tacos De Pollo", 
      description: "Three crunchy chicken tacos, lettuce, cheese", 
      price: "$10" 
    },
    { 
      category: 'granja',
      name: "24. Quesadillas De La Granja", 
      description: "Two chicken quesadillas, side salad", 
      price: "$14" 
    }
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
    { name: "33. Plato Fiesta", description: "Chile relleno, beef enchilada, beef burrito, beef taco, chicken flauta, and beef tostada", price: "$18" },
    { name: "34. Fajita Quesadillas", description: "Two quesadillas (steak or chicken),sauteed bell peppers, onions, melted chese, side salad", price: "$20" },
    { name: "35. Carnitas", description: "Deep fried beer marinated port chunks, rice, beans, pico de gallo, salsa verde, tortillas", price: "$15" },
    { name: "36. Tacos", description: "Three crunchy ground beef tacos, lettuce, cheese", price: "$10" },
    { name: "37. Burrito Blanco", description: "Steak, sauteed mushrooms, onions, cheese", price: "$16" },
    { name: "38. Chimichanga Dinner", description: "(Beef or chicken), fried tortilla, melted cheese, lettuce, tomato, sour cream, rice, beans", price: "$14" },
    { name: "39. Hot & Spicy Burrito", description: "Ground beef, rice, beans, chili con carne, melted cheese, sour cream", price: "$15" },
    { name: "40. Chimichanga", description: "(Beef or chicken), fried tortilla, salsa, lettuce, tomato, guacamole, sour cream", price: "$13" },
    { name: "41. Enchiladas Verdes", description: "Three chicken enchiladas, melted cheese, salsa verde, lettuce, tomato, sour cream", price: "$13" },
    { name: "42. Fish Tacos", description: "Three fried tilapia tacos, pico de gallo, red cabbage, chipotle salsa", price: "$13" },
    { name: "43. Mole Poblano", description: "Shredded chicken, mole sauce, sesame seeds, rice, beans, tortillas", price: "$14" },
    { name: "44. Tostada De Pollo", description: "Fried tortilla, shredded chicken, lettuce, tomato, cheese, sour cream", price: "$12" },
    { name: "45. Vieja Quesadilla", description: "Grilled chicken,sauteed onions, bell peppers, spinach, salsa verde, cheese, pico de gallo, guacamole, sour cream", price: "$15" },
    { name: "46. Burrito Verde", description: "(Grilled chicken or steak), sauteed bell peppers, onions, melted cheese, salsa verde, rice, beans", price: "$14" },
    { name: "47. Chilaquiles", description: "Tortillas, salsa roja, two eggs, queso fresco, crema, onions, salsa verde, rice, beans", price: "$13" },
    { name: "48. Tacos De Carne Asada", description: "Marinated steak, corn tortillas, pico de gallo, salsa verde, rice, beans", price: "$16" },
    { name: "49. Grilled Chicken Strips", description: "An adult portion of the grilled chicken strips and fries", price: "$14" }
  ],
  combinations: [
    { name: "Combination A", description: "Taco, Enchilada, Rice, + Beans", price: "$11.95" },
    { name: "Combination B", description: "Chile Relleno, Rice, + Beans", price: "$11.75" },
    { name: "Combination C", description: "Cheese Enchilada, Rice, + Beans", price: "$10.25" },
    { name: "Combination D", description: "Taco, Enchilada, + Burrito", price: "$11.95" },
    { name: "Combination E", description: "Chile Relleno, Taco, Enchilada, Rice, + Beans", price: "$14.50" },
    { name: "Combination F", description: "Chalupa, Taco, Rice, + Beans", price: "$11.95" },
    { name: "Combination G", description: "Two Beef Enchiladas, Taco, + Beans", price: "$11.95" },
    { name: "Combination H", description: "Guacamole Tostada, Enchilada, Rice, + Beans", price: "$11.75" },
    { name: "Combination I", description: "Enchilada, Burrito, Rice, + Beans", price: "$12.75" },
    { name: "Combination J", description: "Burrito, Rice, + Beans", price: "$11.50" },
    { name: "Combination K", description: "Burrito, Chalupa, Enchilada, + Taco", price: "$12.50" },
    { name: "Combination L", description: "Beef Tostada, Burrito, + Flauta", price: "$11.95" },
    { name: "Combination M", description: "Chile Relleno + Fajita Quesadilla", price: "$14.50" },
    { name: "Combination N", description: "Two Mini Beef Quesadillas, Rice, + Beans", price: "$11.95" },
    { name: "Combination O", description: "Two Tacos, Rice, + Beans", price: "$11.50" },
    { name: "Combination P", description: "Chile Relleno, Burrito, + Taco", price: "$12.75" },
    { name: "Combination Q", description: "Two Tamales, Rice, + Beans", price: "$12.75" }
  ],
  delmar: [
    {
      name: "Coctel de Camarón",
      description: "Shrimp, clamato juice, avocado, onion, cilantro, tomato, saltine crackers",
      price: "$18"
    },
    {
      name: "Fajitas de Camarón",
      description: "Shrimp, sauteed onions, bell peppers, tomato, rice, beans, guacamole salad, pico de gallo, tortillas",
      price: "For 1: $23 / For 2: $42"
    },
    {
      name: "Camarones al Mojo de Ajo",
      description: "Shrimp, butter + garlic sauce, rice, beans, sour cream, guacamole salad",
      price: "$18"
    },
    {
      name: "Filetes de Tilapia",
      description: "Marinated tilapia, grilled onions, bell peppers, rice, steamed vegetables",
      price: "$18"
    },
    {
      name: "Plato del Mar",
      description: "Fried shrimp, grilled-roasted shrimp, grilled tilapia filets, rice, sour cream, guacamole salad",
      price: "$23"
    },
    {
      name: "Camarones a la Parrilla",
      description: "2 skewers of grilled shrimp, rice, beans, sour cream, guacamole salad",
      price: "$18"
    }
  ],
  delacasa: [
    {
      name: "Alambres",
      description: "Grilled steak, onions, bell peppers, bacon, mushrooms, cheese",
      price: "$19"
    },
    {
      name: "Fajitas",
      description: "Grilled steak or grilled chicken, sauteed onions, bell peppers, tomato",
      price: "For 1: $19 / For 2: $36"
    },
    {
      name: "Texas Fajitas",
      description: "Grilled shrimp, steak, and grilled chicken, sauteed onions, bell peppers, tomato",
      price: "For 1: $23 / For 2: $42"
    },
    {
      name: "Fajitas al Pastor",
      description: "Marinated pork, sauteed onions, pineapple",
      price: "$19"
    },
    {
      name: "Pechuga Azteca",
      description: "Grilled chicken breast, salsa verde, cheese, spinach, sauteed onions, bell peppers",
      price: "$20"
    },
    {
      name: "Carne Asada",
      description: "Sirloin steak filet, sauteed onions, bell peppers",
      price: "$19"
    },
    {
      name: "Molcajete",
      description: "Grilled steak, chicken, shrimp, chorizo, grilled queso fresco, poblano and roasted green onions",
      price: "$25"
    }
  ],
  almuerzo: [
    {
      name: "1. Burrito, Taco, Enchilada",
      description: "Served with Chalupa",
      price: "$10.50"
    },
    {
      name: "2. Taco, Burrito",
      description: "Served with Chalupa",
      price: "$9.95"
    },
    {
      name: "3. Burrito, Taco",
      description: "Served with Enchilada",
      price: "$9.95"
    },
    {
      name: "4. Quesadilla, Rice",
      description: "Served with Beans",
      price: "$9.95"
    },
    {
      name: "5. Burrito, Rice",
      description: "Served with Beans",
      price: "$9.95"
    },
    {
      name: "6. Taco, Rice",
      description: "Served with Beans",
      price: "$9.00"
    },
    {
      name: "7. Chile Con Carne, Burrito",
      description: "Served with Rice",
      price: "$9.95"
    },
    {
      name: "8. Taco, Burrito",
      description: "Served with Flauta",
      price: "$9.95"
    },
    {
      name: "9. Chile Relleno",
      description: "Served with Guacamole Salad",
      price: "$9.95"
    },
    {
      name: "10. Enchilada, Burrito",
      description: "Served with Chalupa",
      price: "$9.95"
    },
    {
      name: "11. Burrito Supreme",
      description: "",
      price: "$9.95"
    },
    {
      name: "12. Taco, Enchilada, Rice",
      description: "Served with Beans",
      price: "$9.95"
    },
    {
      name: "13. Chimichanga",
      description: "Beef or Chicken",
      price: "$9.95"
    },
    {
      name: "14. Fiesta Taco Salad",
      description: "",
      price: "$9.95"
    },
    {
      name: "15. Burrito, Enchilada, Rice",
      description: "Served with Beans",
      price: "$10.50"
    },
    {
      name: "16. Enchilada, Rice",
      description: "Served with Beans",
      price: "$9.50"
    },
    {
      name: "17. Taco, Enchilada",
      description: "Served with Chalupa",
      price: "$9.95"
    },
    {
      name: "18. Burrito",
      description: "Served with Beef Tostada",
      price: "$9.75"
    },
    {
      name: "19. Taco Salad (Ground Beef)",
      description: "",
      price: "$9.95"
    },
    {
      name: "20. Hot & Spicy Burrito",
      description: "",
      price: "$10.50"
    },
    {
      name: "21. Bean Burrito, Cheese Enchilada",
      description: "Served with Rice",
      price: "$9.75"
    },
    {
      name: "22. Fajitas",
      description: "Steak or Chicken",
      price: "$15.50"
    },
    {
      name: "23. Cheese Enchilada, Chicken Enchilada",
      description: "",
      price: "$8.00"
    },
    {
      name: "24. Two Chicken Quesadillas",
      description: "",
      price: "$9.95"
    },
    {
      name: "25. Carne Asada",
      description: "",
      price: "$15.50"
    },
    {
      name: "26. Chicken Tostada",
      description: "",
      price: "$9.75"
    },
    {
      name: "27. Huevos Con Chorizo, Rice",
      description: "Served with Beans",
      price: "$11.50"
    },
    {
      name: "28. Huevos Rancheros, Rice",
      description: "Served with Beans",
      price: "$9.95"
    },
    {
      name: "29. Fajita Burrito Verde, Rice",
      description: "Served with Beans",
      price: "$11.50"
    },
    {
      name: "30. Nachos",
      description: "Ground Beef or Chicken",
      price: "$9.95"
    },
    {
      name: "31. Chile Relleno, Rice",
      description: "Served with Beans",
      price: "$9.95"
    },
    {
      name: "32. Taco Salad",
      description: "Steak or Grilled Chicken",
      price: "$11.50"
    },
    {
      name: "33. Sandwich De Fajita",
      description: "Served with French Fries",
      price: "$11.50"
    },
    {
      name: "34. Casa Special",
      description: "",
      price: "$11.50"
    }
  ],
  kids: [
    {
      name: "1. Grilled Chicken Strips",
      description: "Served with fries",
      price: "$7.95"
    },
    {
      name: "2. Enchilada",
      description: "Served with rice and beans",
      price: "$6.25"
    },
    {
      name: "3. Burrito",
      description: "Served with rice and beans",
      price: "$6.25"
    },
    {
      name: "4. Taco",
      description: "Served with rice and beans",
      price: "$6.25"
    },
    {
      name: "5. Quesadilla",
      description: "Served with rice and beans",
      price: "$6.25"
    },
    {
      name: "6. Hot Dog",
      description: "Served with fries",
      price: "$6.25"
    },
    {
      name: "7. Pepperoni Pizza",
      description: "",
      price: "$6.25"
    },
    {
      name: "8. Chicken Tenders",
      description: "Served with fries",
      price: "$7.95"
    },
    {
      name: "9. Mini Taco Salad",
      description: "",
      price: "$6.25"
    }
  ],
  drinks: [
    { name: "Soft Drinks", description: "Coke, diet coke, coke zero, sprite, lemonade, fanta, Mr. Pibb, tea, coffee", price: "$3.25" },
    { name: "Cerveza Mexicana", description: "Corona Extra, Corona Light, Tecate, Modelo Especial, Negra Modelo, Dos Equis Lager, Dos Equis Anber, Pacifico, Sol, Victoria", price: "$5.50" },
    { name: "Cerveza Domestica", description: "Budweister, Bud Light, Bud Light Lime, Coors Light, Miller Light, Michelob Ultra", price: "$5.00" }
  ]
};

  const categories = [
    { id: 'appetizers', label: 'Appetizers & Soups' },
    { id: 'aLaCarta', label: 'A La Carta (1-16)' },
    { id: 'vegetarianAndChicken', label: 'Chicken & Veggie (17-24)' },
    { id: 'platosMexicanos', label: 'Platos Mexicanos (25-49)' },
    { id: 'combinations', label: 'Combinations (A-Q)' },
    { id: 'delmar', label: 'Del Mar (Seafood)' },
    { id: 'delacasa', label: 'De La Casa (House Specialties)' },
    { id: 'almuerzo', label: 'Almuerzo (Lunch)' },
    { id: 'kids', label: 'Kids Menu' },
    { id: 'drinks', label: 'Beverages' }
  ];

  const getSubcategoryTitle = (category: string, subcategory: string) => {
    const titles: Record<string, Record<string, string>> = {
      appetizers: {
        'appetizers': 'Appetizers',
        'dips': 'Dips',
        'salads': 'Salads',
        'soups': 'Soups'
      },
      vegetarianAndChicken: {
        'vegetarian': 'Vegetarian Dishes',
        'granja': 'De La Granja'
      }
    };
    
    return titles[category]?.[subcategory] || '';
  };

  const renderCategoryItems = (categoryId: string) => {
    const items = menuData[categoryId as keyof typeof menuData] as MenuItem[];
    const categoryState = categoryStates[categoryId];
    
    if (!categoryState) return null;
    
    if (categoryId === 'appetizers') {
      // Group appetizers by subcategory
      const appetizersBySubcategory = items.reduce((acc, item) => {
        const subcategory = item.category || 'appetizers';
        if (!acc[subcategory]) {
          acc[subcategory] = [];
        }
        acc[subcategory].push(item);
        return acc;
      }, {} as Record<string, MenuItem[]>);
      
      const appetizerItems = appetizersBySubcategory['appetizers'] || [];
      const otherSubcategories = Object.entries(appetizersBySubcategory)
        .filter(([subcategory]) => subcategory !== 'appetizers');
      
      return (
        <div className="space-y-8">
          {/* Appetizers subcategory */}
          {appetizerItems.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#6d1c57] mb-6 border-b pb-2">
                {getSubcategoryTitle('appetizers', 'appetizers')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appetizerItems
                  .slice(0, categoryState.isExpanded ? appetizerItems.length : categoryState.initialVisibleItems)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                          {item.name}
                        </h3>
                        <div className="ml-4">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                      <div className="border-b border-gray-200 my-2"></div>
                      <p className="text-foreground/70 text-m leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
          
          {/* Other subcategories (hidden when collapsed) */}
          {categoryState.isExpanded && otherSubcategories.map(([subcategory, subcategoryItems]) => (
            <div 
              key={subcategory} 
              className="transition-all duration-500 ease-in-out"
              style={{ 
                animation: categoryState.isExpanded ? 'slideDown 0.5s ease-out' : 'none'
              }}
            >
              <h3 className="text-2xl font-bold text-[#6d1c57] mb-6 border-b pb-2">
                {getSubcategoryTitle('appetizers', subcategory)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subcategoryItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                        {item.name}
                      </h3>
                      <div className="ml-4">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                    <div className="border-b border-gray-200 my-2"></div>
                    <p className="text-foreground/70 text-m leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* View More/Less button */}
          {(appetizerItems.length > categoryState.initialVisibleItems || otherSubcategories.length > 0) && (
            <div className="flex justify-end mt-8">
              <button
                onClick={() => toggleCategory(categoryId)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  categoryState.isExpanded 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-[#6d1c57] text-white hover:bg-[#5a1650]'
                }`}
              >
                {categoryState.isExpanded ? (
                  <>
                    <ChevronUp size={20} />
                    <span className="hidden sm:inline">Collapse</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">View More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      );
    }
    
    if (categoryId === 'vegetarianAndChicken') {
      // Group vegetarianAndChicken by subcategory
      const vegBySubcategory = items.reduce((acc, item) => {
        const subcategory = item.category || 'vegetarian';
        if (!acc[subcategory]) {
          acc[subcategory] = [];
        }
        acc[subcategory].push(item);
        return acc;
      }, {} as Record<string, MenuItem[]>);
      
      const vegetarianItems = vegBySubcategory['vegetarian'] || [];
      const granjaItems = vegBySubcategory['granja'] || [];
      
      return (
        <div className="space-y-8">
          {/* Vegetarian subcategory */}
          {vegetarianItems.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#6d1c57] mb-6 border-b pb-2">
                {getSubcategoryTitle('vegetarianAndChicken', 'vegetarian')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vegetarianItems
                  .slice(0, categoryState.isExpanded ? vegetarianItems.length : categoryState.initialVisibleItems)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                          {item.name}
                        </h3>
                        <div className="ml-4">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                      <div className="border-b border-gray-200 my-2"></div>
                      <p className="text-foreground/70 text-m leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
          
          {/* De La Granja subcategory (hidden when collapsed) */}
          {categoryState.isExpanded && granjaItems.length > 0 && (
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ 
                animation: categoryState.isExpanded ? 'slideDown 0.5s ease-out' : 'none'
              }}
            >
              <h3 className="text-2xl font-bold text-[#6d1c57] mb-6 border-b pb-2">
                {getSubcategoryTitle('vegetarianAndChicken', 'granja')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {granjaItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                        {item.name}
                      </h3>
                      <div className="ml-4">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                    <div className="border-b border-gray-200 my-2"></div>
                    <p className="text-foreground/70 text-m leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* View More/Less button */}
          {(vegetarianItems.length > categoryState.initialVisibleItems || granjaItems.length > 0) && (
            <div className="flex justify-end mt-8">
              <button
                onClick={() => toggleCategory(categoryId)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  categoryState.isExpanded 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-[#6d1c57] text-white hover:bg-[#5a1650]'
                }`}
              >
                {categoryState.isExpanded ? (
                  <>
                    <ChevronUp size={20} />
                    <span className="hidden sm:inline">Collapse</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">View More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      );
    }
    
    if (categoryId === 'delacasa') {
      const itemsToShow = categoryState.isExpanded 
        ? items 
        : items.slice(0, categoryState.initialVisibleItems);
      
      return (
        <>
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
            <p className="text-amber-800 font-medium italic">
              All house specialties are served with rice, beans, guacamole salad, pico de gallo, + tortillas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsToShow.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                    {item.name}
                  </h3>
                  <div className="ml-4">
                    {formatPrice(item.price)}
                  </div>
                </div>
                <div className="border-b border-gray-200 my-2"></div>
                <p className="text-foreground/70 text-m leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* View More/Less button */}
          {items.length > categoryState.initialVisibleItems && (
            <div className="flex justify-end mt-8">
              <button
                onClick={() => toggleCategory(categoryId)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  categoryState.isExpanded 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-[#6d1c57] text-white hover:bg-[#5a1650]'
                }`}
              >
                {categoryState.isExpanded ? (
                  <>
                    <ChevronUp size={20} />
                    <span className="hidden sm:inline">Collapse</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">View More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </>
      );
    }
    
    if (categoryId === 'kids') {
      const itemsToShow = categoryState.isExpanded 
        ? items 
        : items.slice(0, categoryState.initialVisibleItems);
      
      return (
        <>
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-blue-800 font-medium italic">
              For children 12 and under.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsToShow.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                    {item.name}
                  </h3>
                  <div className="ml-4">
                    {formatPrice(item.price)}
                  </div>
                </div>
                <div className="border-b border-gray-200 my-2"></div>
                <p className="text-foreground/70 text-m leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* View More/Less button */}
          {items.length > categoryState.initialVisibleItems && (
            <div className="flex justify-end mt-8">
              <button
                onClick={() => toggleCategory(categoryId)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  categoryState.isExpanded 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-[#6d1c57] text-white hover:bg-[#5a1650]'
                }`}
              >
                {categoryState.isExpanded ? (
                  <>
                    <ChevronUp size={20} />
                    <span className="hidden sm:inline">Collapse</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">View More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </>
      );
    }
    
    // Default rendering for other categories
    const itemsToShow = categoryState.isExpanded 
      ? items 
      : items.slice(0, categoryState.initialVisibleItems);
    
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsToShow.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-[#6d1c57] leading-tight">
                  {item.name}
                </h3>
                <div className="ml-4">
                  {formatPrice(item.price)}
                </div>
              </div>
              <div className="border-b border-gray-200 my-2"></div>
              <p className="text-foreground/70 text-m leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* View More/Less button for other categories */}
        {items.length > categoryState.initialVisibleItems && (
          <div className="flex justify-end mt-8">
            <button
              onClick={() => toggleCategory(categoryId)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                categoryState.isExpanded 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-[#6d1c57] text-white hover:bg-[#5a1650]'
              }`}
            >
              {categoryState.isExpanded ? (
                <>
                  <ChevronUp size={20} />
                  <span className="hidden sm:inline">Collapse</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">View More</span>
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </>
    );
  };

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

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
              {renderCategoryItems(category.id)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}