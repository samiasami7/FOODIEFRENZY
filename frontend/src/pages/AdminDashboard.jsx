import React, { useEffect, useMemo, useState } from "react";

const starterFoods = [
  {
    id: 1,
    name: "Butter Milk",
    price: 20,
    category: "Drinks",
    description: "Fresh and refreshing buttermilk.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700",
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: 250,
    category: "Burger",
    description: "Juicy chicken burger with fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
  },
  {
    id: 3,
    name: "Cheese Pizza",
    price: 450,
    category: "Pizza",
    description: "Delicious pizza topped with melted cheese.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700",
  },
  {
    id: 4,
    name: "Pasta Salad",
    price: 300,
    category: "Pasta",
    description: "Fresh pasta salad with vegetables.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
  },
];

const categories = [
  "Burger",
  "Pizza",
  "Pasta",
  "Chicken",
  "Salad",
  "Drinks",
  "Dessert",
  "Other",
];

const emptyForm = {
  name: "",
  price: "",
  category: "Burger",
  description: "",
  image: "",
};

export default function Admin() {
  const [activeSection, setActiveSection] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ================= FOOD ================= */

  const [foods, setFoods] = useState(() => {
    try {
      const saved = localStorage.getItem("foodie-admin-foods");

      if (saved) {
        const data = JSON.parse(saved);

        if (Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch (error) {
      console.log(error);
    }

    return starterFoods;
  });

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState(emptyForm);
  const [imagePreview, setImagePreview] = useState("");

  /* ================= ORDERS ================= */

  const [orders, setOrders] = useState(() => {
    try {
      const keys = [
        "orders",
        "foodie-orders",
        "foodie-admin-orders",
      ];

      for (const key of keys) {
        const saved = localStorage.getItem(key);

        if (saved) {
          const data = JSON.parse(saved);

          if (Array.isArray(data)) {
            return data;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

    return [];
  });

  /* ================= SAVE ================= */

  useEffect(() => {
    localStorage.setItem(
      "foodie-admin-foods",
      JSON.stringify(foods)
    );

    window.dispatchEvent(new Event("foods-updated"));
  }, [foods]);

  useEffect(() => {
    localStorage.setItem(
      "foodie-admin-orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  /* ================= FILTER ================= */

  const filteredFoods = useMemo(() => {
    const text = search.toLowerCase().trim();

    return foods.filter((food) => {
      const matchesSearch =
        !text ||
        food.name?.toLowerCase().includes(text) ||
        food.category?.toLowerCase().includes(text) ||
        food.description?.toLowerCase().includes(text);

      const matchesCategory =
        categoryFilter === "All" ||
        food.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [foods, search, categoryFilter]);

  /* ================= FOOD STATS ================= */

  const averagePrice =
    foods.length > 0
      ? foods.reduce(
          (sum, food) => sum + Number(food.price || 0),
          0
        ) / foods.length
      : 0;

  const categoryCount = new Set(
    foods.map((food) => food.category)
  ).size;

  /* =====================================================
     ORDER HELPERS
     ===================================================== */

  const getOrderId = (order, index) =>
    order.id ||
    order._id ||
    order.orderId ||
    `ORD-${index + 1}`;

  const getCustomerName = (order) =>
    order.customerName ||
    order.name ||
    order.userName ||
    order.customer?.name ||
    order.user?.name ||
    "Customer";

  const getCustomerEmail = (order) =>
    order.email ||
    order.customerEmail ||
    order.customer?.email ||
    order.user?.email ||
    "No email";

  const getOrderItems = (order) => {
    const items =
      order.items ||
      order.cartItems ||
      order.products ||
      order.foods;

    return Array.isArray(items) ? items : [];
  };

  /*
    FIXED ORDER TOTAL

    First checks if backend/customer already saved
    a total.

    If not, calculates:
    price × quantity
  */

  const getOrderTotal = (order) => {
    const savedTotal =
      order.total ??
      order.totalPrice ??
      order.grandTotal ??
      order.totalAmount ??
      order.orderTotal ??
      order.cartTotal ??
      order.amount;

    const savedNumber = Number(savedTotal);

    if (savedNumber > 0) {
      return savedNumber;
    }

    const items = getOrderItems(order);

    if (!items.length) {
      return 0;
    }

    const calculatedTotal = items.reduce((sum, item) => {
      /* Get item name */

      const itemName =
        item.name ||
        item.foodName ||
        item.title ||
        item.productName ||
        item.food?.name ||
        item.product?.name ||
        "";

      /* Get price from item */

      let price =
        item.price ??
        item.unitPrice ??
        item.foodPrice ??
        item.productPrice ??
        item.food?.price ??
        item.product?.price;

      /* If item has no price, find it in admin foods */

      if (
        price === undefined ||
        price === null ||
        Number(price) <= 0
      ) {
        const matchingFood = foods.find(
          (food) =>
            food.name?.toLowerCase().trim() ===
            itemName.toLowerCase().trim()
        );

        if (matchingFood) {
          price = matchingFood.price;
        }
      }

      price = Number(price) || 0;

      /* Quantity */

      const quantity =
        Number(
          item.quantity ??
            item.qty ??
            item.count ??
            1
        ) || 1;

      /* Item total if available */

      const itemTotal =
        Number(
          item.itemTotal ??
            item.subtotal ??
            item.lineTotal
        ) || 0;

      if (itemTotal > 0) {
        return sum + itemTotal;
      }

      return sum + price * quantity;
    }, 0);

    return calculatedTotal;
  };

  const getOrderStatus = (order) =>
    order.status ||
    order.orderStatus ||
    "Pending";

  const getOrderDate = (order) => {
    const date =
      order.createdAt ||
      order.date ||
      order.orderDate ||
      order.created_at;

    if (!date) return "Date unavailable";

    const parsed = new Date(date);

    if (isNaN(parsed.getTime())) {
      return String(date);
    }

    return parsed.toLocaleString();
  };

  /* ================= ORDER STATUS ================= */

  const updateOrderStatus = (index, status) => {
    setOrders((prev) =>
      prev.map((order, i) =>
        i === index
          ? {
              ...order,
              status,
              orderStatus: status,
            }
          : order
      )
    );
  };

  /* ================= DELETE ORDER ================= */

  const deleteOrder = (index) => {
    if (!window.confirm("Delete this order?")) {
      return;
    }

    setOrders((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  /* ================= ADD FOOD ================= */

  const openAddForm = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setImagePreview("");
    setShowForm(true);
  };

  /* ================= EDIT FOOD ================= */

  const openEditForm = (food) => {
    setEditingId(food.id);

    setFormData({
      name: food.name || "",
      price: food.price || "",
      category: food.category || "Burger",
      description: food.description || "",
      image: food.image || "",
    });

    setImagePreview(food.image || "");
    setShowForm(true);
  };

  /* ================= CLOSE FORM ================= */

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData(emptyForm);
    setImagePreview("");
  };

  /* ================= INPUT ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= IMAGE ================= */

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);

      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  /* ================= SAVE FOOD ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter food name.");
      return;
    }

    if (
      !formData.price ||
      Number(formData.price) <= 0
    ) {
      alert("Please enter a valid price.");
      return;
    }

    const food = {
      name: formData.name.trim(),
      price: Number(formData.price),
      category: formData.category,
      description:
        formData.description.trim() ||
        "Delicious food prepared fresh for you.",
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700",
    };

    if (editingId !== null) {
      setFoods((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                ...food,
              }
            : item
        )
      );
    } else {
      setFoods((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...food,
        },
      ]);
    }

    closeForm();
  };

  /* ================= DELETE FOOD ================= */

  const deleteFood = (id) => {
    const food = foods.find(
      (item) => item.id === id
    );

    if (!food) return;

    if (
      window.confirm(
        `Delete "${food.name}" from the menu?`
      )
    ) {
      setFoods((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  /* ================= RESET ================= */

  const resetFoods = () => {
    if (
      window.confirm(
        "Restore the original menu items?"
      )
    ) {
      setFoods(starterFoods);
      setSearch("");
      setCategoryFilter("All");
    }
  };

  /* ================= NAVIGATION ================= */

  const changeSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  /* ================= CSS ================= */

  const css = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .admin-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #fffaf4, #f7f8fa);
      color: #20242b;
    }

    .admin-shell {
      min-height: 100vh;
      display: flex;
    }

    .sidebar {
      width: 235px;
      min-width: 235px;
      min-height: 100vh;
      background: #12161d;
      color: white;
      padding: 18px 14px;
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      height: 100vh;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0 8px 30px;
    }

    .brand-icon {
      width: 62px;
      height: 62px;
      border-radius: 16px;
      background: linear-gradient(135deg, #ff9d16, #ff6b28);
      display: grid;
      place-items: center;
      font-size: 28px;
    }

    .brand strong {
      font-size: 18px;
      display: block;
    }

    .brand span {
      color: #9da3ad;
      font-size: 11px;
      display: block;
      margin-top: 4px;
    }

    .nav-label {
      color: #9ca2ac;
      font-size: 11px;
      font-weight: 800;
      margin: 0 10px 10px;
      text-transform: uppercase;
    }

    .nav {
      display: grid;
      gap: 5px;
    }

    .nav-item {
      border: 0;
      width: 100%;
      padding: 14px 13px;
      border-radius: 12px;
      background: transparent;
      color: #b7bcc5;
      text-align: left;
      cursor: pointer;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
    }

    .nav-item:hover {
      background: #20252e;
      color: white;
    }

    .nav-item.active {
      background: rgba(255, 157, 22, .16);
      color: #ffab22;
      box-shadow: inset 3px 0 #ff9d16;
    }

    .back-btn {
      border: 0;
      background: transparent;
      color: #aaff00;
      padding: 13px;
      text-align: left;
      cursor: pointer;
      margin-top: 18px;
      font-weight: 600;
    }

    .sidebar-bottom {
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid #292e36;
    }

    .logout-btn {
      width: 100%;
      padding: 13px;
      border-radius: 9px;
      border: 1px solid #343a43;
      background: #1b2027;
      color: white;
      cursor: pointer;
      font-weight: 700;
    }

    .content {
      flex: 1;
      min-width: 0;
    }

    .topbar {
      height: 68px;
      padding: 0 30px;
      background: white;
      border-bottom: 1px solid #e6e8eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .breadcrumb {
      font-size: 13px;
      color: #969da6;
    }

    .breadcrumb b {
      color: #252a31;
    }

    .top-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .icon-btn,
    .refresh-btn {
      border: 1px solid #dfe2e6;
      background: white;
      border-radius: 10px;
      cursor: pointer;
    }

    .icon-btn {
      width: 42px;
      height: 42px;
    }

    .refresh-btn {
      padding: 11px 16px;
      font-weight: 700;
    }

    .avatar {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: linear-gradient(135deg, #ffb52e, #ff7134);
      display: grid;
      place-items: center;
      font-size: 19px;
    }

    .main {
      padding: 28px 30px;
      max-width: 1500px;
      margin: auto;
    }

    .hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      gap: 20px;
    }

    .eyebrow {
      color: #ed8209;
      font-weight: 900;
      font-size: 12px;
      letter-spacing: .6px;
      text-transform: uppercase;
      margin-bottom: 7px;
    }

    .hero h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 500;
    }

    .hero p {
      margin: 8px 0 0;
      color: #858c96;
      font-size: 14px;
    }

    .primary-btn {
      border: 0;
      background: linear-gradient(135deg, #ff9e16, #ff6d32);
      color: white;
      border-radius: 9px;
      padding: 13px 20px;
      font-weight: 800;
      cursor: pointer;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 17px;
      margin-bottom: 20px;
    }

    .stat {
      background: white;
      border: 1px solid #e6e8ec;
      border-radius: 14px;
      padding: 18px;
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 13px;
      background: #fff0dc;
      display: grid;
      place-items: center;
      font-size: 21px;
    }

    .stat-label {
      margin: 0 0 4px;
      color: #78818d;
      font-size: 11px;
      font-weight: 800;
    }

    .stat-value {
      margin: 0;
      font-size: 23px;
      font-weight: 400;
    }

    .panel {
      background: white;
      border: 1px solid #e4e6ea;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 8px 28px rgba(30,40,50,.045);
    }

    .panel-head {
      padding: 20px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      border-bottom: 1px solid #e7e9ec;
    }

    .panel-head h2 {
      margin: 0;
      font-size: 16px;
    }

    .panel-head p {
      margin: 7px 0 0;
      color: #8c939c;
      font-size: 12px;
    }

    .filters {
      display: flex;
      gap: 12px;
    }

    .search-box {
      width: 215px;
      height: 40px;
      border: 1px solid #dce0e5;
      border-radius: 9px;
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 0 12px;
    }

    .search-box input {
      border: 0;
      outline: 0;
      width: 100%;
      font-size: 12px;
    }

    .category-select {
      width: 165px;
      border: 1px solid #dce0e5;
      border-radius: 9px;
      padding: 0 10px;
      background: white;
    }

    .table-wrap {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 850px;
    }

    th {
      text-align: left;
      padding: 13px 15px;
      background: #fafbfc;
      border-bottom: 1px solid #e5e8eb;
      color: #68717c;
      font-size: 10px;
      text-transform: uppercase;
    }

    td {
      padding: 12px 15px;
      border-bottom: 1px solid #edf0f2;
      font-size: 13px;
      vertical-align: middle;
    }

    .food-cell {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 230px;
    }

    .food-image {
      width: 114px;
      height: 97px;
      object-fit: cover;
      border-radius: 9px;
      background: #eee;
      flex-shrink: 0;
    }

    .food-name {
      font-weight: 800;
      color: #20252c;
      margin-bottom: 6px;
    }

    .food-id {
      color: #89919a;
      font-size: 11px;
    }

    .badge {
      display: inline-block;
      padding: 7px 11px;
      border-radius: 9px;
      background: #e8f3ff;
      color: #2180c8;
      font-size: 11px;
      font-weight: 800;
    }

    .price {
      color: #e8780b;
      font-weight: 900;
      white-space: nowrap;
    }

    .desc {
      color: #737b85;
      line-height: 1.7;
      max-width: 220px;
      display: inline-block;
    }

    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .edit-btn,
    .delete-btn {
      border: 0;
      padding: 10px 13px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 800;
      font-size: 11px;
    }

    .edit-btn {
      background: #f0ecff;
      color: #6757cf;
    }

    .delete-btn {
      background: #fff0f1;
      color: #e34252;
    }

    .table-footer {
      padding: 12px 15px;
      color: #7f8790;
      font-size: 12px;
    }

    .form-panel {
      margin-top: 14px;
    }

    .form-header {
      padding: 20px 24px 5px;
      display: flex;
      justify-content: space-between;
    }

    .form-header h2 {
      margin: 0;
      font-size: 17px;
    }

    .form-header p {
      margin: 5px 0;
      color: #8a919a;
      font-size: 12px;
    }

    .close-form {
      border: 0;
      background: transparent;
      font-size: 22px;
      cursor: pointer;
    }

    .food-form {
      padding: 10px 24px 22px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px 20px;
    }

    .field label {
      display: block;
      margin-bottom: 6px;
      font-size: 11px;
      font-weight: 800;
    }

    .field input,
    .field select,
    .field textarea {
      width: 100%;
      border: 1px solid #dce0e5;
      border-radius: 8px;
      padding: 10px;
      font-size: 12px;
      outline: 0;
      background: white;
    }

    .description-field {
      grid-column: span 2;
    }

    .description-field textarea {
      height: 70px;
      resize: vertical;
    }

    .file-input {
      padding: 8px !important;
    }

    .image-note {
      margin-top: 5px;
      color: #8d949c;
      font-size: 10px;
    }

    .preview-image {
      width: 80px;
      height: 55px;
      object-fit: cover;
      border-radius: 7px;
      margin-top: 7px;
    }

    .form-buttons {
      grid-column: 1 / -1;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .cancel-btn {
      border: 0;
      background: #f1f3f5;
      padding: 11px 18px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
    }

    .order-items {
      max-width: 260px;
      color: #68717c;
      line-height: 1.6;
      font-size: 12px;
    }

    .order-id,
    .customer-name {
      font-weight: 800;
    }

    .customer-email {
      color: #9299a2;
      font-size: 11px;
      margin-top: 4px;
    }

    .status-select {
      border: 0;
      border-radius: 20px;
      padding: 8px 11px;
      background: #fff0d8;
      color: #d47700;
      font-weight: 800;
      cursor: pointer;
    }

    .empty,
    .payment {
      text-align: center;
      padding: 60px 20px;
      color: #858d96;
    }

    .empty-icon,
    .payment-icon {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .empty h3 {
      margin: 0 0 5px;
      color: #343a42;
    }

    .mobile-menu {
      display: none;
    }

    @media (max-width: 1000px) {
      .sidebar {
        width: 210px;
        min-width: 210px;
      }

      .stats {
        grid-template-columns: 1fr;
      }

      .food-form {
        grid-template-columns: 1fr 1fr;
      }

      .description-field {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 750px) {
      .sidebar {
        position: fixed;
        left: -240px;
        z-index: 100;
        transition: .25s;
      }

      .sidebar.open {
        left: 0;
      }

      .mobile-menu {
        display: block;
        border: 0;
        background: white;
        font-size: 22px;
        cursor: pointer;
      }

      .main {
        padding: 18px;
      }

      .topbar {
        padding: 0 18px;
      }

      .hero {
        align-items: flex-start;
        flex-direction: column;
      }

      .panel-head {
        flex-direction: column;
        align-items: flex-start;
      }

      .filters {
        width: 100%;
      }

      .search-box {
        flex: 1;
      }

      .food-form {
        grid-template-columns: 1fr;
      }

      .description-field {
        grid-column: auto;
      }
    }
  `;

  /* ================= RENDER ================= */

  return (
    <>
      <style>{css}</style>

      <div className="admin-page">
        <div className="admin-shell">

          {/* SIDEBAR */}

          <aside
            className={`sidebar ${
              menuOpen ? "open" : ""
            }`}
          >
            <div className="brand">
              <div className="brand-icon">
                🍽️
              </div>

              <div>
                <strong>FoodieFrenzy</strong>
                <span>ADMIN PANEL</span>
              </div>
            </div>

            <div className="nav-label">
              Management
            </div>

            <div className="nav">

              <button
                className={`nav-item ${
                  activeSection === "orders"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  changeSection("orders")
                }
              >
                🧾 Orders
              </button>

              <button
                className={`nav-item ${
                  activeSection === "menu"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  changeSection("menu")
                }
              >
                🍔 Menu Items
              </button>

              <button
                className={`nav-item ${
                  activeSection === "payments"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  changeSection("payments")
                }
              >
                💳 Payments
              </button>

              <button
                className="back-btn"
                onClick={() =>
                  window.history.back()
                }
              >
                ← Back
              </button>

            </div>

            <div className="sidebar-bottom">
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");

                  window.dispatchEvent(
                    new Event("auth-changed")
                  );

                  window.history.back();
                }}
              >
                ↪ Logout
              </button>
            </div>
          </aside>

          {/* CONTENT */}

          <section className="content">

            {/* TOPBAR */}

            <header className="topbar">

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <button
                  className="mobile-menu"
                  onClick={() =>
                    setMenuOpen((v) => !v)
                  }
                >
                  ☰
                </button>

                <div className="breadcrumb">
                  Admin /{" "}
                  <b>
                    {activeSection === "menu"
                      ? "Menu Management"
                      : activeSection === "orders"
                      ? "Orders"
                      : "Payments"}
                  </b>
                </div>
              </div>

              <div className="top-actions">
                <button className="icon-btn">
                  🔔
                </button>

                <button
                  className="refresh-btn"
                  onClick={() =>
                    window.location.reload()
                  }
                >
                  ↻ Refresh
                </button>

                <div className="avatar">
                  👤
                </div>
              </div>

            </header>

            {/* ================= MENU ================= */}

            {activeSection === "menu" && (
              <main className="main">

                <div className="hero">

                  <div>
                    <div className="eyebrow">
                      Restaurant Control Center
                    </div>

                    <h1>Food Management</h1>

                    <p>
                      Add, update, search and remove
                      items from your menu.
                    </p>
                  </div>

                  <button
                    className="primary-btn"
                    onClick={openAddForm}
                  >
                    ＋ Add New Food
                  </button>

                </div>

                {/* STATS */}

                <div className="stats">

                  <div className="stat">
                    <div className="stat-icon">
                      🍔
                    </div>

                    <div>
                      <p className="stat-label">
                        TOTAL FOODS
                      </p>

                      <h2 className="stat-value">
                        {foods.length}
                      </h2>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-icon">
                      💵
                    </div>

                    <div>
                      <p className="stat-label">
                        AVERAGE PRICE
                      </p>

                      <h2 className="stat-value">
                        ${averagePrice.toFixed(2)}
                      </h2>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-icon">
                      📁
                    </div>

                    <div>
                      <p className="stat-label">
                        CATEGORIES
                      </p>

                      <h2 className="stat-value">
                        {categoryCount}
                      </h2>
                    </div>
                  </div>

                </div>

                {/* MENU TABLE */}

                <section className="panel">

                  <div className="panel-head">

                    <div>
                      <h2>Menu Items</h2>

                      <p>
                        Manage your restaurant
                        menu items.
                      </p>
                    </div>

                    <div className="filters">

                      <div className="search-box">
                        🔍

                        <input
                          value={search}
                          onChange={(e) =>
                            setSearch(e.target.value)
                          }
                          placeholder="Search food..."
                        />
                      </div>

                      <select
                        className="category-select"
                        value={categoryFilter}
                        onChange={(e) =>
                          setCategoryFilter(
                            e.target.value
                          )
                        }
                      >
                        <option value="All">
                          All Categories
                        </option>

                        {categories.map(
                          (category) => (
                            <option
                              key={category}
                              value={category}
                            >
                              {category}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                  </div>

                  <div className="table-wrap">

                    {filteredFoods.length > 0 ? (
                      <table>

                        <thead>
                          <tr>
                            <th>Food</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>

                          {filteredFoods.map(
                            (food) => (
                              <tr key={food.id}>

                                <td>
                                  <div className="food-cell">

                                    <img
                                      className="food-image"
                                      src={food.image}
                                      alt={food.name}
                                    />

                                    <div>
                                      <div className="food-name">
                                        {food.name}
                                      </div>

                                      <div className="food-id">
                                        ID: {food.id}
                                      </div>
                                    </div>

                                  </div>
                                </td>

                                <td>
                                  <span className="badge">
                                    {food.category}
                                  </span>
                                </td>

                                <td>
                                  <span className="price">
                                    ${Number(
                                      food.price || 0
                                    ).toFixed(2)}
                                  </span>
                                </td>

                                <td>
                                  <span className="desc">
                                    {food.description}
                                  </span>
                                </td>

                                <td>
                                  <div className="actions">

                                    <button
                                      className="edit-btn"
                                      onClick={() =>
                                        openEditForm(
                                          food
                                        )
                                      }
                                    >
                                      ✎ Edit
                                    </button>

                                    <button
                                      className="delete-btn"
                                      onClick={() =>
                                        deleteFood(
                                          food.id
                                        )
                                      }
                                    >
                                      🗑 Delete
                                    </button>

                                  </div>
                                </td>

                              </tr>
                            )
                          )}

                        </tbody>

                      </table>
                    ) : (
                      <div className="empty">
                        <div className="empty-icon">
                          🍽️
                        </div>

                        <h3>
                          No food items found
                        </h3>

                        <p>
                          Add a new food item
                          to your menu.
                        </p>

                        <button
                          className="primary-btn"
                          onClick={openAddForm}
                        >
                          + Add Food
                        </button>
                      </div>
                    )}

                  </div>

                  {filteredFoods.length > 0 && (
                    <div className="table-footer">
                      Showing {filteredFoods.length}{" "}
                      items
                    </div>
                  )}

                </section>

                {/* ADD FOOD FORM */}

                {showForm && (
                  <section className="panel form-panel">

                    <div className="form-header">

                      <div>
                        <h2>
                          {editingId !== null
                            ? "Edit Food"
                            : "Add New Food"}
                        </h2>

                        <p>
                          Fill in the details to
                          add a menu item.
                        </p>
                      </div>

                      <button
                        className="close-form"
                        onClick={closeForm}
                      >
                        ×
                      </button>

                    </div>

                    <form
                      className="food-form"
                      onSubmit={handleSubmit}
                    >

                      <div className="field">
                        <label>
                          Food Name *
                        </label>

                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Chicken Burger"
                        />
                      </div>

                      <div className="field">
                        <label>
                          Price ($) *
                        </label>

                        <input
                          type="number"
                          name="price"
                          min="0"
                          step="0.01"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="e.g. 250.00"
                        />
                      </div>

                      <div className="field">
                        <label>
                          Category
                        </label>

                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          {categories.map(
                            (category) => (
                              <option
                                key={category}
                                value={category}
                              >
                                {category}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <div className="field">
                        <label>
                          Food Image
                        </label>

                        <input
                          className="file-input"
                          type="file"
                          accept="image/*"
                          onChange={
                            handleImageChange
                          }
                        />

                        <div className="image-note">
                          JPG, PNG or WEBP
                        </div>

                        {imagePreview && (
                          <img
                            className="preview-image"
                            src={imagePreview}
                            alt="Preview"
                          />
                        )}
                      </div>

                      <div className="field description-field">
                        <label>
                          Description
                        </label>

                        <textarea
                          name="description"
                          value={
                            formData.description
                          }
                          onChange={handleChange}
                          placeholder="Describe the food item..."
                        />
                      </div>

                      <div className="form-buttons">

                        <button
                          type="button"
                          className="cancel-btn"
                          onClick={closeForm}
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="primary-btn"
                        >
                          {editingId !== null
                            ? "✓ Update Food"
                            : "+ Add Food"}
                        </button>

                      </div>

                    </form>

                  </section>
                )}

                <div
                  style={{
                    textAlign: "right",
                    marginTop: 12,
                  }}
                >
                  <button
                    className="cancel-btn"
                    onClick={resetFoods}
                  >
                    ↺ Reset Demo Data
                  </button>
                </div>

              </main>
            )}

            {/* ================= ORDERS ================= */}

            {activeSection === "orders" && (
              <main className="main">

                <div className="hero">

                  <div>
                    <div className="eyebrow">
                      Restaurant Control Center
                    </div>

                    <h1>
                      Order Management
                    </h1>

                    <p>
                      View and manage customer
                      orders from your restaurant.
                    </p>
                  </div>

                </div>

                <div className="stats">

                  <div className="stat">
                    <div className="stat-icon">
                      🧾
                    </div>

                    <div>
                      <p className="stat-label">
                        TOTAL ORDERS
                      </p>

                      <h2 className="stat-value">
                        {orders.length}
                      </h2>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-icon">
                      ⏳
                    </div>

                    <div>
                      <p className="stat-label">
                        PENDING ORDERS
                      </p>

                      <h2 className="stat-value">
                        {orders.filter(
                          (order) =>
                            getOrderStatus(
                              order
                            ).toLowerCase() ===
                            "pending"
                        ).length}
                      </h2>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-icon">
                      💰
                    </div>

                    <div>
                      <p className="stat-label">
                        TOTAL SALES
                      </p>

                      <h2 className="stat-value">
                        $
                        {orders
                          .reduce(
                            (sum, order) =>
                              sum +
                              getOrderTotal(order),
                            0
                          )
                          .toFixed(2)}
                      </h2>
                    </div>
                  </div>

                </div>

                <section className="panel">

                  <div className="panel-head">

                    <div>
                      <h2>
                        Customer Orders
                      </h2>

                      <p>
                        Manage incoming restaurant
                        orders.
                      </p>
                    </div>

                  </div>

                  {orders.length > 0 ? (
                    <div className="table-wrap">

                      <table>

                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>

                          {orders.map(
                            (order, index) => {
                              const items =
                                getOrderItems(
                                  order
                                );

                              const status =
                                getOrderStatus(
                                  order
                                );

                              const total =
                                getOrderTotal(
                                  order
                                );

                              return (
                                <tr
                                  key={`${getOrderId(
                                    order,
                                    index
                                  )}-${index}`}
                                >

                                  <td>
                                    <div className="order-id">
                                      #
                                      {getOrderId(
                                        order,
                                        index
                                      )}
                                    </div>
                                  </td>

                                  <td>
                                    <div className="customer-name">
                                      {getCustomerName(
                                        order
                                      )}
                                    </div>

                                    <div className="customer-email">
                                      {getCustomerEmail(
                                        order
                                      )}
                                    </div>
                                  </td>

                                  <td>
                                    <div className="order-items">
                                      {items.length >
                                      0
                                        ? items
                                            .map(
                                              (
                                                item
                                              ) => {
                                                const name =
                                                  item.name ||
                                                  item.foodName ||
                                                  item.title ||
                                                  item.productName ||
                                                  item.food?.name ||
                                                  item.product?.name ||
                                                  "Food";

                                                const qty =
                                                  Number(
                                                    item.quantity ??
                                                      item.qty ??
                                                      1
                                                  ) || 1;

                                                return `${name} × ${qty}`;
                                              }
                                            )
                                            .join(
                                              ", "
                                            )
                                        : order.item ||
                                          "Order items"}
                                    </div>
                                  </td>

                                  <td>
                                    <span className="price">
                                      $
                                      {total.toFixed(
                                        2
                                      )}
                                    </span>
                                  </td>

                                  <td>
                                    {getOrderDate(
                                      order
                                    )}
                                  </td>

                                  <td>
                                    <select
                                      className="status-select"
                                      value={
                                        status
                                      }
                                      onChange={(
                                        e
                                      ) =>
                                        updateOrderStatus(
                                          index,
                                          e.target
                                            .value
                                        )
                                      }
                                    >
                                      <option>
                                        Pending
                                      </option>

                                      <option>
                                        Processing
                                      </option>

                                      <option>
                                        Completed
                                      </option>

                                      <option>
                                        Cancelled
                                      </option>
                                    </select>
                                  </td>

                                  <td>
                                    <button
                                      className="delete-btn"
                                      onClick={() =>
                                        deleteOrder(
                                          index
                                        )
                                      }
                                    >
                                      🗑 Delete
                                    </button>
                                  </td>

                                </tr>
                              );
                            }
                          )}

                        </tbody>

                      </table>

                    </div>
                  ) : (
                    <div className="empty">

                      <div className="empty-icon">
                        🧾
                      </div>

                      <h3>
                        No orders yet
                      </h3>

                      <p>
                        Customer orders will
                        appear here.
                      </p>

                    </div>
                  )}

                </section>

              </main>
            )}

            {/* ================= PAYMENTS ================= */}

            {activeSection === "payments" && (
              <main className="main">

                <div className="hero">

                  <div>
                    <div className="eyebrow">
                      Restaurant Control Center
                    </div>

                    <h1>Payments</h1>

                    <p>
                      Monitor payment information
                      for your restaurant orders.
                    </p>
                  </div>

                </div>

                <section className="panel">

                  <div className="payment">

                    <div className="payment-icon">
                      💳
                    </div>

                    <h2>
                      Payment Management
                    </h2>

                    <p>
                      Payment information will
                      appear here when orders
                      contain payment data.
                    </p>

                  </div>

                </section>

              </main>
            )}

          </section>
        </div>
      </div>
    </>
  );
}