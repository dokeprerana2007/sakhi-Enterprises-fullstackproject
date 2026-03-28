import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderId: String,
  paymentId: String,
  signature: String,
  amount: Number,
  status: {
    type: String,
    default: "success"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Payment", paymentSchema);