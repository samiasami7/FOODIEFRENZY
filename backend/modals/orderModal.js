import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    item: {
        name: { type: String, required: true },
        price: { type: String, required: true, min: 0 },
        imageUrl: { type: String, required: true }
    },
    quantity: { type: Number, required: true, min: 1 }
}, { _id: true })

const ordersSchema = new mongoose.Schema({
    // USER INFO
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    email: { type: String, required: true, index: true },
    firstName: { type: String, required: true },
    lastName: {type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },

    // ORDER items
    items: [orderItemSchema],

    // PAYMENT Method
    paymentMethod: { type: String, required: true, enum: ['Credit Card', 'PayPal', 'Cash on Delivery'], 
    index: true
    },

    paymentIntentId: { type: String },
    sessionId: { type: String , index: true},
    transactionId: { type: String},
    paymentStatus: { type: String,  enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' , index: true},

    //order calcuilations
    subtotal: { type: Number, required: true, min: 0 },
    tax: { type: Number, required: true, min: 0 },
    shipping: { type: Number, required: true, min: 0 , default: 0},

    total: { type: Number, required: true, min: 0 },

    //order tracking
    status: { type: String,  enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Processing' , index: true},
    expectedDelivery : Date,
    deliveredAt: Date,

    //timestamps
    createdAt: { type: Date, default: Date.now ,  index: true},
    updatedAt: { type: Date, default: Date.now}
})

orderSchema.index({user:1 , createdAt: -1});
orderSchema.index({status: 1, paymentStatus: 1})

ordersSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});
const Order = mongoose.model('Order', ordersSchema);
export default Order;