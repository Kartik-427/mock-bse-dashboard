import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
  tradeId: {
    type: Number,
    required: true,
    unique: true,
  },
  clientId: {
    type: Number,
    required: true,
  },
  symbol: String,
  quantity: Number,
  price: Number,
  brokerage: Number,
  tradeDate: Date,
});

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;
