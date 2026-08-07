import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { styles } from '../assets/dummyData';

const List = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // GET ALL ITEMS
  const fetchItems = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/items');

      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }

      const data = await response.json();

      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
      alert('Failed to load items');
    } finally {
      setLoading(false);
    }
  };

  // DELETE ITEM
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this item?'
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(id);

      const response = await fetch(
        `http://localhost:5000/api/items/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Remove deleted item from screen
      setItems((prevItems) =>
        prevItems.filter((item) => item._id !== id)
      );

      alert('Item deleted successfully!');
    } catch (error) {
      console.error('Delete item error:', error);
      alert('Failed to delete item');
    } finally {
      setDeletingId(null);
    }
  };

  // FETCH ITEMS WHEN PAGE LOADS
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={styles.pageWrapper}>

      <div className="max-w-7xl mx-auto">

        <div className={styles.cardContainer}>

          <h1 className={styles.title}>
            All Food Items
          </h1>

          {/* LOADING */}
          {loading ? (
            <div className={styles.emptyState}>
              Loading items...
            </div>
          ) : items.length === 0 ? (

            /* EMPTY */
            <div className={styles.emptyState}>
              No food items found.
            </div>

          ) : (

            /* TABLE */
            <div className={styles.tableWrapper}>

              <table className={styles.table}>

                <thead className={styles.thead}>

                  <tr>

                    <th className={styles.th}>
                      Image
                    </th>

                    <th className={styles.th}>
                      Name
                    </th>

                    <th className={styles.th}>
                      Category
                    </th>

                    <th className={styles.th}>
                      Price
                    </th>

                    <th className={styles.thCenter}>
                      Rating
                    </th>

                    <th className={styles.thCenter}>
                      Hearts
                    </th>

                    <th className={styles.thCenter}>
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {items.map((item) => (

                    <tr
                      key={item._id}
                      className={styles.tr}
                    >

                      {/* IMAGE */}
                      <td className={styles.imgCell}>

                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className={styles.img}
                        />

                      </td>

                      {/* NAME + DESCRIPTION */}
                      <td className={styles.nameCell}>

                        <div className={styles.nameText}>
                          {item.name}
                        </div>

                        <div className={styles.descText}>
                          {item.description}
                        </div>

                      </td>

                      {/* CATEGORY */}
                      <td className={styles.categoryCell}>
                        {item.category}
                      </td>

                      {/* PRICE */}
                      <td className={styles.priceCell}>
                        ৳{item.price}
                      </td>

                      {/* RATING */}
                      <td className={styles.ratingCell}>

                        <div className="text-amber-300 text-center">
                          ⭐ {item.rating ?? 0}
                        </div>

                      </td>

                      {/* HEARTS */}
                      <td className={styles.heartsCell}>

                        <div className={styles.heartsWrapper}>
                          ❤️ {item.hearts ?? 0}
                        </div>

                      </td>

                      {/* DELETE */}
                      <td className="p-4 text-center">

                        <button
                          onClick={() => handleDelete(item._id)}
                          disabled={deletingId === item._id}
                          className={styles.deleteBtn}
                          title="Delete item"
                        >

                          {deletingId === item._id ? (
                            '...'
                          ) : (
                            <FiTrash2 size={20} />
                          )}

                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default List;