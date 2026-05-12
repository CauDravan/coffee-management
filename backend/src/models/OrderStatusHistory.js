import mongoose from "mongoose";

const orderStatusHistorySchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  status: {
    type: String,
    enum: ["Pending", "Processing", "Completed", "Cancelled"],
    required: true
  },

  changedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model(
  "OrderStatusHistory",
  orderStatusHistorySchema
);