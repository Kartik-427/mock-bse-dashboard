import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  city: {
    type: String,
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
