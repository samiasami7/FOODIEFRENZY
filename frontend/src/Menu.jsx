import React from 'react';

const foodItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: "$8.99",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and signature sauce.",
    image: "https://unsplash.com" 
  },
  {
    id: 2,
    name: "Bacon Avocado Burger",
    price: "$10.99",
    description: "Crispy applewood bacon, fresh avocado slices, Swiss cheese, and garlic aioli.",
    image: "https://unsplash.com"
  },
  {
    id: 3,
    name: "Spicy Jalapeno Burger",
    price: "$9.49",
    description: "Grilled jalapenos, pepper jack cheese, and spicy chipotle sauce on a brioche bun.",
    image: "https://unsplash.com"
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    price: "$9.99",
    description: "Sautéed button mushrooms, melted Swiss cheese, and caramelized onions.",
    image: "https://unsplash.com"
  },
  {
    id: 5,
    name: "BBQ Pulled Pork Burger",
    price: "$11.49",
    description: "Slow-cooked pulled pork piled high with tangy BBQ sauce and crunchy coleslaw.",
    image: "https://unsplash.com"
  },
  {
    id: 6,
    name: "Margherita Pizza",
    price: "$12.49",
    description: "Fresh mozzarella, sweet tomato sauce, and fresh basil leaves on a crispy crust.",
    image: "https://unsplash.com"
  },
  {
    id: 7,
    name: "Pepperoni Passion",
    price: "$14.99",
    description: "Double layers of spicy pepperoni slices mixed with an absolute mountain of mozzarella.",
    image: "https://unsplash.com"
  },
  {
    id: 8,
    name: "BBQ Chicken Pizza",
    price: "$15.49",
    description: "Grilled chicken strips, red onion strands, cilantro, and sweet barbecue sauce base.",
    image: "https://unsplash.com"
  },
  {
    id: 9,
    name: "Vegetarian Garden Pizza",
    price: "$13.99",
    description: "Bell peppers, onions, black olives, sweet corn, mushrooms, and cherry tomatoes.",
    image: "https://unsplash.com"
  },
  {
    id: 10,
    name: "Four Cheese Pizza",
    price: "$14.49",
    description: "A rich, gooey blend of Mozzarella, Parmesan, Gorgonzola, and Fontina cheeses.",
    image: "https://unsplash.com"
  },
  {
    id: 11,
    name: "Crispy Chicken Wings",
    price: "$9.99",
    description: "Six pieces of golden fried wings tossed in spicy buffalo sauce.",
    image: "https://unsplash.com"
  },
  {
    id: 12,
    name: "Loaded French Fries",
    price: "$5.49",
    description: "Crispy fries smothered in melted cheese sauce and crispy bacon bits.",
    image: "https://unsplash.com"
  },
  {
    id: 13,
    name: "Mozzarella Cheese Sticks",
    price: "$6.99",
    description: "Deep-fried, herb-breaded cheese sticks served with warm zesty marinara sauce.",
    image: "https://unsplash.com"
  },
  {
    id: 14,
    name: "Garlic Parmesan Knots",
    price: "$4.99",
    description: "Freshly baked dough tied in knots, brushed with real garlic butter and parsley.",
    image: "https://unsplash.com"
  },
  {
    id: 15,
    name: "Onion Rings Basket",
    price: "$5.99",
    description: "Thick-cut beer-battered onion rings fried crispy and served with ranch.",
    image: "https://unsplash.com"
  },
  {
    id: 16,
    name: "Classic Caesar Salad",
    price: "$7.99",
    description: "Crisp romaine lettuce tossed in creamy Caesar dressing with croutons and parmesan.",
    image: "https://unsplash.com"
  },
  {
    id: 17,
    name: "Fettuccine Alfredo",
    price: "$13.99",
    description: "Rich, velvety cream sauce with garlic and parmesan cheese over fettuccine noodles.",
    image: "https://unsplash.com"
  },
  {
    id: 18,
    name: "Spaghetti Bolognese",
    price: "$12.99",
    description: "Classic Italian meat sauce slow-simmered with tomatoes, herbs, and red wine.",
    image: "https://unsplash.com"
  },
  {
    id: 19,
    name: "Creamy Pesto Pasta",
    price: "$11.99",
    description: "Penne pasta tossed in a vibrant, creamy basil pesto with sun-dried tomatoes.",
    image: "https://unsplash.com"
  },
  {
    id: 20,
    name: "Grilled Salmon Plate",
    price: "$17.99",
    description: "Atlantic salmon fillet served with garlic mashed potatoes and steamed asparagus.",
    image: "https://unsplash.com"
  },
  {
    id: 21,
    name: "Crispy Chicken Tenders",
    price: "$10.49",
    description: "Four golden crispy tenders served with honey mustard and a side of french fries.",
    image: "https://unsplash.com"
  },
  {
    id: 22,
    name: "Chocolate Lava Cake",
    price: "$6.49",
    description: "Warm chocolate cake with a rich, molten chocolate center. Served with ice cream.",
    image: "https://unsplash.com"
  },
  {
    id: 23,
    name: "New York Cheesecake",
    price: "$5.99",
    description: "Classic creamy, rich cheesecake on a graham cracker crust with strawberry drizzle.",
    image: "https://unsplash.com"
  },
  {
    id: 24,
    name: "Warm Fudge Brownie",
    price: "$4.99",
    description: "Fudgy chocolate brownie topped with chocolate syrup crumbs and walnuts.",
    image: "https://unsplash.com"
  },
  {
    id: 25,
    name: "Churros with Caramel",
    price: "$5.49",
    description: "Fried dough pastry sticks dusted in cinnamon sugar, served with dulce de leche.",
    image: "https://unsplash.com"
  },
  {
    id: 26,
    name: "Tiramisu Cup",
    price: "$6.99",
    description: "Coffee-dipped ladyfingers layered with whipped mascarpone cheese and cocoa.",
    image: "https://unsplash.com"
  },
  {
    id: 27,
    name: "Craft Lemonade",
    price: "$2.99",
    description: "Freshly squeezed lemons with a hint of mint leaves served icy cold.",
    image: "https://unsplash.com"
  },
  {
    id: 28,
    name: "Iced Caramel Macchiato",
    price: "$4.49",
    description: "Chilled espresso combined with vanilla syrup, milk, and sweet caramel drizzle.",
    image: "https://unsplash.com"
  },
  {
    id: 29,
    name: "Strawberry Milkshake",
    price: "$4.99",
    description: "Creamy vanilla ice cream blended with fresh strawberries and whipped cream.",
    image: "https://unsplash.com"
  },
  {
    id: 30,
    name: "Mango Smoothie",
    price: "$4.99",
    description: "Blend of ripe tropical mangoes, greek yogurt, and honey syrup splash.",
    image: "https://unsplash.com"
  },
  {
    id: 31,
    name: "Coca Cola Glass",
    price: "$1.99",
    description: "Classic sparkling carbonated soft drink served over crushed ice cubes.",
    image: "https://unsplash.com"
  },
  {
    id: 32,
    name: "Sparkling Mint Water",
    price: "$2.49",
    description: "Refreshing bubbly mineral water infused with fresh cucumber slices.",
    image: "https://unsplash.com"
  }
];

export default function Menu() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }} id="menu">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        
        <h2 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', color: '#1f2937', marginBottom: '0.5rem' }}>
          {"Our Delicious Menu"}
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2.5rem', maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '0.875rem' }}>
          {"Explore our wide collection of premium handcrafted meals, artisan pizzas, and sweet refreshments."}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {foodItems.map((item) => (
            <div 
              key={item.id} 
              style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}
            >
              <div>
                <div style={{ overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem', gap: '0.5rem' }}>
                    <h3 style={{ fontWeight: '600', fontSize: '1rem', color: '#1f2937', margin: 0 }}>{item.name}</h3>
                    <span style={{ color: '#ef4444', fontWeight: '700' }}>{item.price}</span>
                  </div>
<p style={{ color: '#4b5563', fontSize: '0.75rem', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}