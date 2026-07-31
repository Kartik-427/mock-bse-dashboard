import mongoose from "mongoose";

const mappingSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
  },
  clientId: {
    type: Number,
    required: true,
  },
});

const Mapping = mongoose.model("Mapping", mappingSchema);

export default mongoose.model("Mapping", mappingSchema);
