import React, { useEffect, useState } from "react"; 
 
const categories = [ 
  "Burger", 
  "Pizza", 
  "Pasta", 
  "Chicken", 
  "Salad", 
  "Drinks", 
  "Dessert", 
  "Other" 
]; 
 
const emptyForm = { 
  name: "", 
  price: "", 
  category: "Burger", 
  description: "", 
  image: "" 
}; 
 
export default function AdminDashboard() { 
  const [section, setSection] = useState("orders"); 
 
  const [foods, setFoods] = useState(() => 
    JSON.parse( 
      localStorage.getItem("foodie-admin-foods") || "[]" 
    ) 
  ); 
 
  const [orders, setOrders] = useState(() => 
    JSON.parse( 
      localStorage.getItem("foodie-admin-orders") || "[]" 
    ) 
  ); 
 
  const [search, setSearch] = useState(""); 
  const [category, setCategory] = useState("All"); 
 
  const [showForm, setShowForm] = useState(false); 
  const [editId, setEditId] = useState(null); 
 
  const [form, setForm] = useState(emptyForm); 
  const [preview, setPreview] = useState(""); 
 
  /* SAVE FOODS */ 
  useEffect(() => { 
    localStorage.setItem( 
      "foodie-admin-foods", 
      JSON.stringify(foods) 
    ); 
 
    window.dispatchEvent(new Event("foods-updated")); 
  }, [foods]); 
 
  /* LOAD ORDERS */ 
  useEffect(() => { 
    const loadOrders = () => { 
      setOrders( 
        JSON.parse( 
          localStorage.getItem("foodie-admin-orders") || "[]" 
        ) 
      ); 
    }; 
 
    loadOrders(); 
 
    window.addEventListener("storage", loadOrders); 
    window.addEventListener( 
      "admin-orders-updated", 
      loadOrders 
    ); 
 
    return () => { 
      window.removeEventListener("storage", loadOrders); 
      window.removeEventListener( 
        "admin-orders-updated", 
        loadOrders 
      ); 
    }; 
  }, []); 
 
  /* FILTER FOODS */ 
  const filteredFoods = foods.filter((food) => { 
    const text = 
      `${food.name} ${food.category} ${food.description}`.toLowerCase(); 
 
    return ( 
      text.includes(search.toLowerCase()) && 
      (category === "All" || food.category === category) 
    ); 
  }); 
 
  /* TOTAL SALES */ 
  const totalSales = orders.reduce( 
    (sum, order) => 
      sum + Number(order.totalAmount || 0), 
    0 
  ); 
 
  /* ADD FOOD */ 
  const openAdd = () => { 
    setEditId(null); 
    setForm(emptyForm); 
    setPreview(""); 
    setShowForm(true); 
  }; 
 
  /* EDIT FOOD */ 
  const openEdit = (food) => { 
    setEditId(food.id); 
    setForm(food); 
    setPreview(food.image); 
    setShowForm(true); 
  }; 
 
  /* CLOSE FORM */ 
  const closeForm = () => { 
    setShowForm(false); 
    setEditId(null); 
    setForm(emptyForm); 
    setPreview(""); 
  }; 
 
  /* FORM CHANGE */ 
  const handleChange = (e) => { 
    setForm({ 
      ...form, 
      [e.target.name]: e.target.value 
    }); 
  }; 
 
  /* IMAGE */ 
  const handleImage = (e) => { 
    const file = e.target.files[0]; 
 
    if (!file) return; 
 
    if (!file.type.startsWith("image/")) { 
      alert("Please select an image."); 
      return; 
    } 
 
    const reader = new FileReader(); 
 
    reader.onload = () => { 
      setPreview(reader.result); 
 
      setForm({ 
        ...form, 
        image: reader.result 
      }); 
    }; 
 
    reader.readAsDataURL(file); 
  }; 
 
  /* SAVE FOOD */ 
  const saveFood = (e) => { 
    e.preventDefault(); 
 
    if (!form.name || !form.price || !form.image) { 
      alert("Please fill food name, price and image."); 
      return; 
    } 
 
    const food = { 
      ...form, 
      id: editId || Date.now(), 
      price: Number(form.price) 
    }; 
 
    if (editId) { 
      setFoods( 
        foods.map((item) => 
          item.id === editId ? food : item 
        ) 
      ); 
    } else { 
      setFoods([...foods, food]); 
    } 
 
    closeForm(); 
  }; 
 
  /* DELETE FOOD */ 
  const deleteFood = (id) => { 
    if (!window.confirm("Delete this food?")) return; 
 
    setFoods( 
      foods.filter((food) => food.id !== id) 
    ); 
  }; 
 
  /* UPDATE ORDER STATUS */ 
  const updateOrder = (index, status) => { 
    const updated = orders.map((order, i) => 
      i === index 
        ? { ...order, status } 
        : order 
    ); 
 
    setOrders(updated); 
 
    localStorage.setItem( 
      "foodie-admin-orders", 
      JSON.stringify(updated) 
    ); 
 
    window.dispatchEvent( 
      new Event("admin-orders-updated") 
    ); 
  }; 
 
  /* UPDATE PAYMENT */ 
  const updatePayment = (index, paymentStatus) => { 
    const updated = orders.map((order, i) => 
      i === index 
        ? { ...order, paymentStatus } 
        : order 
    ); 
 
    setOrders(updated); 
 
    localStorage.setItem( 
      "foodie-admin-orders", 
      JSON.stringify(updated) 
    ); 
 
    window.dispatchEvent( 
      new Event("admin-orders-updated") 
    ); 
  }; 
 
  /* DELETE ORDER */ 
  const deleteOrder = (index) => { 
    if (!window.confirm("Delete this order?")) return; 
 
    const updated = orders.filter( 
      (_, i) => i !== index 
    ); 
 
    setOrders(updated); 
 
    localStorage.setItem( 
      "foodie-admin-orders", 
      JSON.stringify(updated) 
    ); 
  }; 
 
  /* GET CUSTOMER SPECIAL INSTRUCTION */ 
  const getNotes = (item) => { 
    return ( 
      item.notes || 
      item.specialInstruction || 
      item.specialInstructions || 
      item.preferenceNote || 
      item.instruction || 
      "" 
    ); 
  }; 
 
  /* GET PAYMENT METHOD */ 
  const getPaymentMethod = (order) => { 
    return ( 
      order.paymentMethod || 
      order.payment_method || 
      order.payment || 
      "" 
    ); 
  }; 
 
  return ( 
    <div style={styles.app}> 
 
      {/* SIDEBAR */} 
 
      <aside style={styles.sidebar}> 
 
        <h2 style={styles.logo}> 
          🍽️ FoodieFrenzy 
        </h2> 
 
        <p style={styles.adminText}> 
          ADMIN PANEL 
        </p> 
 
        <button 
          style={{ 
            ...styles.navButton, 
            ...(section === "orders" 
              ? styles.activeNav 
              : {}) 
          }} 
          onClick={() => setSection("orders")} 
        > 
          📋 Orders 
        </button> 
 
        <button 
          style={{ 
            ...styles.navButton, 
            ...(section === "menu" 
              ? styles.activeNav 
              : {}) 
          }} 
          onClick={() => setSection("menu")} 
        > 
          🍔 Menu Items 
        </button> 
 
        <button 
          style={styles.navButton} 
          onClick={() => { 
            window.location.hash = ""; 
          }} 
        > 
          ← Back 
        </button> 
 
      </aside> 
 
      {/* MAIN */} 
 
      <main style={styles.main}> 
 
        {/* ================= ORDERS ================= */} 
 
        {section === "orders" && ( 
          <> 
 
            <h1 style={styles.title}> 
              Customer Orders 
            </h1> 
 
            <p style={styles.subtitle}> 
              View and manage customer orders. 
            </p> 
 
            <div style={styles.cards}> 
 
              <div style={styles.card}> 
                <span style={styles.cardLabel}> 
                  Total Orders 
                </span> 
 
                <strong style={styles.cardNumber}> 
                  {orders.length} 
                </strong> 
              </div> 
 
              <div style={styles.card}> 
                <span style={styles.cardLabel}> 
                  Total Sales 
                </span> 
 
                <strong style={styles.cardNumber}> 
                  ${totalSales.toFixed(2)} 
                </strong> 
              </div> 
 
            </div> 
 
            <div style={styles.tableBox}> 
 
              <table style={styles.table}> 
 
                <thead> 
 
                  <tr> 
 
                    <th style={styles.th}> 
                      Order 
                    </th> 
 
                    <th style={styles.th}> 
                      Customer 
                    </th> 
 
                    <th style={styles.th}> 
                      Phone 
                    </th> 
 
                    <th style={styles.th}> 
                      Items 
                    </th> 
 
                    <th style={styles.th}> 
                      Total 
                    </th> 
 
                    <th style={styles.th}> 
                      Payment 
                    </th> 
 
                    <th style={styles.th}> 
                      Status 
                    </th> 
 
                    <th style={styles.th}> 
                      Action 
                    </th> 
 
                  </tr> 
 
                </thead> 
 
                <tbody> 
 
                  {orders.length === 0 ? ( 
 
                    <tr> 
 
                      <td 
                        colSpan="8" 
                        style={styles.empty} 
                      > 
                        No orders yet. 
                      </td> 
 
                    </tr> 
 
                  ) : ( 
 
                    orders.map((order, index) => { 
 
                      const paymentMethod = 
                        getPaymentMethod(order); 
 
                      /* 
                       * CASH ON DELIVERY 
                       * IS ALWAYS SHOWN AS PAID 
                       */ 
                      const isCOD = 
                        paymentMethod 
                          .toLowerCase() 
                          .replace(/\s/g, "") === 
                        "cashondelivery"; 
 
                      const paymentStatus = 
                        isCOD 
                          ? "Paid" 
                          : order.paymentStatus || 
                            "Pending"; 
 
                      return ( 
 
                        <tr 
                          key={order.id || index} 
                          style={styles.tr} 
                        > 
 
                          {/* ORDER */} 
 
                          <td style={styles.td}> 
                            <b> 
                              #{order.id} 
                            </b> 
                          </td> 
 
                          {/* CUSTOMER */} 
 
                          <td style={styles.td}> 
                            <b> 
                              {order.customerName || 
                                "Customer"} 
                            </b> 
                          </td> 
 
                          {/* PHONE */} 
 
                          <td style={styles.td}> 
                            {order.customerPhone || 
                              "-"} 
                          </td> 
 
                          {/* ITEMS */} 
 
                          <td style={styles.td}> 
 
                            {order.items?.length ? ( 
 
                              order.items.map( 
                                (item, itemIndex) => { 
 
                                  const notes = 
                                    getNotes(item); 
 
                                  return ( 
 
                                    <div 
                                      key={ 
                                        item.id || 
                                        itemIndex 
                                      } 
                                      style={ 
                                        styles.itemBox 
                                      } 
                                    > 
 
                                      <div 
                                        style={ 
                                          styles.itemName 
                                        } 
                                      > 
 
                                        {item.name} 
 
                                        <span 
                                          style={ 
                                            styles.quantity 
                                          } 
                                        > 
                                          {" "}×{" "} 
                                          {item.quantity} 
                                        </span> 
 
                                      </div> 
 
                                      {/* SPECIAL INSTRUCTION */} 
 
                                      {notes && ( 
 
                                        <div 
                                          style={ 
                                            styles.notes 
                                          } 
                                        > 
 
                                          <b> 
                                            Special 
                                            Instruction: 
                                          </b> 
 
                                          <br /> 
 
                                          📝 {notes} 
 
                                        </div> 
 
                                      )} 
 
                                    </div> 
 
                                  ); 
 
                                } 
                              ) 
 
                            ) : ( 
 
                              <span> 
                                No items 
                              </span> 
 
                            )} 
 
                          </td> 
 
                          {/* TOTAL */} 
 
                          <td style={styles.td}> 
 
                            <b> 
                              $ 
                              {Number( 
                                order.totalAmount || 
                                0 
                              ).toFixed(2)} 
                            </b> 
 
                          </td> 
 
                          {/* PAYMENT */} 
 
                          <td style={styles.td}> 
 
                            <div> 
 
                              {/* PAYMENT METHOD */} 
 
                              <div 
                                style={ 
                                  styles.paymentMethod 
                                } 
                              > 
                                {paymentMethod || 
                                  "Cash on Delivery"} 
                              </div> 
 
                              {/* PAYMENT STATUS */} 
 
                              <span 
                                style={ 
                                  paymentStatus === 
                                  "Paid" 
                                    ? styles.paid 
                                    : styles.pending 
                                } 
                              > 
                                {paymentStatus} 
                              </span> 
 
                              {/* ONLY BKASH/NAGAD CAN BE CHANGED */} 
 
                              {!isCOD && ( 
                                <select 
                                  style={ 
                                    styles.select 
                                  } 
                                  value={ 
                                    paymentStatus 
                                  } 
                                  onChange={(e) => 
                                    updatePayment( 
                                      index, 
                                      e.target.value 
                                    ) 
                                  } 
                                > 
 
                                  <option value="Pending"> 
                                    Pending 
                                  </option> 
 
                                  <option value="Paid"> 
                                    Paid 
                                  </option> 
 
                                </select> 
                              )} 
 
                            </div> 
 
                          </td> 
 
                          {/* ORDER STATUS */} 
 
                          <td style={styles.td}> 
 
                            <select 
                              style={styles.select} 
                              value={ 
                                order.status || 
                                "Pending" 
                              } 
                              onChange={(e) => 
                                updateOrder( 
                                  index, 
                                  e.target.value 
                                ) 
                              } 
                            > 
 
                              <option value="Pending"> 
                                Pending 
                              </option> 
 
                              <option value="Completed"> 
                                Completed 
                              </option> 
 
                            </select> 
 
                          </td> 
 
                          {/* DELETE */} 
 
                          <td style={styles.td}> 
 
                            <button 
                              style={ 
                                styles.deleteButton 
                              } 
                              onClick={() => 
                                deleteOrder(index) 
                              } 
                            > 
                              Delete 
                            </button> 
 
                          </td> 
 
                        </tr> 
 
                      ); 
 
                    }) 
 
                  )} 
 
                </tbody> 
 
              </table> 
 
            </div> 
 
          </> 
        )} 
 
        {/* ================= MENU ================= */} 
 
        {section === "menu" && ( 
          <> 
 
            <div style={styles.menuTop}> 
 
              <div> 
 
                <h1 style={styles.title}> 
                  Menu Items 
                </h1> 
 
                <p style={styles.subtitle}> 
                  Add and manage your food items. 
                </p> 
 
              </div> 
 
              <button 
                style={styles.addButton} 
                onClick={openAdd} 
              > 
                + Add Food 
              </button> 
 
            </div> 
 
            {/* SEARCH */} 
 
            <div style={styles.searchRow}> 
 
              <input 
                type="text" 
                placeholder="Search food..." 
                value={search} 
                onChange={(e) => 
                  setSearch(e.target.value) 
                } 
                style={styles.searchInput} 
              /> 
 
              <select 
                value={category} 
                onChange={(e) => 
                  setCategory(e.target.value) 
                } 
                style={styles.categorySelect} 
              > 
 
                <option value="All"> 
                  All Categories 
                </option> 
 
                {categories.map((cat) => ( 
                  <option 
                    key={cat} 
                    value={cat} 
                  > 
                    {cat} 
                  </option> 
                ))} 
 
              </select> 
 
            </div> 
 
            {/* ADD FOOD FORM */} 
 
            {showForm && ( 
 
              <div style={styles.overlay}> 
 
                <div style={styles.modal}> 
 
                  <h2 style={styles.modalTitle}> 
                    {editId 
                      ? "Edit Food" 
                      : "Add New Food"} 
                  </h2> 
 
                  <form onSubmit={saveFood}> 
 
                    <input 
                      name="name" 
                      placeholder="Food name" 
                      value={form.name} 
                      onChange={handleChange} 
                      style={styles.input} 
                    /> 
 
                    <input 
                      name="price" 
                      type="number" 
                      placeholder="Price" 
                      value={form.price} 
                      onChange={handleChange} 
                      style={styles.input} 
                    /> 
 
                    <select 
                      name="category" 
                      value={form.category} 
                      onChange={handleChange} 
                      style={styles.input} 
                    > 
 
                      {categories.map((cat) => ( 
                        <option 
                          key={cat} 
                          value={cat} 
                        > 
                          {cat} 
                        </option> 
                      ))} 
 
                    </select> 
 
                    <textarea 
                      name="description" 
                      placeholder="Description" 
                      value={form.description} 
                      onChange={handleChange} 
                      style={styles.textarea} 
                    /> 
 
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImage} 
                      style={styles.input} 
                    /> 
 
                    {preview && ( 
                      <img 
                        src={preview} 
                        alt="Preview" 
                        style={styles.preview} 
                      /> 
                    )} 
 
                    <div 
                      style={ 
                        styles.modalButtons 
                      } 
                    > 
 
                      <button 
                        type="submit" 
                        style={ 
                          styles.saveButton 
                        } 
                      > 
                        {editId 
                          ? "Update Food" 
                          : "Save Food"} 
                      </button> 
 
                      <button 
                        type="button" 
                        onClick={closeForm} 
                        style={ 
                          styles.cancelButton 
                        } 
                      > 
                        Cancel 
                      </button> 
 
                    </div> 
 
                  </form> 
 
                </div> 
 
              </div> 
 
            )} 
 
            {/* FOOD CARDS */} 
 
            {filteredFoods.length === 0 ? ( 
 
              <div style={styles.noFood}> 
 
                <h3> 
                  No food items yet 
                </h3> 
 
                <p> 
                  Click <b>+ Add Food</b> to add 
                  your first food item. 
                </p> 
 
              </div> 
 
            ) : ( 
 
              <div style={styles.foodGrid}> 
 
                {filteredFoods.map((food) => ( 
 
                  <div 
                    key={food.id} 
                    style={styles.foodCard} 
                  > 
 
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      style={styles.foodImage} 
                    /> 
 
                    <div 
                      style={ 
                        styles.foodContent 
                      } 
                    > 
 
                      <h3 
                        style={styles.foodName} 
                      > 
                        {food.name} 
                      </h3> 
 
                      <p 
                        style={ 
                          styles.foodDescription 
                        } 
                      > 
                        {food.description || 
                          "No description"} 
                      </p> 
 
                      <div 
                        style={ 
                          styles.foodInfo 
                        } 
                      > 
 
                        <strong> 
                          $ 
                          {Number( 
                            food.price || 0 
                          ).toFixed(2)} 
                        </strong> 
 
                        <span 
                          style={ 
                            styles.categoryTag 
                          } 
                        > 
                          {food.category} 
                        </span> 
 
                      </div> 
 
                      <div 
                        style={ 
                          styles.foodActions 
                        } 
                      > 
 
                        <button 
                          style={ 
                            styles.editButton 
                          } 
                          onClick={() => 
                            openEdit(food) 
                          } 
                        > 
                          Edit 
                        </button> 
 
                        <button 
                          style={ 
                            styles.deleteFoodButton 
                          } 
                          onClick={() => 
                            deleteFood(food.id) 
                          } 
                        > 
                          Delete 
                        </button> 
 
                      </div> 
 
                    </div> 
 
                  </div> 
 
                ))} 
 
              </div> 
 
            )} 
 
          </> 
        )} 
 
      </main> 
 
    </div> 
  ); 
} 
 
