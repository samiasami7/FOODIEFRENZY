import React, { useState } from 'react';
//import React from 'react';
import burgerimg from './assets/burger.jpg';
import burger2img from './assets/burger_avocado.webp';
import burger3img from './assets/burger_jalapeno.jpg';
import burger4img from './assets/burger_swiss.jpg';
import burger5img from './assets/burger_beef.jpg';
import pizza1img from './assets/pizza1.jpg';
import pizza2img from './assets/pizza2.jpg';
import pizza3img from './assets/pizza3.jpg';
import pizza4img from './assets/pizza4.jpg';
import pizza5img from './assets/pizza5.jpg';
import wingsimg from './assets/wings.jpg';
import friesimg from './assets/fries.jpg';
import sticksimg from './assets/sticks.jpg';
import knotsimg from './assets/knots.jpg';
import onionimg from './assets/onion.jpg';
import saladimg from './assets/salad.jpg';
import alfredoimg from './assets/alfredo.jpg';
import spaghettiimg from './assets/spaghetti.jpg';
import pastaimg from './assets/pasta.jpg';
import salmonimg from './assets/salmon.jpg';
import tendersimg from './assets/tenders.jpg';
import lavaimg from './assets/lava.jpg';
import cheesecakeimg from './assets/cheesecake.jpg';
import brownieimg from './assets/brownie.jpg';
import churrosimg from './assets/churros.jpg';
import tirumisuimg from './assets/tirumisu.jpg';
import lemonadeimg from './assets/lemonade.jpg';
import icedimg from './assets/iced.jpg';
import strawberryimg from './assets/strawberry.jpg';
import mangoimg from './assets/mango.jpg';
import cokeimg from './assets/coke.jpg';
import mintimg from './assets/mint.jpg';

const foodItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: "$8.99",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and signature sauce.",
    image: burgerimg
  },
  {
    id: 2,
    name: "Bacon Avocado Burger",
    price: "$10.99",
    description: "Crispy applewood bacon, fresh avocado slices, Swiss cheese, and garlic aioli.",
    image: burger2img
  },
  {
    id: 3,
    name: "Spicy Jalapeno Burger",
    price: "$9.49",
    description: "Grilled jalapenos, pepper jack cheese, and spicy chipotle sauce on a brioche bun.",
    image: burger3img
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    price: "$9.99",
    description: "Sautéed button mushrooms, melted Swiss cheese, and caramelized onions.",
    image: burger4img
  },
  {
    id: 5,
    name: "BBQ Pulled Beef Burger",
    price: "$11.49",
    description: "Slow-cooked pulled beef piled high with tangy BBQ sauce and crunchy coleslaw.",
    image: burger5img
  },
  {
    id: 6,
    name: "Margherita Pizza",
    price: "$12.49",
    description: "Fresh mozzarella, sweet tomato sauce, and fresh basil leaves on a crispy crust.",
    image: pizza1img
  },
  {
    id: 7,
    name: "Pepperoni Passion",
    price: "$14.99",
    description: "Double layers of spicy pepperoni slices mixed with an absolute mountain of mozzarella.",
    image: pizza2img
  },
  {
    id: 8,
    name: "BBQ Chicken Pizza",
    price: "$15.49",
    description: "Grilled chicken strips, red onion strands, cilantro, and sweet barbecue sauce base.",
    image: pizza3img
  },
  {
    id: 9,
    name: "Vegetarian Garden Pizza",
    price: "$13.99",
    description: "Bell peppers, onions, black olives, sweet corn, mushrooms, and cherry tomatoes.",
    image: pizza4img
  },
  {
    id: 10,
    name: "Four Cheese Pizza",
    price: "$14.49",
    description: "A rich, gooey blend of Mozzarella, Parmesan, Gorgonzola, and Fontina cheeses.",
    image: pizza5img
  },
  {
    id: 11,
    name: "Crispy Chicken Wings",
    price: "$9.99",
    description: "Six pieces of golden fried wings tossed in spicy buffalo sauce.",
    image: wingsimg
  },
  {
    id: 12,
    name: "Loaded French Fries",
    price: "$5.49",
    description: "Crispy fries smothered in melted cheese sauce and crispy bacon bits.",
    image: friesimg
  },
  {
    id: 13,
    name: "Mozzarella Cheese Sticks",
    price: "$6.99",
    description: "Deep-fried, herb-breaded cheese sticks served with warm zesty marinara sauce.",
    image: sticksimg
  },
  {
    id: 14,
    name: "Garlic Parmesan Knots",
    price: "$4.99",
    description: "Freshly baked dough tied in knots, brushed with real garlic butter and parsley.",
    image: knotsimg
  },
  {
    id: 15,
    name: "Onion Rings Basket",
    price: "$5.99",
    description: "Thick-cut beer-battered onion rings fried crispy and served with ranch.",
    image: onionimg
  },
  {
    id: 16,
    name: "Classic Caesar Salad",
    price: "$7.99",
    description: "Crisp romaine lettuce tossed in creamy Caesar dressing with croutons and parmesan.",
    image: saladimg
  },
  {
    id: 17,
    name: "Fettuccine Alfredo",
    price: "$13.99",
    description: "Rich, velvety cream sauce with garlic and parmesan cheese over fettuccine noodles.",
    image: alfredoimg
  },
  {
    id: 18,
    name: "Spaghetti Bolognese",
    price: "$12.99",
    description: "Classic Italian meat sauce slow-simmered with tomatoes, herbs, and red wine.",
    image: spaghettiimg
  },
  {
    id: 19,
    name: "Creamy Pesto Pasta",
    price: "$11.99",
    description: "Penne pasta tossed in a vibrant, creamy basil pesto with sun-dried tomatoes.",
    image: pastaimg
  },
  {
    id: 20,
    name: "Grilled Salmon Plate",
    price: "$17.99",
    description: "Atlantic salmon fillet served with garlic mashed potatoes and steamed asparagus.",
    image: salmonimg
  },
  {
    id: 21,
    name: "Crispy Chicken Tenders",
    price: "$10.49",
    description: "Four golden crispy tenders served with honey mustard and a side of french fries.",
    image: tendersimg
  },
  {
    id: 22,
    name: "Chocolate Lava Cake",
    price: "$6.49",
    description: "Warm chocolate cake with a rich, molten chocolate center. Served with ice cream.",
    image: lavaimg
  },
  {
    id: 23,
    name: "New York Cheesecake",
    price: "$5.99",
    description: "Classic creamy, rich cheesecake on a graham cracker crust with strawberry drizzle.",
    image: cheesecakeimg
  },
  {
    id: 24,
    name: "Warm Fudge Brownie",
    price: "$4.99",
    description: "Fudgy chocolate brownie topped with chocolate syrup crumbs and walnuts.",
    image: brownieimg
  },
  {
    id: 25,
    name: "Churros with Caramel",
    price: "$5.49",
    description: "Fried dough pastry sticks dusted in cinnamon sugar, served with dulce de leche.",
    image: churrosimg
  },
  {
    id: 26,
    name: "Tiramisu Cup",
    price: "$6.99",
    description: "Coffee-dipped ladyfingers layered with whipped mascarpone cheese and cocoa.",
    image: tirumisuimg
  },
  {
    id: 27,
    name: "Craft Lemonade",
    price: "$2.99",
    description: "Freshly squeezed lemons with a hint of mint leaves served icy cold.",
    image: lemonadeimg
  },
  {
    id: 28,
    name: "Iced Caramel Macchiato",
    price: "$4.49",
    description: "Chilled espresso combined with vanilla syrup, milk, and sweet caramel drizzle.",
    image: icedimg
  },
  {
    id: 29,
    name: "Strawberry Milkshake",
    price: "$4.99",
    description: "Creamy vanilla ice cream blended with fresh strawberries and whipped cream.",
    image: strawberryimg
  },
  {
    id: 30,
    name: "Mango Smoothie",
    price: "$4.99",
    description: "Blend of ripe tropical mangoes, greek yogurt, and honey syrup splash.",
    image: mangoimg
  },
  {
    id: 31,
    name: "Coca Cola Glass",
    price: "$1.99",
    description: "Classic sparkling carbonated soft drink served over crushed ice cubes.",
    image: cokeimg
  },
  {
    id: 32,
    name: "Sparkling Mint Water",
    price: "$2.49",
    description: "Refreshing bubbly mineral water infused with fresh cucumber slices.",
    image: mintimg
  }
];

