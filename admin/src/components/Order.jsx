import React, { useEffect, useState } from 'react';
import { FiClock, FiTruck, FiCheckCircle } from 'react-icons/fi';
import { styles } from '../assets/dummyData';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // ==========================================
  // GET ALL ORDERS
  // ==========================================
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'http://localhost:5000/api/orders/getall'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();

      console.log('Orders:', data);

      setOrders(Array.isArray(data) ? data : data.orders || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // UPDATE ORDER STATUS
  // ==========================================
  const updateOrderStatus = async (id, status) => {
    try {
      setUpdatingId(id);

      const response = await fetch(
        `http://localhost:5000/api/orders/getall/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      const updatedOrder = await response.json();

      console.log('Updated order:', updatedOrder);

      // Update the order on the screen
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id
            ? { ...order, ...updatedOrder }
            : order
        )
      );

      alert('Order status updated successfully!');
    } catch (error) {
      console.error('Update order error:', error);
      alert('Failed to update order status');
    } finally {
      setUpdatingId(null);
    }
  };

  // ==========================================
  // LOAD ORDERS WHEN PAGE OPENS
  // ==========================================
  useEffect(() => {
    fetchOrders();
  }, []);

  // ==========================================
  // STATUS ICON
  // ==========================================
  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return <FiCheckCircle />;

      case 'shipped':
      case 'outfordelivery':
        return <FiTruck />;

      default:
        return <FiClock />;
    }
  };

  // ==========================================
  // STATUS STYLE
  // ==========================================
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'text-green-400 bg-green-900/20';

      case 'shipped':
      case 'outfordelivery':
        return 'text-blue-400 bg-blue-900/20';

      case 'cancelled':
        return 'text-red-400 bg-red-900/20';

      default:
        return 'text-amber-400 bg-amber-900/20';
    }
  };

  return (
    <div className={styles.pageWrapper}>

      <div className="max-w-7xl mx-auto">

        <div className={styles.cardContainer}>

          {/* PAGE TITLE */}
          <h1 className={styles.title}>
            All Orders
          </h1>

          {/* ==========================================
              LOADING
          ========================================== */}
          {loading ? (
            <div className={styles.emptyState}>
              Loading orders...
            </div>

          ) : orders.length === 0 ? (

            /* ==========================================
               NO ORDERS
            ========================================== */
            <div className={styles.emptyState}>
              No orders found.
            </div>

          ) : (

            /* ==========================================
               ORDERS
            ========================================== */
            <div className="space-y-6">

              {orders.map((order) => (

                <div
                  key={order._id}
                  className="border-2 border-amber-500/20 rounded-2xl p-5 bg-[#3a2b2b]/40"
                >

                  {/* ==========================================
                     TOP SECTION
                  ========================================== */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">

                    <div>

                      <h2 className="text-xl font-bold text-amber-300">
                        Order #{order._id?.slice(-6)}
                      </h2>

                      <p className="text-amber-100/60 text-sm mt-1">
                        {order.createdAt
                          ? new Date(order.createdAt).toLocaleString()
                          : 'Date unavailable'}
                      </p>

                    </div>

                    {/* STATUS */}
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl ${getStatusStyle(
                        order.status
                      )}`}
                    >

                      {getStatusIcon(order.status)}

                      <span>
                        {order.status || 'Pending'}
                      </span>

                    </div>

                  </div>


                  {/* ==========================================
                     CUSTOMER INFORMATION
                  ========================================== */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                    {/* CUSTOMER */}
                    <div className="bg-[#2d211b]/50 rounded-xl p-4">

                      <h3 className="text-amber-400 font-semibold mb-2">
                        Customer
                      </h3>

                      <p className="text-amber-100">
                        {order.firstName || ''}{' '}
                        {order.lastName || ''}
                      </p>

                      <p className="text-amber-100/60 text-sm">
                        {order.email || 'No email'}
                      </p>

                      <p className="text-amber-100/60 text-sm">
                        {order.phone || 'No phone'}
                      </p>

                    </div>


                    {/* DELIVERY ADDRESS */}
                    <div className="bg-[#2d211b]/50 rounded-xl p-4">

                      <h3 className="text-amber-400 font-semibold mb-2">
                        Delivery Address
                      </h3>

                      <p className="text-amber-100">
                        {order.address || 'No address'}
                      </p>

                      <p className="text-amber-100/60 text-sm">
                        {order.city || ''}, {order.state || ''}
                      </p>

                      <p className="text-amber-100/60 text-sm">
                        {order.zipCode || ''}
                      </p>

                    </div>

                  </div>


                  {/* ==========================================
                     ORDERED ITEMS
                  ========================================== */}
                  <div className="mb-6">

                    <h3 className="text-amber-400 font-semibold mb-3">
                      Ordered Items
                    </h3>

                    <div className="space-y-3">

                      {(order.items || []).map((orderItem, index) => {

                        /*
                         * IMPORTANT:
                         *
                         * Your order data is structured like:
                         *
                         * {
                         *   item: {
                         *     name: "Sunset",
                         *     price: 49.99,
                         *     imageUrl: "uploads/sunset.jpg"
                         *   },
                         *   quantity: 1
                         * }
                         *
                         * Therefore we get the actual food
                         * information from orderItem.item.
                         */

                        const item = orderItem?.item;

                        return (
                          <div
                            key={orderItem?._id || index}
                            className="flex items-center gap-4 border-b border-amber-500/10 pb-3"
                          >

                            {/* FOOD IMAGE */}
                            {item?.imageUrl ? (
                              <img
                                src={
                                  item.imageUrl.startsWith('http')
                                    ? item.imageUrl
                                    : `http://localhost:5000/${item.imageUrl.replace(
                                        /^\/+/,
                                        ''
                                      )}`
                                }
                                alt={item?.name || 'Food item'}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-lg bg-[#2d211b] flex items-center justify-center text-amber-500 text-xs">
                                No Image
                              </div>
                            )}


                            {/* FOOD DETAILS */}
                            <div className="flex-1">

                              <p className="text-amber-100 font-medium">
                                {item?.name || 'Unknown Item'}
                              </p>

                              <p className="text-amber-100/60 text-sm">
                                Quantity: {orderItem?.quantity || 0}
                              </p>

                            </div>


                            {/* PRICE */}
                            <p className="text-amber-300 font-medium">
                              ৳{item?.price ?? 0}
                            </p>

                          </div>
                        );
                      })}

                    </div>

                  </div>


                  {/* ==========================================
                     PAYMENT + TOTAL
                  ========================================== */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-amber-500/20 pt-5">

                    <div>

                      <p className="text-amber-100/70">
                        Payment:{' '}
                        <span className="text-amber-300">
                          {order.paymentMethod || 'Online'}
                        </span>
                      </p>

                      <p className="text-amber-100/70">
                        Payment Status:{' '}
                        <span className="text-amber-300">
                          {order.paymentStatus || 'Pending'}
                        </span>
                      </p>

                    </div>


                    {/* TOTAL */}
                    <div className="text-xl font-bold text-amber-300">
                      Total: ৳{order.total ?? 0}
                    </div>

                  </div>


                  {/* ==========================================
                     UPDATE STATUS
                  ========================================== */}
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">

                    <label className="text-amber-400 font-medium">
                      Update Status:
                    </label>

                    <select
                      value={order.status || 'Pending'}
                      disabled={updatingId === order._id}
                      onChange={(e) =>
                        updateOrderStatus(
                          order._id,
                          e.target.value
                        )
                      }
                      className="bg-[#3a2b2b] border border-amber-500/30 rounded-xl px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400"
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Processing">
                        Processing
                      </option>

                      <option value="Shipped">
                        Shipped
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                    </select>


                    {/* UPDATING MESSAGE */}
                    {updatingId === order._id && (
                      <span className="text-amber-400 text-sm">
                        Updating...
                      </span>
                    )}

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Order;