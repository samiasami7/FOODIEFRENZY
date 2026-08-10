// import React, { useState } from 'react';
// import { FiUpload } from 'react-icons/fi';
// import { styles } from '../assets/dummyData';

// const AddItems = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState('');

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');

//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       alert('Please select an image');
//       return;
//     }

//     if (!name || !description || !category || !price) {
//       alert('Please fill all fields');
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append('image', image);
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('category', category);
//       formData.append('price', price);

//       const response = await fetch(
//         'http://localhost:5000/api/items',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to add item');
//       }

//       alert('Item added successfully!');

//       // Clear form
//       setImage(null);
//       setPreview('');
//       setName('');
//       setDescription('');
//       setCategory('');
//       setPrice('');

//     } catch (error) {
//       console.error('Add item error:', error);
//       alert(error.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.formWrapper}>

//       <div className="max-w-4xl mx-auto">

//         <div className={styles.formCard}>

//           <h1 className={styles.formTitle}>
//             Add New Food Item
//           </h1>

//           <form onSubmit={handleSubmit}>

//             {/* Image Upload */}
//             <div className={styles.uploadWrapper}>

//               <label className={styles.uploadLabel}>

//                 {preview ? (
//                   <img
//                     src={preview}
//                     alt="Food preview"
//                     className={styles.previewImage}
//                   />
//                 ) : (
//                   <div className="text-center">

//                     <FiUpload className={styles.uploadIcon} />

//                     <p className={styles.uploadText}>
//                       Click to upload food image
//                     </p>

//                   </div>
//                 )}

//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="hidden"
//                 />

//               </label>

//             </div>

//             {/* Food Name */}
//             <div className="mt-6">

//               <label className="block mb-2 text-amber-300 font-medium">
//                 Food Name
//               </label>

//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter food name"
//                 className={styles.inputField}
//               />

//             </div>

//             {/* Description */}
//             <div className="mt-6">

//               <label className="block mb-2 text-amber-300 font-medium">
//                 Description
//               </label>

//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Enter food description"
//                 rows="4"
//                 className={styles.inputField}
//               />

//             </div>

//             {/* Category + Price */}
//             <div className={`${styles.gridTwoCols} mt-6`}>

//               <div>

//                 <label className="block mb-2 text-amber-300 font-medium">
//                   Category
//                 </label>

//                 <select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className={styles.inputField}
//                 >
//                   <option value="">Select category</option>
//                   <option value="Pizza">Pizza</option>
//                   <option value="Burger">Burger</option>
//                   <option value="Chicken">Chicken</option>
//                   <option value="Pasta">Pasta</option>
//                   <option value="Drinks">Drinks</option>
//                   <option value="Dessert">Dessert</option>
//                   <option value="Other">Other</option>
//                 </select>

//               </div>

//               <div>

//                 <label className="block mb-2 text-amber-300 font-medium">
//                   Price
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   placeholder="Enter price"
//                   className={styles.inputField}
//                 />

//               </div>

//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className={styles.actionBtn}
//             >
//               {loading ? 'Adding Item...' : 'ADD ITEM'}
//             </button>

//           </form>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default AddItems;






import React, { useState, useEffect } from 'react';

const AddItem = () => {
  // Master lists of items from database
  const [allItems, setAllItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Form states for adding a completely new product to database
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Burger');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  // Fetch all items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/items');
      const data = await response.json();
      if (response.ok) setAllItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // 1. Handle submitting a brand new food creation form
  const handleCreateItem = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Please provide a name and price.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('description', description || 'Delicious food item');
      if (image) formData.append('image', image);

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (response.ok) {
        alert('Item created in system database!');
        setName('');
        setPrice('');
        setImage(null);
        fetchItems(); // refresh panel UI lists
      } else {
        const err = await response.json();
        alert(err.message || 'Failed to create item');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Toggle Menu Availability (Simulating Add/Remove from Menu Panel status)
  const toggleMenuStatus = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem('token');
      // Optimistic state updates for instant UI click feedback
      setAllItems(prev => prev.map(item => item._id === id ? { ...item, isAvailable: !currentStatus } : item));

      await fetch(`http://localhost:5000/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ isAvailable: !currentStatus })
      });
    } catch (error) {
      console.error('Failed to toggle availability status:', error);
      fetchItems(); // Rollback if server request fails
    }
  };

  // Filter lists dynamically based on search box value and availability flags
  const filteredMasterList = allItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const availableItems = allItems.filter(item => item.isAvailable);

  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', padding: '30px', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* SECTION A: Add completely brand new items to the system database */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#2c3e50' }}>➕ Create a New Product Reference</h3>
        <form onSubmit={handleCreateItem} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Food Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Butter Milk" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
          <div style={{ width: '120px' }}>
            <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Price ($)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="20.00" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
          <div style={{ width: '150px' }}>
            <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Drinks">Drinks</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Picture</label>
            <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ fontSize: '12px' }} />
          </div>
          <button type="submit" disabled={loading} style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            {loading ? 'Saving...' : 'Save Product'}
          </button>
        </form>
      </div>

      {/* SECTION B: Split-screen Dual Panel System */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        
        {/* LEFT COMPARTMENT: Master Items Database catalog */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', minHeight: '500px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontWeight: '700', color: '#4f46e5' }}>Items List Catalog</h3>
            <input 
              type="text" 
              placeholder="🔍 Search master list..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #ddd', width: '200px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredMasterList.map((item) => (
              <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', border: '1px solid #f0f0f0', borderRadius: '10px', backgroundColor: '#fafafa' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img 
                    src={item.image ? `http://localhost:5000/${item.image}` : 'https://placeholder.com'} 
                    alt={item.name} 
                    style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover', backgroundColor: '#eee' }} 
                  />
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#1e293b' }}>{item.name}</div>
                    <div style={{ color: '#64748b', fontSize: '14px' }}>${parseFloat(item.price).toFixed(2)}</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleMenuStatus(item._id, item.isAvailable)}
                  disabled={item.isAvailable}
                  style={{
                    backgroundColor: item.isAvailable ? '#cbd5e1' : '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: item.isAvailable ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {item.isAvailable ? 'Added' : 'Add'}
                </button>
              </div>
            ))}
            {filteredMasterList.length === 0 && <p style={{ color: '#94a3b8', textAlign: 'center' }}>No database records found.</p>}
          </div>
        </div>

        {/* RIGHT COMPARTMENT: What is currently showing live in user storefront */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', minHeight: '500px' }}>
          <h3 style={{ margin: '0 0 20px 0', fontWeight: '700', color: '#10b981' }}>Live Menu Preview</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {availableItems.map((item) => (
              <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', border: '1px solid #f0f0f0', borderRadius: '10px', backgroundColor: '#fafafa' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img 
                    src={item.image ? `http://localhost:5000/${item.image}` : 'https://placeholder.com'} 
                    alt={item.name} 
                    style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} 
                  />
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#1e293b' }}>{item.name}</div>
<div style={{ color: '#64748b', fontSize: '14px' }}>${parseFloat(item.price).toFixed(2)}<buttononClick={() => toggleMenuStatus(item._id, item.isAvailable)}style={{backgroundColor: '#ef4444',color: 'white',border: 'none',padding: '8px 14px',borderRadius: '6px',fontWeight: 'bold',cursor: 'pointer'}}>Remove))}{availableItems.length === 0 && (<div style={{ border: '2px dashed #e2e8f0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#94a3b8' }}>Storefront Menu is completely empty. Click "Add" on any left catalog card item.)});};export default AddItem;