export default function Menu() {
  // 1. ADD THESE STATE HOOKS AT THE TOP OF THE FUNCTION
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // 2. ADD THE LOGIC FUNCTIONS
  const addToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [
  ...prevCart,
  {
    id: item.id,
    name: item.name,
    price: numericPrice,
    quantity: 1,
    note: ""
  }
];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  // Add this helper function below your other cart state functions
const updateItemNote = (id, newNoteText) => {
  setCart((prevCart) =>
    prevCart.map((item) => (item.id === id ? { ...item, note: newNoteText } : item))
  );
};
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return alert("Please fill out your contact details.");
    if (cart.length === 0) return alert("Your order list is empty.");

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  customerName,
  customerPhone,

  items: cart.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    preferenceNote: item.note
  })),

  totalAmount: parseFloat(totalAmount.toFixed(2))
})
      });

    

const text = await response.text();
console.log(text);

let data;

try {
  data = JSON.parse(text);
} catch {
  console.log("Server returned HTML instead of JSON:");
  console.log(text);
  return;
}
      if (data.success) {
        alert('Order successfully saved to MongoDB database!');
        setCart([]);
        setCustomerName('');
        setCustomerPhone('');
      } else {
        alert('Error saving order: ' + data.message);
      }
    } catch (err) {
  console.error("FULL ERROR:", err);
  alert(err.message);
}
  };

  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#B0BA99' }} id="menu">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        
        <h2 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', color: '#1f2937', marginBottom: '0.5rem' }}>
          {"Our Delicious Menu"}
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2.5rem', maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '0.875rem' }}>
          {"Explore our wide collection of premium handcrafted meals, artisan pizzas, and sweet refreshments."}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {foodItems.map((item) => (
            <div 
              key={item.id} 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
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
                  <p style={{ color: '#4b5563', fontSize: '0.75rem', margin: '0 0 1rem 0' }}>{item.description}</p>
                </div>
              </div>

              {/* 3. ADDED THE "ADD TO ORDER" BUTTON INSIDE THE CARD */}
              <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <button 
                  onClick={() => addToCart(item)}
                  style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1f2937', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem' }}
                >
                  Add To Order
                </button>
              </div>
            </div>
          ))}
        </div> {/* <--- CLOSED THE MENU GRID DIV */}

        {/* 4. PASTED THE ORDER BOX FORM DIRECTLY RIGHT HERE BELOW THE GRID */}
        <div style={{ backgroundColor: '#BCB88A', borderRadius: '16px', padding: '2.5rem', maxWidth: '36rem', margin: '0 auto', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#111827', textAlign: 'center' }}>
            🛒 Your Customer Order Box
          </h3>

          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#6b7280', margin: '2rem 0' }}>Your order is empty. Choose foods from above!</p>
          ) : (
            <div style={{ marginBottom: '1.5rem' }}>
            {cart.map((item) => (
  <div
    key={item.id}
    style={{
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      paddingBottom: "12px",
      marginBottom: "12px",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <span style={{ fontWeight: "600" }}>
          {item.name}
        </span>

        <span
          style={{
            marginLeft: "5px",
            color: "#666",
            fontSize: "14px",
          }}
        >
          ({item.quantity}x)
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span>
          ${(item.price * item.quantity).toFixed(2)}
        </span>

        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            width: "25px",
            height: "25px",
            cursor: "pointer",
          }}
        >
          -
        </button>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        marginTop: "8px",
        gap: "8px",
      }}
    >
      <span>Note:</span>

      <input
        type="text"
        placeholder="Your preferences or special instructions"
        value={item.note}
        onChange={(e) =>
          updateItemNote(item.id, e.target.value)
        }
        style={{
          flex: 1,
          padding: "6px",
        }}
      />
    </div>
  </div>
))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '1.2rem', fontWeight: '700', color: '#111827' }}>
                <span>Total Amount:</span>
                <span style={{ color: '#dc2626' }}>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          )}

          <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
              Customer Full Name
              <input 
                type="text" 
                required
                placeholder="Enter full name" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)}
                style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
              Mobile Contact Number
              <input 
                type="tel" 
                required
                placeholder="Enter telephone number" 
                value={customerPhone} 
                onChange={(e) => setCustomerPhone(e.target.value)}
                style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
              />
            </label>

            <button 
              type="submit" 
              disabled={cart.length === 0}
              style={{ width: '100%', padding: '1rem', backgroundColor: cart.length === 0 ? '#9ca3af' : '#22c55e', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: cart.length === 0 ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s' }}
            >
              Confirm and Save Order
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
