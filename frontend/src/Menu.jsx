import React, { useEffect, useState } from "react";

import burgerimg from "./assets/burger.jpg";
import burger2img from "./assets/burger_avocado.webp";
import burger3img from "./assets/burger_jalapeno.jpg";
import burger4img from "./assets/burger_swiss.jpg";
import burger5img from "./assets/burger_beef.jpg";

import pizza1img from "./assets/pizza1.jpg";
import pizza2img from "./assets/pizza2.jpg";
import pizza3img from "./assets/pizza3.jpg";
import pizza4img from "./assets/pizza4.jpg";
import pizza5img from "./assets/pizza5.jpg";

import wingsimg from "./assets/wings.jpg";
import friesimg from "./assets/fries.jpg";
import sticksimg from "./assets/sticks.jpg";
import knotsimg from "./assets/knots.jpg";
import onionimg from "./assets/onion.jpg";

import saladimg from "./assets/salad.jpg";

import alfredoimg from "./assets/alfredo.jpg";
import spaghettiimg from "./assets/spaghetti.jpg";
import pastaimg from "./assets/pasta.jpg";

import salmonimg from "./assets/salmon.jpg";
import tendersimg from "./assets/tenders.jpg";

import lavaimg from "./assets/lava.jpg";
import cheesecakeimg from "./assets/cheesecake.jpg";
import brownieimg from "./assets/brownie.jpg";
import churrosimg from "./assets/churros.jpg";
import tirumisuimg from "./assets/tirumisu.jpg";

import lemonadeimg from "./assets/lemonade.jpg";
import icedimg from "./assets/iced.jpg";
import strawberryimg from "./assets/strawberry.jpg";
import mangoimg from "./assets/mango.jpg";
import cokeimg from "./assets/coke.jpg";
import mintimg from "./assets/mint.jpg";

// ======================================================
// DEFAULT FOOD ITEMS
// ======================================================

const foodItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: "$8.99",
    description:
      "Juicy beef patty with cheddar cheese, lettuce, tomato, and signature sauce.",
    image: burgerimg,
  },
  {
    id: 2,
    name: "Bacon Avocado Burger",
    price: "$10.99",
    description:
      "Crispy applewood bacon, fresh avocado slices, Swiss cheese, and garlic aioli.",
    image: burger2img,
  },
  {
    id: 3,
    name: "Spicy Jalapeno Burger",
    price: "$9.49",
    description:
      "Grilled jalapenos, pepper jack cheese, and spicy chipotle sauce on a brioche bun.",
    image: burger3img,
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    price: "$9.99",
    description:
      "Sautéed button mushrooms, melted Swiss cheese, and caramelized onions.",
    image: burger4img,
  },
  {
    id: 5,
    name: "BBQ Pulled Beef Burger",
    price: "$11.49",
    description:
      "Slow-cooked pulled beef piled high with tangy BBQ sauce and crunchy coleslaw.",
    image: burger5img,
  },
  {
    id: 6,
    name: "Margherita Pizza",
    price: "$12.49",
    description:
      "Fresh mozzarella, sweet tomato sauce, and fresh basil leaves on a crispy crust.",
    image: pizza1img,
  },
  {
    id: 7,
    name: "Pepperoni Passion",
    price: "$14.99",
    description:
      "Double layers of spicy pepperoni slices mixed with an absolute mountain of mozzarella.",
    image: pizza2img,
  },
  {
    id: 8,
    name: "BBQ Chicken Pizza",
    price: "$15.49",
    description:
      "Grilled chicken strips, red onion strands, cilantro, and sweet barbecue sauce base.",
    image: pizza3img,
  },
  {
    id: 9,
    name: "Vegetarian Garden Pizza",
    price: "$13.99",
    description:
      "Bell peppers, onions, black olives, sweet corn, mushrooms, and cherry tomatoes.",
    image: pizza4img,
  },
  {
    id: 10,
    name: "Four Cheese Pizza",
    price: "$14.49",
    description:
      "A rich, gooey blend of Mozzarella, Parmesan, Gorgonzola, and Fontina cheeses.",
    image: pizza5img,
  },
  {
    id: 11,
    name: "Crispy Chicken Wings",
    price: "$9.99",
    description:
      "Six pieces of golden fried wings tossed in spicy buffalo sauce.",
    image: wingsimg,
  },
  {
    id: 12,
    name: "Loaded French Fries",
    price: "$5.49",
    description:
      "Crispy fries smothered in melted cheese sauce and crispy bacon bits.",
    image: friesimg,
  },
  {
    id: 13,
    name: "Mozzarella Cheese Sticks",
    price: "$6.99",
    description:
      "Deep-fried, herb-breaded cheese sticks served with warm zesty marinara sauce.",
    image: sticksimg,
  },
  {
    id: 14,
    name: "Garlic Parmesan Knots",
    price: "$4.99",
    description:
      "Freshly baked dough tied in knots, brushed with real garlic butter and parsley.",
    image: knotsimg,
  },
  {
    id: 15,
    name: "Onion Rings Basket",
    price: "$5.99",
    description:
      "Thick-cut beer-battered onion rings fried crispy and served with ranch.",
    image: onionimg,
  },
  {
    id: 16,
    name: "Classic Caesar Salad",
    price: "$7.99",
    description:
      "Crisp romaine lettuce tossed in creamy Caesar dressing with croutons and parmesan.",
    image: saladimg,
  },
  {
    id: 17,
    name: "Fettuccine Alfredo",
    price: "$13.99",
    description:
      "Rich, velvety cream sauce with garlic and parmesan cheese over fettuccine noodles.",
    image: alfredoimg,
  },
  {
    id: 18,
    name: "Spaghetti Bolognese",
    price: "$12.99",
    description:
      "Classic Italian meat sauce slow-simmered with tomatoes, herbs, and red wine.",
    image: spaghettiimg,
  },
  {
    id: 19,
    name: "Creamy Pesto Pasta",
    price: "$11.99",
    description:
      "Penne pasta tossed in a vibrant, creamy basil pesto with sun-dried tomatoes.",
    image: pastaimg,
  },
  {
    id: 20,
    name: "Grilled Salmon Plate",
    price: "$17.99",
    description:
      "Atlantic salmon fillet served with garlic mashed potatoes and steamed asparagus.",
    image: salmonimg,
  },
  {
    id: 21,
    name: "Crispy Chicken Tenders",
    price: "$10.49",
    description:
      "Four golden crispy tenders served with honey mustard and a side of french fries.",
    image: tendersimg,
  },
  {
    id: 22,
    name: "Chocolate Lava Cake",
    price: "$6.49",
    description:
      "Warm chocolate cake with a rich, molten chocolate center. Served with ice cream.",
    image: lavaimg,
  },
  {
    id: 23,
    name: "New York Cheesecake",
    price: "$5.99",
    description:
      "Classic creamy, rich cheesecake on a graham cracker crust with strawberry drizzle.",
    image: cheesecakeimg,
  },
  {
    id: 24,
    name: "Warm Fudge Brownie",
    price: "$4.99",
    description:
      "Fudgy chocolate brownie topped with chocolate syrup crumbs and walnuts.",
    image: brownieimg,
  },
  {
    id: 25,
    name: "Churros with Caramel",
    price: "$5.49",
    description:
      "Fried dough pastry sticks dusted in cinnamon sugar, served with dulce de leche.",
    image: churrosimg,
  },
  {
    id: 26,
    name: "Tiramisu Cup",
    price: "$6.99",
    description:
      "Coffee-dipped ladyfingers layered with whipped mascarpone cheese and cocoa.",
    image: tirumisuimg,
  },
  {
    id: 27,
    name: "Craft Lemonade",
    price: "$2.99",
    description:
      "Freshly squeezed lemons with a hint of mint leaves served icy cold.",
    image: lemonadeimg,
  },
  {
    id: 28,
    name: "Iced Caramel Macchiato",
    price: "$4.49",
    description:
      "Chilled espresso combined with vanilla syrup, milk, and sweet caramel drizzle.",
    image: icedimg,
  },
  {
    id: 29,
    name: "Strawberry Milkshake",
    price: "$4.99",
    description:
      "Creamy vanilla ice cream blended with fresh strawberries and whipped cream.",
    image: strawberryimg,
  },
  {
    id: 30,
    name: "Mango Smoothie",
    price: "$4.99",
    description:
      "Blend of ripe tropical mangoes, greek yogurt, and honey syrup splash.",
    image: mangoimg,
  },
  {
    id: 31,
    name: "Coca Cola Glass",
    price: "$1.99",
    description:
      "Classic sparkling carbonated soft drink served over crushed ice cubes.",
    image: cokeimg,
  },
  {
    id: 32,
    name: "Sparkling Mint Water",
    price: "$2.49",
    description:
      "Refreshing bubbly mineral water infused with fresh cucumber slices.",
    image: mintimg,
  },
];

