// // import React, { useState } from 'react';

// // const Admin = () => {
// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!name || !description || !category || !price || !image) {
// //       alert('Please fill all fields and select an image.');
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const formData = new FormData();

// //       formData.append('name', name);
// //       formData.append('description', description);
// //       formData.append('category', category);
// //       formData.append('price', price);
// //       formData.append('image', image);

// //       const token = localStorage.getItem('token');

// //       const response = await fetch('http://localhost:5000/api/items', {
// //         method: 'POST',
// //         headers: {
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: formData
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         alert(data.message || 'Failed to add food');
// //         return;
// //       }

// //       alert('Food item added successfully!');

// //       setName('');
// //       setDescription('');
// //       setCategory('');
// //       setPrice('');
// //       setImage(null);

// //       document.getElementById('food-image').value = '';

// //     } catch (error) {
// //       console.error(error);
// //       alert('Error adding food item.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: '100vh',
// //         backgroundColor: '#B0BA99',
// //         padding: '50px 20px'
// //       }}
// //     >
// //       <div
// //         style={{
// //           maxWidth: '650px',
// //           margin: '0 auto',
// //           backgroundColor: '#ffffff',
// //           padding: '35px',
// //           borderRadius: '18px',
// //           boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
// //         }}
// //       >

// //         <h1
// //           style={{
// //             textAlign: 'center',
// //             marginBottom: '10px',
// //             color: '#1f2937'
// //           }}
// //         >
// //           👨‍🍳 Admin Panel
// //         </h1>

// //         <p
// //           style={{
// //             textAlign: 'center',
// //             color: '#666',
// //             marginBottom: '30px'
// //           }}
// //         >
// //           Add a new food item to the menu
// //         </p>

// //         <form onSubmit={handleSubmit}>

// //           {/* Food Name */}
// //           <label style={{ display: 'block', marginBottom: '8px' }}>
// //             Food Name
// //           </label>

// //           <input
// //             type="text"
// //             placeholder="Example: Chicken Burger"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '12px',
// //               marginBottom: '20px',
// //               borderRadius: '8px',
// //               border: '1px solid #ccc',
// //               boxSizing: 'border-box'
// //             }}
// //           />

// //           {/* Description */}
// //           <label style={{ display: 'block', marginBottom: '8px' }}>
// //             Description
// //           </label>

// //           <textarea
// //             placeholder="Describe the food item..."
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             rows="4"
// //             style={{
// //               width: '100%',
// //               padding: '12px',
// //               marginBottom: '20px',
// //               borderRadius: '8px',
// //               border: '1px solid #ccc',
// //               boxSizing: 'border-box',
// //               resize: 'vertical'
// //             }}
// //           />

// //           {/* Category */}
// //           <label style={{ display: 'block', marginBottom: '8px' }}>
// //             Category
// //           </label>

// //           <select
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '12px',
// //               marginBottom: '20px',
// //               borderRadius: '8px',
// //               border: '1px solid #ccc'
// //             }}
// //           >
// //             <option value="">Select Category</option>
// //             <option value="Burger">Burger</option>
// //             <option value="Pizza">Pizza</option>
// //             <option value="Pasta">Pasta</option>
// //             <option value="Chicken">Chicken</option>
// //             <option value="Dessert">Dessert</option>
// //             <option value="Drinks">Drinks</option>
// //             <option value="Other">Other</option>
// //           </select>

// //           {/* Price */}
// //           <label style={{ display: 'block', marginBottom: '8px' }}>
// //             Price
// //           </label>

// //           <input
// //             type="number"
// //             placeholder="Example: 350"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '12px',
// //               marginBottom: '20px',
// //               borderRadius: '8px',
// //               border: '1px solid #ccc',
// //               boxSizing: 'border-box'
// //             }}
// //           />

// //           {/* Image */}
// //           <label style={{ display: 'block', marginBottom: '8px' }}>
// //             Food Picture
// //           </label>

// //           <input
// //             id="food-image"
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setImage(e.target.files[0])}
// //             style={{
// //               width: '100%',
// //               marginBottom: '25px'
// //             }}
// //           />

// //           {/* Submit */}
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             style={{
// //               width: '100%',
// //               padding: '14px',
// //               backgroundColor: '#607456',
// //               color: 'white',
// //               border: 'none',
// //               borderRadius: '10px',
// //               fontSize: '16px',
// //               fontWeight: '700',
// //               cursor: 'pointer'
// //             }}
// //           >
// //             {loading ? 'Adding Food...' : '🍔 Add Food'}
// //           </button>

// //         </form>

// //         <button
// //           onClick={() => {
// //             window.location.hash = '';
// //           }}
// //           style={{
// //             width: '100%',
// //             marginTop: '15px',
// //             padding: '12px',
// //             backgroundColor: '#ddd',
// //             border: 'none',
// //             borderRadius: '10px',
// //             cursor: 'pointer'
// //           }}
// //         >
// //           ← Back to Home
// //         </button>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Admin;



import React, { useState } from "react";

const Admin = () => {
  // =========================
  // FOOD DATA
  // =========================

  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Butter Milk",
      price: 20,
      category: "Drinks",
      description: "Fresh and refreshing buttermilk.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300",
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 250,
      category: "Burger",
      description: "Juicy chicken burger with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    },
    {
      id: 3,
      name: "Cheese Pizza",
      price: 400,
      category: "Pizza",
      description: "Delicious pizza topped with mozzarella cheese.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300",
    },
    {
      id: 4,
      name: "Pasta Salad",
      price: 250,
      category: "Salad",
      description: "Fresh pasta salad with vegetables.",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300",
    },
  ]);

  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Food",
    description: "",
    image: "",
  });

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =========================
  // OPEN ADD FORM
  // =========================

  const openAddForm = () => {
    setEditingId(null);

    setFormData({
      name: "",
      price: "",
      category: "Food",
      description: "",
      image: "",
    });

    setShowForm(true);
  };

  // =========================
  // OPEN EDIT FORM
  // =========================

  const openEditForm = (food) => {
    setEditingId(food.id);

    setFormData({
      name: food.name,
      price: food.price,
      category: food.category,
      description: food.description,
      image: food.image,
    });

    setShowForm(true);
  };

  // =========================
  // ADD / UPDATE FOOD
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter food name.");
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    if (editingId !== null) {
      // UPDATE
      setFoods(
        foods.map((food) =>
          food.id === editingId
            ? {
                ...food,
                name: formData.name,
                price: Number(formData.price),
                category: formData.category,
                description: formData.description,
                image:
                  formData.image ||
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
              }
            : food
        )
      );

      alert("Food updated successfully!");
    } else {
      // CREATE
      const newFood = {
        id: Date.now(),
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        description: formData.description,
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
      };

      setFoods([...foods, newFood]);

      alert("Food added successfully!");
    }

    setShowForm(false);

    setFormData({
      name: "",
      price: "",
      category: "Food",
      description: "",
      image: "",
    });

    setEditingId(null);
  };

  // =========================
  // DELETE FOOD
  // =========================

  const deleteFood = (id) => {
    const food = foods.find((item) => item.id === id);

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${food.name}"?`
    );

    if (confirmDelete) {
      setFoods(foods.filter((item) => item.id !== id));
    }
  };

  // =========================
  // SEARCH
  // =========================

  const filteredFoods = foods.filter((food) => {
    const text = search.toLowerCase();

    return (
      food.name.toLowerCase().includes(text) ||
      food.category.toLowerCase().includes(text)
    );
  });

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.clear();
    window.location.hash = "";
    window.dispatchEvent(new Event("auth-changed"));
  };

  // =========================
  // RETURN
  // =========================

  return (
    <div style={styles.page}>
      {/* =====================================================
          TOP NAVBAR
      ====================================================== */}

      <header style={styles.topbar}>
        {/* Logo */}
        <div style={styles.logoArea}>
          <div style={styles.logo}>
            🍽️
          </div>
        </div>

        {/* Hamburger */}
        <button style={styles.hamburger}>☰</button>

        {/* Menu title */}
        <div style={styles.menuTitle}>
          <span>Menu</span>
          <div style={styles.titleLine}></div>
        </div>

        {/* Right side */}
        <div style={styles.topRight}>
          <button style={styles.topIcon}>🌙</button>

          <button style={styles.topIcon}>↗</button>

          <button
            style={styles.updateStore}
            onClick={openAddForm}
          >
            🛒 &nbsp; Update Store
          </button>

          <div style={styles.profile}>
            <div style={styles.profileImage}>👤</div>

            <span>Admin</span>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN LAYOUT
      ====================================================== */}

      <div style={styles.layout}>
        {/* =================================================
            SIDEBAR
        ================================================== */}

        <aside style={styles.sidebar}>
          {/* Search */}
          <div style={styles.sidebarSearch}>
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search"
            />
          </div>

          <SidebarItem icon="◉" text="Dashboard" />

          <SidebarItem icon="♟" text="Customers" />

          <SidebarItem icon="▤" text="Orders" />

          <SidebarItem icon="▣" text="COD Transactions" />

          <SidebarItem icon="▱" text="Reservation" />

          <SidebarItem icon="⚖" text="Attributes" />

          <SidebarItem icon="☕" text="Add Ons" />

          <SidebarItem icon="▤" text="Items" />

          {/* ACTIVE MENU */}
          <SidebarItem
            icon="▦"
            text="Menu"
            active
          />

          <SidebarItem icon="▰" text="Order Types" />

          <SidebarItem
            icon="▣"
            text="Payment Gateways"
          />

          <SidebarItem
            icon="⌂"
            text="Front CMS"
          />

          <SidebarItem
            icon="✉"
            text="Email Subscribers"
          />

          <SidebarItem
            icon="▦"
            text="Coupon Codes"
          />

          {/* Logout */}
          <button
            onClick={handleLogout}
            style={styles.logout}
          >
            Logout
          </button>
        </aside>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <main style={styles.main}>
          {/* PAGE HEADER */}

          <div style={styles.pageHeader}>
            <div>
              <h1 style={styles.heading}>
                Food Management
              </h1>

              <p style={styles.subtitle}>
                Add, edit, view and remove food items
              </p>
            </div>

            <button
              style={styles.addFoodButton}
              onClick={openAddForm}
            >
              + Add Food
            </button>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================== */}

          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>🍔</div>

              <div>
                <p style={styles.statLabel}>
                  Total Foods
                </p>

                <h2 style={styles.statNumber}>
                  {foods.length}
                </h2>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statIcon}>💰</div>

              <div>
                <p style={styles.statLabel}>
                  Average Price
                </p>

                <h2 style={styles.statNumber}>
                  $
                  {foods.length
                    ? (
                        foods.reduce(
                          (sum, food) =>
                            sum + Number(food.price),
                          0
                        ) / foods.length
                      ).toFixed(2)
                    : "0.00"}
                </h2>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statIcon}>📂</div>

              <div>
                <p style={styles.statLabel}>
                  Categories
                </p>

                <h2 style={styles.statNumber}>
                  {
                    new Set(
                      foods.map(
                        (food) => food.category
                      )
                    ).size
                  }
                </h2>
              </div>
            </div>
          </div>

          {/* =================================================
              FOOD TABLE
          ================================================== */}

          <div style={styles.tableCard}>
            {/* TABLE HEADER */}

            <div style={styles.tableHeader}>
              <div>
                <h2 style={styles.tableTitle}>
                  Food Items
                </h2>

                <p style={styles.tableSubtitle}>
                  Manage your restaurant menu
                </p>
              </div>

              {/* SEARCH */}

              <div style={styles.foodSearch}>
                <span>🔍</span>

                <input
                  type="text"
                  placeholder="Search food..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />
              </div>
            </div>

            {/* TABLE */}

            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Food</th>

                    <th style={styles.th}>
                      Category
                    </th>

                    <th style={styles.th}>
                      Price
                    </th>

                    <th style={styles.th}>
                      Description
                    </th>

                    <th
                      style={{
                        ...styles.th,
                        textAlign: "center",
                      }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredFoods.length > 0 ? (
                    filteredFoods.map((food) => (
                      <tr key={food.id}>
                        {/* FOOD */}

                        <td style={styles.td}>
                          <div style={styles.foodCell}>
                            <img
                              src={food.image}
                              alt={food.name}
                              style={styles.foodImage}
                            />

                            <div>
                              <div
                                style={
                                  styles.foodName
                                }
                              >
                                {food.name}
                              </div>

                              <div
                                style={
                                  styles.foodId
                                }
                              >
                                ID: {food.id}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* CATEGORY */}

                        <td style={styles.td}>
                          <span
                            style={
                              styles.categoryBadge
                            }
                          >
                            {food.category}
                          </span>
                        </td>

                        {/* PRICE */}

                        <td style={styles.td}>
                          <span
                            style={
                              styles.price
                            }
                          >
                            ${Number(food.price).toFixed(2)}
                          </span>
                        </td>

                        {/* DESCRIPTION */}

                        <td style={styles.td}>
                          <span
                            style={
                              styles.description
                            }
                          >
                            {food.description ||
                              "No description"}
                          </span>
                        </td>

                        {/* ACTIONS */}

                        <td
                          style={{
                            ...styles.td,
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={
                              styles.actionContainer
                            }
                          >
                            {/* EDIT */}

                            <button
                              style={styles.editButton}
                              onClick={() =>
                                openEditForm(food)
                              }
                            >
                              ✏ Edit
                            </button>

                            {/* DELETE */}

                            <button
                              style={
                                styles.deleteButton
                              }
                              onClick={() =>
                                deleteFood(food.id)
                              }
                            >
                              🗑 Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        style={styles.noFood}
                      >
                        <div
                          style={
                            styles.noFoodIcon
                          }
                        >
                          🍽️
                        </div>

                        <h3>
                          No food items found
                        </h3>

                        <p>
                          Try another search or
                          add a new food item.
                        </p>

                        <button
                          style={
                            styles.addFoodButton
                          }
                          onClick={openAddForm}
                        >
                          + Add Food
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          ADD / EDIT MODAL
      ====================================================== */}

      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            {/* MODAL HEADER */}

            <div style={styles.modalHeader}>
              <div>
                <h2 style={styles.modalTitle}>
                  {editingId !== null
                    ? "Edit Food"
                    : "Add New Food"}
                </h2>

                <p style={styles.modalSubtitle}>
                  {editingId !== null
                    ? "Update food information"
                    : "Enter information about your new food"}
                </p>
              </div>

              <button
                style={styles.closeButton}
                onClick={() =>
                  setShowForm(false)
                }
              >
                ×
              </button>
            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>
              {/* FOOD NAME */}

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Food Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter food name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* PRICE + CATEGORY */}

              <div style={styles.formRow}>
                <div
                  style={{
                    ...styles.formGroup,
                    flex: 1,
                  }}
                >
                  <label style={styles.label}>
                    Price *
                  </label>

                  <div style={styles.priceInput}>
                    <span>$</span>

                    <input
                      type="number"
                      name="price"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      style={{
                        ...styles.input,
                        border: "none",
                        paddingLeft: "5px",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    ...styles.formGroup,
                    flex: 1,
                  }}
                >
                  <label style={styles.label}>
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="Food">
                      Food
                    </option>

                    <option value="Burger">
                      Burger
                    </option>

                    <option value="Pizza">
                      Pizza
                    </option>

                    <option value="Pasta">
                      Pasta
                    </option>

                    <option value="Salad">
                      Salad
                    </option>

                    <option value="Drinks">
                      Drinks
                    </option>

                    <option value="Dessert">
                      Dessert
                    </option>
                  </select>
                </div>
              </div>

              {/* IMAGE */}

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  placeholder="https://example.com/food.jpg"
                  value={formData.image}
                  onChange={handleChange}
                  style={styles.input}
                />

                <small style={styles.helpText}>
                  Paste an image URL. Leave empty
                  to use a default image.
                </small>
              </div>

              {/* DESCRIPTION */}

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Description
                </label>

                <textarea
                  name="description"
                  placeholder="Enter food description..."
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  style={styles.textarea}
                />
              </div>

              {/* BUTTONS */}

              <div style={styles.formButtons}>
                <button
                  type="button"
                  onClick={() =>
                    setShowForm(false)
                  }
                  style={styles.cancelButton}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={styles.saveButton}
                >
                  {editingId !== null
                    ? "Update Food"
                    : "Add Food"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================
   SIDEBAR COMPONENT
========================================================= */

const SidebarItem = ({
  icon,
  text,
  active = false,
}) => {
  return (
    <button
      style={{
        ...styles.sidebarItem,
        ...(active
          ? styles.sidebarActive
          : {}),
      }}
    >
      <span style={styles.sidebarIcon}>
        {icon}
      </span>

      <span>{text}</span>
    </button>
  );
};

/* =========================================================
   STYLES
========================================================= */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#eef3f7",
    fontFamily:
      "Arial, Helvetica, sans-serif",
    color: "#252b35",
  },

  /* TOP BAR */

  topbar: {
    height: "70px",
    backgroundColor: "#ffffff",
    borderBottom:
      "1px solid #e4e8ed",
    display: "flex",
    alignItems: "center",
    padding: "0 25px",
    boxSizing: "border-box",
  },

  logoArea: {
    width: "200px",
  },

  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "#f4f6f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
  },

  hamburger: {
    background: "none",
    border: "none",
    fontSize: "23px",
    color: "#626b75",
    cursor: "pointer",
    marginRight: "55px",
  },

  menuTitle: {
    height: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "14px",
    color: "#30363d",
  },

  titleLine: {
    width: "34px",
    height: "2px",
    backgroundColor: "#6273ed",
    marginTop: "8px",
  },

  topRight: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  topIcon: {
    border: "none",
    background: "transparent",
    fontSize: "19px",
    color: "#6575ed",
    cursor: "pointer",
  },

  updateStore: {
    border: "none",
    backgroundColor: "#2196e8",
    color: "#ffffff",
    borderRadius: "6px",
    padding: "12px 20px",
    fontWeight: "600",
    cursor: "pointer",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    marginLeft: "5px",
    color: "#343a40",
    fontSize: "14px",
  },

  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#e5e9ed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  /* LAYOUT */

  layout: {
    display: "flex",
    minHeight:
      "calc(100vh - 70px)",
  },

  /* SIDEBAR */

  sidebar: {
    width: "265px",
    backgroundColor: "#ffffff",
    borderRight:
      "1px solid #e0e5ea",
    paddingTop: "16px",
    flexShrink: 0,
    boxSizing: "border-box",
    overflowY: "auto",
  },

  sidebarSearch: {
    height: "40px",
    margin:
      "0 24px 15px",
    border:
      "1px solid #d4d9df",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "0 10px",
    color: "#777f88",
  },

  sidebarSearchInput: {
    border: "none",
    outline: "none",
  },

  sidebarItem: {
    width: "100%",
    height: "44px",
    border: "none",
    backgroundColor:
      "transparent",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "0 24px",
    color: "#5e6670",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left",
  },

  sidebarActive: {
    backgroundColor: "#e5e4ff",
    color: "#5968dc",
    borderLeft:
      "4px solid #6877ed",
    paddingLeft: "20px",
    fontWeight: "600",
  },

  sidebarIcon: {
    width: "18px",
    textAlign: "center",
    fontSize: "16px",
  },

  logout: {
    margin:
      "25px 24px",
    width:
      "calc(100% - 48px)",
    border: "none",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    padding: "11px",
    borderRadius: "5px",
    fontWeight: "600",
    cursor: "pointer",
  },

  /* MAIN */

  main: {
    flex: 1,
    padding: "28px",
    minWidth: 0,
    boxSizing: "border-box",
  },

  pageHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "space-between",
    marginBottom: "22px",
  },

  heading: {
    margin: 0,
    fontSize: "25px",
    fontWeight: "700",
    color: "#252c35",
  },

  subtitle: {
    margin:
      "7px 0 0",
    color: "#7a838d",
    fontSize: "14px",
  },

  addFoodButton: {
    border: "none",
    backgroundColor: "#6675ed",
    color: "#ffffff",
    padding:
      "11px 20px",
    borderRadius: "5px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
  },

  /* STATISTICS */

  statsContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "18px",
    marginBottom: "22px",
  },

  statCard: {
    backgroundColor: "#ffffff",
    borderRadius: "7px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow:
      "0 1px 3px rgba(0,0,0,0.03)",
  },

  statIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#e9e9ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
  },

  statLabel: {
    margin: 0,
    color: "#7c858e",
    fontSize: "13px",
  },

  statNumber: {
    margin:
      "4px 0 0",
    fontSize: "22px",
    color: "#303741",
  },

  /* TABLE */

  tableCard: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow:
      "0 1px 3px rgba(0,0,0,0.03)",
    overflow: "hidden",
  },

  tableHeader: {
    padding:
      "22px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent:
      "space-between",
    borderBottom:
      "1px solid #edf0f3",
  },

  tableTitle: {
    margin: 0,
    fontSize: "18px",
    color: "#303741",
  },

  tableSubtitle: {
    margin:
      "5px 0 0",
    color: "#89919a",
    fontSize: "13px",
  },

  foodSearch: {
    width: "240px",
    height: "40px",
    border:
      "1px solid #d5dbe1",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0 12px",
    boxSizing: "border-box",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse:
      "collapse",
    minWidth: "850px",
  },

  th: {
    textAlign: "left",
    padding:
      "15px 18px",
    backgroundColor: "#f7f8fa",
    color: "#67717c",
    fontSize: "13px",
    fontWeight: "600",
    borderBottom:
      "1px solid #e6eaee",
  },

  td: {
    padding:
      "14px 18px",
    borderBottom:
      "1px solid #edf0f3",
    verticalAlign: "middle",
    fontSize: "14px",
  },

  foodCell: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  foodImage: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },

  foodName: {
    fontWeight: "600",
    color: "#5e6fe1",
    marginBottom: "4px",
  },

  foodId: {
    color: "#9aa1a9",
    fontSize: "11px",
  },

  categoryBadge: {
    display: "inline-block",
    backgroundColor: "#e9ecff",
    color: "#5e6ddd",
    padding:
      "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  price: {
    fontWeight: "700",
    color: "#303740",
  },

  description: {
    color: "#747d86",
    fontSize: "13px",
    display: "block",
    maxWidth: "230px",
    lineHeight: "1.4",
  },

  actionContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "7px",
  },

  editButton: {
    border: "none",
    backgroundColor: "#6675ed",
    color: "#ffffff",
    padding:
      "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
  },

  deleteButton: {
    border: "none",
    backgroundColor: "#ef3150",
    color: "#ffffff",
    padding:
      "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
  },

  noFood: {
    textAlign: "center",
    padding: "60px 20px",
    color: "#7e8790",
  },

  noFoodIcon: {
    fontSize: "45px",
    marginBottom: "10px",
  },

  /* MODAL */

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      "rgba(20, 25, 30, 0.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
    boxSizing: "border-box",
  },

  modal: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: "10px",
    padding: "28px",
    boxSizing: "border-box",
    boxShadow:
      "0 20px 50px rgba(0,0,0,0.2)",
  },

  modalHeader: {
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
  },

  modalTitle: {
    margin: 0,
    fontSize: "22px",
    color: "#282f37",
  },

  modalSubtitle: {
    margin:
      "6px 0 0",
    color: "#818991",
    fontSize: "13px",
  },

  closeButton: {
    border: "none",
    backgroundColor: "#f1f3f5",
    color: "#69717a",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    fontSize: "22px",
    cursor: "pointer",
    lineHeight: "30px",
  },

  formGroup: {
    marginBottom: "18px",
  },

  formRow: {
    display: "flex",
    gap: "15px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#454d56",
  },

  input: {
    width: "100%",
    height: "43px",
    border:
      "1px solid #d5dbe1",
    borderRadius: "5px",
    padding:
      "0 12px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },

  priceInput: {
    height: "43px",
    border:
      "1px solid #d5dbe1",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "12px",
    color: "#68717b",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    border:
      "1px solid #d5dbe1",
    borderRadius: "5px",
    padding: "11px 12px",
    fontSize: "14px",
    resize: "vertical",
    outline: "none",
    boxSizing: "border-box",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  helpText: {
    display: "block",
    marginTop: "5px",
    color: "#9299a1",
    fontSize: "11px",
  },

  formButtons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "25px",
    paddingTop: "20px",
    borderTop:
      "1px solid #edf0f3",
  },

  cancelButton: {
    border:
      "1px solid #d5dbe1",
    backgroundColor: "#ffffff",
    color: "#606871",
    padding:
      "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
  },

  saveButton: {
    border: "none",
    backgroundColor: "#6675ed",
    color: "#ffffff",
    padding:
      "10px 22px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Admin;