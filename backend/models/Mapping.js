import mongoose from "mongoose";

const mappingSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
});

const Mapping = mongoose.model("Mapping", mappingSchema);

export default mongoose.model("Mapping", mappingSchema);