// ======================================================
// MENU COMPONENT
// ======================================================

export default function Menu() {
  // ======================================================
  // CART
  // ======================================================

  const [cart, setCart] = useState([]);
  const [showOrderBox, setShowOrderBox] = useState(false);

  // ======================================================
  // OPEN ORDER BOX FROM NAVBAR CART
  // ======================================================

  useEffect(() => {
    const openOrderBox = () => {
      setShowOrderBox(true);
    };

    window.addEventListener("open-order-box", openOrderBox);

    return () => {
      window.removeEventListener("open-order-box", openOrderBox);
    };
  }, []);

  // ======================================================
  // ADMIN FOOD ITEMS
  // ======================================================

  const [adminFoods, setAdminFoods] = useState(() => {
    try {
      const saved = localStorage.getItem("foodie-admin-foods");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          return parsed;
        }
      }

      return [];
    } catch (error) {
      console.error("Error loading admin foods:", error);
      return [];
    }
  });

  // ======================================================
  // CUSTOMER INFORMATION
  // ======================================================

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // ======================================================
  // PAYMENT METHOD
  // ======================================================

  const [paymentMethod, setPaymentMethod] = useState("COD");

  // ======================================================
  // LOAD ADMIN FOODS
  // ======================================================

  useEffect(() => {
    const loadAdminFoods = () => {
      try {
        const saved = localStorage.getItem("foodie-admin-foods");

        if (saved) {
          const parsed = JSON.parse(saved);

          if (Array.isArray(parsed)) {
            setAdminFoods(parsed);
          } else {
            setAdminFoods([]);
          }
        } else {
          setAdminFoods([]);
        }
      } catch (error) {
        console.error("Error loading admin foods:", error);
        setAdminFoods([]);
      }
    };

    loadAdminFoods();

    window.addEventListener("storage", loadAdminFoods);
    window.addEventListener("focus", loadAdminFoods);
    window.addEventListener("foods-updated", loadAdminFoods);

    return () => {
      window.removeEventListener("storage", loadAdminFoods);
      window.removeEventListener("focus", loadAdminFoods);
      window.removeEventListener("foods-updated", loadAdminFoods);
    };
  }, []);

  // ======================================================
  // COMBINE DEFAULT + ADMIN FOODS
  // ======================================================

  const allFoodItems = [
    ...foodItems,

    ...adminFoods.map((food) => ({
      id: `admin-${food.id}`,
      name: food.name,
      price: `$${Number(food.price || 0).toFixed(2)}`,
      description:
        food.description ||
        "Delicious food prepared fresh for you.",
      image: food.image,
    })),
  ];

  // ======================================================
  // ADD TO CART
  // ======================================================

  const addToCart = (item) => {
    const numericPrice =
      typeof item.price === "number"
        ? item.price
        : parseFloat(String(item.price).replace("$", ""));

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...prevCart,
        {
          id: item.id,
          name: item.name,
          price: numericPrice,
          quantity: 1,
          note: "",
        },
      ];
    });
  };

  // ======================================================
  // REMOVE FROM CART
  // ======================================================

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ======================================================
  // UPDATE SPECIAL NOTE
  // ======================================================

  const updateItemNote = (id, newNoteText) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              note: newNoteText,
            }
          : item
      )
    );
  };

  // ======================================================
  // TOTAL AMOUNT
  // ======================================================

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ======================================================
  // PLACE ORDER
  // ======================================================

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please fill out your contact details.");
      return;
    }

    if (cart.length === 0) {
      alert("Your order list is empty.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    try {
      const savedOrders = localStorage.getItem(
        "foodie-admin-orders"
      );

      let existingOrders = [];

      try {
        existingOrders = savedOrders
          ? JSON.parse(savedOrders)
          : [];

        if (!Array.isArray(existingOrders)) {
          existingOrders = [];
        }
      } catch (error) {
        console.error(
          "Error reading existing orders:",
          error
        );

        existingOrders = [];
      }

      const newOrder = {
        id: Date.now(),

        customerName: customerName.trim(),

        customerPhone: customerPhone.trim(),

        paymentMethod: paymentMethod,

        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          preferenceNote: item.note || "",
        })),

        totalAmount: Number(totalAmount.toFixed(2)),

        status: "Pending",

        createdAt: new Date().toISOString(),
      };

      const updatedOrders = [
        ...existingOrders,
        newOrder,
      ];

      localStorage.setItem(
        "foodie-admin-orders",
        JSON.stringify(updatedOrders)
      );

      window.dispatchEvent(
        new Event("admin-orders-updated")
      );

      alert("Order successfully placed!");

      setCart([]);
      setCustomerName("");
      setCustomerPhone("");
      setPaymentMethod("COD");
      setShowOrderBox(false);
    } catch (error) {
      console.error(
        "Error saving order:",
        error
      );

      alert("Unable to save order.");
    }
  };

  // ======================================================
  // UI
  // ======================================================

  return (
    <>
      {/* ==================================================
          CUSTOMER ORDER BOX
          ================================================== */}

      {showOrderBox && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "400px",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 1000,
            boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
            padding: "2rem",
            boxSizing: "border-box",
            overflowY: "auto",
          }}
        >
          {/* ORDER BOX HEADER */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#1f2937",
                fontSize: "1.3rem",
              }}
            >
              Your Customer Order
            </h2>

            <button
              type="button"
              onClick={() => setShowOrderBox(false)}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#1f2937",
              }}
            >
              ✕
            </button>
          </div>

          {/* EMPTY CART */}

          {cart.length === 0 ? (
            <p
              style={{
                color: "#6b7280",
              }}
            >
              Your order list is empty.
            </p>
          ) : (
            <>
              {/* CART ITEMS */}

              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {/* ITEM NAME + PRICE */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <strong
                      style={{
                        color: "#1f2937",
                      }}
                    >
                      {item.name}
                    </strong>

                    <span
                      style={{
                        color: "#1f2937",
                        fontWeight: "600",
                      }}
                    >
                      $
                      {(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>

                  {/* QUANTITY */}

                  <div
                    style={{
                      marginTop: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#f9fafb",
                        borderRadius: "4px",
                        color: "#1f2937",
                      }}
                    >
                      -
                    </button>

                    <span
                      style={{
                        margin: "0 10px",
                        fontWeight: "600",
                        color: "#1f2937",
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        const foodItem =
                          allFoodItems.find(
                            (food) =>
                              food.id === item.id
                          );

                        if (foodItem) {
                          addToCart(foodItem);
                        }
                      }}
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#f9fafb",
                        borderRadius: "4px",
                        color: "#1f2937",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* SPECIAL NOTE */}

                  <input
                    type="text"
                    placeholder="Special note"
                    value={item.note}
                    onChange={(e) =>
                      updateItemNote(
                        item.id,
                        e.target.value
                      )
                    }
                    style={{
                      width: "100%",
                      marginTop: "0.75rem",
                      padding: "0.7rem",
                      boxSizing: "border-box",
                      border: "1px solid #d1d5db",
                      borderRadius: "5px",
                      fontSize: "0.9rem",
                      color: "#1f2937",
                    }}
                  />
                </div>
              ))}

              {/* TOTAL */}

              <h3
                style={{
                  color: "#1f2937",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Total: ${totalAmount.toFixed(2)}
              </h3>

              {/* CUSTOMER NAME */}

              <input
                type="text"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "0.75rem",
                  boxSizing: "border-box",
                  border: "1px solid #d1d5db",
                  borderRadius: "5px",
                  fontSize: "0.9rem",
                  color: "#1f2937",
                }}
              />

              {/* CUSTOMER PHONE */}

              <input
                type="text"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) =>
                  setCustomerPhone(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "1rem",
                  boxSizing: "border-box",
                  border: "1px solid #d1d5db",
                  borderRadius: "5px",
                  fontSize: "0.9rem",
                  color: "#1f2937",
                }}
              />

              {/* ==================================================
                  PAYMENT METHOD
                  ================================================== */}

              <div
                style={{
                  marginBottom: "1.2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    color: "#1f2937",
                  }}
                >
                  Payment Method
                </h3>

                {/* COD */}

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.7rem",
                    cursor: "pointer",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <span>
                    Cash on Delivery (COD)
                  </span>
                </label>

                {/* BKASH */}

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.7rem",
                    cursor: "pointer",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="BKash"
                    checked={
                      paymentMethod === "BKash"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <span>bKash</span>
                </label>

                {/* NAGAD */}

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Nagad"
                    checked={
                      paymentMethod === "Nagad"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <span>Nagad</span>
                </label>
              </div>

              {/* PLACE ORDER */}

              <button
                type="button"
                onClick={handlePlaceOrder}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  backgroundColor: "#1f2937",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                }}
              >
                Place Order
              </button>
            </>
          )}
        </div>
      )}

      {/* ==================================================
          MENU SECTION
          ================================================== */}

      <section
        style={{
          padding: "3rem 0",
          backgroundColor: "#B0BA99",
          minHeight: "100vh",
        }}
        id="menu"
      >
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {/* MENU TITLE */}

          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              textAlign: "center",
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}
          >
            Our Delicious Menu
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "2.5rem",
              maxWidth: "28rem",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "0.875rem",
            }}
          >
            Explore our wide collection of premium
            handcrafted meals, artisan pizzas, and sweet
            refreshments.
          </p>

          {/* FOOD GRID */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            {allFoodItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor:
                    "rgba(255, 255, 255, 0.4)",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* FOOD CONTENT */}

                <div>
                  {/* IMAGE */}

                  <div
                    style={{
                      width: "100%",
                      height: "12rem",
                      overflow: "hidden",
                      backgroundColor: "#e5e7eb",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                        display: "block",
                      }}
                      loading="lazy"
                    />
                  
                  </div>

                  {/* FOOD INFORMATION */}

                  <div
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.5rem",
                        gap: "0.5rem",
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          color: "#1f2937",
                          margin: 0,
                        }}
                      >
                        {item.name}
                      </h3>

                      <span
                        style={{
                          color: "#ef4444",
                          fontWeight: "700",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>

                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.75rem",
                        margin: "0 0 1rem 0",
                        lineHeight: "1.5",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* ADD TO ORDER BUTTON */}

                <div
                  style={{
                    padding: "0 1rem 1rem 1rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    style={{
                      width: "100%",
                      padding: "0.65rem",
                      backgroundColor: "#1f2937",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                    }}
                  >
                    Add To Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}