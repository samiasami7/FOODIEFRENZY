// import Order from "../models/orderModal.js";

// export const createOrder = async (req, res) => {
//   try {
//     const order = new Order(req.body);

//     await order.save();

//     res.status(201).json({
//       success: true,
//       message: "Order saved successfully!",
//       order,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


import Order from "../modals/orderModal.js";

export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order saved successfully!",
      order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};