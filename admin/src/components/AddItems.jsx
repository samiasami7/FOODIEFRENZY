import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { styles } from '../assets/dummyData';

const AddItems = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image');
      return;
    }

    if (!name || !description || !category || !price) {
      alert('Please fill all fields');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append('image', image);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('price', price);

      const response = await fetch(
        'http://localhost:5000/api/items',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add item');
      }

      alert('Item added successfully!');

      // Clear form
      setImage(null);
      setPreview('');
      setName('');
      setDescription('');
      setCategory('');
      setPrice('');

    } catch (error) {
      console.error('Add item error:', error);
      alert(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formWrapper}>

      <div className="max-w-4xl mx-auto">

        <div className={styles.formCard}>

          <h1 className={styles.formTitle}>
            Add New Food Item
          </h1>

          <form onSubmit={handleSubmit}>

            {/* Image Upload */}
            <div className={styles.uploadWrapper}>

              <label className={styles.uploadLabel}>

                {preview ? (
                  <img
                    src={preview}
                    alt="Food preview"
                    className={styles.previewImage}
                  />
                ) : (
                  <div className="text-center">

                    <FiUpload className={styles.uploadIcon} />

                    <p className={styles.uploadText}>
                      Click to upload food image
                    </p>

                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </label>

            </div>

            {/* Food Name */}
            <div className="mt-6">

              <label className="block mb-2 text-amber-300 font-medium">
                Food Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter food name"
                className={styles.inputField}
              />

            </div>

            {/* Description */}
            <div className="mt-6">

              <label className="block mb-2 text-amber-300 font-medium">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter food description"
                rows="4"
                className={styles.inputField}
              />

            </div>

            {/* Category + Price */}
            <div className={`${styles.gridTwoCols} mt-6`}>

              <div>

                <label className="block mb-2 text-amber-300 font-medium">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={styles.inputField}
                >
                  <option value="">Select category</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Other">Other</option>
                </select>

              </div>

              <div>

                <label className="block mb-2 text-amber-300 font-medium">
                  Price
                </label>

                <input
                  type="number"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  className={styles.inputField}
                />

              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={styles.actionBtn}
            >
              {loading ? 'Adding Item...' : 'ADD ITEM'}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddItems;