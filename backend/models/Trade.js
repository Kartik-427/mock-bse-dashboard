import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
  tradeId: {
    type: String,
    required: true,
    unique: true,
  },
  clientId: {
    type: String,
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
