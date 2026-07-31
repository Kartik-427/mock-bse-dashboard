import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  role: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