/* ================= STYLES ================= */ 
 
const styles = { 
 
  app: { 
    display: "flex", 
    minHeight: "100vh", 
    background: "#f5f6f8", 
    fontFamily: "Arial, sans-serif", 
    color: "#26382A" 
  }, 
 
  sidebar: { 
    width: "240px", 
    minHeight: "100vh", 
    background: "#344E41", 
    padding: "30px 20px", 
    boxSizing: "border-box" 
  }, 
 
  logo: { 
    color: "white", 
    fontSize: "22px", 
    marginBottom: "5px" 
  }, 
 
  adminText: { 
    color: "white", 
    fontSize: "12px", 
    letterSpacing: "2px", 
    opacity: 0.7, 
    marginBottom: "30px" 
  }, 
 
  navButton: { 
    width: "100%", 
    padding: "13px", 
    marginBottom: "8px", 
    border: "none", 
    borderRadius: "8px", 
    background: "transparent", 
    color: "white", 
    textAlign: "left", 
    fontSize: "16px", 
    cursor: "pointer" 
  }, 
 
  activeNav: { 
    background: "#DAD7A8", 
    color: "#26382A", 
    fontWeight: "bold" 
  }, 
 
  main: { 
    flex: 1, 
    padding: "40px", 
    boxSizing: "border-box" 
  }, 
 
  title: { 
    color: "#26382A", 
    margin: "0 0 8px", 
    fontSize: "30px" 
  }, 
 
  subtitle: { 
    color: "#666", 
    margin: "0 0 25px" 
  }, 
 
  cards: { 
    display: "flex", 
    gap: "20px", 
    marginBottom: "30px" 
  }, 
 
  card: { 
    background: "white", 
    padding: "20px", 
    borderRadius: "12px", 
    flex: 1, 
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)" 
  }, 
 
  cardLabel: { 
    display: "block", 
    color: "#666", 
    marginBottom: "8px" 
  }, 
 
  cardNumber: { 
    fontSize: "25px", 
    color: "#344E41" 
  }, 
 
  tableBox: { 
    background: "white", 
    borderRadius: "12px", 
    padding: "10px", 
    overflowX: "auto", 
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)" 
  }, 
 
  table: { 
    width: "100%", 
    borderCollapse: "collapse" 
  }, 
 
  th: { 
    padding: "15px 12px", 
    textAlign: "left", 
    color: "#555", 
    borderBottom: "2px solid #eee", 
    whiteSpace: "nowrap" 
  }, 
 
  tr: { 
    borderBottom: "1px solid #eee" 
  }, 
 
  td: { 
    padding: "15px 12px", 
    color: "#333", 
    verticalAlign: "top" 
  }, 
 
  empty: { 
    padding: "40px", 
    textAlign: "center", 
    color: "#777" 
  }, 
 
  /* ITEMS */ 
 
  itemBox: { 
    marginBottom: "15px" 
  }, 
 
  itemName: { 
    fontSize: "15px", 
    fontWeight: "bold", 
    color: "#333" 
  }, 
 
  quantity: { 
    color: "#666", 
    fontWeight: "normal" 
  }, 
 
  notes: { 
    marginTop: "7px", 
    padding: "8px 10px", 
    background: "#fff2ee", 
    color: "#b93c1c", 
    border: "1px solid #ffd3c7", 
    borderRadius: "6px", 
    fontSize: "13px", 
    lineHeight: "1.5" 
  }, 
 
  /* PAYMENT */ 
 
  paymentMethod: { 
    fontSize: "13px", 
    fontWeight: "bold", 
    color: "#344E41", 
    marginBottom: "7px" 
  }, 
 
  paid: { 
    display: "inline-block", 
    background: "#e6f9ed", 
    color: "#15803d", 
    padding: "5px 10px", 
    borderRadius: "12px", 
    fontSize: "12px", 
    fontWeight: "bold", 
    marginBottom: "7px" 
  }, 
 
  pending: { 
    display: "inline-block", 
    background: "#fef3c7", 
    color: "#b45309", 
    padding: "5px 10px", 
    borderRadius: "12px", 
    fontSize: "12px", 
    fontWeight: "bold", 
    marginBottom: "7px" 
  }, 
 
  select: { 
    display: "block", 
    padding: "7px", 
    border: "1px solid #ccc", 
    borderRadius: "5px", 
    background: "white", 
    color: "#333", 
    cursor: "pointer" 
  }, 
 
  deleteButton: { 
    background: "#dc2626", 
    color: "white", 
    border: "none", 
    padding: "8px 12px", 
    borderRadius: "5px", 
    cursor: "pointer" 
  }, 
 
  /* MENU */ 
 
  menuTop: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: "10px" 
  }, 
 
  addButton: { 
    background: "#20C968", 
    color: "white", 
    border: "none", 
    padding: "13px 22px", 
    borderRadius: "7px", 
    fontSize: "16px", 
    fontWeight: "bold", 
    cursor: "pointer" 
  }, 
 
  searchRow: { 
    display: "flex", 
    gap: "12px", 
    marginBottom: "25px" 
  }, 
 
  searchInput: { 
    flex: 1, 
    padding: "12px", 
    border: "1px solid #ccc", 
    borderRadius: "7px", 
    fontSize: "15px", 
    background: "white", 
    color: "#333" 
  }, 
 
  categorySelect: { 
    padding: "12px", 
    border: "1px solid #ccc", 
    borderRadius: "7px", 
    background: "white", 
    color: "#333" 
  }, 
 
  foodGrid: { 
    display: "grid", 
    gridTemplateColumns: 
      "repeat(auto-fill, minmax(220px, 1fr))", 
    gap: "20px" 
  }, 
 
  foodCard: { 
    background: "white", 
    borderRadius: "12px", 
    overflow: "hidden", 
    boxShadow: 
      "0 3px 12px rgba(0,0,0,0.10)", 
    border: "1px solid #eee" 
  }, 
 
  foodImage: { 
    width: "100%", 
    height: "160px", 
    objectFit: "cover", 
    display: "block" 
  }, 
 
  foodContent: { 
    padding: "15px" 
  }, 
 
  foodName: { 
    color: "#26382A", 
    margin: "0 0 8px", 
    fontSize: "19px" 
  }, 
 
  foodDescription: { 
    color: "#666", 
    fontSize: "14px", 
    minHeight: "40px" 
  }, 
 
  foodInfo: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: "12px", 
    color: "#344E41" 
  }, 
 
  categoryTag: { 
    background: "#DAD7A8", 
    color: "#26382A", 
    padding: "5px 8px", 
    borderRadius: "5px", 
    fontSize: "12px" 
  }, 
 
  foodActions: { 
    display: "flex", 
    gap: "8px", 
    marginTop: "15px" 
  }, 
 
  editButton: { 
    flex: 1, 
    padding: "8px", 
    background: "#344E41", 
    color: "white", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer" 
  }, 
 
  deleteFoodButton: { 
    flex: 1, 
    padding: "8px", 
    background: "#dc2626", 
    color: "white", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer" 
  }, 
 
  noFood: { 
    background: "white", 
    padding: "50px", 
    textAlign: "center", 
    borderRadius: "12px", 
    boxShadow: 
      "0 3px 10px rgba(0,0,0,0.08)", 
    color: "#555" 
  }, 
 
  /* POPUP */ 
 
  overlay: { 
    position: "fixed", 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    background: "rgba(0,0,0,0.55)", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: 9999 
  }, 
 
  modal: { 
    width: "420px", 
    maxWidth: "90%", 
    background: "white", 
    padding: "30px", 
    borderRadius: "12px", 
    boxShadow: 
      "0 10px 30px rgba(0,0,0,0.3)" 
  }, 
 
  modalTitle: { 
    color: "#26382A", 
    marginTop: "0", 
    marginBottom: "20px" 
  }, 
 
  input: { 
    width: "100%", 
    padding: "11px", 
    marginBottom: "10px", 
    boxSizing: "border-box", 
    border: "1px solid #ccc", 
    borderRadius: "6px", 
    background: "white", 
    color: "#333" 
  }, 
 
  textarea: { 
    width: "100%", 
    height: "80px", 
    padding: "11px", 
    marginBottom: "10px", 
    boxSizing: "border-box", 
    border: "1px solid #ccc", 
    borderRadius: "6px", 
    resize: "none", 
    background: "white", 
    color: "#333" 
  }, 
 
  preview: { 
    width: "120px", 
    height: "80px", 
    objectFit: "cover", 
    borderRadius: "6px", 
    marginBottom: "10px" 
  }, 
 
  modalButtons: { 
    display: "flex", 
    gap: "10px", 
    marginTop: "10px" 
  }, 
 
  saveButton: { 
    flex: 1, 
    padding: "11px", 
    background: "#20C968", 
    color: "white", 
    border: "none", 
    borderRadius: "6px", 
    cursor: "pointer", 
    fontWeight: "bold" 
  }, 
 
  cancelButton: { 
    flex: 1, 
    padding: "11px", 
    background: "#dc2626", 
    color: "white", 
    border: "none", 
    borderRadius: "6px", 
    cursor: "pointer", 
    fontWeight: "bold" 
  } 
};