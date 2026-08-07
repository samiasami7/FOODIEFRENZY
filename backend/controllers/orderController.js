import Order from "../modals/orderModal.js";

// CREATE ORDER
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
        console.error("Create Order Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// GET ALL ORDERS
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });

        res.status(200).json(orders);

    } catch (error) {
        console.error("Get All Orders Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// UPDATE ANY ORDER
export const updateAnyOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        res.status(200).json(updatedOrder);

    } catch (error) {
        console.error("Update Order Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};